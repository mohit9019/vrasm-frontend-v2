import { getDefaultNormalizer } from "@testing-library/react";
import ApiCaller from "../../apiCaller.js/apiCaller";
let userData=[];
function getUsers(){
    ApiCaller.postData({
        url:'admin/get_user',
        data:{}
    }).then(data=>{
        userData = data;
    })
    .catch(err=>{
        console.log(err);
    })
}
function Admin(){
    return(
        <>
            <h1>Admin panel</h1>
            <h1>Admin panel</h1>
        </>
    )
}
export default Admin;