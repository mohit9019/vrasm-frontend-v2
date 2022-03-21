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
function Home() { 
  return(<>
    <Banner /> 
    <div className="explore"><i class="fad fa-chevron-up" onClick={ScrolltoTop}></i></div>
    <div className="home-slide">
    <Searchbar />
    <Categories />

    <div className='trending'>Trending</div>
    <div className="temp">
    <div className="cards">
    {Data.map(details)} </div>
    </div>
    <div className="seemore"><Link to="/Loader" style={{textDecoration:'none',color:'rebeccapurple'}}><p>see more</p></Link></div>
    <div className='trending'> Highest Ratings</div>
    <div className="temp">
    <div className="cards">
    {Data.map(details)} </div>
    </div>
    <div className="seemore"><Link to="/categoriespage" style={{textDecoration:'none',color:'rebeccapurple'}}><p>see more</p></Link></div>

    <Footer />
    </div>
    </>);
}
export default Home;