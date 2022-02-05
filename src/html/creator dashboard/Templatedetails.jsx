import { Form,Button } from "react-bootstrap";
import {Link} from "react-router-dom";
function Tenmplatedetails() {   
    return (
        <>
                <h3 className="n">Template Details</h3>
                <div className="form1">
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label style={{ fontSize: "15px" }}>Template Name</Form.Label>
                            <Form.Control type="text" placeholder="Template Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label style={{ fontSize: "15px" }}>Description</Form.Label>
                            <Form.Control type="text" as="textarea" placeholder="Description" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label style={{ fontSize: "15px" }}>Technologies</Form.Label>
                            <Form.Control type="text" placeholder="Technologies" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label style={{ fontSize: "15px" }}>Categories</Form.Label>
                            <Form.Control type="text" placeholder="Categories" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label style={{ fontSize: "15px" }}>Tags</Form.Label>
                            <Form.Control type="text" placeholder="#" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label style={{ fontSize: "15px" }}>Price</Form.Label>
                            <Form.Control type="number" min={50} placeholder="Rs." />
                        </Form.Group>

                        <Link to="/Creatordash/Uploadtemp/Documents"><button className="dash-button" style={{ marginTop: "10px",padding:'1.5% 2% 1.5% 2%' }} variant="primary" type="submit">
                            Save & Next
                        </button></Link>
                    </Form>
                </div>
        </>
    );
}
export default Tenmplatedetails;