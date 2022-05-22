import "../../css/buyer dashboard/Buyerdash.css";
import Personalinfo from "./Personalinfo";
import Editprofile from "./Editprofile"; 
import Changepass from "../dashboard/Changepass";
import React from "react";
import {Routes, Route,} from 'react-router-dom';
import Analysis from "./Analysis";
import Sidebar from "./Sidebar";
import Uploadtemp from "./Uploadtemp";
import Myorder from "../dashboard/Myorder";
function Creatordash(){
    return(
        <>
        <Sidebar />
        <div className="buyer-dashboard">
                <Routes>
                <Route exact path="Personalinfo" element={<Personalinfo />} />
                <Route exact path="Editprofile" element={<Editprofile />} />
                <Route exact path="Analysis" element={<Analysis />} />
                <Route exact path="Uploadtemp/*" element={<Uploadtemp />} />
                <Route exact path="Changepass" element={<Changepass />} />
                {/* <Route exact path="Wallet" element={<Wallet />} /> */}
                <Route exact path="Myorder" element={<Myorder />} />
                </Routes>
            </div>
        </>
    );
}
export default Creatordash;