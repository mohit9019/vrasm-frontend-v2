import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
function Ratings () {
  const [rating, setRating] = useState(0);
  const [hover, setHover]=useState(null);
  return (
      <>
      <div className="feedbackform-stars">
      {[...Array(5)].map((star,i)=>{
          const ratingValue=i+1;
        return(
            <>
            <input type="radio" className="ratings-radio" name="rates" value={ratingValue}  />
            <FaStar className="stars" 
                onClick={()=>setRating(ratingValue)} 
                onMouseEnter={()=>setHover(ratingValue)}
                onMouseLeave={()=>setHover(null)}
                color={ratingValue<=(hover || rating) ? "rgb(248, 215, 31)" : "rgb(207, 206, 206)" } />
            </>
        );
      })}
      <p>you rated {rating } stars</p>
      </div>
    </>
  );
};
export default Ratings;
