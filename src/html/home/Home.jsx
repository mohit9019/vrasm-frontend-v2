import Banner from "./Banner"; 
import { useState, useEffect} from "react";
import Footer from "./Footer";
import Categories from "../categories/Categories";
import "../../css/home/Card.css";
import ApiCaller from "../../apiCaller.js/apiCaller";
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
  const [isLoading, setIsLoading] = useState(true);
  const [Data, setData] = useState([]);

  useEffect(() => {
    let apiCaller = new ApiCaller();
    apiCaller.postData({
      url: 'template/get',
      data:{user_id:'123456789101'} // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
    }).then(res=>{
      if(res && res.status_code == '1'){
        setData(res.data);
        setIsLoading(false);
      }
    })
  }, [Data]);
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
    {
      isLoading ? <></>: Data.map(details)
    } 
    </div>
    </div>
    <div className="seemore"><Link to="/Loader" style={{textDecoration:'none',color:'rebeccapurple'}}><p>see more <i class="fad fa-angle-right"></i></p></Link></div>
    <div className='trending'> Highest Ratings</div>
    <div className="card-scroller">
    <div className="cards">
    {
      isLoading ? <></> : Data.map(details)
    } 
    </div>
    </div>
    <div className="seemore"><Link to="/categoriespage" style={{textDecoration:'none',color:'rebeccapurple'}}><p>see more <i class="fad fa-angle-right"></i></p></Link></div>

    <Footer />
    </div>
    </>);
}
export default Home;