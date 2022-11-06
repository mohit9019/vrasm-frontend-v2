import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import ApiCaller from "../../apiCaller.js/apiCaller";
import { deleteFromLike } from "../../redux/actions/likeAction";
export default function Likecard(props) {
    const templates = useSelector(state => state.getTemplateReducer)
    const { state } = templates;
    const dispatch = useDispatch();
    function handleDeleteFromLike(template_id) {
        // let apiCaller = new ApiCaller();
        // apiCaller.postData({ 
        //     url:'template/like',
        //     data:{
        //         template_id,
        //         action:'unlike',
        //     }
        // }).then(data=>{
        //     if(apiCaller.validateResult(data)){
        //         props.onDelete();
        //     }
        // })
        dispatch(deleteFromLike(template_id));
        state?.map((x) => x._id === template_id ? x.is_liked = false : x.is_liked = x.is_liked);
    }
    return (
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
                    <div><AiFillHeart className="save-icon" id="unlike" onClick={() => handleDeleteFromLike(props.id)} /></div>
                </div>
            </div>
        </>
    );
}