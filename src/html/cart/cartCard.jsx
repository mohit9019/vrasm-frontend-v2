import ApiCaller from "../../apiCaller.js/apiCaller";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../redux/actions/cartAction";
export default function CartCards(props) {
    const dispatch = useDispatch();
    function handleDeleteFromCart(template_id) {
        // let apiCaller = new ApiCaller();
        // apiCaller.postData({
        //     url: 'template/add_to_cart',
        //     data: {
        //         template_id,
        //         action: 'delete'
        //     }
        // }).then(data => {
        //     if (apiCaller.validateResult(data)) {
        //         props.onDelete();
        //         toast.success('Template deleted from cart');
        //     }
        // })
        dispatch(deleteFromCart(template_id));
    }
    return (
        <>
            <div className="crt-order-card">
                <div className="crt-order-cont ">
                    <Link to={{ pathname: `/Preview/id?${props.id}` }} style={{ textDecoration: "none", color: "black" }} className="crt-order-cont" >
                        <div className="crt-order-img"><img src={props.image} alt="test" /></div>
                        <div className="crt-order-details">
                            <span className="crt-order-name">{props.title}</span>
                            <span className="crt-order-desc">{props.desc}</span>
                            {/* <div className="crt-stars"><RatedStars /></div> */}
                        </div>
                    </Link>
                    <div className="crt-order-price">{props.price} <i class="fal fa-rupee-sign"></i></div>
                    <div><i class="far fa-trash-alt" id="del" onClick={() => handleDeleteFromCart(props.id)}></i></div>
                </div>
            </div>
        </>
    );
}
