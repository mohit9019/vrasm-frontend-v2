import "../../css/categories/Categories.css";
function Categoriespage(){
    return(
        <>
<div className="categories">
<input type='checkbox' id='toggle'></input>

{/* <!-- Menu --> */}
<aside className='category-sidebar'>
  <label for='toggle' className='exit'><i class="fad fa-times"></i></label>
  <h4 className='category-title'>Catagories</h4>
  <ul className="categories-list">
      <li><span className='category-name'>Portfolio</span> <span className="number">30</span></li>
      <li><span className='category-name'>Business</span><span className="number">25</span></li>
      <li><span className='category-name'>Sports</span><span className="number">3</span></li>
      <li><span className='category-name'>Education</span><span className="number">225</span></li>
      <li><span className='category-name'>Real-Estate</span><span className="number">15</span></li>
      <li><span className='category-name'>Restorant</span><span className="number">37</span></li>
      <li><span className='category-name'>Others</span><span className="number">40</span></li>
      <li><span className='category-name'>Education</span><span className="number">225</span></li>
      <li><span className='category-name'>Real-Estate</span><span className="number">15</span></li>
      <li><span className='category-name'>Restorant</span><span className="number">37</span></li>
      <li><span className='category-name'>Others</span><span className="number">40</span></li>     
  </ul>
  <hr />
  <h4 className='category-title'>Technologies</h4>
  <ul className="tech-list">
      <li><span className='category-name'>HTML</span> <span className="number">30</span></li>
      <li><span className='category-name'>CSS</span> <span className="number">30</span></li>
      <li><span className='category-name'>Javascript</span> <span className="number">30</span></li>
      <li><span className='category-name'>Jquery</span> <span className="number">30</span></li>
      <li><span className='category-name'>ReactJs</span> <span className="number">30</span></li>
      <li><span className='category-name'>Wordpress</span> <span className="number">30</span></li>
      <li><span className='category-name'>Others</span> <span className="number">30</span></li>
  </ul>
</aside>

<div className='content'>
  <label for='toggle' className='button'><i class="fad fa-bars"></i></label>
  <div className="cat-serach">
      <input type="text" name="" className="cat-search" placeholder="Search Here....." />
  </div>
</div>
</div>
        </>
    );
}
export default Categoriespage;