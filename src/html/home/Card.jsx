import React,{useState} from "react";
import "../../css/home/Card.css"; 
import { Link } from "react-router-dom";
import {AiFillHeart} from "react-icons/ai";
import ApiCaller from "../../apiCaller.js/apiCaller";
import { toast } from "react-toastify";
// import {cart} from "./Data";
const Card=(props)=>{
  let id = '6225a181ffb0259ddab852ba';
  
  function addToCart(template_id){
    let apiCaller = new ApiCaller();
    apiCaller.postData({
        url:'template/add_to_cart',
        data:{
            template_id,
            action:'add'
        }
    }).then(data=>{
        if(data && data.status_code == '1'){
            toast.success('template added to cart');
        }
    })
  }
  return(  
    <> 
    <div className="card-cont">
      <div className="image_div">
      <div className="save" ><div className="save-round"><label for="toggle"><AiFillHeart className="save-icon" /></label></div></div>
      <img src={props.img} className="img" alt="IMAGE"/></div>
      <div className="card-content"> 
        <span className="card-name">{props.title}</span>
        <span className="disc">{props.desc}</span>
        <span className="card-stars">{props.review}</span>
        <div className="card-about"><span className="card-sale">Sale: {props.sale}</span><span className="card-price">{props.price}</span></div>
        <div className="card-btns">
        <Link  to={{pathname:`/Preview/id?${props._id}`}}  style={{textDecoration:"none", color:"darkgray"}} >
          <button className="preview-btn"><i class="fad fa-eye"></i><span className="card-btn-title">Preview</span></button>
        </Link>
        <Link to="#" style={{textDecoration:"none", color:"darkgray"}}>
          <button className="cart-btn" onClick={()=>addToCart(props._id)}><i class="fad fa-shopping-cart"></i><span className="card-btn-title">Add to Cart</span></button>
        </Link> 
        </div>   
      </div>
    </div>
  </>);
  }
  export default Card;