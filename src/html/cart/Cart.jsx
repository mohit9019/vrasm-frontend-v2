import "../../css/cart/Cart.css";
import {Link} from "react-router-dom";
import CartCards from "./cartCard";
function Cart(){
    const is_cart=1;
    return(
        <>
        {
            is_cart==0 ?<> <div className="oops"><p className="oops-title">Oops... Your Cart is Empty</p>
                            <Link to="/Categoriespage" style={{textDecoration:"none"}}><p className="browse-option"><i class="far fa-file-search"></i> Browse Templates</p></Link>
                            <div className="oops-clip"><img src="/Images/oops-clip.png" /></div>
                            </div>
                            </>
            :
        <>
        <h5 className="msg">Your Cart</h5>
        <div className="cart-cont">
        <div className="crt">
        <div className="crt-my-order">
            <CartCards />
                
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
        }
        </>
    );
}
export default Cart;