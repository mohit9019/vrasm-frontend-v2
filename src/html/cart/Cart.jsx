import Navba from "../home/Navba";
import "../../css/cart/Cart.css";
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
        <h3 className="msg">Your Cart</h3>
        <div className="cart-cont">
        <div className="crt-my-order">
                {/* <p>Oops... No Orders yet</p>  */}
                <div className="crt-order-card">
                <div className="crt-order-date"><p>wed, 09/07/2021</p></div>
                    <div className="crt-order-cont ">
                    <div className="crt-order-img"><img src="/images/q.jpg" altlt="image" /></div>
                    <div className="crt-order-details">
                        <span className="crt-order-name">Quarter – Real Estate</span>
                        <span className="crt-order-desc">Quarter is a Real Estate, Architecture & interior design Bootstrap 5 HTML Template for real estate website.</span>
                        <span className="crt-order-id">ID: TEMP123456</span>
                    </div>
                    <div className="crt-order-price">$20</div>
                    <div><i class="far fa-trash-alt" id="del"></i></div>
                    </div>
                </div>
                <div className="crt-order-card">
                <div className="crt-order-date"><p>wed, 09/07/2021</p></div>
                    <div className="crt-order-cont ">
                    <div className="crt-order-img"><img src="/images/q.jpg" altlt="image" /></div>
                    <div className="crt-order-details">
                        <span className="crt-order-name">Quarter – Real Estate</span>
                        <span className="crt-order-desc">Quarter is a Real Estate, Architecture & interior design Bootstrap 5 HTML Template for real estate website.</span>
                        <span className="crt-order-id">ID: TEMP123456</span>
                    </div>
                    <div className="crt-order-price">$20</div>
                    <div><i class="far fa-trash-alt" id="del"></i></div>
                    </div>
                </div>
                <div className="crt-order-card">
                <div className="crt-order-date"><p>wed, 09/07/2021</p></div>
                    <div className="crt-order-cont ">
                    <div className="crt-order-img"><img src="/images/q.jpg" altlt="image" /></div>
                    <div className="crt-order-details">
                        <span className="crt-order-name">Quarter – Real Estate</span>
                        <span className="crt-order-desc">Quarter is a Real Estate, Architecture & interior design Bootstrap 5 HTML Template for real estate website.</span>
                        <span className="crt-order-id">ID: TEMP123456</span>
                    </div>
                    <div className="crt-order-price">$20</div>
                    <div><i class="far fa-trash-alt" id="del"></i></div>
                    </div>
                </div>
            </div>

            
            
            <div className="checkout">
                <h5>Total amount</h5>
                <div className="tempamt">
                <p >Temp Ammount <span className="pr">35$</span></p>
                </div>
                <div className="tempamt">
                <p >Discount <span className="pr"><strike>3$</strike></span></p>
                </div>
                <hr></hr>
                <h5>Total amount<span className="pr">35$</span></h5>
                <br></br>
                <button className="chout">CHECKOUT</button>
            </div>
            
            
            </div>
        </>
    );
}
export default Cart;