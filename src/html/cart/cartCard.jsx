import RatedStars from "../preview/RatedStars";
import ApiCaller from "../../apiCaller.js/apiCaller";
import { toast } from "react-toastify";
export default function CartCards(props){
    function deleteFromCart(template_id){
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url:'template/add_to_cart', 
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
                <div className="crt-order-card">
                    <div className="crt-order-cont ">
                    <div className="crt-order-img"><img src="/Images/default.webp" alt="image" /></div>
                    <div className="crt-order-details">
                        <span className="crt-order-name">{props.title}</span>
                        <span className="crt-order-desc">{props.desc}</span>
                        {/* <div className="crt-stars"><RatedStars /></div> */}
                    </div>
                    <div className="crt-order-price">{props.price}</div>
                        <div><i class="far fa-trash-alt" id="del" onClick={()=>deleteFromCart(props.id)}></i></div>
                    </div>
                </div>
        </>
    );
}