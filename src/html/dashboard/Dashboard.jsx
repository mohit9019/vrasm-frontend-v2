import "../../css/buyer dashboard/Buyerdash.css";
import React from "react";
import { Routes, Route, } from 'react-router-dom';
import { useSelector } from "react-redux";
import Wallet from "../buyer dashboard/Wallet";
import Uploadtemp from "../creator dashboard/Uploadtemp";
import Analysis from "../creator dashboard/Analysis";
import PersonalInfo from "./PersonalInfo";
import EditProfile from "./EditProfile";
import Sidebar from "./Sidebar";
import Changepass from "./ChangePass";
import MyOrder from "./MyOrder";

function Dashboard() {
    const userLogin = useSelector((state) => state.loginReducer);
    const { userInfo } = userLogin;
    return (
        <>
            <Sidebar />
            <div className="buyer-dashboard">
                <Routes>
                    <Route path="Personalinfo" element={<PersonalInfo />} />
                    <Route path="Editprofile" element={<EditProfile />} />
                    <Route path="Myorder" element={<MyOrder />} />
                    <Route path="Changepass" element={<Changepass />} />
                    {userInfo?.is_creator === 0 ? (
                        <>
                            <Route path="Wallet" element={<Wallet />} />
                        </>
                    ) : (
                        <>
                            <Route exact path="Analysis" element={<Analysis />} />
                            <Route exact path="Uploadtemp/*" element={<Uploadtemp />} />
                        </>
                    )}
                </Routes>
            </div>
        </>
    );
}

export default Dashboard;