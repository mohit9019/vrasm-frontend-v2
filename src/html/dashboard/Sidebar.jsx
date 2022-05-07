import "../../css/buyer dashboard/Buyerdash.css";
import {Link} from "react-router-dom";
import { useState } from "react";
import ApiCaller from "../../apiCaller.js/apiCaller";
function Sidebar(){ 
    const [toggledashB, setToggledashB]=useState(1);
    const ActiveTabB =(index) =>{
        setToggledashB(index);  
    }
    return(<> 
    <div className="dash-side-bar" >
                    <div className="dash-profile"><center><img className="pic" src="/Images/profile.jpg" alt="image" />
                    <p className="dash-username">{ApiCaller.userData.name}</p></center></div>
                    <div className="mainbar"></div>
                    <div className="sidebar-pages">
                    <div className="sidebar-page-cont">
                    <Link to="Personalinfo" style={{textDecoration:"none"}}><div className="sidebar-options" onClick={()=>ActiveTabB(1)} id={toggledashB===1?"active-tab":null}>
                        <span><i class="far fa-user-tag"></i> Buyers Information</span></div>
                    </Link>
                    <Link to="/Buyerdash/Myorder" style={{textDecoration:"none"}}><div className="sidebar-options" onClick={()=>ActiveTabB(2)} id={toggledashB===2?"active-tab":null}>
                        <span><i class="far fa-bags-shopping"></i> My Orders</span></div>
                    </Link>
                    <Link to="/Buyerdash/Changepass" style={{textDecoration:"none"}}><div className="sidebar-options" onClick={()=>ActiveTabB(3)} id={toggledashB===3?"active-tab":null}>
                        <span><i class="far fa-key"></i> Change Password</span></div>
                    </Link>
                    </div>
                    </div> 
                </div> 
                </>
    );
}
export default Sidebar;