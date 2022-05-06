import Ordercard from "./Ordercard";
import { useState } from "react";
import { useEffect } from "react";
import ApiCaller from "../../apiCaller.js/apiCaller";
function Myorder() {
    const [orders, setOrders] = useState([1]);
    let user_id = ApiCaller.userData.user_id;
    useEffect(() => {
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url: 'user/myOrders',
            data:{} // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
        }).then(res => {
            if (res && res.status_code == '1') {
                setOrders(res.data.data);
                console.log("success");
            }
        })
    }, []);
    function cards(orders) { 
        return <>
            <Ordercard id={orders._id} name={orders.name} date={orders.date} desc={orders.description} price={orders.price} />
        </>;
    }
    return (
        <>
        {orders.length==0?
        <>
            <h3 className="n">Your Orders</h3>
                <p>Oops... No Orders yet</p>  
        </>
        :
        <>
            {
                orders.map(cards)
            }
        </>
        }
        </>
    );
}
export default Myorder;