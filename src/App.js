import React, { useEffect } from "react";
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
import OtpVerification from "./html/registration/OtpVerification";
import Categoriespage from "./html/categories/Categoriespage";
import { ToastContainer, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./html/other/Loader";
import Payment from "./html/preview/Payment";
import Terms from "./html/other/terms";
import { useDispatch, useSelector } from "react-redux";
import { getTemplate } from "./redux/actions/templateAction";
import { getCartItems } from "./redux/actions/cartAction";
import { getLikeItems } from "./redux/actions/likeAction";
import Dashboard from "./html/dashboard/Dashboard";
function App() {
  const userLogin = useSelector((state) => state.loginReducer);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTemplate());
    if (userInfo) {
      dispatch(getCartItems());
      dispatch(getLikeItems());
    }
  }, [dispatch, userInfo]);

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
      <Route exact path="/Like" element={userInfo ? <Like /> : <Login />} />
      <Route exact path="/Registration" element={<Registration />} />
      <Route exact path="/Cart" element={userInfo ? <Cart /> : <Login />} />
      <Route exact path="/Dashboard/*" element={userInfo ? <Dashboard /> : <Login />} />
      <Route exact path="/preview/:id" element={<Preview />} />
      <Route exact path="/categoriespage/*" element={<Categoriespage />} />
      <Route exact path="/OtpVerification/*" element={<OtpVerification />} />
      <Route exact path="/Loader" element={<Loader />} />
      <Route exact path="/Payment" element={userInfo ? <Payment /> : <Login />} />
      <Route exact path="/terms" element={<Terms />} />
    </Routes>
  </>);
}

export default App;