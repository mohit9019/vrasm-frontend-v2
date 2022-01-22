import "../../css/buyer dashboard/Editprofile.css";
import "../../css/buyer dashboard/Personalinfo.css";
import Sidebar from "./Sidebar";
import Navba from "../home/Navba";
import { Form, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Editprofile() {
  return (
    <>
      <div className="personal-info">
        <div className="info"><div className="edit-icon"><h2 className="n">Edit Information</h2>
        </div>


          <Form className="read">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="label">First Name</Form.Label>
                <Form.Control className="value" type="text" placeholder="Mohit" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="label" >Last Name</Form.Label>
                <Form.Control className="value" type="text" placeholder="Chauhan" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control style={{ width: "88%" }} as="textarea" type="text" placeholder="177 A Bleaker street, New York" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label className="label">City</Form.Label>
                <Form.Control className="value" type="text" placeholder="New York" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label className="label">Pincode</Form.Label>
                <Form.Control className="value" type="text" placeholder="U.S.A" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label className="label">Contact Number</Form.Label>
                <Form.Control className="value" type="text" placeholder="123456789" />
              </Form.Group>
            </Row>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label >Profile Picture</Form.Label>
              <Form.Control type="file" style={{ width: "80%" }} />
            </Form.Group>

            <Link to="/Buyerdash/Personalinfo"><Button variant="primary" type="submit" style={{ marginTop: "10px" }}>
              Edit Profile
            </Button></Link>

          </Form>
        </div>

      </div>

    </>
  );
}
export default Editprofile;