import React, { useEffect, useState } from "react";
import "../../css/home/Card.css";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import ApiCaller from "../../apiCaller.js/apiCaller";
import { toast } from "react-toastify";
import RatedStars from "../preview/RatedStars";
import { addToCart } from "../../redux/actions/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { addToLike, deleteFromLike } from "../../redux/actions/likeAction";
// import {cart} from "./Data";
const Card = (props) => {
  const userLogin = useSelector((state) => state.loginReducer);
  const { userInfo } = userLogin;
  const templates = useSelector(state => state.getTemplateReducer)
  const { state } = templates;
  const dispatch = useDispatch();
  const handleAddToCart = (template_id) => {
    dispatch(addToCart(template_id));
  }

  const [liked, setLiked] = useState();

  function handleAddToLike(template_id) {
    if (liked) {
      dispatch(deleteFromLike(template_id))
      state?.map((x) => x._id === template_id ? x.is_liked = false : x.is_liked = x.is_liked);
      setLiked(false);
    } else {
      dispatch(addToLike(template_id))
      state?.map((x) => x._id === template_id ? x.is_liked = true : x.is_liked = x.is_liked);
      setLiked(true);
    }
  }

  useEffect(() => {
    setLiked(props.isLiked);
  }, [])


  return (
    <>
      <div className="card-cont">
        <div className="image_div">
          <div className="save" style={liked ? { display: "block" } : null} ><div className="save-round" style={liked ? { color: "rgb(153, 11, 248)" } : { color: "rgb(213, 181, 238)" }}><AiFillHeart className="save-icon" onClick={() => { handleAddToLike(props._id) }} /></div></div>
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
              <button className="cart-btn" onClick={() => handleAddToCart(props._id)}><i class="fas fa-shopping-cart"></i><span className="card-btn-title">Add to Cart</span></button>
            </Link>
          </div>
        </div>
      </div>
    </>);
}
export default Card;