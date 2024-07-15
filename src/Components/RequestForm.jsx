import React, { useState } from 'react';
import '../CSS/RequestForm.css'

export default function RequestForm() {
      const [formData,setFormData] = useState({
          name : '',
          email : '',
          medicine : '',
          query : '',
      });

      const handleChange = (e) =>{
        setFormData({
          ...formData,
          [e.target.name] : e.target.value,
        })
      };

      const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
      }

      

      return (
        <>
          <div className="contact-container">
            <form action className="contactLeft">
              <div className="contactLeftTitle">
                <h2>Get in touch </h2>
                <hr/>
              </div>
              <input type="text" name="name" onChange={handleChange} value={formData.name} placeholder="Enter your name" className="contactInputs" required />
              <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="Enter your email" className="contactInputs" required />
              <input type="name" name="medicine" onChange={handleChange} value={formData.medicine} placeholder="Enter Medicine Name" className="contactInputs" required />
              <textarea placeholder="Enter a message (optional) " name='query' onChange={handleChange} value={formData.query} className="contactInputs"/>
              <button type="submit" onClick={handleSubmit}>Submit <img src="assets/arrow_icon.png" /></button>
            </form>
            <div className="contactRight">
              <img src="assets/right_img.png"/>
            </div>
          </div>         
        </>
      );
    }