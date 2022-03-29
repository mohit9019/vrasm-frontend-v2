import React,{useState} from "react";
import "../../css/home/Card.css"; 
import { Link } from "react-router-dom";
import {AiFillHeart} from "react-icons/ai";
// import {cart} from "./Data";
import Data from "./Data";
const Card=(props)=>{
  return(  
    <> 
    <div className="card-cont">
      <div className="image_div">
      <div className="save" ><div className="save-round"><AiFillHeart className="save-icon" /></div></div>
      <img src={props.img} className="img" alt="IMAGE"/></div>
      <div className="card-content"> 
        <span className="card-name">{props.title}</span>
        <span className="disc">{props.desc}</span>
        <span className="card-stars">{props.review}</span>
        <div className="card-about"><span className="card-sale">Sale: {props.sale}</span><span className="card-price">{props.price}</span></div>
        <div className="card-btns">
        <Link  to="/Preview/"  style={{textDecoration:"none", color:"darkgray"}} >
          <button className="preview-btn"><i class="fad fa-eye"></i><span className="card-btn-title">Preview</span></button>
        </Link>
        <Link to="#" style={{textDecoration:"none", color:"darkgray"}}>
          <button className="cart-btn"><i class="fad fa-shopping-cart"></i><span className="card-btn-title">Add to Cart</span></button>
        </Link>
        </div>   
      </div>
    </div>
  </>);
  }
  export default Card;