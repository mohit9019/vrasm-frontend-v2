import { useState } from "react";
import { Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from "react-toastify";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import ApiCaller from "../../apiCaller.js/apiCaller";

function Tenmplatedetails() {
    const [Details_saved, setDetails_saved] = useState(0);
    const [template_id, setTemplateId] = useState('');
    const [tech, setTech] = useState([]);
    // const [images, setImages] = useState([]);
    let images = { 0: '', 1: '' };
    let zip = '';

    /**
     * function to read images.
     * @param {} e 
     * @param {*} key 
     */
    function onImageChange(e, key) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = () => {
            images[key] = reader.result;
        }
    }

    /**
     * function to read zip file
     * @param {} e 
     */
    function onZipChange(e) {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = () => {
            zip = reader.result;
        }
    }

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
            if (apiCaller.validateResult(data)) {
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

    function imageUpload() {
        // integrate image upload api call here.
        // let formdata = new FormData();
        // formdata.set('images', [images['0'], images['1']]);
        // formdata.set('zip', zip);
        // formdata.set('user_id', ApiCaller?.userData?.user_id);
        // formdata.set('accesstoken', ApiCaller?.userData?.accesstoken);
        // formdata.set('template_id', template_id);
        // console.log('formdata',formdata)
        let body = {
            images:[images['0'], images['1']],
            zip,
            template_id,
        }

        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url: 'template/upload_image',
            data: body
        }).then(data => { 

        });
    }

    return (
        <>
            {
                false ?
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
                        <h3 className="n">Template Details</h3>
                        <div className="form1">
                            {/* <form onSubmit={uploadImages} enctype="multipart/form-data" method="POST" action="http://localhost:4000/v1/template/upload_image"> */}
                            <form onSubmit={imageUpload}>
                                <div className="doccol">
                                    <div className="doccol"><label className="doc-title">Promotional Image :</label><input className="doc-input" onChange={(e)=>onImageChange(e,'0')} type="file" name="file"></input></div>
                                    <div className="doccol"><label className="doc-title">Other Image :</label><input className="doc-input" onChange={(e)=>onImageChange(e,'1')} type="file" name="file"></input></div>
                                    <div className="doccol"><label className="doc-title">Zip File :</label><input className="doc-input" onChange={onZipChange} type="file" name="file"></input></div>
                                    {/* <input type="text" style={{ visibility: 'hidden' }} id="template_id" name="template_id" value={template_id}></input>
                                    <input type="text" style={{ visibility: 'hidden' }} id="user_id" name="user_id" value={ApiCaller.userData.user_id}></input>
                                    <input type="text" style={{ visibility: 'hidden' }} id="accesstoken" name="accesstoken" value={ApiCaller.userData.accesstoken}></input> */}
                                    <button className="doc-button" type="submit">submit</button>
                                </div>
                            </form>
                        </div>
                    </>
            }
        </>);
}
export default Tenmplatedetails;