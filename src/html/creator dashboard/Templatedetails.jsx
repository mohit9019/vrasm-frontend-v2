import { useState } from "react";
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
            {
                toast.success('Data Uploaded succesfully');
                setTimeout(() => {
                    setDetails_saved(1);
                  }, 500);
            }
            else
                toast.error(data.status_message);
          console.log(data);
        })
        .catch(err=>{
          console.log(err);
        })
      }

      const [Details_saved, setDetails_saved]= useState(0);
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

                            <button className="dash-button"  style={{ marginTop: "10px",padding:'1.5% 2% 1.5% 2%' }} type="submit"> 
                                Save & Next
                            </button> 
                        </Form>  
                        </div>
                        </>

                        :

                        <>
                        <h3 className="n">Upload Documents</h3>
                        <div className="documents">
                        <form action="http://localhost:4000/v1/template/upload_image" method="POST">
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Promotional Image</Form.Label>
                                <Form.Control name="file" type="file" />
                            </Form.Group>
                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Label>Other Images</Form.Label>
                                <Form.Control name="template_id" type="file" multiple />
                            </Form.Group>
                            {/* <button className="dash-button" variant="primary" name="file" type="submit" style={{ marginTop: "10px",padding:'1.5% 2% 1.5% 2%' }}>
                            <i class="fas fa-arrow-circle-left"></i>
                                    </button> */}

                                    <button className="dash-button" name="file" type="submit" style={{ marginTop: "10px", padding:'1.5% 2% 1.5% 2%',float:'right'}}>
                                        Upload Template
                                    </button>
                                    {/* </form> */}
                        {/* </div>
                        </>
            }  */}
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