import React from "react";
import Navba from "../home/Navba";
import "../../css/cart/Like.css";
import {Link} from "react-router-dom";
import Data from "../home/Data";
import details from "../home/Detailsmap";
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
            <div className="my-like">
                {/* <p>Oops... No Orders yet</p>  */}
                <div className="lk-card">
                <div className="lk-date"><p>wed, 09/07/2021</p></div>
                    <div className="lk-cont ">
                    <div className="lk-img"><img src="/images/q.jpg" altlt="image" /></div>
                    <div className="lk-details">
                        <span className="lk-name">Quarter – Real Estate</span>
                        <span className="lk-desc">Quarter is a Real Estate, Architecture & interior design Bootstrap 5 HTML Template for real estate website.</span>
                        <span className="lk-id">ID: TEMP123456</span>
                    </div>
                    <div className="lk-price">$20</div>
                    </div>
                </div>
                <div className="lk-card">
                <div className="lk-date"><p>wed, 09/07/2021</p></div>
                    <div className="lk-cont ">
                    <div className="lk-img"><img src="/images/q.jpg" altlt="image" /></div>
                    <div className="lk-details">
                        <span className="lk-name">Quarter – Real Estate</span>
                        <span className="lk-desc">Quarter is a Real Estate, Architecture & interior design Bootstrap 5 HTML Template for real estate website.</span>
                        <span className="lk-id">ID: TEMP123456</span>
                    </div>
                    <div className="lk-price">$20</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Like;