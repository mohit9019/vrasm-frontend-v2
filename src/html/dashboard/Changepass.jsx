import ApiCaller from "../../apiCaller.js/apiCaller";
import { toast } from "react-toastify";
import "../../css/buyer dashboard/Changepass.css";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import {Form} from "react-bootstrap";
function Changepass(){
  const navigate = useNavigate();
  function changePassword(e){
    e.preventDefault();

    let body = {
        old_password:e.target.old_password.value,
        new_password:e.target.new_password.value,
    }
    let apiCaller = new ApiCaller();
    apiCaller.postData({
        url: 'user/change_password',
        data: body
    }).then(data => {
        if (apiCaller.validateResult(data)) {
            toast.success('Password changed succesfully');
            navigate('/Creatordash/Personalinfo');
        }
        else 
            toast.error(data.status_message);
    })
        .catch(err => {
            console.log(err);
        })
  }
  const [password, setPassword] = useState(null);
  const [cpassword, setcPassword] = useState(null);
    return(
        <>
        <div className="change-password">
        <div className="change">
                <Form onSubmit={changePassword}>

                <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label style={{fontSize:"15px"}}>Old Password</Form.Label>
    <Form.Control type="password" name="old_password" placeholder="Old Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label style={{fontSize:"15px"}}>New Password</Form.Label>
    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="new_password" placeholder="New Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label style={{fontSize:"15px"}}>Confirm Password</Form.Label>
    <Form.Control type="password" value={cpassword} onChange={(e) => setcPassword(e.target.value)} placeholder="Confirm Password" />
    {password !== cpassword ? <span className="password-caution"><i class="fal fa-exclamation-circle"></i> password doesn't matched</span> : null}
  </Form.Group>
  <Form.Text >
  {/* <Link to="#" style={{textDecoration:"none"}}>
      Forgot Password ?</Link> */}
    </Form.Text>
  <Form.Group className="mb-3">
      <button type="submit" style={{marginTop:"10px",padding:'2%'}} className="dash-button" disabled={password !== cpassword ? true : false}>Edit Password</button>
  </Form.Group>
</Form> 

</div></div>
        </>
    );
}
export default Changepass;