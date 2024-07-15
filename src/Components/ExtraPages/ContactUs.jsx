import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mt-5 d-flex flex-column">
      <h1 className="mb-4">Contact Us</h1>
      <p>If you have any questions or need further assistance, feel free to reach out to us. We are here to help you.</p>
      <div className="row">
        <div className="col-md-6">
          <h5>Email</h5>
          <p>medgen@gmail.com</p>
        </div>
        <div className="col-md-6">
          <h5>Phone</h5>
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="col-md-12">
          <h5>Address</h5>
          <p>MedGen</p>
          <p>123 Health State</p>
          <p>Agra, Uttar Pradesh</p>
          <p>292002 , India</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;