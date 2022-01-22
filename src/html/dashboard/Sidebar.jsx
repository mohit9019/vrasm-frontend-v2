import "../../css/buyer dashboard/Buyerdash.css";
import {Link} from "react-router-dom";
function Sidebar(){
    return(<>
    <div className="side-bar" >
                    <div className="profile"><center><img className="pic" src="/Images/t2.png" alt="image" />
                    <p>Tony Stark</p></center></div>
                    <div className="bar"></div>
                    <div className="info">
                    <Link to="Personalinfo" style={{textDecoration:"none"}}><p>Buyers Information</p><div className="bar"></div></Link>
                    {/* <Link to="/Editprofile" style={{textDecoration:"none"}}><p>Edit Profile</p><div className="bar"></div></Link> */}
                    <Link to="/Buyerdash/Myorder" style={{textDecoration:"none"}}><p>My Orders</p><div className="bar"></div></Link>
                    <Link to="/Buyerdash/Changepass" style={{textDecoration:"none"}}><p>Change Password</p><div className="bar"></div></Link>
                    {/* <Link to="/Buyerdash/Wallet" style={{textDecoration:"none"}}><p>Wallet</p><div className="bar"></div></Link> */}
                    </div> 
                </div>
                </>
    );
}
export default Sidebar;