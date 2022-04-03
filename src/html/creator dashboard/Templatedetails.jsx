import { Form,Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import { toast } from "react-toastify";
import ApiCaller from "../../apiCaller.js/apiCaller";
// import { ToastContainer, toast, Flip, Zoom, Slide } from "react-toastify";

function Tenmplatedetails() {
    
    function templateupload(e) {
        e.preventDefault();
        console.log("clicked");
        let body = {
            creator_id: '623589cc46ed885edbe4167b', // this is sample creator_id of nandita mam for testing, you have to pass the creator_id when user comes
            name: e.target.name.value,
            description: e.target.description.value,
            technology: e.target.technology.value,
            category: e.target.category.value,
            tags: e.target.tags.value,
            price: e.target.price.value,
        }
        let apiCaller = new ApiCaller();
        apiCaller.postData({
          url:'template/upload',
          data:body
        }).then(data=>{
            if(data && data.status_code=='1')
                toast.success('Data Uploaded succesfully');
            else
                toast.error('Something went wrong');
          console.log(data);
        })
        .catch(err=>{
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