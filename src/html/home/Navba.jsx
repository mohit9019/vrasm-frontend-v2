import "../../css/home/Navba.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ApiCaller from "../../apiCaller.js/apiCaller";
import {FaRegHeart} from 'react-icons/fa';
function Navba() {
  const is_cart=0;
  const is_creator=0;

  function logout(){
    localStorage.clear();
    window.location.reload();
  }
  const [togglenav, setTogglenav]=useState(0); 
  const NavActive =(index) =>{
    setTogglenav(index); 
  }
  function toggleDropdown(value){
    return !value;
  }
    const [show, setShow] = useState(false);
  const [is_verified,setIs_verified]=useState(1);
    return (
      <>
        <div className="top">
          <div className="logo-cont"> 
            <Link to="/">
              <p className="logo" onClick={()=>NavActive(0)}><span className="v">V</span>RASM</p>
              </Link>
          </div>
          <div className="top-cont">
          {/* <Link to="/Creatordash/Personalinfo" className="top-icon" style={{ textDecoration: "none" }}><span className="reg-but" onClick={()=>NavActive(6)} id={togglenav===6?"nav-active":null}>
            Creator</span>
          </Link>
          <Link to="/Buyerdash/Personalinfo" className="top-icon" style={{ textDecoration: "none" }}><span className="reg-but" onClick={()=>NavActive(5)} id={togglenav===5?"nav-active":null} >
            Buyer</span>
          </Link> */}
            
            <Link to="/login" className="top-icon" style={{ textDecoration: "none" }}><span className="reg-but" onClick={()=>NavActive(5)} id={togglenav===5?"nav-active":null}>
              Login</span> 
            </Link>
            <Link to="/Registration" className="top-icon" style={{ textDecoration: "none" }}><span className="reg-but" onClick={()=>NavActive(4)} id={togglenav===4?"nav-active":null}>
              Register</span> 
            </Link>
            <Link to="/Cart" className="top-icon">
              <i class="far fa-shopping-cart" onClick={()=>NavActive(3)} id={togglenav===3?"nav-active":null}>{is_cart==0?null:<span className="cart-strength">{is_cart}</span>}</i>
            </Link>
            <Link to="/Like" className="top-icon">
              <i class="far fa-heart" onClick={()=>NavActive(2)} id={togglenav===2?"nav-active":null}></i>
            </Link>

            { 
              is_verified==0?
                <Link to="/Login" className="top-icon" >
                  <i class="far fa-user-alt" onClick={()=>NavActive(1)} id={togglenav===1?"nav-active":null}></i>
                </Link>
                :
                <div className="top-icon" onClick={() => setShow(toggleDropdown)}><div className="navbar-profile" for="toggle"><img src="/Images/profile.jpg" alt="profile" /></div>

                <i id="down-arrow" class="far fa-caret-down"></i>
                  {show?
                    <div className="dropdown-content">
                  <ul className="dropdown-list">
                    <Link to={ApiCaller.checkCreator?"/creatordash/Personalinfo":"/Buyerdash/Personalinfo"} style={{textDecoration:"none",color:"rebeccapurple"}}><li>Dashboard</li></Link>
                    <li onClick={()=>logout()}>Log-Out</li>
                  </ul> 
                </div> :null} 
                </div>
            } 
          </div>
        </div>
      </>
    );

}
export default Navba;