import React, { Component, useState } from "react";
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
import Creatordash from "./html/creator dashboard/Creatordash";
import OtpVerification from "./html/registration/OtpVerification";
import Categoriespage from "./html/categories/Categoriespage";
import { ToastContainer ,toast, Flip, Zoom, Slide} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./html/other/Loader";
import Payment from "./html/preview/Payment";
function App() {

  const [templates, setTempaltes] = useState([]);
  const [selectedTemlate, setSelectedTemplate] = useState({});
  return (<>
{/* <Loader /> */}
    <Navba />
    <ToastContainer
      theme="dark"
      position="top-center"
      autoClose={1000}
      hideProgressBar={true}
      newestOnTop
      closeOnClick
      rtl={false}
      transition={Slide}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/Like" element={<Like />} />
      <Route exact path="/Registration" element={<Registration />} />
      <Route exact path="/Cart" element={<Cart />} />
      <Route exact path="/Buyerdash/*" element={<Buyerdash />} />
      <Route exact path="/creatordash/*" element={<Creatordash />} />
      <Route exact path="/preview/:id" element={<Preview />} /> 
      <Route exact path="/categoriespage/*" element={<Categoriespage />} /> 
      <Route exact path="/OtpVerification/*" element={<OtpVerification />} />
      <Route exact path="/Loader" element={<Loader />} />
      <Route exact path="/Payment" element={<Payment />} />
    </Routes>
  </>);
}

export default App;
