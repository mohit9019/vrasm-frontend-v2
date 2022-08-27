import "../../css/categories/Categories.css";
import ApiCaller from "../../apiCaller.js/apiCaller";
import details from "../home/Detailsmap";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getTemplate } from "../../redux/actions/templateAction";
import Loader from '../other/Loader';
import Error from '../other/Error';
function Categoriespage() {
     const [Data, setData] = useState();
     const [length, setLength] = useState([1]);
     const templates = useSelector(state => state.getTemplateReducer);
     const { loading, state, error } = templates;
     // console.log(templates);
     const dispatch = useDispatch();
     useEffect(() => {
          setData(state);
          setLength(state?.length);
          // setLength(state.length);
          // console.log(Data);
          //   let apiCaller = new ApiCaller();
          //   apiCaller.postData({
          //     url: 'template/get',
          //     data: {} // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
          //   }).then(res => {
          //     if (apiCaller.validateResult(res)) {
          //       setData(res.data);
          //     }
          //   })
     }, [state]);

     // const [Data, setData] = useState([]);
     // useEffect(() => {
     //      let apiCaller = new ApiCaller();
     //      apiCaller.postData({
     //           url: 'template/get',
     //           data: {} // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
     //      }).then(res => {
     //           if (apiCaller.validateResult(res)) {
     //                setData(res.data);
     //                console.log(res);
     //           }
     //      })
     // }, []);

     function category(props) {
          dispatch(getTemplate(props));
          //      let apiCaller = new ApiCaller();
          //      apiCaller.postData({
          //           url: 'template/get',
          //           data: props
          //      }).then(data => {
          //           if (apiCaller.validateResult(data)) {
          //                setData(data.data);
          //                setLength(data.data.length);
          //           }
          //           else
          //                toast.error(data.status_message);
          //      }).catch(err => {
          //           console.log(err);
          //      })
     }

     const [searched, setSearched] = useState();
     return (
          <>
               {loading && <Loader></Loader>}
               {error && <Error></Error>}
               <div className="categories">
                    <input type='checkbox' id='toggle'></input>
                    {/* <!-- Menu --> */}
                    <aside className='category-sidebar'>
                         {/* <span onClick={() => { category({category:''}) }} style={{fontSize:"120%",listStyle:"none",color:"rebeccapurple",margin:"0 0 5px",cursor:"pointer"}} className='category-name'> All Templates</span> <span className="number"></span> */}
                         <label for='toggle' className='exit'><i class="fad fa-times"></i></label>
                         <h4 className='category-title'>Catagories</h4>
                         <ul className="categories-list">
                              <li onClick={() => { category({ category: 'Portfolio' }) }}><span className='category-name'><i class="far fa-user-alt"></i> Portfolio</span> <span className="number"></span></li>
                              <li onClick={() => { category({ category: 'Business' }) }}><span className='category-name'><i class="far fa-briefcase"></i> Business</span><span className="number"></span></li>
                              <li onClick={() => { category({ category: 'Sports' }) }}><span className='category-name'><i class="far fa-volleyball-ball"></i> Sports</span><span className="number"></span></li>
                              <li onClick={() => { category({ category: 'Education' }) }}><span className='category-name'><i class="far fa-graduation-cap"></i> Education</span><span className="number"></span></li>
                              <li onClick={() => { category({ category: 'Real-Estate' }) }}><span className='category-name'><i class="far fa-building"></i> Real-Estate</span><span className="number"></span></li>
                              <li onClick={() => { category({ category: 'Restaurant' }) }}><span className='category-name'><i class="far fa-burger-soda"></i> Restaurant</span><span className="number"></span></li>
                              <li onClick={() => { category({ category: 'Hospital' }) }}><span className='category-name'><i class="far fa-ambulance"></i> Hospital</span><span className="number"></span></li>
                              <li onClick={() => { category({ category: 'Treavelling' }) }}><span className='category-name'><i class="far fa-map-marked"></i> Travelling</span><span className="number"></span></li>
                              <li onClick={() => { category({ category: 'Others' }) }}><span className='category-name'><i class="far fa-caret-circle-down"></i> Others</span><span className="number"></span></li>
                         </ul>
                         <hr />
                         <h4 className='category-title'>Technologies</h4>
                         <ul className="tech-list">
                              <li onClick={() => { category({ technology: 'HTML' }) }}><span className='category-name'><i class="fas fa-code"></i> HTML</span> <span className="number"></span></li>
                              <li onClick={() => { category({ technology: 'CSS' }) }}><span className='category-name'><i class="fab fa-css3-alt"></i> CSS</span> <span className="number"></span></li>
                              <li onClick={() => { category({ technology: 'Bootstrap' }) }}><span className='category-name'><i class="fab fa-bootstrap"></i> Bootstrap</span> <span className="number"></span></li>
                              <li onClick={() => { category({ technology: 'ReactJs' }) }}><span className='category-name'><i class="fab fa-react"></i> React Js</span> <span className="number"></span></li>
                              <li onClick={() => { category({ technology: 'Wordpress' }) }}><span className='category-name'><i class="fab fa-wordpress-simple"></i> Wordpress</span> <span className="number"></span></li>
                              <li onClick={() => { category({ technology: 'Responsive' }) }}><span className='category-name'><i class="fas fa-sync"></i> Responsive</span> <span className="number"></span></li>
                              <li onClick={() => { category({ technology: 'PPT' }) }}><span className='category-name'><i class="fas fa-presentation"></i> PPT</span> <span className="number"></span></li>
                              <li onClick={() => { category({ technology: 'PSD' }) }}><span className='category-name'><i class="far fa-file-image"></i> PSD</span> <span className="number"></span></li>
                         </ul>
                    </aside>

                    <div className='categories-content'>
                         <label for='toggle' className='button'><i class="fad fa-bars"></i></label>
                         <div className="categories-search">
                              <div className="searchbar">
                                   <div className="search-input"><input type="search" onChange={(e) => setSearched(e.target.value)} placeholder={"Search Templates..."} /></div>
                                   <div className="search-icon"><button style={{ backgroundColor: "transparent", border: "none" }} onClick={() => { category({ searchstring: searched }) }}><i class="fas fa-search"></i></button></div>
                              </div>
                         </div>
                         {length === 0 ?
                              <h5 style={{ color: "rgb(75, 74, 74)" }}>No record Found</h5>
                              :
                              <>
                                   {/* <h5 style={{color:"rgb(75, 74, 74)"}}></h5> */}
                                   <div className="card-scroller" style={{ margin: '1% 0 0 0' }}>
                                        {/* <div className="cards" style={{ width: "100%" }}> */}
                                        {
                                             Data?.map(details)
                                        }
                                        {/* </div> */}
                                   </div></>}
                    </div>
               </div>
          </>
     );
}
export default Categoriespage;