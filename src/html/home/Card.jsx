import React,{useState} from "react";
import "../../css/home/Card.css";
import { Link } from "react-router-dom";
// import {cart} from "./Data";
import Data from "./Data";
const Card=(props)=>{
  const [cartItems, setcartItems] = useState(0);
  return( 
    <>
    <div className="card-cont">
      <div className="image_div"><img src={props.img} className="img" alt="IMAGE"/></div>
      <div className="content"> 
        <h4>{props.title}</h4>
        <span className="disc">{props.desc}</span>
        <span className="stars">{props.review}</span>
        <div className="about"><span className="sale">Sale: {props.sale}</span><span className="price">{props.price}</span></div>
        <div className="icon">
        <Link className="pre" to=""  style={{textDecoration:"none", color:"darkgray"}} >
        <i class="fas fa-shopping-cart" onClick={()=>console.log(Data[1][7])}></i>
        </Link>
        <Link className="pre" to=""  style={{textDecoration:"none", color:"darkgray"}} >
        <i class="fas fa-bookmark"></i>
        </Link>
        <Link className="pre" to="Preview/Overview"  style={{textDecoration:"none", color:"darkgray"}} >
        <i class="fas fa-eye"></i>
        </Link>
        </div>   
      </div>
    </div>
  </>);
  }
  export default Card;