import Tenmplatedetails from "./Templatedetails";
import "../../css/buyer dashboard/Uploadtemp.css";
import {Routes, Route,} from 'react-router-dom';
import Documents from "./Documents";
function Uploadtemp(){
    return(
        <>
            <div className="upload-template">
            <Tenmplatedetails />
            {/* <Routes>
            <Route exact path="Templatedetails" element={<Tenmplatedetails />} />
            <Route exact path="Documents" element={<Documents />} />
            </Routes>  */}
            </div>
        </>
    );
}
export default Uploadtemp;