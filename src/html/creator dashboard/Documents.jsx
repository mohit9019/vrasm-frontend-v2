import {Form,Button} from "react-bootstrap";
import {Link} from "react-router-dom";
function Documents() {
    return (
        <>
            <h3 className="n">Upload Documents</h3>
            <div className="documents">
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Promotional Image</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Other Images</Form.Label>
                    <Form.Control type="file" multiple />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Product File</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Link to="/Creatordash/Uploadtemp/Templatedetails"><button className="dash-button" variant="primary" type="submit" style={{ marginTop: "10px",padding:'1.5% 2% 1.5% 2%' }}>
                <i class="fas fa-arrow-circle-left"></i>
                        </button></Link>

                        <Link to=""><button className="dash-button" variant="primary" type="submit" style={{ marginTop: "10px", padding:'1.5% 2% 1.5% 2%',float:'right'}}>
                            Save & Next
                        </button></Link>
            </div>
        </>
    );
}
export default Documents;