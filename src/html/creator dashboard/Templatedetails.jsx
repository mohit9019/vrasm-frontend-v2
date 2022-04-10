import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ApiCaller from "../../apiCaller.js/apiCaller";
// import { ToastContainer, toast, Flip, Zoom, Slide } from "react-toastify";

function Tenmplatedetails() {
    const [Details_saved, setDetails_saved] = useState(0);
    const [template_id, setTemplateId] = useState('');
    function templateupload(e) {
        e.preventDefault();
        console.log(ApiCaller.userData)
        let body = {
            creator_id: ApiCaller.userData.user_id, // this is sample creator_id of nandita mam for testing, you have to pass the creator_id when user comes
            name: e.target.name.value,
            description: e.target.description.value,
            technology: e.target.technology.value,
            category: e.target.category.value,
            tags: e.target.tags.value,
            price: e.target.price.value,
        }
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url: 'template/upload',
            data: body
        }).then(data => {
            if (data && data.status_code == '1') {
                toast.success('Data Uploaded succesfully');
                setDetails_saved(1);
                setTemplateId(data.data);
                // setTimeout(() => {
                // }, 100);
            }
            else
                toast.error(data.status_message);
            console.log(data);
        })
            .catch(err => {
                console.log(err);
            })
    };
    return (
        <>
            {
                Details_saved == 0 ?
                    <>
                        {/* designed image upload form */}
                        {/*  <form  enctype="multipart/form-data" onSubmit={ImageUpload}> */}
                        {/* <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Promotional Image</Form.Label>
                    <Form.Control name="file" type="file" />
                </Form.Group>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Other Images</Form.Label>
                    <Form.Control name="file" type="file" multiple />
                </Form.Group> */}
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

                                <button className="dash-button" style={{ marginTop: "10px", padding: '1.5% 2% 1.5% 2%' }} type="submit">
                                    Save & Next
                                </button>
                            </Form>
                        </div>
                    </>
                    :
                    <>
                        <form enctype="multipart/form-data" method="POST" action="http://localhost:4000/v1/template/upload_image">

                            <input type="file" name="file"></input>
                            <input type="file" name="file"></input>
                            <input type="file" name="file"></input>
                            <input type="text" style={{ visibility: 'hidden' }} id="template_id" name="template_id" value={template_id}></input>
                            <input type="text" style={{ visibility: 'hidden' }} id="user_id" name="user_id" value={ApiCaller.userData.user_id}></input>
                            <input type="text" style={{ visibility: 'hidden' }} id="accesstoken" name="accesstoken" value={ApiCaller.userData.accesstoken}></input>
                            <button type="submit">submit</button>
                        </form>
                    </>
            }
        </>);
}
export default Tenmplatedetails;