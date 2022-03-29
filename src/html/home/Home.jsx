import Banner from "./Banner";  
import Data from "./Data";
import Footer from "./Footer";
import Categories from "../categories/Categories";
import "../../css/home/Card.css";
import Categoriespage from "../categories/Categoriespage";
import details from "./Detailsmap";
import Searchbar from "./Searchbar";
import {Link } from 'react-router-dom';

function ScrolltoTop(){
  const c=540;
  window.scrollTo({
    top: c, 
    behavior: 'smooth',
  });
}

const is_creator=1;

function Home() { 
  return(<>
    <Banner /> 
    <div className="explore" onClick={ScrolltoTop}><div className="explore-icon"><i class="fad fa-chevron-up"></i></div><span className="explore-text">Explore</span></div> 
    {is_creator==1?<><Link to="/Creatordash/Uploadtemp/Templatedetails"><div className="upload-wraper"><div className="upload-btn"><div className="upload-icon"><i class="fas fa-cloud-upload"></i></div><span className="upload-text"> Upload Template </span></div></div></Link></>:null}
    <div className="home-slide">
    <Searchbar />
    <Categories /> 

    <div className='trending'>Trending</div>
    <div className="card-scroller">
    <div className="cards">
    {Data.map(details)} </div>
    </div>
    <div className="seemore"><Link to="/Loader" style={{textDecoration:'none',color:'rebeccapurple'}}><p>see more <i class="fad fa-angle-right"></i></p></Link></div>
    <div className='trending'> Highest Ratings</div>
    <div className="card-scroller">
    <div className="cards">
    {Data.map(details)} </div>
    </div>
    <div className="seemore"><Link to="/categoriespage" style={{textDecoration:'none',color:'rebeccapurple'}}><p>see more <i class="fad fa-angle-right"></i></p></Link></div>

    <Footer />
    </div>
    </>);
}
export default Home;