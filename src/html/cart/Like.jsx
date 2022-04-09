import React from "react";
import "../../css/cart/Like.css";
import RatedStars from "../preview/RatedStars";
import {AiFillHeart} from "react-icons/ai";
import { Link } from "react-router-dom";
function Like(){
    const is_like=0
    return(
        <>
        {is_like==0 ? <div className="oops"><p className="oops-title">Oops... You Haven't liked any Templates</p>
                            <Link to="/Categoriespage" style={{textDecoration:"none"}}><p className="browse-option"><i class="far fa-file-search"></i> Browse Templates</p></Link>
                            <div className="oops-clip"><img src="/Images/oops-clip.png" /></div>
                            </div>
                            :
                            <>
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
        }
        </>
    );
}
export default Like;