import Navba from "../home/Navba"; 
import Footer from "../home/Footer";
import "../../css/preview/Preview.css";
import { useState } from "react";
import Slider from "react-slick";
import RatedStars from "./RatedStars";
import Ratings from "./Ratings";

const tags=["html","css",'bootstrap','tailwind','h'];
const i='/Images/113.jpg';
const images = ['/Images/longss.webp',i,'/Images/p.jpg'];

function Preview(){

    const NextArrow =({onClick})=>{return(<><div className="arrow next" onClick={onClick}><i class="fad fa-angle-right"></i></div></>);};
    const PrevArrow =({onClick})=>{return(<><div className="arrow prev" onClick={onClick}><i class="fad fa-angle-left"></i></div></>);};
    const [ImageIndex , setImageIndex]= useState(0);
    const settings={
        infinite:true,
        lazyLoad:true,
        speed:900,
        dots:true,
        className: "center",
        slideToShow:3,
        slideToScroll:3,
        centerMode:true,
        centerPadding:0,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />,
        beforeChange: (current,next)=>setImageIndex(next),
    };
    return(
        <>

<div className="preview">
        <div className="preview-details">
            <div className="preview-title">
                <h3 className="preview-name">Template 1</h3>
                <div className="preview-desc"><span>Grand Restauran is a beautiful HTML Template. We have carefully crafted each & demo to ensure that a clean and modern design is carried through. Great design and Powerful features makes Infinite is irresistible. What you see below are full fledged demos and features.</span></div>
                
                <div className="userinfo">
                <div className="user-dp"><img src="/Images/profile.jpg" /></div><span className="user-name">Mohit Chauhan</span>
                </div>
                <div className="preview-stars"><RatedStars /></div>
                <div className="preview-btns">
                    <button className="preview-cart"><i class="far fa-shopping-cart"></i><span>Add to Cart</span></button>
                    <button className="buy-btn"><i class="far fa-shopping-bag"></i><span>Buy Now</span></button>
                </div>
            </div>
            <div className="image-carousel">
            <div className="carousel-cont">
               <Slider {...settings}>
                   {images.map((img, idx)=>(
                       <div className={idx===ImageIndex ? "activeslide" : "slide"}>
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
            </div> 
        </div>
            <Footer />
        </>
    );
}
export default Preview;