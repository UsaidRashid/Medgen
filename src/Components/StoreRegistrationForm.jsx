import React from 'react';
import './StoreRegistrationForm.css';

function StoreRegistrationForm() {
  return (
    <div>
        <style dangerouslySetInnerHTML={{__html: "\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: #f4f4f4;\n}\n\nh1 {\n  text-align: center;\n  margin-top: 50px;\n}\n\n.container {\n  width: 50%;\n  margin: 0 auto;\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 5px;\n}\n\nlabel {\n  display: block;\n  margin-top: 20px;\n}\n\ninput[type=\"text\"] {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  box-sizing: border-box;\n}\n" }} />
        <h1>REGISTER YOUR STORE</h1>
        <div className="container">
          <label htmlFor="store-name">Store name</label>
          <input type="text" id="store-name" placeholder="Enter the name" />
          <label htmlFor="store-coordinates">Store co-ordinates</label>
          <div>
            <label htmlFor="longitude">Longitude</label>
            <input type="text" id="longitude" placeholder="Enter the value" />
          </div>
          <div>
            <label htmlFor="latitude">Latitude</label>
            <input type="text" id="latitude" placeholder="Enter the value" />
          </div>
          <label htmlFor="store-pin-code">Store pin code</label>
          <input type="text" id="store-pin-code" placeholder="Enter the value" />
          <label htmlFor="store-address">Store address</label>
          <input type="text" id="store-address" placeholder="Enter the address" />
          <label htmlFor="store-owner">Store owner :-</label>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter the name" />
          </div>
          <label htmlFor="contact-no">Contact no.</label>
          <input type="text" id="contact-no" placeholder="Enter the number" />
          <label htmlFor="residential-address">Residential address</label>
          <input type="text" id="residential-address" placeholder="Enter the address" />
        </div>
      </div>
    );
  }


export default StoreRegistrationForm;
