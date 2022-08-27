import React, { useState } from "react";
import "../../css/home/Card.css";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import ApiCaller from "../../apiCaller.js/apiCaller";
import { toast } from "react-toastify";
import RatedStars from "../preview/RatedStars";
// import {cart} from "./Data";
const Card = (props) => {
  function addToCart(template_id) {
    let apiCaller = new ApiCaller();
    apiCaller.postData({
      url: 'template/add_to_cart',
      data: {
        template_id,
        action: 'add'
      }
    }).then(data => {
      if (data && data.status_code === '1') {
        toast.success('template added to cart');
      }
    })
  }
  function addToLike(template_id) {
    let apiCaller = new ApiCaller();
    apiCaller.postData({
      url: 'template/like',
      data: {
        template_id,
        action: 'like'
      }
    }).then(data => {
      if (data && data.status_code === '1') {
      }
    })
  }
  const [liked, setLiked] = useState(false);
  function toggleSave(value) {
    return !value;
  }
  return (
    <>
      <div className="card-cont">
        <div className="image_div">
          <div className="save" style={liked ? { display: "block" } : null} ><div className="save-round" style={liked ? { color: "rgb(153, 11, 248)" } : { color: "rgb(213, 181, 238)" }}><AiFillHeart className="save-icon" onClick={() => { addToLike(props._id); setLiked(toggleSave) }} /></div></div>
          <img src={props.img} className="img" alt="template" /></div>
        <div className="card-content">
          <span className="card-name">{props.title}</span>
          <span className="disc">{props.desc == null ? ". . . . . . . . . . . . . . . . . ." : props.desc}</span>
          <span className="card-stars"><RatedStars rating={props.rating} /></span>
          <div className="card-about">
            {/* <span className="card-sale">Sale: {props.sale==null?0:props.sale}</span> */}
            <span className="card-price">{props.price} <i class="fal fa-rupee-sign"></i></span></div>
          <div className="card-btns">
            <Link to={{ pathname: `/Preview/id?${props._id}` }} style={{ textDecoration: "none", color: "darkgray" }} >
              <button className="preview-btn"><i class="fas fa-eye"></i><span className="card-btn-title">Preview</span></button>
            </Link>
            <Link to="#" style={{ textDecoration: "none", color: "darkgray" }}>
              <button className="cart-btn" onClick={() => addToCart(props._id)}><i class="fas fa-shopping-cart"></i><span className="card-btn-title">Add to Cart</span></button>
            </Link>
          </div>
        </div>
      </div>
    </>);
}
export default Card;