import Navba from "../home/Navba";
import Footer from "../home/Footer";
import "../../css/preview/Preview.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import RatedStars from "./RatedStars";
import Ratings from "./Ratings";
import ApiCaller from "../../apiCaller.js/apiCaller";
import { toast } from "react-toastify";
import { saveAs} from "file-saver";
import { Link } from "react-router-dom";

const tags = ["html", "css", 'bootstrap', 'tailwind', 'h'];
const i = '/Images/113.jpg';
const images = ['/Images/longss.webp', i, '/Images/p.jpg'];

function Preview() {
    let template_id = window.location.href.split('?')[1];
    const [templateData, setTemplateData] = useState({});
    const [downloadZippath, setDownloadZippath] = useState('');

    useEffect(() => {
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url: 'template/get',
            data: { template_id } // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
        }).then(res => {
            if (res && res.status_code == '1') {
                setTemplateData(res.data[0]);
                console.log(templateData);
            }
        })
    }, []);

    function addToCart(){
        console.log('add to cart');
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url:'template/add_to_cart',
            data:{
                template_id,
                action:'add'
            }
        }).then(data=>{
            if(data && data.status_code == '1'){
                toast.success('template added to cart');
            }
        })
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
            if (data && data.status_code == '1'){
                setTimeout(() => {
                    setDownloadZippath('/STORAGE/'+data.data.zip);
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

    const [download, setDownload] = useState(0);
    return (
        <>

            <div className="preview">
                <div className="preview-details">
                    <div className="preview-title">
                        <h3 className="preview-name">{templateData.name}</h3>
                        <div className="preview-desc"><span>{templateData.description}</span></div>

                        <div className="userinfo">
                            <div className="user-dp"><img src="/Images/profile.jpg" /></div><span className="user-name">Mohit Chauhan</span>
                        </div>
                        <div className="preview-stars"><RatedStars /></div>
                        <div className="preview-btns">
                            <button className="preview-cart" onClick={()=>addToCart()}><i class="far fa-shopping-cart"></i><span>Add to Cart</span></button>
                            {/* <Link to="/Payment" className="buy-btn"> */}
                            <button className="buy-btn" onClick={() => downloadzip()}><i class="far fa-shopping-bag"></i><span>Buy Now</span></button>
                            {/* </Link> */}
                            {downloadZippath == '' ? null : <a href={downloadZippath} className="buy-btn" download="template.zip"><i class="far fa-download"></i><span>Download zip</span></a>}
                        </div>
                    </div>
                    <div className="image-carousel">
                        <div className="carousel-cont">
                            <Slider {...settings}>
                                {images.map((img, idx) => (
                                    <div className={idx === ImageIndex ? "activeslide" : "slide"}>
                                        <center>
                                            <div className="carousel-img-cont">
                                                <img src={img} alt={img} />
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
                            {/* {tags.map(({tag }) =>( */}
                            <span className="tag">HTML5</span>
                            <span className="tag">CSS</span>
                            <span className="tag">BOOTSTRAP</span>
                            <span className="tag">TAILWIND</span>
                            <span className="tag">HTML5</span>
                            <span className="tag">CSS</span>
                            <span className="tag">BOOTSTRAP</span>
                            <span className="tag">TAILWIND</span>
                            <span className="tag">HTML5</span>
                            <span className="tag">CSS</span>
                            <span className="tag">BOOTSTRAP</span>
                            <span className="tag">TAILWIND</span>
                            {/* ))} */}
                        </div>
                    </div>
                    <div className="technologies-cont">
                        <h5 className="features-title">Technologies</h5>
                        <div className="tags-list">
                            {/* {tags.map(({tag }) =>( */}
                            <span className="technology">HTML5</span>
                            <span className="technology">CSS</span>
                            <span className="technology">BOOTSTRAP</span>
                            <span className="technology">TAILWIND</span>
                            {/* ))} */}
                        </div>
                    </div>
                </div>
                <div className="review-cont">
                    <h5>Reviews</h5>
                    <div className="reviews">
                        <div className="review-card">
                            <div className="userinfo">
                                <div className="user-dp"><img src="/Images/profile.jpg" /></div><span className="user-name">Mohit Chauhan</span>
                            </div>
                            <div className="feedback-stars"><RatedStars /></div>
                            <div className="qoute-icon"><i class="fad fa-quote-left"></i></div>
                            <div className="feedback">
                                <p>This is a tremendously amazing site i have ever visited in my life .</p>
                            </div>
                        </div>
                        <div className="review-card">
                            <div className="userinfo">
                                <div className="user-dp"><img src="/Images/profile.jpg" /></div><span className="user-name">Mohit Chauhan</span>
                            </div>
                            <div className="feedback-stars"><RatedStars /></div>
                            <div className="qoute-icon"><i class="fad fa-quote-left"></i></div>
                            <div className="feedback">
                                <p>This is a tremendously amazing site i have ever visited in my life .</p>
                            </div>
                        </div>
                        <div className="review-card">
                            <div className="userinfo">
                                <div className="user-dp"><img src="/Images/profile.jpg" /></div><span className="user-name">Mohit Chauhan</span>
                            </div>
                            <div className="feedback-stars"><RatedStars /></div>
                            <div className="qoute-icon"><i class="fad fa-quote-left"></i></div>
                            <div className="feedback">
                                <p>This is a tremendously amazing site i have ever visited in my life .</p>
                            </div>
                        </div>
                        <div className="review-card">
                            <div className="userinfo">
                                <div className="user-dp"><img src="/Images/profile.jpg" /></div><span className="user-name">Mohit Chauhan</span>
                            </div>
                            <div className="feedback-stars"><RatedStars /></div>
                            <div className="qoute-icon"><i class="fad fa-quote-left"></i></div>
                            <div className="feedback">
                                <p>This is a tremendously amazing site i have ever visited in my life .</p>
                            </div>
                        </div>
                    </div>
                    <div className="feedback-youtube">
                        <div className="feedback-form">
                            <h5 className="feedback-title">Your Opinion Matters !</h5>
                            <div className="feedback-inputs">
                                <Ratings />
                                <input className="feedback-mail" placeholder="E-mail" />
                                <textarea className="feedback-text" placeholder="Leave a Feedback" />
                                <button type="submit" className="feedback-btn">Send</button>
                            </div>
                            <div className="closing"><text className="thank-you">Thank You !</text></div>
                        </div>
                        <div className="youtube">
                            <div className="youtube-content">
                                <h4 className="youtube-title">Need Help ?</h4>
                                <p className="youtube-span">Don't know how to use These Templates ?  Watch our Tutorials and give some support..</p>
                            </div>
                            <a href="https://www.youtube.com/c/VRASM"><img src="/Images/youtube-clip.png" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Preview;