import "../../css/categories/Categories.css";
import Searchbar from '../home/Searchbar';
import ApiCaller from "../../apiCaller.js/apiCaller";
import details from "../home/Detailsmap";
import { useState, useEffect} from "react";
function Categoriespage(){

  const [Data, setData] = useState([]);
  useEffect(() => {
    let apiCaller = new ApiCaller();
    apiCaller.postData({
      url: 'template/get',
      data:{user_id:'123456789101'} // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
    }).then(res=>{
      if(res && res.status_code == '1'){
        setData(res.data);
      }
    })
  },[]);
    return(
        <> 
<div className="categories">
<input type='checkbox' id='toggle'></input>

{/* <!-- Menu --> */}
<aside className='category-sidebar'>
  <label for='toggle' className='exit'><i class="fad fa-times"></i></label>
  <h4 className='category-title'>Catagories</h4>
  <ul className="categories-list">
      <li><span className='category-name'><i class="far fa-user-alt"></i> Portfolio</span> <span className="number">30</span></li>
      <li><span className='category-name'><i class="far fa-briefcase"></i> Business</span><span className="number">25</span></li>
      <li><span className='category-name'><i class="far fa-volleyball-ball"></i> Sports</span><span className="number">3</span></li>
      <li><span className='category-name'><i class="far fa-graduation-cap"></i> Education</span><span className="number">225</span></li>
      <li><span className='category-name'><i class="far fa-building"></i> Real-Estate</span><span className="number">15</span></li>
      <li><span className='category-name'><i class="far fa-burger-soda"></i> Restaurant</span><span className="number">37</span></li>
      <li><span className='category-name'><i class="far fa-ambulance"></i> Hospital</span><span className="number">37</span></li>
      <li><span className='category-name'><i class="far fa-map-marked"></i> Travelling</span><span className="number">37</span></li>
      <li><span className='category-name'><i class="far fa-caret-circle-down"></i> Others</span><span className="number">40</span></li>
  </ul>
  <hr />
  <h4 className='category-title'>Technologies</h4>
  <ul className="tech-list">
      <li><span className='category-name'><i class="fas fa-code"></i> HTML</span> <span className="number">30</span></li>
      <li><span className='category-name'><i class="fab fa-css3-alt"></i> CSS</span> <span className="number">30</span></li>
      <li><span className='category-name'><i class="fab fa-js"></i> Javascript</span> <span className="number">30</span></li>
      <li><span className='category-name'><i class="fab fa-bootstrap"></i> Bootstrap</span> <span className="number">30</span></li>
      <li><span className='category-name'><i class="fab fa-react"></i> React Js</span> <span className="number">30</span></li>
      <li><span className='category-name'><i class="fab fa-wordpress-simple"></i> Wordpress</span> <span className="number">30</span></li>
      <li><span className='category-name'><i class="fas fa-sync"></i> Responsive</span> <span className="number">30</span></li>
      <li><span className='category-name'><i class="fas fa-presentation"></i> PPT</span> <span className="number">30</span></li>
      <li><span className='category-name'><i class="far fa-file-image"></i> PSD</span> <span className="number">30</span></li>
  </ul>
</aside> 
 
<div className='categories-content'>
  <label for='toggle' className='button'><i class="fad fa-bars"></i></label>
  <div className="categories-search"><Searchbar /></div>
  <div className="card-scroller" style={{margin:'1% 0 0 0'}}>
    <div className="cards" style={{width:"100%"}}>
    {
       Data.map(details)
    } 
    </div>
    </div>
</div>
</div>
        </>
    );
}
export default Categoriespage;