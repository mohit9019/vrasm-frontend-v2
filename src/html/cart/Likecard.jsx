import RatedStars from "../preview/RatedStars";
import {AiFillHeart} from "react-icons/ai";
export default function Likecard(){
    return(
        <>
            <div className="crt-order-cont ">
                    <div className="crt-order-img"><img src="/images/q.jpg" altlt="image" /></div>
                    <div className="crt-order-details">
                        <span className="crt-order-name">Quarter – Real Estate</span>
                        <span className="crt-order-desc">Quarter is a Real Estate, Architecture & interior design Bootstrap 5 HTML Template for real estate website.</span>
                        <div className="crt-stars"><RatedStars /></div>
                    </div>
                    <div className="crt-order-price">Rs.20</div>
                        <div><AiFillHeart className="save-icon" id="unlike" /></div>
                    </div>
        </>
    );
}