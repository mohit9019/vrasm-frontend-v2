import "../../css/registration/Registration.css";
import React, { useState, componentDidMount, state } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import ApiCaller from "../../apiCaller.js/apiCaller";
import { getDefaultNormalizer } from "@testing-library/react";

function toggle(value){
  return !value;
}

function Registration() {
  const [show, setShow] = useState(false);

  function register(e) {
    e.preventDefault(); 
    console.log("clicked");
    console.log(e.target.password.value);
    let body = {
      name: 'manav',
      email: e.target.email.value,
      password: e.target.password.value,
      gender: e.target.gender.value,
      is_creator: e.target.is_creator.checked
    }
    if(e.target.is_creator.checked){
      body.college = e.target.college.value;
      body.course = e.target.course.value;
    }
    let apiCaller = new ApiCaller();
    apiCaller.postData({
      url:'buyer/register',
      data:body
    }).then(data=>{
      console.log(data);
    })
    .catch(err=>{
      console.log(err);
    })
  }

//get
  // async function getData(){
  //   const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then(res=>{console.log(res.data);})
  //   .catch(err=>{console.log(err);})
  // }  

  return (
    <>
      <div className="background">
        <div className="regist">
          <form onSubmit={register}> 
            <div className="regist-col">
              <label className="regist-label">E-mail</label>
              <input type="tel" className="regist-input" name="email" placeholder="Enter email" ></input>
            </div>

            <div className="regist-col">
              <label className="regist-label">Password</label>
              <input type="password" className="regist-input" name="password" placeholder="Enter Password" ></input>
            </div>

            <div className="regist-col">
              <label className="regist-label">Confirm Password</label>
              <input type="password" className="regist-input" placeholder="Enter Confirm Password"   ></input>
            </div>

            <div className="regist-col">
              <div className="regist-row">
                <input type="radio" name="gender" value="male" className="radio-button" ></input>
                <label className="regist-label" style={{ marginRight: '20px' }}>Male</label>
                <input type="radio" name="gender" value="female" className="radio-button" ></input>
                <label className="regist-label">Female</label>
              </div>
            </div> 

            <div className="regist-col">
              <div className="regist-row">
              <label className="regist-label">Buyer</label>
              <label class="switch">
             <input type="checkbox" name="is_creator" onChange={() => setShow(toggle)}></input>
            <span class="slider round"></span>
            </label>
            <label className="regist-label">Creator</label>
              </div>
            </div>
            {show ? <div className="live">

              <div className="regist-col">
                <label className="regist-label">College Name</label>
                <input type="text" name="college" className="regist-input" placeholder="Enter College Name"></input>
              </div>

              <div className="regist-col">
                <label className="regist-label">Course Name</label>
                <input type="text" name="course" className="regist-input" placeholder="Enter Course Name"></input>
              </div>

              <div className="regist-col">
                <label className="regist-label">College ID</label>
                <input type="file" className="regist-input"></input>
              </div>

            </div> : null}
            <Link to="#"><button className="regist-button" type="submit" >
              Submit
            </button></Link>

          </form>
          {/* <button className="regist-button" onClick={getData} >
              Submit
            </button> */}
        </div>

      </div>
    </>
  );
}
export default Registration;