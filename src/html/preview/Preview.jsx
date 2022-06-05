import Footer from "../home/Footer";
import "../../css/preview/Preview.css";
import FeedbackCard from "./feedbackCard";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import RatedStars from "./RatedStars";
import ApiCaller from "../../apiCaller.js/apiCaller";
import { toast } from "react-toastify";
import { saveAs } from "file-saver";

function Preview() {
    let template_id = window.location.href.split('?')[1];
    const [templateData, setTemplateData] = useState({});
    const [downloadZippath, setDownloadZippath] = useState('');
    const [rating, setRating] = useState(0);

    function Ratings() {
        const [hover, setHover] = useState(null);
        return (
            <>
                <div className="feedbackform-stars">
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                            <>
                                <input type="radio" className="ratings-radio" name="rates" value={ratingValue} />
                                <FaStar className="stars"
                                    onClick={() => setRating(ratingValue)}
                                    onMouseEnter={() => setHover(ratingValue)}
                                    onMouseLeave={() => setHover(null)}
                                    color={ratingValue <= (hover || rating) ? "rgb(248, 215, 31)" : "rgb(207, 206, 206)"} />
                            </>
                        );
                    })}
                    {/* <p>you rated {rating } stars</p> */}
                </div>
            </>
        );
    };

    function getDetails() {
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url: 'template/get',
            data: { template_id }
        }).then(res => {
            if (apiCaller.validateResult(res)) {
                let rating = 0;
                res.data[0].feedbacks?.map(f => rating += f.rating)
                rating /= res.data[0].feedbacks?.length;
                if (isNaN(rating)) {
                    rating = 0;
                }
                res.data[0].rating = rating;
                setTemplateData(res.data[0]);
                console.log(templateData);
            }
        })
    }

    function ScrolltoTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        getDetails();
        ScrolltoTop();
    }, []);

    function feedback(e) {
        e.preventDefault();
        let body = {
            rating: e.target.rating.value,
            message: e.target.message.value,
            template_id,
        }
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url: 'template/feedback',
            data: body
        }).then(data => {
            if (data && data.status_code === '1') {
                toast.success('Feedback sent successfully');
                getDetails();
                setTimeout(() => {
                }, 500);
            }
            else
                toast.error(data.status_message);
            console.log(data);
        })
            .catch(err => {
                console.log(err);
            })
    }

    function addToCart() {
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url: 'template/add_to_cart',
            data: {
                template_id,
                action: 'add'
            }
        }).then(data => {
            if (data && data.status_code === '1') {
                toast.success('template added to cart');
            }
        })
    }

    function downloadFile(url) {
        saveAs(url, 'template.zip');
    }

    function downloadzip() {
        let body = {
            template_id: templateData._id
        }
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url: 'template/buy',
            data: body
        }).then(data => {
            if (data && data.status_code === '1') {
                setTimeout(() => {
                    setDownloadZippath(data.data.zip);
                    console.log('path', data.data);
                    toast.success('template bought succesfully', { autoClose: 2000 });
                }, 2000);
            }
            else
                toast.error(data.status_message, { autoClose: 2000 });
            console.log(data);
        })
            .catch(err => {
                console.log(err);
            })
    }

    const NextArrow = ({ onClick }) => { return (<><div className="arrow next" onClick={onClick}><i class="fad fa-angle-right"></i></div></>); };
    const PrevArrow = ({ onClick }) => { return (<><div className="arrow prev" onClick={onClick}><i class="fad fa-angle-left"></i></div></>); };
    const [ImageIndex, setImageIndex] = useState(0);
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 900,
        dots: true,
        className: "center",
        slideToShow: 3,
        slideToScroll: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };
    
    return (
        <>
            <div className="preview">
                <div className="preview-details">
                    <div className="preview-title">
                        <div className="userinfo">
                            <div className="user-dp"><img alt="profile" src="/Images/vprof.jpg" /></div><span className="user-name">By: {templateData?.creator_id?.name}</span>
                        </div>
                        <h3 className="preview-name">{templateData.name}</h3>
                        <div className="preview-desc"><span>{templateData.description}</span></div>
                        <div className="category"><span >Category: {templateData.category}</span></div>
                        <div className="preview-stars"><RatedStars rating={templateData.rating} /></div>
                        <div className="preview-btns">
                            <button className="preview-cart" onClick={() => addToCart()}><i class="far fa-shopping-cart"></i><span>Add to Cart</span></button>
                            <button className="buy-btn" onClick={() => downloadzip()}><i class="far fa-shopping-bag"></i><span>Buy Now</span></button>
                            {downloadZippath === '' ? null : <button className="buy-btn" onClick={() => downloadFile(downloadZippath)}><i class="far fa-download"></i><span>Download zip</span></button>}
                        </div>
                    </div>
                    <div className="image-carousel">
                        <div className="carousel-cont">
                            <Slider {...settings}>
                                {templateData.images?.map((img, idx) => (
                                    <div className={idx === ImageIndex ? "activeslide" : "slide"}>
                                        <center>
                                            <div className="carousel-img-cont">
                                                <img src={img} alt="templates" />
                                            </div>
                                        </center>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="features">
                    <div className="tags-cont">
                        <h5 className="features-title">Tags</h5>
                        <div className="tags-list">
                            {!templateData.tags ? "...." : templateData.tags.split(" ")?.map((props) => (<span className="tag">{props}</span>))}
                        </div>
                    </div>
                    <div className="technologies-cont">
                        <h5 className="features-title">Technologies</h5>
                        <div className="tags-list">
                            {!templateData.technology ? "...." : templateData.technology.split(",")?.map((props) => (<span className="tag">{props}</span>))}
                        </div>
                    </div>
                </div>
                <div className="review-cont">
                    <h5>Reviews</h5>
                    <div className="reviews">
                        {templateData?.feedbacks?.length > 0 ? //aiyaa 0 kar deje integrate karya pa6i.

                            templateData.feedbacks.map(feedback => {
                                return (<>

                                    <FeedbackCard message={feedback.message} rating={feedback?.rating} buyer_id={feedback?.buyer_id} />
                                </>);
                            })
                            : 'no reviews'}
                    </div>
                    <div className="feedback-youtube">
                        <div className="feedback-form">
                            <h5 className="feedback-title">Your Opinion Matters !</h5>
                            <form onSubmit={feedback} className="feedback-inputs">
                                <Ratings />
                                <input name="rating" value={rating} style={{ visibility: "hidden", height: "1px" }} />
                                <textarea rows={5} name="message" className="feedback-text" placeholder="Leave a Feedback" />
                                <button type="submit" className="feedback-btn">Send</button>
                            </form>
                            <div className="closing"><text className="thank-you">Thank You !</text></div>
                        </div>
                        <div className="youtube">
                            <div className="youtube-content">
                                <h4 className="youtube-title">Need Help ?</h4>
                                <p className="youtube-span">Don't know how to use These Templates ?  Watch our Tutorials and give some support..</p>
                            </div>
                            <a href="https://www.youtube.com/c/VRASM"><img alt="youtube" src="/Images/youtube-clip.png" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Preview;