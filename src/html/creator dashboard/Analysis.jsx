import "../../css/buyer dashboard/Analysis.css";
const headers = [
  { keys: "title", name: "Template Name" },
  { keys: "ratings",  name: "Ratings" },
  { keys: "category",   name: "Category" },
  { keys: "sale", name: "Sale" },
  { keys: "date",  name: "Ceated Date" },
];
const data = [
  {title:"Vrasm", ratings:"3/5", category:"Real estate",sale:"3",date:"03/03/2022"},
    {title:"Makaan",ratings:"4/5",category:"real estate",sale:"3",date:"04/05/2022",},
    {title:"Shakti",ratings:"3/5",category:"Food",sale:"5",date:"06/05/2022",},
    {title:"Zydus",ratings:"2/5",category:"hospital",sale:"7",date:"06/05/2022",},
    {title:"Rugby",ratings:"3/5",category:"sports",sale:"9",date:"06/05/2022",},
    {title:"Run",ratings:"2/5",category:"sports",sale:"1",date:"06/05/2022",},
    {title:"vrasm",ratings:"1/5",category:"port-folio",sale:"3",date:"07/05/2022",},
];

function Analysis(){
    return(
        <>
          <div className="analysis">
            <div className="row">
            <div className="stats-card">
            <div className="circle">
                <span className="stats">30</span>
            </div>
              <span className="stats-n">Total Templates</span>
            </div>
            <div className="stats-card">
            <div className="circle">
                <span className="stats">30</span>
            </div>
              <span className="stats-n">Total Sales</span>
            </div>
            <div className="stats-card">
            <div className="circle">
                <span className="stats">30</span>
            </div>
              <span className="stats-n">Total Income</span>
            </div>
            <div className="stats-card">
            <div className="circle">
                <span className="stats">3/5</span>
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