import "../../css/preview/Preview.css";
import Overview from "./Overview";
import Features from "./Features";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Routes, Route, } from 'react-router-dom';
import Preview from "./Preview";
import Footer from "../home/Footer";
function Details() {
    return (
        <>
            {/* <center><div className="temp-detail">
                <div className="detail">
                    <div className="nest">
                        <h2 className="name">Template Name</h2>
                        <div className="buton">
                            <Link to="Overview"><button className="bt">Overview</button></Link>
                            <Link to="Features"><button className="bt">Details</button></Link></div>
                    </div> */}
                    <Routes>
                        <Route>
                            <Route path="Overview" element={<Overview />} />    
                            <Route path="Features" element={<Features />} />
                        </Route>
                    </Routes>
                    {/* <center><button className="download">Buy this Template</button></center>
                </div>

            </div></center>
            <Footer /> */}
        
        </>
    );
}
export default Details;