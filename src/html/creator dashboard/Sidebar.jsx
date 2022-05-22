import "../../css/buyer dashboard/Buyerdash.css";
import {Link} from "react-router-dom";
import { useState } from "react";
import ApiCaller from "../../apiCaller.js/apiCaller";
function Sidebar(){
    const [toggledashC, setToggledashC]=useState(1);
    const ActiveTabC =(index) =>{
        setToggledashC(index);  
    }
    return(
        <>
               <div className="dash-side-bar" >
                    <div className="dash-profile"><center><img className="pic" src="/Images/vprof.jpg" alt="proof" />
                    <p className="dash-username">{ApiCaller.userData.name}</p></center></div>
                    <div className="mainbar"></div>
                    <div className="sidebar-pages">
                    <div className="sidebar-page-cont">
                    <Link to="Personalinfo" style={{textDecoration:"none"}}><div className="sidebar-options" onClick={()=>ActiveTabC(1)} id={toggledashC===1?"active-tab":null}>
                        <span><i class="far fa-user-tag"></i> Creators Information</span></div>
                    </Link>
                    <Link to="/Creatordash/Uploadtemp/Templatedetails" style={{textDecoration:"none"}}><div className="sidebar-options" onClick={()=>ActiveTabC(2)} id={toggledashC===2?"active-tab":null}>
                        <span><i class="far fa-cloud-upload"></i> Upload Templates</span></div>
                    </Link>
                    <Link to="/Creatordash/Analysis" style={{textDecoration:"none"}}><div className="sidebar-options" onClick={()=>ActiveTabC(3)} id={toggledashC===3?"active-tab":null}>
                        <span><i class="far fa-chart-bar"></i> Analysis</span></div>
                    </Link>
                    <Link to="/Creatordash/Myorder" style={{textDecoration:"none"}}><div className="sidebar-options" onClick={()=>ActiveTabC(5)} id={toggledashC===5?"active-tab":null}>
                        <span><i class="far fa-bags-shopping"></i> My Orders</span></div>
                    </Link>
                    <Link to="/Creatordash/Changepass" style={{textDecoration:"none"}}><div className="sidebar-options" onClick={()=>ActiveTabC(4)} id={toggledashC===4?"active-tab":null}>
                        <span><i class="far fa-key"></i> Change Password</span></div>
                    </Link>
                    </div>
                    {/* <div className="log-out"><span>Log-Out</span></div> */}
                    </div> 
                </div> 
        </>
    );
}
export default Sidebar;