import RatedStars from "../preview/RatedStars";
import {AiFillHeart} from "react-icons/ai";
import { toast } from "react-toastify";
import ApiCaller from "../../apiCaller.js/apiCaller";
export default function Likecard(props){
    function deleteFromLike(template_id){
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url:'template/like',
            data:{
                template_id,
                action:'delete'
            }
        }).then(data=>{
            if(data && data.status_code == '1'){
                props.onDelete();
                toast.success('Template deleted from cart');
            }
        })
    }    
    return(
        <>
            <div className="crt-order-cont ">
                    <div className="crt-order-img"><img src={props.img} altlt="image" /></div>
                    <div className="crt-order-details">
                        <span className="crt-order-name">{props.title}</span>
                        <span className="crt-order-desc">{props.desc}</span>
                        <div className="crt-stars"><RatedStars /></div>
                    </div>
                    <div className="crt-order-price">{props.price}</div>
                        <div><AiFillHeart className="save-icon" id="unlike" onClick={()=>deleteFromLike(props.id)} /></div>
                    </div>
        </>
    );
}