import "../../css/buyer dashboard/Personalinfo.css";
import { Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiCaller from "../../apiCaller.js/apiCaller";
import { useSelector } from "react-redux";

function PersonalInfo() {
    const userLogin = useSelector((state) => state.loginReducer);
    const { userInfo } = userLogin;
    return (
        <>
            <div className="personal-info">
                <div className="info"><div className="edit-icon">
                    <h3 className="dash-head">{userInfo?.is_creator === 0 ? "Buyers" : "Creators"} Information</h3>
                    <Link to="/Dashboard/Editprofile" style={{ color: "rgb(49, 49, 49)" }} className="edit"><i class="fas fa-edit"></i></Link></div>

                    <Form className="read">
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>First Name</Form.Label>
                                {/* <Form.Control type="text" placeholder="..." value={firstname} style={{ backgroundColor: 'white' }} readOnly /> */}
                                <Form.Control type="text" placeholder="..." value={userInfo?.name?.split(" ")[0] ? userInfo.name.split(" ")[0] : ''} style={{ backgroundColor: 'white' }} readOnly />

                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Last Name</Form.Label>
                                {/* <Form.Control type="text" placeholder="..." value={lastname} style={{ backgroundColor: 'white' }} readOnly /> */}
                                <Form.Control type="text" placeholder="..." value={userInfo?.name?.split(" ")[1] ? userInfo.name.split(" ")[1] : ''} style={{ backgroundColor: 'white' }} readOnly />

                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            {/* <Form.Control as="textarea" type="text" value={address} style={{ width: "90%", backgroundColor: 'white' }} placeholder="...." readOnly /> */}
                            <Form.Control as="textarea" type="text" value={userInfo?.address ? userInfo.address : ''} style={{ width: "90%", backgroundColor: 'white' }} placeholder="...." readOnly />

                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                {/* <Form.Control type="text" placeholder="..." value={city} style={{ backgroundColor: 'white' }} readOnly /> */}
                                <Form.Control type="text" placeholder="..." value={userInfo?.city ? userInfo.city : ''} style={{ backgroundColor: 'white' }} readOnly />

                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Pincode</Form.Label>
                                {/* <Form.Control type="text" placeholder="..." value={pincode} style={{ backgroundColor: 'white' }} readOnly /> */}
                                <Form.Control type="text" placeholder="..." value={userInfo?.pincode ? userInfo.pincode : ''} style={{ backgroundColor: 'white' }} readOnly />

                            </Form.Group>

                            {/* <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Contact No.</Form.Label>
      <Form.Control type="text" placeholder="..." style={{backgroundColor:'white'}} readOnly />
    </Form.Group> */}
                        </Row>

                        {userInfo?.is_creator !== 0 ? (
                            <>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label >College Name</Form.Label>
                                        <Form.Control type="text" placeholder="..." value={userInfo?.college ? userInfo.college : ''} style={{ backgroundColor: 'white' }} readOnly />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label >Course Name</Form.Label>
                                        <Form.Control type="text" placeholder="..." value={userInfo?.course ? userInfo.course : ''} style={{ backgroundColor: 'white' }} readOnly />
                                    </Form.Group>
                                </Row>
                            </>
                        ) : null}

                    </Form>
                </div>

            </div>
        </>
    );
}
export default PersonalInfo;