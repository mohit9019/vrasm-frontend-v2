import "../../css/buyer dashboard/Myorder.css";
function Ordercard(props){
    console.log(props);
    let date = Date.parse(props.data.created_date);
    console.log(date);
    return( 
        <>
            <div className="my-order">
                <div className="order-card">
                <div className="order-date"><p>{date}</p></div>
                    <div className="order-cont ">
                    <div className="order-img"><img src="/images/default.webp" altlt="image" /></div>
                    <div className="order-details">
                        <span className="order-name">{props.data.template[0]['name']}</span>
                        <span className="order-desc">{props.data.template[0]['description']}</span>
                        <span className="order-id">{props.data.id}</span>
                    </div>
                    <div className="order-price">{props.data.amount}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Ordercard;