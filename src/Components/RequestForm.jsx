import React from 'react';
import '../CSS/RequestForm.css'
export default function RequestForm() {
      return (
        <>
          <div className="contact-container">
            <form action className="contactLeft">
              <div className="contactLeftTitle">
                <h2>Get in touch </h2>
                <hr/>
              </div>
              <input type="text" name="name" placeholder="Enter your name" className="contactInputs" required />
              <input type="email" name="email" placeholder="Enter your email" className="contactInputs" required />
              <textarea placeholder="Enter your medicine with your message " className="contactInputs" required defaultValue={""} />
              <button type="submit">Submit <img src="assets/arrow_icon.png" /></button>
            </form>
            <div className="contactRight">
              <img src="assets/right_img.png"/>
            </div>
          </div>         
        </>
      );
    }