import "../../css/buyer dashboard/Buyerdash.css";
import Personalinfo from "./Personalinfo";
import Myorder from "./Myorder";
import Editprofile from "./Editprofile";
import Changepass from "./Changepass";
import Wallet from "./Wallet";
import React from "react";
import Sidebar from "./Sidebar";
import { Routes, Route, } from 'react-router-dom';
function Buyerdash() {
    return (
        <>
            <Sidebar />
            
            <div className="buyer-dashboard">
                <Routes>
                    <Route path="Personalinfo" element={<Personalinfo />} />
                    <Route path="Editprofile" element={<Editprofile />} />
                    <Route path="Myorder" element={<Myorder />} />
                    <Route path="Changepass" element={<Changepass />} />
                    <Route path="Wallet" element={<Wallet />} />
                </Routes>
            </div>
        </>
    );
}
export default Buyerdash;