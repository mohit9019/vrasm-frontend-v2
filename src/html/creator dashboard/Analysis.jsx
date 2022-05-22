import { useEffect, useState } from "react";
import "../../css/buyer dashboard/Analysis.css";
import ApiCaller from "../../apiCaller.js/apiCaller";
const headers = [
  { keys: "name", name: "Template Name" },
  { keys: "category", name: "Category" },
  { keys: "price", name: "Price" },
  { keys: "rating", name: "Rating" },
  { keys: "created_date", name: "Created Date" },
];
const data = [
  { title: "Vrasm", ratings: "3/5", category: "Real estate", sale: "3", date: "03/03/2022" },
  { title: "Makaan", ratings: "4/5", category: "real estate", sale: "3", date: "04/05/2022", },
  { title: "Shakti", ratings: "3/5", category: "Food", sale: "5", date: "06/05/2022", },
  { title: "Zydus", ratings: "2/5", category: "hospital", sale: "7", date: "06/05/2022", },
  { title: "Rugby", ratings: "3/5", category: "sports", sale: "9", date: "06/05/2022", },
  { title: "Run", ratings: "2/5", category: "sports", sale: "1", date: "06/05/2022", },
  { title: "vrasm", ratings: "1/5", category: "port-folio", sale: "3", date: "07/05/2022", },
];
function Analysis() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    let apiCaller = new ApiCaller();
    apiCaller.postData({
      url: 'template/get',
      data: {
        creator_id: ApiCaller.userData.user_id
      } // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
    }).then(res => {
      if (apiCaller.validateResult(res)) {
        res.data.map(record=>{
          let rating = 0;
          record.feedbacks?.map(f=>{
              rating += f.rating;
          })
          rating /= record.feedbacks?.length;
          if(isNaN(rating)){
            rating = 0;
          }
          record['rating'] = rating;
          record['created_date'] = new Date(record.created_date).toLocaleDateString();
        })
        setData(res.data);
      }
    })
  }
  function avgRating(data){
    let rating = 0;
    data.map(d=>{
      rating += d.rating;
    })
    rating /= data.length;
    return rating;
  }
  function takeSum(data){
    let sum = 0;
    data.map(d=>{
      sum+=d.price;
    })
    return sum;
  }
  return (
    <>
      <div className="analysis">
        <div className="row">
          <div className="stats-card">
            <div className="circle">
              <span className="stats">{data.length}</span>
            </div>
            <span className="stats-n">Total Templates</span>
          </div>
          {/* <div className="stats-card">
            <div className="circle">
              <span className="stats">30</span>
            </div>
            <span className="stats-n">Total Sales</span>
          </div> */}
          <div className="stats-card">
            <div className="circle">
              <span className="stats">{takeSum(data)}
            </span>
            </div>
            <span className="stats-n">Total Amount</span>
          </div>
          <div className="stats-card">
            <div className="circle">
              <span className="stats">{avgRating(data)}/5</span>
            </div>
            <span className="stats-n">Average Ratings</span>
          </div>
        </div>

        <div className="creator-table">
          <Table id="id" headers={headers} data={data} />
        </div>
      </div>
    </>
  );
}
export default Analysis;

const Table = ({ id, headers, data }) => (
  <>
    <div className="table-background">
      <></>
      <div className="template-table">
        <table className="table-cont">
          <tbody>
            <tr>
              {headers.map(({ keys, name }) => (
                <th className="table-header" key={keys}>{name}</th>
              ))}
            </tr>
            {data.map((rowData) => (
              <tr className="table-row" key={rowData[id]}>
                {headers.map(({ keys }) => (
                  <td className="table-column" key={keys}>
                    {rowData[keys]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
);