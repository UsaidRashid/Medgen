
import React, { useState } from 'react';
import waveInvert from '../Images/wave-invert.png';
import upperImage from '../Images/upper-image.png';
import wave from '../Images/wave.png';
import lowerImage from '../Images/lower.png';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

//import {useNavigate} from 'react-router-dom';

const RegistrationForm = () => {
  //const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    collegeName: '',
    semester: '',
    state: '',
    internship: '',
    availability6Months: false,
    paidInternship: false,
    password : '',
    username : '',
    source:'',
  });

  const states = [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jammu and Kashmir",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal"
    ];

    const sources = [
      "Facebook",
      "Linked-In",
      "Internshala",
      "College",
      "Friend",
      "Some News",
    ]


  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? event.target.checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

  };

  return (
    <div>



    <div style={{background:`url(${waveInvert})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'800px',width:'1500px'}}>
      <h1 className='text-white text-center fw-bold p-5'style={{fontSize:"55px"}}>Register Your<b style={{color:'#00bbf0'}}> Store</b> </h1>
      <img src={upperImage} className='position-absolute' style={{marginTop:'10px',marginLeft:"800px",width:"500px",height:"500px"}} alt="" />
    </div>

    <div id='intern'style={{backgroundColor:"white"}}>

        <h1 className='text-center mb-5 text-dark'style={{fontSize:"50px"}}>Join our <b style={{color:'#004080'}}>MEDGEN </b>Family !</h1>
        <div className="formSection mx-5 border border-dark p-5" style={{boxShadow:'0 -5px 10px #232424' , borderRadius:'50px', backgroundColor:"white"}}>
              <Form onSubmit={handleSubmit} className='mx-5' >
               
                  <Form.Group as={Col} controlId="Storename">
                    <Form.Label>Store Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter Store Name" />
                  </Form.Group>
                  <div className=' my-2 text-dark'>
                    <label>Enter Store Co-ordinates</label>
                  </div>
                  <Form.Group as={Col} controlId="Storelng">
                    <Form.Label>Store Longitude Co.</Form.Label>
                    <Form.Control type="text" name="longitude" value={formData.longitude} onChange={handleInputChange} placeholder="Enter store Longitude co." />
                  </Form.Group>
  
                  <Form.Group as={Col} controlId="Storelat">
                    <Form.Label>Store Latitude Co.</Form.Label>
                    <Form.Control type="text" name="latitude" value={formData.latitude} onChange={handleInputChange} placeholder="Enter store latitude co." />
                  </Form.Group>
                  <Form.Group as={Col} controlId="StorePincode">
                    <Form.Label>Store Pincode</Form.Label>
                    <Form.Control type="text" name="pincode" inputmode="numeric" maxlength="6" value={formData.pincode} onChange={handleInputChange} placeholder="Enter Pincode (******)" />
                  </Form.Group>
              
                  <Form.Group as={Col} controlId="StoreAddress">
                    <Form.Label>Store Address</Form.Label>
                    <Form.Control type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Enter Store Address" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="StoreOwnerName">
                    <Form.Label>Store Owner Name</Form.Label>
                    <Form.Control type="text" name="owner name" value={formData.ownername} onChange={handleInputChange} placeholder="Owner Name" />
                  </Form.Group>
                
                  <Form.Group as={Col} controlId="Contactno.">
                    <Form.Label>Owner Contact No.</Form.Label>
                    <Form.Control type="tel" name="telephone" value={formData.telephone} onChange={handleInputChange} placeholder="Enter Owner Tel No." />
                  </Form.Group>
                  <Form.Group as={Col} controlId="Residentialaddess">
                    <Form.Label>Residential Address</Form.Label>
                    <Form.Control type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Owner Residential Address" />
                  </Form.Group>


                
                <div className='d-grid gap-2 col-6 mx-auto my-5 mb-3  py-5 w-25'>
                <Button variant="primary" type="submit" className='btn' style={{backgroundColor:'#00bbf0'}}>
                  Register
                </Button>
                </div>
               
              </Form>
        </div>
    </div>
    <div className='' style={{background:`url(${wave})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'900px',width:'1600px',marginTop:'0px'}}>
      <img src={lowerImage} className='position-absolute' style={{marginTop:'400px' ,marginLeft:"180px" , width:"600px",height:"600px"}} height='500px' alt="" />
      <h1 className='text-white position-absolute ' style={{marginTop:'300px',marginLeft:'400px',fontFamily:"initial",fontSize:"50px"}}>YOUR HEALTH IS OUR MISSION</h1>
        <div className='position-absolute' style={{marginTop:'850px',marginLeft:'500px'}}>
        <div className='d-flex flex-row'>
        {/* <div className='px-3 border border-1 border-dark rounded' style={{backgroundColor:'#00bbf0',marginLeft:'-450px' , marginRight:'350px'}}>
          <p className='text-white'>Available for next 6 months</p>
        </div>
        <div className='px-3 border border-1 border-dark rounded' style={{backgroundColor:'#00bbf0'}}>
          <p className='text-white'>Available for 4 hours a day</p>
        </div>
        <div className='px-3 border border-1 border-dark rounded' style={{backgroundColor:'#00bbf0', marginLeft:'370px'}}>
          <p className='text-white'>Available for 5 days a week</p>
        </div> */}
      </div>
        </div>

      
      
    </div>

    </div>
  );
};

export default RegistrationForm;
