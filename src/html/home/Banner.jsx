import "../../css/home/Banner.css";
// import Navba from "./Navba";
import {Link } from 'react-router-dom';
function Banner(){
    return(
        <>  
        <div className="banner">
            <div className="cover"></div>
            <img src="/Images/clip.jpg" className="clip"></img>
            <div className="ban-text">
                <h1 className="ban-title">Vrasm Templates</h1>
                <p>Designers are meant to be loved, not to be understood.</p>
                <Link to="/registration"><button><div className="typing"><p>&lt; Be a Creator /&gt;</p> </div></button></Link>
            </div>   
        </div>
        </>
    );
}
export default Banner;