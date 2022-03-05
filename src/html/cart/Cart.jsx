import Navba from "../home/Navba";
import "../../css/cart/Cart.css";
import {Link} from "react-router-dom";
import Card  from "../home/Card";
import Data from "../home/Data";
import details from "../home/Detailsmap";

function Cart(){
    let CartData = [Data[0],Data[1],Data[2]];   
    return(
        <>
        {/* <div className="searchbar"><i class="fas fa-search"></i><input className="search"></input></div>
        <div className="oops"><p className="msg">Oops... Your Cart is Empty</p></div> */}
        {/* <div className="crtcont">        
        {CartData.map(details)}
        </div> */}
        <h5 className="msg">Your Cart</h5>
        <div className="cart-cont">
        <div className="crt">
        <div className="crt-my-order">
                {/* <p>Oops... No Orders yet</p>  */}
                <div className="crt-order-card">
                    <div className="crt-order-cont ">
                    <div className="crt-order-img"><img src="/images/q.jpg" altlt="image" /></div>
                    <div className="crt-order-details">
                        <span className="crt-order-name">Quarter – Real Estate</span>
                        <span className="crt-order-desc">Quarter is a Real Estate, Architecture & interior design Bootstrap 5 HTML Template for real estate website.</span>
                    </div>
                    <div className="crt-order-price">Rs.20</div>
                        <div><i class="far fa-trash-alt" id="del"></i></div>
                    </div>
                </div>
            </div>
            </div>

            <div className="checkout-div">
                <Link to="/categoriespage" className="continue-shopping"><span><i class="fad fa-long-arrow-left"></i>  Continue Shopping</span></Link>
            <div className="checkout">
                <div className="totalamnt-div"><h5>Total Amount</h5><span className="pr"> $35</span></div>
                <div className="chout-btn"><button className="chout">CHECKOUT</button></div>
            </div>
            </div>
            </div>
        </>
    );
}
export default Cart;