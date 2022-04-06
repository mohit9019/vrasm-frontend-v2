import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ApiCaller from "../../apiCaller.js/apiCaller";
// import { ToastContainer, toast, Flip, Zoom, Slide } from "react-toastify";

function Tenmplatedetails() {

   

    return (
        <>
        
        <form  enctype="multipart/form-data" method="POST" action="http://localhost:4000/v1/template/upload_image">
            {/*  <form  enctype="multipart/form-data" onSubmit={ImageUpload}> */}
                {/* <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Promotional Image</Form.Label>
                    <Form.Control name="file" type="file" />
                </Form.Group>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Other Images</Form.Label>
                    <Form.Control name="file" type="file" multiple />
                </Form.Group> */}
                <input type="file" name="file"></input>
                <input type="file" name="file"></input>
                <input type="text" style={{visibility:'hidden'}} name="template_id" value="6225a181ffb0259ddab852ba"></input>
                <button type="submit">submit</button>
            </form>
            {/* <h3 className="n">Template Details</h3>
                <div className="form1">
                    <Form onSubmit={templateupload}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label style={{ fontSize: "15px" }}>Template Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Template Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label style={{ fontSize: "15px" }}>Description</Form.Label>
                            <Form.Control name="description" type="text" as="textarea" placeholder="Description" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label style={{ fontSize: "15px" }}>Technologies</Form.Label>
                            <Form.Control name="technology" type="text" placeholder="Technologies" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label style={{ fontSize: "15px" }}>Categories</Form.Label>
                            <Form.Control name="category" type="text" placeholder="Categories" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label style={{ fontSize: "15px" }}>Tags</Form.Label>
                            <Form.Control name="tags" type="text" placeholder="#" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label style={{ fontSize: "15px" }}>Price</Form.Label>
                            <Form.Control name="price" type="number" min={50} placeholder="Rs." required />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label style={{ fontSize: "15px" }}>Zip File</Form.Label>
                    <Form.Control name="zip" type="file" required />
                </Form.Group>

                        {/* <Link to="/Creatordash/Uploadtemp/Documents"> */}
            {/* <button className="dash-button" style={{ marginTop: "10px",padding:'1.5% 2% 1.5% 2%' }} variant="primary" type="submit">
                            Save & Next
                        </button> */}
            {/* </Link> */}
            {/* </Form>  */}
            {/* </div> */}
        </>
    );
}
export default Tenmplatedetails;