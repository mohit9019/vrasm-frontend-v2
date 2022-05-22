import RatedStars from "../preview/RatedStars";
import {AiFillHeart} from "react-icons/ai";
import { toast } from "react-toastify";
import ApiCaller from "../../apiCaller.js/apiCaller";
import { Link } from "react-router-dom";
export default function Likecard(props){
    function deleteFromLike(template_id){
        let apiCaller = new ApiCaller();
        apiCaller.postData({ 
            url:'template/like',
            data:{
                template_id,
                action:'unlike',
            }
        }).then(data=>{
            if(data && data.status_code == '1'){
                props.onDelete();
            }
        })
    }    
    return(
        <>
        <div className="crt-order-card">
            <div className="crt-order-cont ">
                    <div className="crt-order-img"><img src={props.image} alt="test" /></div>
                    <div className="crt-order-details">
                        <span className="crt-order-name">{props.title}</span>
                        <span className="crt-order-desc">{props.desc}</span>
                        {/* <div className="crt-stars"><RatedStars /></div> */}
                    </div>
                    <div className="crt-order-price">{props.price} <i class="fal fa-rupee-sign"></i></div>
                        <div><AiFillHeart className="save-icon" id="unlike" onClick={()=>deleteFromLike(props.id)} /></div>
                    </div>
            </div>
        </>
    );
}