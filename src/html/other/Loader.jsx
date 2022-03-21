import { ClimbingBoxLoader } from 'react-spinners';
import "../../css/other/other.css"
function Loader(){
    return(
        <>
        <div className="loader">
            <center>
            <ClimbingBoxLoader
               size={10}
               color="purple"
             />
             </center>
        </div>
        </>
    );
}
export default Loader;