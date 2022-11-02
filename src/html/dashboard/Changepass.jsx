import ApiCaller from "../../apiCaller.js/apiCaller";
import { toast } from "react-toastify";
import "../../css/buyer dashboard/Changepass.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../redux/actions/registAction";
import Loader from '../other/Loader';
import Error from '../other/Error';
function Changepass() {
    const pass = useSelector(state => state.changePasswordReducer)
    const { loading, error } = pass;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChangePassword = (e) => {
        e.preventDefault();
        let body = {
            old_password: e.target.old_password.value,
            new_password: e.target.new_password.value,
        }
        dispatch(changePassword(body, navigate))
    }
    const [password, setPassword] = useState(null);
    const [cpassword, setcPassword] = useState(null);
    return (
        <>
            {loading && <Loader />}
            {error && <Error />}
            <div className="change-password">
                <div className="change">
                    <Form onSubmit={handleChangePassword}>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label style={{ fontSize: "15px" }}>Old Password</Form.Label>
                            <Form.Control type="password" name="old_password" placeholder="Old Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label style={{ fontSize: "15px" }}>New Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="new_password" placeholder="New Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label style={{ fontSize: "15px" }}>Confirm Password</Form.Label>
                            <Form.Control type="password" value={cpassword} onChange={(e) => setcPassword(e.target.value)} placeholder="Confirm Password" />
                            {password !== cpassword ? <span className="password-caution"><i class="fal fa-exclamation-circle"></i> password doesn't matched</span> : null}
                        </Form.Group>
                        <Form.Text >
                            {/* <Link to="#" style={{textDecoration:"none"}}>
        Forgot Password ?</Link> */}
                        </Form.Text>
                        <Form.Group className="mb-3">
                            <button type="submit" style={{ marginTop: "10px", padding: '2%' }} className="dash-button" disabled={password !== cpassword ? true : false}>Edit Password</button>
                        </Form.Group>
                    </Form>

                </div></div>
        </>
    );
}
export default Changepass;