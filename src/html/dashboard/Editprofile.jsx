import "../../css/buyer dashboard/Editprofile.css";
import "../../css/buyer dashboard/Personalinfo.css";
import { Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ApiCaller from "../../apiCaller.js/apiCaller";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../redux/actions/registAction";
import Loader from '../other/Loader';
import Error from '../other/Error';

function EditProfile() {
    const userLogin = useSelector((state) => state.loginReducer);
    const { userInfo } = userLogin;

    const updateProfile = useSelector((state) => state.updateUserDetailsReducer);
    const { loader, error } = updateProfile;

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [college, setCollege] = useState('');
    const [course, setCourse] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        setFirstName(userInfo?.name?.split(" ")[0]);
        setLastName(userInfo?.name?.split(" ")[1]);
        setAddress(userInfo?.address);
        setPincode(userInfo?.pincode);
        setCity(userInfo?.city);
        if (userInfo.is_creator !== 0) {
            setCollege(userInfo?.college);
            setCourse(userInfo?.course);
        }
    }, [userInfo]);

    const handleUpdateUser = (e) => {
        e.preventDefault();
        userInfo?.is_creator === 0 ? dispatch(updateUserProfile({ name: firstname + " " + lastname, address, city, pincode }, navigate)) : dispatch(updateUserProfile({ name: firstname + " " + lastname, address, city, pincode, college, course }, navigate))
    }

    return (
        <>
            {loader && <Loader />}
            {error && <Error />}
            <div className="personal-info">
                <div className="info"><div className="edit-icon"><Link to="/Dashboard/Personalinfo" style={{ fontSize: "120%", color: "rebeccapurple" }} ><i class="far fa-arrow-alt-circle-left"></i></Link><h3 className="dash-head">Edit Information</h3>
                </div>


                    <Form className="read">
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label className="label">First Name</Form.Label>
                                <Form.Control className="value" value={firstname} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="..." />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label className="label" >Last Name</Form.Label>
                                <Form.Control className="value" value={lastname} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="..." />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control style={{ width: "88%" }} as="textarea" value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="..." />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label className="label">City</Form.Label>
                                <Form.Control className="value" value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="..." />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label className="label">Pincode</Form.Label>
                                <Form.Control className="value" min={6} max={6} value={pincode} onChange={(e) => setPincode(e.target.value)} type="text" placeholder="..." />
                            </Form.Group>
                        </Row>

                        {userInfo?.is_creator !== 0 ? (
                            <>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label >College Name</Form.Label>
                                        <Form.Control type="text" placeholder="..." value={college} onChange={(e) => setCollege(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label  >Course Name</Form.Label>
                                        <Form.Control type="text" placeholder="..." value={course} onChange={(e) => setCourse(e.target.value)} />
                                    </Form.Group>
                                </Row>
                            </>
                        ) : null}

                        {/* <Link to="/Buyerdash/Personalinfo"> */}
                        <button onClick={handleUpdateUser} variant="primary" type="submit" className="dash-button" style={{ marginTop: "10px", padding: '1.5% 2% 1.5% 2%' }}>
                            Edit Profile
                        </button>

                    </Form>
                </div>

            </div>

        </>
    );
}
export default EditProfile;