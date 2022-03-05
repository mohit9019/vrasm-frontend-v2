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
            {/* <div className="my-like">
                <p>Oops... No Orders yet</p> 
                
            </div> */}
        <div className="crt-cont">
        <div className="like">
        <div className="crt-my-order">
                {/* <p>Oops... No Orders yet</p>  */}
                <div className="lk-card"> 
                    <div className="lk-cont "> 
                    <div className="lk-split">
                    <div className="lk-img"><img src="/images/q.jpg" altlt="image" /></div>
                    <div className="lk-details">
                    {/* <div className="unsave"><i class="far fa-trash-alt"></i></div> */}

                      <span className="lk-name">Quarter – Real Estate</span>
                        <span className="lk-desc">Quarter is a Real Estate, Architecture & interior design Bootstrap 5 HTML Template for real estate website.</span>
                        <div className='lk-stars'><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>
                    </div>
                    <div className="lk-price">Rs.20</div>
                    </div>
                    <div className="lk-btns">   
                        <div className="lk-icon">
                            <Link to="Preview/Overview"  style={{textDecoration:"none", color:"darkgray"}} >
                                <button className="lk-preview">
                                <i class="fas fa-eye"></i> <span>Preview</span>
                                </button>
                            </Link>
                            <Link to="#" style={{textDecoration:"none", color:"darkgray"}}>
                                <button className="lk-cart">
                                <i class="fas fa-shopping-cart" onClick={()=>console.log(Data[1][7])}></i> <span>Add to cart</span>
                                </button>
                            </Link>
                    <div className="unsave-res"><i class="far fa-trash-alt"></i></div>
                    </div>  
                    </div>
                    <div className="unsave"><i class="far fa-trash-alt"></i></div>
                    </div>
                </div>
                
                </div>
            </div>
            </div>
        </>
    );
}
export default Like;