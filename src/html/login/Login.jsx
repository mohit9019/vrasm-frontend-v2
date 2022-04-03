import {Form, Button,} from "react-bootstrap";
import { register } from "react-scroll/modules/mixins/scroller";
import "../../css/login/Login.css";
function Login(){
    return(
        <>
        <div className="background">
<div className="log">
        
        <div className="regist-col">
        <label className="regist-label">Email address</label>
        <input type="email" className="regist-input" placeholder="Enter email"></input>
        <label style={{fontSize:'13px',color:'rgb(120, 120, 121)',marginTop:'3px'}} class="text-muted">We'll never share your email with anyone else.</label>
        </div>

        <div className="regist-col">
        <label className="regist-label">Password</label>
        <input type="password" className="regist-input" placeholder="Enter Password"></input>
        </div>
        
        <div className="regist-col">
        <div className="regist-row">
        <input type="checkbox" name="register" className="radio-button" placeholder="Passwords"  style={{height:'1.01rem',marginTop:'5px'}}></input>
        <label className="regist-label">Agree with Terms & Conditions</label>
        </div>
        </div>  

        <button className="regist-button" type="submit">
            Submit
          </button>

        {/* <div className="regist-row"><div className="hr-bar"></div><span>or</span><div className="hr-bar"></div></div>
          <div className="regist-col">
        <button className="signin-social" style={{marginTop:"4%"}}><div className="col"><i class="fab fa-google"></i><span> sign in with Google</span></div></button>
        <button className="signin-social"><div className="col"><i class="fab fa-facebook-f"></i><span>sign in with facebook</span></div></button>
        </div> */}

      </div>
      </div>
        </>
    );
}
export default Login;