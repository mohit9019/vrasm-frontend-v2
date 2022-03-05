import Sidebar from '../dashboard/Sidebar';
import Searchbar from '../home/Searchbar';
import "../../css/categories/Categories.css";
import Card from '../home/Card';
import {Link} from "react-router-dom";
function Categoriespage(){
    return(
        <>
        <div className='categories'>
            <div className='cat-bar'>
            <div className='categories-serch'>
            <i class="fas fa-search" id='categories-icon'></i>
                <input className='categories-input'>
                </input>
            </div>
            <div className='categories-list'>
                <span className='list-head'>Categories</span>
                <ul className='list'>
                    <li><i class="far fa-address-card"></i><span className='homenu'>E-commerce</span></li>
                    <li><i class="far fa-briefcase"></i><span className='homenu'>Bussiness</span></li>
                    <li><i class="far fa-id-card-alt"></i><span className='homenu'>Portfolio</span></li>
                    <li><i class="far fa-building"></i><span className='homenu'>Real-estate</span></li>
                    <li><i class="far fa-volleyball-ball"></i><span className='homenu'>sports</span></li>
                    <li><i class="far fa-burger-soda"></i><span className='homenu'>Restaurants</span></li>
                    <li><i class="far fa-graduation-cap"></i><span className='homenu'>Educational</span></li>
                    <li><i class="far fa-backpack"></i><span className='homenu'>Tourism</span></li>
                    <li><i class="far fa-hospital-alt"></i><span className='homenu'>Hospital</span></li>
                    <li><i class="far fa-infinity"></i><span className='homenu'>Other</span></li>
                
                </ul>
            </div>
            <div className='bar'></div>
            <div className='categories-list'>
                <span className='list-head'>Technologies</span>
                <ul className='list'>
                <li><i class="fab fa-html5"></i></li>
                    <li><i class="fab fa-bootstrap"></i></li>
                    <li><i class="fab fa-wordpress"></i></li>
                    <li>Tailwind</li>
                    <li>Psd</li>
                    <li><i class="fas fa-presentation"></i></li>
                    <li>Responsive</li>
                </ul>
            </div>
            </div>

            <div className='categories-content'>

            <div className='categories-cards'>
                <div className="cat-card"> 
                    <div className="lk-cont ">
                    <div className='lk-split'>
                    <div className="lk-img"><img src="/images/q.jpg" altlt="image" /></div>
                    <div className="lk-details">
                        <span className="lk-name">Quarter – Real Estate</span>
                        <span className="lk-desc">Quarter is a Real Estate, Architecture & interior design Bootstrap 5 HTML Template for real estate website.</span>
                        <div className='stars'><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>
                    </div>
                    <div className="lk-price">Rs.20</div>
                    </div>
                    <div className="lk-btns">
                        <div className="lk-icon">
                            <Link to="Preview/Overview"  style={{textDecoration:"none", color:"darkgray"}} >
                                <button className="lk-preview">
                                <i class="fas fa-eye"></i> <span>Preview</span>
                                </button>
                            </Link>
                            <Link to="#" style={{textDecoration:"none", color:"darkgray"}}>
                                <button className="lk-cart">
                                <i class="fas fa-shopping-cart"></i> <span>Add to cart</span>
                                </button>
                            </Link> 
                    </div>  
                    </div>
                    <div className="unsave"><i class="far fa-heart"></i></div>
                    </div>
                </div>

                <div className="cat-card"> 
                    <div className="lk-cont ">
                    <div className='lk-split'>
                    <div className="lk-img"><img src="/images/q.jpg" altlt="image" /></div>
                    <div className="lk-details">
                        <span className="lk-name">Quarter – Real Estate</span>
                        <span className="lk-desc">Quarter is a Real Estate, Architecture & interior design Bootstrap 5 HTML Template for real estate website.</span>
                        <div className='stars'><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>
                    </div>
                    <div className="lk-price">Rs.20</div>
                    </div>
                    <div className="lk-btns">
                        <div className="lk-icon">
                            <Link to="Preview/Overview"  style={{textDecoration:"none", color:"darkgray"}} >
                                <button className="lk-preview">
                                <i class="fas fa-eye"></i> <span>Preview</span>
                                </button>
                            </Link>
                            <Link to="#" style={{textDecoration:"none", color:"darkgray"}}>
                                <button className="lk-cart">
                                <i class="fas fa-shopping-cart"></i> <span>Add to cart</span>
                                </button>
                            </Link> 
                    </div>  
                    </div>
                    <div className="unsave"><i class="far fa-heart"></i></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Categoriespage;