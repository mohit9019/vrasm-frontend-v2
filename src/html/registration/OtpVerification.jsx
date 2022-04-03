import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../../css/registration/Registration.css";
import ApiCaller from "../../apiCaller.js/apiCaller";
export default function OtpVerification() {

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
  // const enteredOtp=1234;
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

  //for otp verified toaster
    // const otpVerified = () =>{ toast(<><i class="fas fa-check-circle" id="right-icon"></i><text className="toaster-text"> Otp Matched</text></>);}
    // const wrongOtp=()=>{toast (<><i class="fas fa-times-circle" id="wrong-icon"></i><text className="toaster-text"> Otp Doesn't Matched</text></>)}

  return (
   <>
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
   </>
    );
}
