import Card from "./Card";
import Banner from "./Banner";  
import Data from "./Data";
import Footer from "./Footer";
import Categories from "../categories/Categories";
import "../../css/home/Card.css";
import Categoriespage from "../categories/Categoriespage";
import details from "./Detailsmap";
import Searchbar from "./Searchbar";
function Home() {
  return(<>
    <Banner /> 
    <div className="home-slide">
    <Searchbar />
    <Categories />

    <div className='trending'> Trending</div>
    <div className="temp">
    <div className="cards">
    {Data.map(details)} </div>
    </div>
    <div className="seemore"><p>see more...&gt;</p></div>

    <div className='trending'> Highest Ratings</div>
    <div className="temp">
    <div className="cards">
    {Data.map(details)} </div>
    </div>
    <div className="seemore"><p>see more...&gt;</p></div>

    <Footer />
    </div>
    {/* <Categoriespage /> */}
    </>);
}
export default Home;