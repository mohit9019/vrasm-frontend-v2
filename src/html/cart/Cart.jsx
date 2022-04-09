import "../../css/cart/Cart.css";
import {Link} from "react-router-dom";
import RatedStars from "../preview/RatedStars";

function Cart(){
    const is_cart=0;
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
                {/* <p>Oops... No Orders yet</p>  */}
                <div className="crt-order-card">
                    <div className="crt-order-cont ">
                    <div className="crt-order-img"><img src="/images/q.jpg" altlt="image" /></div>
                    <div className="crt-order-details">
                        <span className="crt-order-name">Quarter – Real Estate</span>
                        <span className="crt-order-desc">Quarter is a Real Estate, Architecture & interior design Bootstrap 5 HTML Template for real estate website.</span>
                        <div className="crt-stars"><RatedStars /></div>
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
        }
        </>
    );
}
export default Cart;