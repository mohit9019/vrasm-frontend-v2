import React,{useState} from "react";
import "../../css/home/Card.css";
import { Link } from "react-router-dom";
// import {cart} from "./Data";
import Data from "./Data";
const Card=(props)=>{
  // const [cartItems, setcartItems] = useState(0);
  return(  
    <>
    <div className="card-cont">
      <div className="image_div">{/*<div className="save" ><i class="fas fa-heart"></i></div>*/}<img src={props.img} className="img" alt="IMAGE"/></div>
      <div className="content"> 
        <h4>{props.title}</h4>
        <span className="disc">{props.desc}</span>
        {/* <div className="review"> */}
        <span className="stars">{props.review}</span>
        {/* </div>                     */}
        <div className="about"><span className="sale">Sale: {props.sale}</span><span className="price">{props.price}</span></div>
        <div className="icon">
        <Link className="previewicon" to="Preview/Overview"  style={{textDecoration:"none", color:"darkgray"}} >
        <button className="previewbtn">
        <i class="fas fa-eye"></i><span className="topreview">Preview</span>
        </button>
        </Link>
        <Link className="pre" to="#" style={{textDecoration:"none", color:"darkgray"}}>
        <button className="cartbtn">
        <i class="fas fa-shopping-cart" onClick={()=>console.log(Data[1][7])}></i><span className="addtocart">Add to cart</span>
        </button>
        </Link>
        </div>   
      </div>
    </div>
  </>);
  }
  export default Card;