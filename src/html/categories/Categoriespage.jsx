import Sidebar from '../dashboard/Sidebar';
import Searchbar from '../home/Searchbar';
import "../../css/buyer dashboard/Buyerdash.css";
import Card from '../home/Card';
function Categoriespage(){
    return(
        <>
        <div className='categories'>
            <div className='side-bar'>
            <div className='categories-serch'>
            <i class="fas fa-search" id='categories-icon'></i>
                <input className='categories-input'>
                </input>
            </div>
            <div className='categories-list'>
                <span className='list-head'>Categories</span>
                <ul className='list'>
                    <li>Bussiness</li>
                    <li>Portfolio</li>
                    <li>Real-estate</li>
                    <li>sport</li>
                    <li>E-commerce</li>
                    <li>Bussiness</li>
                    <li>Portfolio</li>
                    <li>Real-estate</li>
                    <li>sport</li>
                    <li>E-commerce</li>
                </ul>
            </div>
            </div>

            <div className='categories-content'>
            <ul className="categories-navbar">
                    <li>Html 5</li>
                    <li>Bootstrap</li>
                    <li>Wordpress</li>
                    <li>Tailwind</li>
                    <li>Psd</li>
                    <li>Ppt</li>
                    <li>Responsive</li>
                </ul>

            <div className='categories-cards'>
            <div className="my-like">
                {/* <p>Oops... No Orders yet</p>  */}
                <div className="lk-card">
                <div className="lk-date"><p>wed, 09/07/2021</p></div>
                    <div className="lk-cont ">
                    <div className="lk-img"><img src="/images/q.jpg" altlt="image" /></div>
                    <div className="lk-details">
                        <span className="lk-name">Quarter – Real Estate</span>
                        <span className="lk-desc">Quarter is a Real Estate, Architecture & interior design Bootstrap 5 HTML Template for real estate website.</span>
                        <span className="lk-id">ID: TEMP123456</span>
                    </div>
                    <div className="lk-price">$20</div>
                    </div>
                </div>
                </div>
                <div className="my-like">
                {/* <p>Oops... No Orders yet</p>  */}
                <div className="lk-card">
                <div className="lk-date"><p>wed, 09/07/2021</p></div>
                    <div className="lk-cont ">
                    <div className="lk-img"><img src="/images/q.jpg" altlt="image" /></div>
                    <div className="lk-details">
                        <span className="lk-name">Quarter – Real Estate</span>
                        <span className="lk-desc">Quarter is a Real Estate, Architecture & interior design Bootstrap 5 HTML Template for real estate website.</span>
                        <span className="lk-id">ID: TEMP123456</span>
                    </div>
                    <div className="lk-price">$20</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}
export default Categoriespage;