import "../../css/buyer dashboard/Editprofile.css";
import "../../css/buyer dashboard/Personalinfo.css";
import {Form,Col,Row,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import Navba from "../home/Navba";
import Sidebar from "./Sidebar";
function Editprofile(){
    return(
        <> 

<div className="personal-info">
            <div className="info"><div className="edit-icon"><h3 className="dash-head">Edit Information</h3>
            </div>


            <Form className="read">
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label >First Name</Form.Label>
      <Form.Control  type="text" placeholder="Tony" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label  >Last Name</Form.Label>
      <Form.Control  type="text" placeholder="Stark" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control as="textarea" type="text" placeholder="177 A Bleaker street, New York" />
  </Form.Group>

  <Row className="mb-3">
  <Form.Group as={Col} controlId="formGridCity">
      <Form.Label >City</Form.Label>
      <Form.Control type="text" placeholder="New York" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label >Pincode</Form.Label>
      <Form.Control type="text" placeholder="12345" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Contact No.</Form.Label>
      <Form.Control type="text" placeholder="123456789" />
    </Form.Group>
  </Row>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label >College Name</Form.Label>
      <Form.Control type="text" placeholder="KSSBM" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label  >Course Name</Form.Label>
      <Form.Control type="text" placeholder="Msc.IT" />
    </Form.Group>
  </Row>


  <Link to="/Creatordash/Personalinfo"><button variant="primary" type="submit" className="dash-button" style={{ marginTop: "10px",padding:'1.5% 2% 1.5% 2%' }}>
              Edit Profile
            </button></Link>

</Form>
</div>

            </div>

        </>
    );
}
export default Editprofile;