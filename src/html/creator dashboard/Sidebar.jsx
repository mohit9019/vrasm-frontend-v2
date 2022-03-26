import "../../css/buyer dashboard/Buyerdash.css";
import {Link} from "react-router-dom";
function Sidebar(){
    return(
        <>
               <div className="dash-side-bar" >
                    <div className="dash-profile"><center><img className="pic" src="/Images/profile.jpg" alt="image" />
                    <p className="dash-username">Tony Stark</p></center></div>
                    <div className="mainbar"></div>
                    <div className="sidebar-pages">
                    <div className="sidebar-page-cont">
                    <Link to="Personalinfo" style={{textDecoration:"none"}}><div className="sidebar-options"><span>Creators Information</span></div></Link>
                    <Link to="/Creatordash/Uploadtemp/Templatedetails" style={{textDecoration:"none"}}><div className="sidebar-options"><span>Upload Templates</span></div></Link>
                    <Link to="/Creatordash/Analysis" style={{textDecoration:"none"}}><div className="sidebar-options"><span>Analysis</span></div></Link>
                    <Link to="/Creatordash/Changepass" style={{textDecoration:"none"}}><div className="sidebar-options"><span>Change    Password</span></div></Link>
                    </div>
                    </div> 
                </div> 
        </>
    );
}
export default Sidebar;