import "../../css/cart/Cart.css";
import { Link } from "react-router-dom";
import CartCards from "./cartCard";
import { useEffect, useState } from "react";
import ApiCaller from "../../apiCaller.js/apiCaller";
function Cart() {
    const [templates, setTemplates] = useState([1]);
    useEffect(() => {
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url: 'template/get_cart',
            data: {} // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
        }).then(res => {
            if (res && res.status_code == '1') {
                setTemplates(res.data.data);
                console.log(templates);
            }
        })
    }, []);

    function handleCallback(){
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url: 'template/get_cart',
            data: {} // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
        }).then(res => {
            if (res && res.status_code == '1') {
                setTemplates(res.data.data);
                console.log(templates);
            }
        })
    }
    function cards(templates) { 
        return <>
            <CartCards onDelete={handleCallback} id={templates._id} title={templates.name} desc={templates.description} price={templates.price}></CartCards>
        </>;
    }
    const cart_total=0;
    return ( 
        <>
            {
                templates.length == 0 ? <> <div className="oops"><p className="oops-title">Oops... Your Cart is Empty</p>
                    <Link to="/Categoriespage" style={{ textDecoration: "none" }}><p className="browse-option"><i class="far fa-file-search"></i> Browse Templates</p></Link>
                    <div className="oops-clip"><img src="/Images/oops-clip.png" /></div>
                </div>
                </>
                    :
                    <>
                        <h5 className="msg">Your Cart</h5>
                        <div className="cart-cont">
                            <div className="crt">
                                <div className="crt-my-order">
                                    {
                                        templates.map(cards)
                                    }
                                </div>
                            </div>

                            <div className="checkout-div">
                                <Link to="/categoriespage" className="continue-shopping"><span><i class="fad fa-long-arrow-left"></i>  Continue Shopping</span></Link>
                                <div className="checkout">
                                    <div className="totalamnt-div"><h5>Total Amount</h5><span className="pr"> 200 Rs</span></div>
                                    <div className="chout-btn"><button className="chout">CHECKOUT</button></div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    );
}
export default Cart;