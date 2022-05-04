import "../../css/buyer dashboard/Editprofile.css";
import "../../css/buyer dashboard/Personalinfo.css";
import { Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiCaller from "../../apiCaller.js/apiCaller";
import { toast } from "react-toastify";

function Editprofile() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');

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

  // function to set user data;
  function setUserProfile(data){
    setFirstName(data?.name.split(" ")[0]);
    setLastName(data?.name.split(" ")[1]);
    setAddress(data?.address);
    setPincode(data?.pincode);
    setCity(data?.city);
  }

  function updateUser(){
    let apiCaller = new ApiCaller();
    apiCaller.postData({
        url: 'user/set_profile',
        data: {name : firstname+" "+lastname, address, city, pincode} // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
    }).then(res => {
        if (res && res.status_code == '1') {
            toast.success("Profile Updated Successfully");
        }
    })
  }
  return (
    <>
      <div className="personal-info">
        <div className="info"><div className="edit-icon"><h3 className="dash-head">Edit Information</h3>
        </div>


          <Form className="read">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="label">First Name</Form.Label>
                <Form.Control className="value" value={firstname} onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder="Mohit" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="label" >Last Name</Form.Label>
                <Form.Control className="value" value={lastname} onChange={(e)=>setLastName(e.target.value)} type="text" placeholder="Chauhan" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control style={{ width: "88%" }} as="textarea" value={address} onChange={(e)=>setAddress(e.target.value)} type="text" placeholder="177 A Bleaker street, New York" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label className="label">City</Form.Label>
                <Form.Control className="value" value={city} onChange={(e)=>setCity(e.target.value)} type="text" placeholder="New York" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label className="label">Pincode</Form.Label>
                <Form.Control className="value" value={pincode} onChange={(e)=>setPincode(e.target.value)} type="text" placeholder="U.S.A" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label className="label">Contact Number</Form.Label>
                <Form.Control className="value" type="text" placeholder="123456789" />
              </Form.Group>
            </Row>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label >Profile Picture</Form.Label>
              <Form.Control type="file" style={{ width: "80%" }} />
            </Form.Group>

            <Link to="/Buyerdash/Personalinfo"><button onClick={()=>updateUser()} variant="primary" type="submit" className="dash-button" style={{ marginTop: "10px", padding: '1.5% 2% 1.5% 2%' }}>
              Edit Profile
            </button></Link>

          </Form>
        </div>

      </div>

    </>
  );
}
export default Editprofile;