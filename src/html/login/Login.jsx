import { toast } from "react-toastify";
import ApiCaller from "../../apiCaller.js/apiCaller";
import {Link } from 'react-router-dom';
import "../../css/login/Login.css";
function Login(){
  function login(e) {
    e.preventDefault(); 
    console.log("clicked");
    let body = {
      email: e.target.email.value,
      password: e.target.password.value,
    }
    let apiCaller = new ApiCaller();
    apiCaller.postData({
      url:'user/login',
      data:body
    }).then(data=>{
      if(data && data.status_code=='1')
        toast.success('Log-in succesfully',{autoClose:2000});
      else
        toast.error(data.status_message,{autoClose:2000});
      console.log(data);
    })
    .catch(err=>{ 
      console.log(err);
    })
  }
    return(
        <>
        <div className="background">
<div className="log">
        <form onSubmit={login}>
        <div className="regist-col">
        <label className="regist-label">Email address</label>
        <input type="email" className="regist-input" placeholder="Enter email" name="email" required></input>
        <label style={{fontSize:'13px',color:'rgb(120, 120, 121)',marginTop:'3px'}} class="text-muted">We'll never share your email with anyone else.</label>
        </div>

        <div className="regist-col">
        <label className="regist-label">Password</label>
        <input type="password" className="regist-input" placeholder="Enter Password" minLength={3} maxLength={10} name="password" required></input>
        </div>
        
        <div className="regist-col"><label className="regiter"><Link to="/registration" style={{fontSize:"85%",textDecoration:"none"}}>New On This Site ?</Link></label> </div> 

        <button className="regist-button" type="submit">
            Submit
          </button>

        {/* <div className="regist-row"><div className="hr-bar"></div><span>or</span><div className="hr-bar"></div></div>
          <div className="regist-col">
        <button className="signin-social" style={{marginTop:"4%"}}><div className="col"><i class="fab fa-google"></i><span> sign in with Google</span></div></button>
        <button className="signin-social"><div className="col"><i class="fab fa-facebook-f"></i><span>sign in with facebook</span></div></button>
        </div> */}
        </form>
      </div>
      </div>
        </>
    );
}
export default Login;