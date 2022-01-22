import "../../css/home/Navba.css";
import { Link } from "react-router-dom";
function Navba() {
    return (
      <>
        <div className="top">
          <div className="logo-cont">
            <Link to="/">
              {/* <img src="/Images/black.png" className="logo" /> */}
              <p className="logo"><span className="v">V</span>RASM</p>
              </Link>
          </div>
          <div className="top-cont">
          <Link to="/Creatordash/Personalinfo" className="top-icon" style={{ textDecoration: "none" }}><p className="reg-but" >Creator</p></Link>
          <Link to="/Buyerdash/Personalinfo" className="top-icon" style={{ textDecoration: "none" }}><p className="reg-but" >Buyer</p></Link>
            <Link to="/Registration" className="top-icon" style={{ textDecoration: "none" }}><p className="reg-but" >Register</p></Link>
            <Link to="/Cart" className="top-icon"><i class="fas fa-shopping-cart"></i></Link>
            <Link to="/Like" className="top-icon"><i class="fas fa-bookmark"></i></Link>
            <Link to="/Login" className="top-icon"><i class="fas fa-user"></i></Link>
          </div>
        </div>
      </>
    );

}
export default Navba;