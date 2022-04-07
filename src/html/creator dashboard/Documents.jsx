import {Form,Button} from "react-bootstrap";
import {Link} from "react-router-dom";
function Documents() {
    return (
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
                    <Form.Control name="template_id" type="file" value="6225a181ffb0259ddab852ba" multiple />
                </Form.Group>
                <Link to="/Creatordash/Uploadtemp/Templatedetails"><button className="dash-button" variant="primary" name="file" type="submit" style={{ marginTop: "10px",padding:'1.5% 2% 1.5% 2%' }}>
                <i class="fas fa-arrow-circle-left"></i>
                        </button></Link>

                        <Link to=""><button className="dash-button" variant="primary" name="file" type="submit" style={{ marginTop: "10px", padding:'1.5% 2% 1.5% 2%',float:'right'}}>
                            Save & Next
                        </button></Link>
                        </form>
            </div>
        </>
    );
}
export default Documents;