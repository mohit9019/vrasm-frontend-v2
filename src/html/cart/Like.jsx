import React from "react";
import "../../css/cart/Like.css";
import { Link } from "react-router-dom";
import Likecard from "./Likecard";
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
                    <Likecard />
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