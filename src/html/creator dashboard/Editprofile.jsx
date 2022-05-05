import "../../css/buyer dashboard/Editprofile.css";
import "../../css/buyer dashboard/Personalinfo.css";
import {Form,Col,Row,} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiCaller from "../../apiCaller.js/apiCaller";
import { toast } from "react-toastify";

function Editprofile(){
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [college, setCollege] = useState('');
  const [course, setCourse] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    let apiCaller = new ApiCaller();
    apiCaller.postData({
        url: 'user/get_profile',
        data: {} // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
    }).then(res => {
        if (res && res.status_code == '1') {
            setUserProfile(res.data);
        }
        else {
          toast.error(res.status_message);
        }
    })
  }, []);

  function setUserProfile(data){
    setFirstName(data?.name.split(" ")[0]);
    setLastName(data?.name.split(" ")[1]);
    setAddress(data?.address);
    setPincode(data?.pincode);
    setCity(data?.city);
    setCollege(data?.college);
    setCourse(data?.course);
  }
  function updateUser(){
    let apiCaller = new ApiCaller();
    apiCaller.postData({
        url: 'user/set_profile',
        data: {name : firstname+" "+lastname, address, city, pincode, college, course} // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
    }).then(res => {
        if (res && res.status_code == '1') {
            ApiCaller.userData.name = firstname + " " + lastname;
            toast.success("Profile Updated Successfully");
            navigate('/Creatordash/Personalinfo');
        }
    })
  }
    return(
        <> 

<div className="personal-info">
            <div className="info"><div className="edit-icon"><h3 className="dash-head">Edit Information</h3>
            </div>


            <Form className="read">
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label >First Name</Form.Label>
      <Form.Control  type="text" placeholder="..." onChange={(e)=>setFirstName(e.target.value)} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label  >Last Name</Form.Label>
      <Form.Control  type="text" placeholder="..." onChange={(e)=>setLastName(e.target.value)} />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control as="textarea" type="text" placeholder="..." onChange={(e)=>setAddress(e.target.value)} />
  </Form.Group>

  <Row className="mb-3">
  <Form.Group as={Col} controlId="formGridCity">
      <Form.Label >City</Form.Label>
      <Form.Control type="text" placeholder="..." onChange={(e)=>setCity(e.target.value)} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label >Pincode</Form.Label>
      <Form.Control type="text" placeholder="..." onChange={(e)=>setPincode(e.target.value)} />
    </Form.Group>

  </Row>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label >College Name</Form.Label>
      <Form.Control type="text" placeholder="..." onChange={(e)=>setCollege(e.target.value)} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label  >Course Name</Form.Label>
      <Form.Control type="text" placeholder="..." onChange={(e)=>setCourse(e.target.value)} />
    </Form.Group>
  </Row>


  <Link to="/Creatordash/Personalinfo"><button variant="primary" type="submit" className="dash-button" style={{ marginTop: "10px",padding:'1.5% 2% 1.5% 2%' }}>
              Edit Profile
            </button></Link>

</Form>
</div>

            </div>

        </>
    );
}
export default Editprofile;