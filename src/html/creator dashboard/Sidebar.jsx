import "../../css/buyer dashboard/Buyerdash.css";
import {Link} from "react-router-dom";
import { useState } from "react";
function Sidebar(){
    const [toggledashC, setToggledashC]=useState(1);
    const ActiveTabC =(index) =>{
        setToggledashC(index);  
    }
    return(
        <>
               <div className="dash-side-bar" >
                    <div className="dash-profile"><center><img className="pic" src="/Images/profile.jpg" alt="image" />
                    <p className="dash-username">Tony Stark</p></center></div>
                    <div className="mainbar"></div>
                    <div className="sidebar-pages">
                    <div className="sidebar-page-cont">
                    <Link to="Personalinfo" style={{textDecoration:"none"}}><div className="sidebar-options" onClick={()=>ActiveTabC(1)} id={toggledashC===1?"active-tab":null}>
                        <span>Creators Information</span></div>
                    </Link>
                    <Link to="/Creatordash/Uploadtemp/Templatedetails" style={{textDecoration:"none"}}><div className="sidebar-options" onClick={()=>ActiveTabC(2)} id={toggledashC===2?"active-tab":null}>
                        <span>Upload Templates</span></div>
                    </Link>
                    <Link to="/Creatordash/Analysis" style={{textDecoration:"none"}}><div className="sidebar-options" onClick={()=>ActiveTabC(3)} id={toggledashC===3?"active-tab":null}>
                        <span>Analysis</span></div>
                    </Link>
                    <Link to="/Creatordash/Changepass" style={{textDecoration:"none"}}><div className="sidebar-options" onClick={()=>ActiveTabC(4)} id={toggledashC===4?"active-tab":null}>
                        <span>Change Password</span></div>
                    </Link>
                    </div>
                    </div> 
                </div> 
        </>
    );
}
export default Sidebar;