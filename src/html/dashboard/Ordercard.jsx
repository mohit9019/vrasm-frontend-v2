import "../../css/buyer dashboard/Myorder.css";
function Ordercard(props){
    return( 
        <>
            <div className="my-order">
                <div className="order-card">
                <div className="order-date"><p>{props.date}</p></div>
                    <div className="order-cont ">
                    <div className="order-img"><img src="/images/default.webp" altlt="image" /></div>
                    <div className="order-details">
                        <span className="order-name">{props.name}</span>
                        <span className="order-desc">{props.desc}</span>
                        <span className="order-id">{props.id}</span>
                    </div>
                    <div className="order-price">{props.price}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Ordercard;