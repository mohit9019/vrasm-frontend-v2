import "../../css/home/Navba.css";
import { Link } from "react-router-dom";
import { useState } from "react";
function Navba() {
  const [togglenav, setTogglenav]=useState(0);
  const NavActive =(index) =>{
    setTogglenav(index); 
  }
    return (
      <>
        <div className="top">
          <div className="logo-cont"> 
            <Link to="/">
              {/* <img src="/Images/black.png" className="logo" /> */}
              <p className="logo" onClick={()=>NavActive(0)}><span className="v">V</span>RASM</p>
              </Link>
          </div>
          <div className="top-cont">
          <Link to="/Creatordash/Personalinfo" className="top-icon" style={{ textDecoration: "none" }}><span className="reg-but" onClick={()=>NavActive(6)} id={togglenav===6?"nav-active":null}>
            Creator</span>
          </Link>
          <Link to="/Buyerdash/Personalinfo" className="top-icon" style={{ textDecoration: "none" }}><span className="reg-but" onClick={()=>NavActive(5)} id={togglenav===5?"nav-active":null} >
            Buyer</span>
          </Link>
            <Link to="/Registration" className="top-icon" style={{ textDecoration: "none" }}><span className="reg-but" onClick={()=>NavActive(4)} id={togglenav===4?"nav-active":null}>
              Register</span>
            </Link>
            <Link to="/Cart" className="top-icon">
              <i class="fas fa-shopping-cart" onClick={()=>NavActive(3)} id={togglenav===3?"nav-active":null}></i>
            </Link>
            <Link to="/Like" className="top-icon">
              <i class="fas fa-bookmark" onClick={()=>NavActive(2)} id={togglenav===2?"nav-active":null}></i>
            </Link>
            <Link to="/Login" className="top-icon" >
              <i class="fas fa-user" onClick={()=>NavActive(1)} id={togglenav===1?"nav-active":null}></i>
            </Link>
          </div>
        </div>
      </>
    );

}
export default Navba;