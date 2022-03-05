import { Form,Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
function Tenmplatedetails() {

    function templateupload(e) {
          e.preventDefault();
          console.log("clicked");
          console.log(e.target.password.value);
          let body = {
            name: e.target.name.value,
            description: e.target.description.value,
            technology: e.target.technology.value,
            category: e.target.category.value,
            tags: e.target.tags.value,
            price: e.target.price.value,
          }
          axios.post('http://localhost:4000/v1/template/upload', body)
            .then(data => {
              console.log(data);
              let response = {
                status:0,
                message:'',
                data:''
              }
            })
            .catch(err => {
              console.log(err);
            })
        }  
    return (
        <>
                <h3 className="n">Template Details</h3>
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

                        {/* <Link to="/Creatordash/Uploadtemp/Documents"> */}
                        <button className="dash-button" style={{ marginTop: "10px",padding:'1.5% 2% 1.5% 2%' }} variant="primary" type="submit">
                            Save & Next
                        </button>
                        {/* </Link> */}
                    </Form>
                </div>
        </>
    );
}
export default Tenmplatedetails;