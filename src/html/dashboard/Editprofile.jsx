import "../../css/buyer dashboard/Editprofile.css";
import "../../css/buyer dashboard/Personalinfo.css";
import { Form, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiCaller from "../../apiCaller.js/apiCaller";
import { toast } from "react-toastify";

function Editprofile() {
  console.log('in edit profile');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  // const navigate = useNavigate();
  useEffect(() => {
    console.log('in getp')
    let apiCaller = new ApiCaller();
    apiCaller.postData({
        url: 'user/get_profile',
        data: {} // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
    }).then(res => {
        if (apiCaller.validateResult(res)) {
            setUserProfile(res.data);
        }
        else {
          toast.error(res.status_message);
        }
    })
  },[]);

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
        if (apiCaller.validateResult(res)) {
            ApiCaller.userData.name = firstname + " " + lastname;
            localStorage.setItem('userData',JSON.stringify(ApiCaller.userData));
            toast.success("Profile Updated Successfully");
            setTimeout(() => {
              // navigate('/Buyerdash/Personalinfo');
              
            }, 1000);
        }
    })
  }
  return (
    <>
      <div className="personal-info">
        <div className="info"><div className="edit-icon"><Link to="/Creatordash/Personalinfo" style={{fontSize:"120%",color:"rebeccapurple"}} ><i class="far fa-arrow-alt-circle-left"></i></Link><h3 className="dash-head">Edit Information</h3>
        </div>


          <Form className="read">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="label">First Name</Form.Label>
                <Form.Control className="value" value={firstname} onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder="..." />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="label" >Last Name</Form.Label>
                <Form.Control className="value" value={lastname} onChange={(e)=>setLastName(e.target.value)} type="text" placeholder="..." />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control style={{ width: "88%" }} as="textarea" value={address} onChange={(e)=>setAddress(e.target.value)} type="text" placeholder="..." />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label className="label">City</Form.Label>
                <Form.Control className="value" value={city} onChange={(e)=>setCity(e.target.value)} type="text" placeholder="..." />
              </Form.Group>
 
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label className="label">Pincode</Form.Label>
                <Form.Control className="value" min={6} max={6} value={pincode} onChange={(e)=>setPincode(e.target.value)} type="text" placeholder="..." />
              </Form.Group>

            </Row>

            {/* <Link to="/Buyerdash/Personalinfo"> */}
              <button onClick={()=>updateUser()} variant="primary" type="submit" className="dash-button" style={{ marginTop: "10px", padding: '1.5% 2% 1.5% 2%' }}>
              Edit Profile
            </button>

          </Form>
        </div>

      </div>

    </>
  );
}
export default Editprofile;