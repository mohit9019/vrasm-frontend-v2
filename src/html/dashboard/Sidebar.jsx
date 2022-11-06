import "../../css/buyer dashboard/Buyerdash.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ApiCaller from "../../apiCaller.js/apiCaller";
import { useSelector } from "react-redux";
function Sidebar() {
    const userLogin = useSelector((state) => state.loginReducer);
    const { userInfo } = userLogin;
    const [toggledashB, setToggledashB] = useState(1);
    const ActiveTabB = (index) => {
        setToggledashB(index);
    }
    return (<>
        <div className="dash-side-bar" >
            <div className="dash-profile"><center><img className="pic" src="/Images/vprof.jpg" alt="test" />
                <p className="dash-username">{userInfo?.name}</p></center></div>
            <div className="mainbar"></div>
            <div className="sidebar-pages">
                <div className="sidebar-page-cont">
                    <Link to="Personalinfo" style={{ textDecoration: "none" }}><div className="sidebar-options" onClick={() => ActiveTabB(1)} id={toggledashB === 1 ? "active-tab" : null}>
                        <span><i class="far fa-user-tag"></i> {userInfo?.is_creator === 0 ? "Buyers" : "Creators"} Information</span></div>
                    </Link>
                    {userInfo?.is_creator !== 0 ? (
                        <>
                            <Link to="/Dashboard/Uploadtemp/Templatedetails" style={{ textDecoration: "none" }}><div className="sidebar-options" onClick={() => ActiveTabB(2)} id={toggledashB === 2 ? "active-tab" : null}>
                                <span><i class="far fa-cloud-upload"></i> Upload Templates</span></div>
                            </Link>
                            <Link to="/Dashboard/Analysis" style={{ textDecoration: "none" }}><div className="sidebar-options" onClick={() => ActiveTabB(3)} id={toggledashB === 3 ? "active-tab" : null}>
                                <span><i class="far fa-chart-bar"></i> Analysis</span></div>
                            </Link>
                        </>
                    ) : null}
                    <Link to="/Dashboard/Myorder" style={{ textDecoration: "none" }}><div className="sidebar-options" onClick={() => ActiveTabB(4)} id={toggledashB === 4 ? "active-tab" : null}>
                        <span><i class="far fa-bags-shopping"></i> My Orders</span></div>
                    </Link>
                    <Link to="/Dashboard/Changepass" style={{ textDecoration: "none" }}><div className="sidebar-options" onClick={() => ActiveTabB(5)} id={toggledashB === 5 ? "active-tab" : null}>
                        <span><i class="far fa-key"></i> Change Password</span></div>
                    </Link>
                </div>
            </div>
        </div>
    </>
    );
}
export default Sidebar;