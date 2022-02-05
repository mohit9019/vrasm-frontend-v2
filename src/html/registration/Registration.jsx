import "../../css/registration/Registration.css";
import React, { useState } from 'react';

function Registration() {
  const [show, setShow] = useState(false)
  function click(){
    console.log("clicked");
  }
  return (
    <>
    <div className="background">
      <div className="regist">
        
        <div className="regist-col">
        <label className="regist-label">Phone Number</label>
        <input type="tel" className="regist-input" placeholder="Enter Phone Number"></input>
        </div>

        <div className="regist-col">
        <label className="regist-label">Password</label>
        <input type="password" className="regist-input" placeholder="Enter Password"></input>
        </div>

        <div className="regist-col">
        <label className="regist-label">Confirm Password</label>
        <input type="password" className="regist-input" placeholder="Enter Confirm Password"></input>
        </div>

        <div className="regist-col">
        <div className="regist-row">
        <input type="radio" name="register" className="radio-button" onClick={() => setShow(false)}></input>
        <label className="regist-label" style={{marginRight:'20px'}}>Buyer</label>
        <input type="radio" name="register" className="radio-button" onClick={() => setShow(true)}></input>
        <label className="regist-label">Creator</label>
        </div>
        </div>
        {show ? <div className="live">

        <div className="regist-col">
        <label className="regist-label">College Name</label>
        <input type="text" className="regist-input" placeholder="Enter College Name"></input>
        </div>
        
        <div className="regist-col">
        <label className="regist-label">Course Name</label>
        <input type="text" className="regist-input" placeholder="Enter Course Name"></input>
        </div>

        <div className="regist-col">
        <label className="regist-label">College ID</label>
        <input type="file" className="regist-input"></input>
        </div>

          </div> : null}

        <button className="regist-button" type="reset" onclick={click()}>
            Submit
          </button>

      </div>
      </div>
    </>
  );
}
export default Registration;