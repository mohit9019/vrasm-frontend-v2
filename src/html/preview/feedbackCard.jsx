import RatedStars from "./RatedStars";
function FeedbackCard(props) {
    return(
    <div className="review-card">
        <div className="userinfo">
            <div className="user-dp"><img src="/Images/profile.jpg" /></div><span className="user-name">{props?.buyer_id?.name}</span>
        </div>
        {/* aa RatedStars ma ratings ni velue as a props pass karvanai */}
        <div className="feedback-stars"><RatedStars rating={props.rating}/></div> 
        <div className="qoute-icon"><i class="fad fa-quote-left"></i></div>
        <div className="feedback">
            <p>{props.message}</p>
        </div>
    </div>
    );
}
export default FeedbackCard;