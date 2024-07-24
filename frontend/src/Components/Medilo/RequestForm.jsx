
import waveInvert from '../../Images/wave-invert.png';
import upperImage from '../../Images/upper-1.png';
import wave from '../../Images/wave.png';
import lowerImage from '../../Images/lower-1.png';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

 
const RegistrationForm = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    medName: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(formData);

      const response = await axios.post('http://localhost:6969/medilo/request-medicine',formData);

      if( response.status===200){
          alert('Successfully Submited!');
      }else{
          alert('Check your connection and try again!....',response.message);
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



    <div style={{background:`url(${waveInvert})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'800px',width:'1500px'}}>
      <h1 className='text-white text-center fw-bold p-5'style={{fontSize:"55px"}}>Get In<b style={{color:'#00bbf0'}}> Touch</b> </h1>
      <img src={upperImage} className='position-absolute' style={{marginTop:'10px',marginLeft:"800px",width:"500px",height:"500px"}} alt="" />
    </div>

    <div style={{backgroundColor:"white"}}>

        <h1 className='text-center mb-5 text-dark'style={{fontSize:"50px"}}>Join our <b style={{color:'#004080'}}>MEDGEN </b>Family !</h1>
        <div className="formSection mx-5 border border-dark p-5" style={{boxShadow:'0 -5px 10px #232424' , borderRadius:'50px', backgroundColor:"white"}}>
              <Form className='mx-5' onSubmit={handleSubmit} >
               
                  <Form.Group as={Col} controlId="name" >
                    <Form.Control type="text"  name="name" placeholder="Enter Your Name" onChange={handleChange}  value={formData.name} className='border border-3 rounded-5' />
                  </Form.Group>
                  <div className=' my-5'>
                  </div>
                  <Form.Group as={Col} controlId="Storelng">
                    <Form.Control type="text"   name="email" placeholder="Enter your email" onChange={handleChange} value={formData.email} className='border border-3 rounded-5'/>
                  </Form.Group>
                  <div className=' my-5'>
                  </div>
                  <Form.Group as={Col} controlId="medicine">
                    <Form.Control type="tel"    name="medName" placeholder="Enter your medicine" onChange={handleChange} value={formData.medName} className='border border-3 rounded-5' />
                  </Form.Group>
                  <div class="my-5">
    <textarea className="form-control 'border border-3 rounded-3'" id="exampleFormControlTextarea1" rows="3" placeholder='Enter your message(optional)' name="message" value={formData.message} onChange={handleChange}></textarea>
  </div>


                
                <div className='d-grid gap-2 col-6 mx-auto my-5 mb-3  py-4 w-25'>
                <Button type="submit" className='btn h-100 w-100' style={{backgroundColor:'black',fontSize:'20px',color:'white'}}>
               Submit
                </Button>
                </div>
               
              </Form>
        </div>
    </div>
    <div className='' style={{background:`url(${wave})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'900px',width:'1600px',marginTop:'0px'}}>
      <img src={lowerImage} className='position-absolute' style={{marginTop:'400px' ,marginLeft:"150px" , width:"500px",height:"500px"}} height='500px' alt="" />
      <h1 className='text-white position-absolute ' style={{marginTop:'250px',marginLeft:'400px',fontFamily:"initial",fontSize:"50px"}}>YOUR HEALTH IS OUR MISSION</h1>
        <div className='position-absolute' style={{marginTop:'700px',marginLeft:'500px'}}>
        <div className='d-flex flex-row'>
      </div>
        </div>

      
      
    </div>
    <div className='mt-5'></div>

    </div>
  );
};

export default RegistrationForm;
