import "../../css/preview/Payment.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Payment() {
  const [paid,setPaid]=useState(0);
  const [togglepay,setTogglepay]=useState(0);
  const PayActive =(index) =>{
    setTogglepay(index); 
  }
    return (
        <>
      <div className="paynow"> 
        <div className="payment-method">
          <div>
            <h4 className="pay-title">Pay with</h4>
          </div>
            <ul className="method-list">
              <li className="methods" onClick={()=>PayActive(0)} id={togglepay===0?"active-pay":null}><i class="far fa-credit-card"></i> Credit Card</li>
              <li className="methods" onClick={()=>PayActive(1)} id={togglepay===1?"active-pay":null}><i class="far fa-university"></i> Netbanking</li>
              <li className="methods" onClick={()=>PayActive(2)} id={togglepay===2?"active-pay":null}><i class="far fa-rupee-sign"></i> UPI</li>
            </ul>
            <div className="backtopreview"><Link to="/Preview" style={{textDecoration:"none",color:"rebeccapurple"}}><i class="fad fa-arrow-left"></i>Back to Preview</Link></div>
        </div>
        <div className="devider"></div>
        
        <div className="payment-details">
          <h4 className="payment-title">payment Details</h4>
  
          <div className="payment-mode">

           <div className="creditcard" id={togglepay===0?"active-page":null}>
            <div className="credit-inputs">
              <label className="input-label" htmlFor="">Card Number :</label>
              <input className="payment-input" type="text" name="" id="cardnumber" />
              </div>
              <div className="credit-inputs">
              <label className="input-label" htmlFor="">Card Holder :</label>
              <input className="payment-input" type="text" name="" id="cardholder" />
            </div>
            <div className="credit-inputs">
              <label className="input-label" for="cars">Month :</label>
              <select className="payment-input" name="cars" id="months">
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option>
                <option>may</option>
                <option value="audi">Jun</option>
                <option value="audi">Jul</option>
                <option value="audi">Aug</option>
                <option value="audi">Sep</option>
                <option value="audi">Oct</option>
                <option value="audi">Nov</option>
                <option value="audi">Dec</option>
              </select>
  
              <label className="input-label" for="year">Year :</label>
              <select className="payment-input" name="cars" id="year">
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                <option>2029</option>
                <option>2030</option>
                <option>2031</option>
              </select>
              </div>
            <div className="credit-inputs">
              <label className="input-label" htmlFor="">cvv : </label>
              <input className="payment-input" type="text" id="cvv" maxLength={3} />
            </div>
          </div>

          {/* Netbanking  */}
  
           <div className="netbanking" id={togglepay===1?"active-page":null}>
            <div className="pay-column">
              <label for="year" className="input-label">Bank :</label>
              <select name="cars" id="year" className="payment-input">
                <option>Indian Bank</option>
                <option>SBI</option>
                <option>Bank of Baroda</option>
                <option>Kotak Bank</option>
              </select>
            </div>
            <div className="pay-column">
              <label htmlFor="" className="input-label">Account Number : </label>
              <input className="payment-input" type="text" />
            </div>
            <div className="pay-column">
              <label htmlFor="" className="input-label">IFSC Code : </label>
              <input className="payment-input" type="text" />
            </div>
          </div>

           {/* UPI  */}
          <div className="upiid" id={togglepay===2?"active-page":null}>
            <label className="input-label">UPI ID : </label>
            <input type="text" className="payment-input" />
          </div>


          </div>
          <div className="pay-option">
          <span className="pay-amount">Rs.500</span>
          <button  className="pay-button">
            Pay Now
          </button>
          <button className="pay-button" disabled={paid===1? false: true } onClick={console.log("file downloaded")}>Download Zip</button>
          </div>
        </div>
      </div>      
      </>
    );
  }
  