import React from "react";
import "../../css/cart/Like.css";
import { Link } from "react-router-dom";
import Likecard from "./Likecard";
import { useEffect, useState } from "react";
import ApiCaller from "../../apiCaller.js/apiCaller";
import { useDispatch, useSelector } from "react-redux";
function Like() {
    const [templates, setTemplates] = useState([]);
    const likeReducer = useSelector(state => state.likeReducer);
    const { likeItems } = likeReducer;
    const dispatch = useDispatch();
    useEffect(() => {
        // handleCallback();
        setTemplates(likeItems);
    }, [likeItems]);

    // function handleCallback() {
    // let apiCaller = new ApiCaller();
    // apiCaller.postData({
    //     url: 'template/get',
    //     data: {
    //         type: 'like'
    //     } // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
    // }).then(res => {
    //     if (apiCaller.validateResult(res)) {
    //         console.log("get liked temps");
    //         console.log(res.data);
    //         setTemplates(res.data);
    //     }
    // })
    // }

    function cards(templates) {
        return <>
            <Likecard image={templates.images[0]} id={templates._id} title={templates.name} desc={templates.description} price={templates.price}></Likecard>
            {/* onDelete={handleCallback} */}
        </>;
    }

    return (
        <>
            {templates.length === 0 ? <div className="oops"><p className="oops-title">Oops... You Haven't liked any Templates</p>
                <Link to="/Categoriespage" style={{ textDecoration: "none" }}><p className="browse-option"><i class="far fa-file-search"></i> Browse Templates</p></Link>
                <div className="oops-clip"><img alt="oops" src="/Images/oops-clip.png" /></div>
            </div>
                :
                <>
                    <h3 className="msg">Liked Templates </h3>
                    <div className="crt-cont">
                        <div className="like">
                            <div className="crt-my-order">
                                {
                                    templates.map(cards)
                                }
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
}
export default Like;