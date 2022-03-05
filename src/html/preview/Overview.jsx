import "../../css/preview/Preview.css";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft} from 'react-icons/fa';
const i='/Images/113.jpg';
const images = [i,'/Images/p.jpg','/Images/n.png'];
function Overview() {

    const NextArrow =({onClick})=>{return(<><div className="arrow next" onClick={onClick}><FaArrowRight /></div></>);};
    const PrevArrow =({onClick})=>{return(<><div className="arrow prev" onClick={onClick}><FaArrowLeft /></div></>);};

    const [ImageIndex , setImageIndex]= useState(0)
    const settings={
        infinite:true,
        lazyLoad:true,
        speed:900,
        slideToShow:6,
        centerMode:true,
        centerPadding:0,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />,
        beforeChange: (current,next)=>setImageIndex(next),
    };

    return (
        <>
        <center>
            <div className="image-carousel">
            <div className="carousel-cont">
               <Slider {...settings}>
                   {images.map((img, idx)=>(
                       <div className={idx===ImageIndex ? "activeslide" : "slide"}>
                           <img src={img} alt={img} />
                       </div>
                   ))}
               </Slider>
               </div>
            </div>
            </center>


            {/* <div className="description">
                <p className="temp-desc">Foodhall is a responsive Blogger theme highlighting a good design for food blogging that brings many awesome.</p>
            </div>
            <div className="techs"><button className="technology">HTML</button>
                <button className="technology">css</button>
                <button className="technology">js</button>
                <button className="technology">react</button>
            </div>
            <div className="description">
                <p className="temp-desc">Template Name : Family Restaurent</p>
                <p className="temp-desc">Version : 1.3</p>
                <p className="temp-desc">Category : Hotels & Restaurents</p>
                <p className="temp-desc">Cost : 4000 INR</p>
                <p className="temp-desc">Product ID: #033-181</p>
                <p className="temp-desc">Sources : PSD, PHP</p>
                <p className="temp-desc">Website Type : Dynamic</p>
            </div> */}
        </>
    );
}
export default Overview;