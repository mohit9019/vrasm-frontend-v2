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
            if (apiCaller.validateResult(res)) {
                setOrders(res.data );
                console.log("success");
            }
        })
    }, []);
    function cards(order) { 
        return <>
            <Ordercard data={order} />
        </>; 
    }
    return (
        <>
        {orders.length==0?
            <div className="my-order">
            <h5>Oops! No Orders found...</h5>
            </div>
        :
        <div className="my-order">
            {orders.map(cards)}
            </div>
        }
        </>
    );
}
export default Myorder;