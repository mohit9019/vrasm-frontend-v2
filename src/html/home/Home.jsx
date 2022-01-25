import Card from "./Card";
import Banner from "./Banner";  
import Data from "./Data";
import Footer from "./Footer";
import Categories from "../categories/Categories";
import "../../css/home/Card.css";
import details from "./Detailsmap";
function Home() {
  return(<>
    <Banner /> 
    <div className="home-slide">
    <div className="searchbar"> 
      <div className="search-icon"><i class="fas fa-search"></i></div>
      <div className="search-input"><input type="text" /></div>
    </div>
    <Categories />
    <div className="cards">
    {Data.map(details)} </div>
    <Footer />
    </div>
    </>);
}
export default Home;