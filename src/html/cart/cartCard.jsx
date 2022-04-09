import RatedStars from "../preview/RatedStars";
import {Link} from "react-router-dom";

export default function CartCards(props){
    return(
        <>
                <div className="crt-order-card">
                    <div className="crt-order-cont ">
                    <div className="crt-order-img"><img src={props.img} altlt="image" /></div>
                    <div className="crt-order-details">
                        <span className="crt-order-name">{props.title}</span>
                        <span className="crt-order-desc">{props.desc}</span>
                        <div className="crt-stars"><RatedStars /></div>
                    </div>
                    <div className="crt-order-price">{props.price}</div>
                        <div><i class="far fa-trash-alt" id="del"></i></div>
                    </div>
                </div>
        </>
    );
}