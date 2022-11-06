import "../../css/registration/Registration.css";
import React, { useState, useEffect } from 'react';
import ApiCaller from "../../apiCaller.js/apiCaller";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { registration, verifyOtp } from "../../redux/actions/registAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../other/Loader';
import Error from '../other/Error';

function toggle(value) {
  return !value;
}
var email = '';

function Registration() {
  const regist = useSelector((state) => state.registReducer);
  let { loading, error, is_register } = regist;
  // if (is_register === undefined) {
  //   is_register = 0;
  // }
  // console.log(regist);
  const navigate = useNavigate();
  function ScrolltoTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  useEffect(() => {
    ScrolltoTop();
  }, []);
  const [show, setShow] = useState(false);
  // let email = '';

  const dispatch = useDispatch();

  function register(e) {
    e.preventDefault();
    email = e.target.email.value;
    let body = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      gender: e.target.gender.value,
      is_creator: e.target.is_creator.checked
    }
    if (e.target.is_creator.checked) {
      body.college = e.target.college.value;
      body.course = e.target.course.value;
    }

    dispatch(registration(body));
    // let apiCaller = new ApiCaller();
    // apiCaller.postData({
    //   url: 'buyer/register',
    //   data: body
    // }).then(data => {
    //   if (data && data.status_code === '1') {
    //     toast.success('Otp sent on your email');
    //     setTimeout(() => {
    //       setis_register(1);
    //     }, 500);
    //   }
    //   else
    //     toast.error(data.status_message);
    // })
    //   .catch(err => {
    //     console.log(err);
    //   })
  }

  function otp(e) {
    e.preventDefault();
    let otp = e.target[0].value + e.target[1].value + e.target[2].value + e.target[3].value;
    let body = {
      otp: otp,
      email
    }
    dispatch(verifyOtp(body, navigate));
    // let apiCaller = new ApiCaller();
    // apiCaller.postData({
    //   url: 'buyer/otp',
    //   data: body
    // }).then(data => {
    //   if (data && data.status_code === '1') {
    //     toast.success('Otp Verified', { autoClose: 2000 });
    //     navigate('/');
    //     window.location.reload("/");
    //   }
    //   else {
    //     toast.error("Otp doesn't Matched", { autoClose: 2000 });
    //   }
    // })
    //   .catch(err => {
    //     console.log(err);
    //   })
  }

  // for otp inputs
  const [Otp, setOtp] = useState(new Array(4).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value))
      return false;
    else if (element.value.key === 8) {
      element.previousSibling.focus();
    }
    setOtp([...Otp.map((d, idx) => (idx === index) ? element.value : d)]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  }

  //for otp timer
  const [counter, setCounter] = useState(59);
  // useEffect(() => {
  //   const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
  //   return () => clearInterval(timer);
  // }, [counter]);

  const [password, setPassword] = useState(null);
  const [cpassword, setcPassword] = useState(null);
  // const [is_register, setis_register] = useState(0);
  return (
    <>
      {
        loading && <Loader />
      }
      {
        error && <Error />
      }
      {is_register !== 1 ?
        <div className="background">
          <div className="regist">

            <form onSubmit={register}>
              <div className="regist-col">
                <label className="regist-label">name</label>
                <input type="text" className="regist-input" name="name" placeholder="Enter Name" required></input>
              </div>

              <div className="regist-col">
                <label className="regist-label">E-mail</label>
                <input type="email" className="regist-input" name="email" placeholder="Enter email" required></input>
              </div>

              <div className="regist-col">
                <label className="regist-label">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="regist-input" name="password" placeholder="Enter Password" minLength={3} maxLength={10} required></input>
              </div>

              <div className="regist-col">
                <label className="regist-label">Confirm Password</label>
                <input type="password" value={cpassword} onChange={(e) => setcPassword(e.target.value)} className="regist-input" placeholder="Enter Confirm Password" id="comform" required></input>
                {password !== cpassword ? <span className="password-caution"><i class="fal fa-exclamation-circle"></i> password doesn't matched</span> : null}
              </div>

              <div className="regist-col">
                <div className="regist-row">
                  <input type="radio" name="gender" value="male" className="radio-button" required></input>
                  <label className="regist-label" style={{ marginRight: '20px' }}>Male</label>
                  <input type="radio" name="gender" value="female" className="radio-button" required></input>
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
                  <input type="text" name="college" className="regist-input" placeholder="Enter College Name" required></input>
                </div>

                <div className="regist-col">
                  <label className="regist-label">Course Name</label>
                  <input type="text" name="course" className="regist-input" placeholder="Enter Course Name" required></input>
                </div>

                {/* <div className="regist-col">
                  <label className="regist-label">College ID</label>
                  <input type="file" className="regist-input"></input>
                </div> */}

              </div> : null}

              <div className="regist-col">
                <div className="regist-row">
                  <input type="checkbox" name="register" className="radio-button" placeholder="Passwords" style={{ height: '1.01rem', marginTop: '5px' }} required></input>
                  <label className="regist-label">Agree with Terms & Conditions</label>
                </div>
                <div className="regist-col"><label className="regiter"><Link to="/terms" style={{ fontSize: "85%", textDecoration: "none" }}>Terms and Condition</Link></label> </div>

              </div>

              <button className="regist-button" type="submit" disabled={password !== cpassword ? true : false} >
                Submit
              </button>

            </form>
          </div>

        </div>

        :

        <div className="otpcontainer">
          <img src="/Images/otpclip.png" alt="otp" className="otp-img" />
          <h5 className="otp-title">Otp Verification</h5>
          <p className="yourmail">OTP sent on your Email@gmail.com</p>
          <form onSubmit={otp}>
            <div className="otp">
              <div className="otp-inputs">
                {Otp.map((data, index) => {
                  return (
                    <input
                      type="text"
                      maxLength={1}
                      name="otp"
                      key={index}
                      value={data}
                      onChange={e => handleChange(e.target, index)}
                      onKeyDown={e => e.target.select()}
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