import "../../css/registration/Registration.css";
import React, { useState } from 'react';
import axios from "axios";

function Registration() {
  const [show, setShow] = useState(false)
  function register(e) {
    e.preventDefault();
    console.log("clicked");
    console.log(e.target.phoneno.value);
    let body = {
      name: 'test',
      phoneno: e.target.phoneno.value,
      password: e.target.password.value,
      gender: 'male',
      dob: '10-14-2001',
    }
    axios.post('http://localhost:4000/v1/buyer/register', body)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <>
      <div className="background">
        <div className="regist">
          <form onSubmit={register}>
            <div className="regist-col">
              <label className="regist-label">Phone Number</label>
              <input type="tel" className="regist-input" name="phoneno" placeholder="Enter Phone Number"></input>
            </div>

            <div className="regist-col">
              <label className="regist-label">Password</label>
              <input type="password" className="regist-input" name="password" placeholder="Enter Password"></input>
            </div>

            <div className="regist-col">
              <label className="regist-label">Confirm Password</label>
              <input type="password" className="regist-input" placeholder="Enter Confirm Password"></input>
            </div>

            <div className="regist-col">
              <div className="regist-row">
                <input type="radio" name="register" className="radio-button" onClick={() => setShow(false)}></input>
                <label className="regist-label" style={{ marginRight: '20px' }}>Buyer</label>
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

            <button className="regist-button" type="submit" >
              Submit
            </button>

          </form>
        </div>

      </div>
    </>
  );
}
export default Registration;