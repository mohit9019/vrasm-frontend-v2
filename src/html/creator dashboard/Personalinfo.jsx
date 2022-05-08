import "../../css/buyer dashboard/Personalinfo.css";
import {Form,Col,Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiCaller from "../../apiCaller.js/apiCaller";

function Personalinfo(){
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [college, setCollege] = useState('');
  const [course, setCourse] = useState('');

  useEffect(() => {
    let apiCaller = new ApiCaller();
    apiCaller.postData({
        url: 'user/get_profile',
        data: {} // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
    }).then(res => {
        if (res && res.status_code == '1') {
            setUserProfile(res.data);
        }
    })
  }, []);

  function setUserProfile(data){
    setFirstName(data?.name.split(" ")[0]);
    setLastName(data?.name.split(" ")[1]);
    setAddress(data?.address);
    setPincode(data?.pincode);
    setCity(data?.city);
    setCity(data?.college);
    setCity(data?.course);
  } 
    return(
        <>
            <div className="personal-info">
            <div className="info"><div className="edit-icon">
            <h3 className="dash-head">Creators Information</h3>
            <Link to="/Creatordash/Editprofile" style={{color:"rgb(49, 49, 49)"}} className="edit"><i class="fas fa-edit"></i></Link></div>


            <Form className="read">
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label >First Name</Form.Label>
      <Form.Control type="text"  placeholder="..." value={firstname} style={{backgroundColor:'white'}} readOnly />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label >Last Name</Form.Label>
      <Form.Control type="text"  placeholder="..." value={lastname} style={{backgroundColor:'white'}} readOnly />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control as="textarea" type="text" value={address} style={{width:"90%",backgroundColor:'white'}} placeholder="..." readOnly />
  </Form.Group>

  <Row className="mb-3">
  <Form.Group as={Col} controlId="formGridCity">
      <Form.Label >City</Form.Label>
      <Form.Control  type="text" placeholder="..." value={city} style={{backgroundColor:'white'}} readOnly />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label >Pincode</Form.Label>
      <Form.Control  type="text" placeholder="..." value={pincode} style={{backgroundColor:'white'}} readOnly />
    </Form.Group>

    {/* <Form.Group as={Col} controlId="formGridZip">
      <Form.Label >Contact No.</Form.Label>
      <Form.Control  type="text" placeholder="..." style={{backgroundColor:'white'}} readOnly />
    </Form.Group> */}
  </Row>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label >College Name</Form.Label>
      <Form.Control type="text"  placeholder="..." value={college} style={{backgroundColor:'white'}} readOnly />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label >Course Name</Form.Label>
      <Form.Control type="text"  placeholder="..." value={course} style={{backgroundColor:'white'}} readOnly />
    </Form.Group>
  </Row>

</Form>
</div>
            </div>

            </>
    );
}export default Personalinfo;