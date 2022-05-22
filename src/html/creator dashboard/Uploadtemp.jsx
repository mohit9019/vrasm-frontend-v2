import Tenmplatedetails from "./Templatedetails";
import "../../css/buyer dashboard/Uploadtemp.css";
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