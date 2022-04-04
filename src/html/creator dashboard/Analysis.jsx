import "../../css/buyer dashboard/Analysis.css";

const headers = [
  { keys: "id",   name: "ID" },
  { keys: "name", name: "Name" },
  { keys: "age",  name: "Age" },
  { keys: "id",   name: "ID" },
  { keys: "name", name: "Name" },
  { keys: "age",  name: "Age" },
];
const data = [
  { id: 1, name: 'mohit',  age: 20, id: 1, name: 'mohit',  age: 20},
  { id: 2, name: 'dev',   age: 20, id: 1, name: 'mohit',  age: 20},
  { id: 3, name: 'manav',   age: 20, id: 1, name: 'mohit',  age: 20},
  { id: 1, name: 'mohit',  age: 20, id: 1, name: 'mohit',  age: 20},
  { id: 1, name: 'mohit',  age: 20, id: 1, name: 'mohit',  age: 20},
  { id: 2, name: 'dev',   age: 20, id: 1, name: 'mohit',  age: 20},
  { id: 3, name: 'manav',   age: 20, id: 1, name: 'mohit',  age: 20},
  { id: 1, name: 'mohit',  age: 20, id: 1, name: 'mohit',  age: 20},
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
                <span className="stats">30</span>
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