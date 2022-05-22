import React from "react";
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
import { ToastContainer, Slide} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./html/other/Loader";
import Payment from "./html/preview/Payment";
function App() {
  function checkLogin(){ 
    let userData = localStorage.getItem('userData');
    if(userData && userData.length > 0){
      return true;
    }
    else{
      return false;
    }
  }

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
      <Route exact path="/Like" element={checkLogin() ? <Like />:<Login />} />
      <Route exact path="/Registration" element={<Registration />} />
      <Route exact path="/Cart" element={checkLogin() ? <Cart />:<Login />} />
      <Route exact path="/Buyerdash/*" element={checkLogin() ? <Buyerdash /> : <Login />} />
      <Route exact path="/creatordash/*" element={checkLogin() ? <Creatordash /> : <Login />} />
      <Route exact path="/preview/:id" element={<Preview />} /> 
      <Route exact path="/categoriespage/*" element={<Categoriespage />} /> 
      <Route exact path="/OtpVerification/*" element={<OtpVerification />} />
      <Route exact path="/Loader" element={<Loader />} />
      <Route exact path="/Payment" element={checkLogin() ? <Payment /> : <Login />} />
    </Routes>
  </>);
}

export default App;