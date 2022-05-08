import { useState } from "react";
import { Form, Col, MenuItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from "react-toastify";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import ApiCaller from "../../apiCaller.js/apiCaller";
// import { ToastContainer, toast, Flip, Zoom, Slide } from "react-toastify";

function Tenmplatedetails() {
    const [value, setValue] = useState('');
    const handleSelect = (e) => {
        setValue(e)
    }
    const [Details_saved, setDetails_saved] = useState(0);
    const [template_id, setTemplateId] = useState('');
    const [tech, setTech] = useState([]);
    function techSelect(selectedValue) {
        setTech(selectedValue);
    }
    function templateupload(e) { 
        e.preventDefault();
        let body = {
            creator_id: ApiCaller.userData.user_id, // this is sample creator_id of nandita mam for testing, you have to pass the creator_id when user comes
            name: e.target.name.value,
            description: e.target.description.value,
            technology: tech.join(","),
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
                                    <Form.Label style={{ fontSize: "15px" }}>Category</Form.Label>
                                    <Form.Select aria-label="Default select example" name="category" required>
                                        <option>Categories</option>
                                        <option value="Portfolio">Portfolio</option>
                                        <option value="Business">Business</option>
                                        <option value="Sports">Sports</option>
                                        <option value="Education">Education</option>
                                        <option value="Real-Estate">Real-Estate</option>
                                        <option value="Restaurant">Restaurant</option>
                                        <option value="Hospital">Hospital</option>
                                        <option value="Travelling">Travelling</option>
                                        <option value="Others">Others</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label style={{ fontSize: "15px" }}>Technologies</Form.Label>
                                    <DropdownMultiselect
                                        handleOnChange={techSelect}
                                        options={["HTML", "CSS", "ReactJs", "Bootstrap", "Wordpress", "PSD", "PPT", "Responsive"]}
                                        name="technology" id="technology" type="text" required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label style={{ fontSize: "15px" }}>Tags</Form.Label>
                                    <Form.Control name="tags" type="text" placeholder="#" required />
                                    <Form.Text className="text-muted">
                                        seperate tags with space.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label style={{ fontSize: "15px" }}>Price</Form.Label>
                                    <Form.Control name="price" type="number" min={50} max={2000} placeholder="Rs." required />
                                </Form.Group>

                                <button className="dash-button" style={{ marginTop: "10px", padding: '1.5% 2% 1.5% 2%' }} type="submit" >
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
                        {/* <h3 className="n">Upload Documents</h3>
                        <div className="documents">
                            <form enctype="multipart/form-data" method="POST" action="http://localhost:4000/v1/template/upload_image">
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Promotional Image</Form.Label>
                                    <Form.Control type="file" />
                                    <input type="text" style={{ visibility: 'hidden' }} id="template_id" name="template_id" value={template_id}></input>
                                </Form.Group>

                                <Form.Group controlId="formFileMultiple" className="mb-3">
                                    <Form.Label>Other Images</Form.Label>
                                    <Form.Control type="file" />
                                    <input type="text" style={{ visibility: 'hidden' }} id="user_id" name="user_id" value={ApiCaller.userData.user_id}></input>
                                </Form.Group>

                                <Form.Group controlId="formFileMultiple" className="mb-3">
                                    <Form.Label>Zip File</Form.Label>
                                    <Form.Control type="file" />
                                    <input type="text" style={{ visibility: 'hidden' }} id="accesstoken" name="accesstoken" value={ApiCaller.userData.accesstoken}></input>
                                </Form.Group>

                                <Link to="/Creatordash/Uploadtemp/Templatedetails"><button className="dash-button" variant="primary" name="file" type="submit" style={{ marginTop: "10px", padding: '1.5% 2% 1.5% 2%' }}>
                                    <i class="fas fa-arrow-circle-left"></i>
                                </button></Link>

                                <button className="dash-button" variant="primary" name="file" type="submit" style={{ marginTop: "10px", padding: '1.5% 2% 1.5% 2%', float: 'right' }}>
                                    Save & Next
                                </button>
                            </form>
                        </div> */}
                    </>
            }
        </>);
}
export default Tenmplatedetails;