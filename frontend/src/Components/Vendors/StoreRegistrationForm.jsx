
import React, { useState } from 'react';
import waveInvert from '../../Images/wave-invert.png';
import upperImage from '../../Images/upper-image.png';
import wave from '../../Images/wave.png';
import lowerImage from '../../Images/lower.png';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = () => {

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
      <div style={{ background: `url(${waveInvert})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '800px', width: '1500px' }}>
        <h1 className='text-white text-center fw-bold p-5' style={{ fontSize: "55px" }}>Register Your<b style={{ color: '#00bbf0' }}> Store</b> </h1>
        <img src={upperImage} className='position-absolute' style={{ marginTop: '10px', marginLeft: "800px", width: "500px", height: "500px" }} alt="" />
      </div>

      <div id='intern' style={{ backgroundColor: "white" }}>

          <h1 className='text-center mb-5 text-dark' style={{ fontSize: "50px" }}>Join our <b style={{ color: '#004080' }}>MEDGEN </b>Family !</h1>
          <div className="formSection mx-5 border border-dark p-5" style={{ boxShadow: '0 -5px 10px #232424', borderRadius: '50px', backgroundColor: "white" }}>
          <Form className='mx-5' onSubmit={handleSubmit}>

            <Form.Group as={Col} controlId="Storename">
              <Form.Label>Store Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter Store Name" value={formData.name} required onChange={handleChange} />
            </Form.Group>

            <div className=' my-2 text-dark'>
              <label>Enter Store Co-ordinates</label>
            </div>

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

            <div className='d-grid gap-2 col-6 mx-auto my-5 mb-3  py-5 w-25'>
              <Button variant="primary" type="submit" className='btn' style={{ backgroundColor: '#00bbf0' }}>
                Register
              </Button>
            </div>

          </Form>
        </div>
      </div>
      <div className='' style={{ background: `url(${wave})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '900px', width: '1600px', marginTop: '0px' }}>
        <img src={lowerImage} className='position-absolute' style={{ marginTop: '400px', marginLeft: "180px", width: "600px", height: "600px" }} height='500px' alt="" />
        <h1 className='text-white position-absolute ' style={{ marginTop: '300px', marginLeft: '400px', fontFamily: "initial", fontSize: "50px" }}>YOUR HEALTH IS OUR MISSION</h1>
        <div className='position-absolute' style={{ marginTop: '850px', marginLeft: '500px' }}>
          <div className='d-flex flex-row'>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RegistrationForm;
