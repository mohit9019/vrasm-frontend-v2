import React from "react";
import "../../css/cart/Like.css";
import Data from "../home/Data";
import RatedStars from "../preview/RatedStars";
import {AiFillHeart} from "react-icons/ai";
function Like(){
    let CartData = [Data[4],Data[3]];
    return(
        <>
            {/* <div className="oops"><p className="msg">Oops... you didn't save any yet</p></div>
            <center><Link to="/" className="home" style={{textDecoration:"none"}}><i class="fas fa-home"></i></Link></center> */}
            {/* <div className="crtcont">
            {CartData.map(details)}
            </div> */}
            <h3 className="msg">Liked Templates </h3>
        <div className="crt-cont">
        <div className="like">
        <div className="crt-my-order">
        <div className="crt-order-card">
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
                </div>
                </div>
            </div>
            </div>
        </>
    );
}
export default Like;