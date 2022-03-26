// import "../../css/buyer dashboard/Buyerdash.css";
import {Link} from "react-router-dom";
function Sidebar(){ 
    return(<>
    <div className="dash-side-bar" >
                    <div className="dash-profile"><center><img className="pic" src="/Images/profile.jpg" alt="image" />
                    <p className="dash-username">Tony Stark</p></center></div>
                    <div className="mainbar"></div>
                    <div className="sidebar-pages">
                    <div className="sidebar-page-cont">
                    <Link to="Personalinfo" style={{textDecoration:"none"}}><div className="sidebar-options"><span>Buyers Information</span></div></Link>
                    <Link to="/Buyerdash/Myorder" style={{textDecoration:"none"}}><div className="sidebar-options"><span>My Orders</span></div></Link>
                    <Link to="/Buyerdash/Changepass" style={{textDecoration:"none"}}><div className="sidebar-options"><span>Change Password</span></div></Link>
                    </div>
                    </div> 
                </div> 
                </>
    );
}
export default Sidebar;