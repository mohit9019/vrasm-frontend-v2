import React, { Component } from "react";
import './App.css';
import Home from "./html/home/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Preview from './html/preview/Preview';
import Registration from './html/registration/Registration';
import Cart from './html/cart/Cart';
import Login from "./html/login/Login";
import { Routes, Route, } from 'react-router-dom';
import Like from './html/cart/Like';
import Navba from "./html/home/Navba";
import Buyerdash from "./html/dashboard/Buyerdash";
import Personalinfo from "./html/dashboard/Personalinfo";
import Myorder from "./html/dashboard/Myorder";
import Changepass from "./html/dashboard/Changepass";
import Wallet from "./html/dashboard/Wallet";
import Editprofile from "./html/dashboard/Editprofile";
import Creatordash from "./html/creator dashboard/Creatordash";
import Features from "./html/preview/Features";
import Details from "./html/preview/Details";
import Overview from "./html/preview/Overview";
function App() {
  return (<>
    <Navba />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/Like" element={<Like />} />
      <Route exact path="/Registration" element={<Registration />} />
      <Route exact path="/Cart" element={<Cart />} />
      <Route exact path="/Buyerdash/*" element={<Buyerdash />} />
      <Route exact path="/creatordash/*" element={<Creatordash />} />
      <Route exact path="/preview/*" element={<Preview />} /> 
    </Routes>
  </>);
}

export default App;
