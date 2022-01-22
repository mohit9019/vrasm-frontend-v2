import "../../css/home/Banner.css";
// import Categories from "../categories/Categories";
// import Navba from "./Navba";
function Banner(){
    return(
        <>
        {/* <Categories /> */}
        <div className="banner">
            <img src="/Images/clip.jpg" className="clip"></img>
            <div className="ban-text">
                <h1 className="ban-title">Vrasm Templates</h1>
                <p>Designers are meant to be loved, not to be understood.</p>
                <button>&lt; Be a Creator /&gt;</button>
            </div>
        </div>
        </>
    );
}
export default Banner;