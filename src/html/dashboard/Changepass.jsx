import Sidebar from "./Sidebar";
import Navba from "../home/Navba";
import "../../css/buyer dashboard/Changepass.css";
import {Link} from "react-router-dom";
import {Form,Button} from "react-bootstrap";
function Changepass(){
    return(
        <>
        <div className="change-password">
        <div className="change">
                <Form>

                <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label style={{fontSize:"15px"}}>Old Password</Form.Label>
    <Form.Control type="password" placeholder="Old Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label style={{fontSize:"15px"}}>New Password</Form.Label>
    <Form.Control type="password" placeholder="New Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label style={{fontSize:"15px"}}>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" />
  </Form.Group>
  <Form.Text >
  <Link to="#" style={{textDecoration:"none"}}>
      Forgot Password ?</Link>
    </Form.Text>
  <Form.Group className="mb-3">
      <Button type="submit" style={{marginTop:"10px"}}>Edit Password</Button>
  </Form.Group>
</Form> 

</div></div>
        </>
    );
}
export default Changepass;