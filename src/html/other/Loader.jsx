import { HashLoader } from 'react-spinners';
import "../../css/other/other.css"
function Loader(){
    return(
        <>
        <div className="loader">
            <center>
            <HashLoader
               size="90"
               color="purple"
             />
             </center>
        </div>
        </>
    );
}
export default Loader;