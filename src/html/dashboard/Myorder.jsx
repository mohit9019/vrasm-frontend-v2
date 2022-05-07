import Ordercard from "./Ordercard";
import { useState } from "react";
import { useEffect } from "react";
import ApiCaller from "../../apiCaller.js/apiCaller";
function Myorder() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url: 'buyer/my_orders',
            data:{} // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
        }).then(res => {
            if (res && res.status_code == '1') {
                setOrders(res.data );
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
            <h5>Oops! No Orders found...</h5>
        :
            orders.map(cards)
        }
            {/* {orders.map((item) => (
                <Ordercard id={item._id} name={item.name} date={item.date} desc={item.description} price={item.price} />
      ))} */}
        </>
    );
}
export default Myorder;