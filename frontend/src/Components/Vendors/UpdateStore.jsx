import React,{useState} from 'react'

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function UpdateStore() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    longitude: "",
    latitude: "",
    pincode: "",
    address: "",
    gst_No: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:6969/store/register-store', {token,formData});

      if (response.status === 200) {
        alert(response.data.message);
        localStorage.removeItem('token');
        const token = response.data.token;
        localStorage.setItem('token',token);
        navigate("/");
      } else {
        alert('There was a problem in registring the store....', response.data.message);
      }

    } catch (error) {
        console.error("Error in Registering:", error);
        alert( `${error.name} -> ${error.message}`);
        if (error.response) {
          alert("Error from server: " + error.response.data.message);
        } else if (error.request) {
          alert("No response from the server");
        } else {
          alert("Error setting up the request: " + error.message);
        }
    }
};
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                <img
              src="image/store.png" style={{width:"50px" ,height:"500px"}}
              alt=""
              className="img-fluid w-100 h-500"
              id="img1"
            ></img>
                </div>
                <div className="col-md-6">
                <Form className='mx-5 mt-5' onSubmit={handleSubmit}>

<Form.Group as={Col} controlId="Storename">
  <Form.Label>Store Name</Form.Label>
  <Form.Control type="text" name="name" placeholder="Enter Store Name" value={formData.name} required onChange={handleChange} />
</Form.Group>

<Form.Group as={Col} controlId="Storelng">
  <Form.Label>Store Longitude Co.</Form.Label>
  <Form.Control type="text" name="longitude" placeholder="Enter store Longitude co." value={formData.longitude} required onChange={handleChange}/>
</Form.Group>

<Form.Group as={Col} controlId="Storelat">
  <Form.Label>Store Latitude Co.</Form.Label>
  <Form.Control type="text" name="latitude" placeholder="Enter store latitude co." value={formData.latitude} required onChange={handleChange}/>
</Form.Group>

<Form.Group as={Col} controlId="StorePincode">
  <Form.Label>Store Pincode</Form.Label>
  <Form.Control type="text" name="pincode" inputmode="numeric" maxlength="6" placeholder="Enter Pincode (******)" value={formData.pincode} required onChange={handleChange}/>
</Form.Group>

<Form.Group as={Col} controlId="StoreAddress">
  <Form.Label>Store Address</Form.Label>
  <Form.Control type="text" name="address" placeholder="Enter Store Address" value={formData.address} required onChange={handleChange}/>
</Form.Group>

<Form.Group as={Col} controlId="gst_No">
  <Form.Label>GST No.</Form.Label>
  <Form.Control type="text" name="gst_No" placeholder="Enter GST No." value={formData.gst_No} required onChange={handleChange}/>
</Form.Group>

<div className='d-grid gap-2 col-6 mx-auto my-4 mb-3  py-4 w-25'>
  <Button variant="primary" type="submit" className='btn' style={{ backgroundColor: '#00bbf0' }}>
    Update
  </Button>
</div>
              
</Form>
                </div>
            </div>
        </div>
    </div>
  )
}
