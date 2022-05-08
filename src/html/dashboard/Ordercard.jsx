import "../../css/buyer dashboard/Myorder.css";
function Ordercard(props){
    console.log(props);
    let date = Date.parse(props.data.created_date);
    console.log(date);
    return( 
        <>
                <div className="order-card">
                <div className="order-date"><p>id: {date}</p></div>
                    <div className="order-cont ">
                    <div className="order-img"><img src={'/STORAGE/'+props?.data?.template[0]?.images?.split(",")[0] } altlt="image" /></div>
                    <div className="order-details">
                        <span className="order-name">{props.data.template[0]['name']}</span>
                        <span className="order-desc">{props.data.template[0]['description']}</span>
                        <span className="order-desc">category: {props.data.template[0]['category']}</span>
                        <span className="order-desc">technology: {props.data.template[0]['technology']}</span>
                    </div>
                    <div className="order-price">{props.data.amount} <i class="fal fa-rupee-sign"></i></div>
                    </div>
                </div>
        </>
    );
}
export default Ordercard;