import "../../css/registration/Registration.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ApiCaller from "../../apiCaller.js/apiCaller";
import { toast } from "react-toastify";

function toggle(value){
  return !value;
}


function Registration() {
  const [show, setShow] = useState(false);

  function register(e) {
    e.preventDefault(); 
    console.log("clicked");
    let Email=e.target.email.value;
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
      if(data && data.status_code=='1')
      {
        toast.success('Data Uploaded succesfully');
        setTimeout(() => {
          setis_register(1);
        }, 500);
      }
      else
        toast.error(data.status_message);
      console.log(data);
    })
    .catch(err=>{
      console.log(err);
    })
  }

  function otp(e){
    e.preventDefault(); 
    console.log(e.target.value);
    let otp = e.target[0].value+e.target[1].value+e.target[2].value+e.target[3].value ;
    let body = {
      otp:otp,
      // email:
    }
    let apiCaller = new ApiCaller();
    apiCaller.postData({
      url:'buyer/otp',
      data:body
    }).then(data=>{
      if(data && data.status_code=='1')
        toast.success('Otp Verified',{autoClose:2000});
      else
        toast.error("Otp doesn't Matched",{autoClose:2000});
      console.log(data);
    })
    .catch(err=>{
      console.log(err);
    })
  }

   // for otp inputs
   const [Otp,setOtp]= useState(new Array(4).fill(""));
   const handleChange = (element, index)=>{
     if(isNaN(element.value)) 
         return false;
     else if(element.value.key==8){
       element.previousSibling.focus();
     }
     setOtp([...Otp.map((d, idx)=>(idx===index)? element.value : d )]);
     if(element.nextSibling){
       element.nextSibling.focus();
     }
   }

 //for otp timer
   const [counter, setCounter ]=useState(59);
   useEffect(()=>{
     const timer= counter>0 && setInterval(()=>setCounter(counter-1),1000);
     return()=>clearInterval(timer);
   },[counter]);

const [is_register,setis_register]=useState(0);
  return (
    <>
    {is_register==0?
    
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
            <button className="regist-button" type="submit" >
              Submit
            </button>

          </form>
        </div>

      </div>

      :

      <div className="otpcontainer">
          <img src="/Images/otpclip.png" className="otp-img" />
            <h5 className="otp-title">Otp Verification</h5>
            <p className="yourmail">OTP sent on your Email@gmail.com</p>
            <form onSubmit={otp}>
              <div  className="otp">
                <div className="otp-inputs">
                {Otp.map((data,index)=>{
                  return(
                    <input 
                        type="text" 
                        maxLength={1} 
                        name="otp" 
                        key={index} 
                        value={data} 
                        onChange={e=> handleChange(e.target, index)}
                        onKeyDown={e=> e.target.select()} 
                        />
                  );
                })}
                </div>
                <p className="timer">OTP Valid till  <span className="time"> 00:{counter}</span></p>
                <p className="resend">Didn't recieved otp ?  <span className="re"> Resend</span></p>
                <div className="otp-btns">
                  <button className="clear-button" onClick={e => setOtp([...Otp.map(v => "")])}>Clear</button>
                  <button className="verify-button" type="submit">verify</button>
                </div>
              </div>
              </form>
          </div>
     }
      
    </>
  );
}
export default Registration;