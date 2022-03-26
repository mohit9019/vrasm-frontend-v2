import "../../css/buyer dashboard/Personalinfo.css";
import {Form,Col,Row} from "react-bootstrap";
import { Link } from "react-router-dom";
function Personalinfo(){
    return(
        <>
            <div className="personal-info">
            <div className="info"><div className="edit-icon">
            <h3 className="dash-head">Creators Information</h3>
            <Link to="/Creatordash/Editprofile" style={{color:"rgb(49, 49, 49)"}} className="edit"><i class="fas fa-edit"></i></Link></div>


            <Form className="read">
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label >First Name</Form.Label>
      <Form.Control type="text"  placeholder="Tony" style={{backgroundColor:'white'}} readOnly />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label >Last Name</Form.Label>
      <Form.Control type="text"  placeholder="Stark" style={{backgroundColor:'white'}} readOnly />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control as="textarea" type="text" style={{width:"90%",backgroundColor:'white'}} placeholder="177 A Bleaker street, New York horhfoehfu" readOnly />
  </Form.Group>

  <Row className="mb-3">
  <Form.Group as={Col} controlId="formGridCity">
      <Form.Label >City</Form.Label>
      <Form.Control  type="text" placeholder="New York" style={{backgroundColor:'white'}} readOnly />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label >Pincode</Form.Label>
      <Form.Control  type="text" placeholder="12345" style={{backgroundColor:'white'}} readOnly />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label >Contact No.</Form.Label>
      <Form.Control  type="text" placeholder="123456789" style={{backgroundColor:'white'}} readOnly />
    </Form.Group>
  </Row>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label >College Name</Form.Label>
      <Form.Control type="text"  placeholder="Harward" style={{backgroundColor:'white'}} readOnly />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label >Course Name</Form.Label>
      <Form.Control type="text"  placeholder="M.I.T" style={{backgroundColor:'white'}} readOnly />
    </Form.Group>
  </Row>

</Form>
</div>
            </div>

            </>
    );
}export default Personalinfo;