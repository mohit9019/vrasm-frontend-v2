import "../../css/buyer dashboard/Analysis.css";
import {Table} from "react-bootstrap";
import Navba from "../home/Navba";
import Sidebar from "./Sidebar";
function Analysis(){
    return(
        <>
          <div className="analysis">
          {/* <div className="st">Statistics:</div> */}
            <div className="row">
            <div className="stats-card">
              <div className="circle"><svg>
                <circle cx="70" cy="70" r="60">
               </circle>
            
              </svg></div>
              <div className="stats">30</div>
              <div className="stat-n">Total Templates</div>
            </div>
            <div className="stats-card">
              <div className="circle">
              <svg>
                <circle cx="70" cy="70" r="60"></circle>
              </svg>
              </div>
              <div className="stats">999999</div>
              <div className="stat-n">Total Sales</div>
            </div>
            <div className="stats-card">
              <div className="circle">
              <svg>
                <circle cx="70" cy="70" r="60"></circle>
              </svg>
              </div>
              <div className="stats">30</div>
              <div className="stat-n">Total Income</div>
            </div>
            <div className="stats-card">
              <div className="circle">
              <svg>
                <circle cx="70" cy="70" r="60"></circle>
              </svg>
              </div>
              <div className="stats">30</div>
              <div className="stat-n">Average Review</div>
            </div>
            </div>

      <div className="creator-table">
        <Table striped bordered hover variant="light">
  <thead>
    <tr>
      <th>ID</th>
      <th>Template Name</th>
      <th>Sales</th>
      <th>Ratings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Temp1</td>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Temp2</td>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Temp3</td>
      <td>2</td>
      <td>4</td>
    </tr>
  </tbody>
</Table></div>
          </div>
        </> 
    );
}
export default Analysis;

