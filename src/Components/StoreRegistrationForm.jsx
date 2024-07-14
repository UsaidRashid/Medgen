import React, { useState } from 'react';

export default function StoreRegistrationForm() {
  const [formData,setFormData] = useState({
    store:{
      storeName:'',
      longitude : '',
      latitude : '',
      pin:'',
      address : '',
    },
    owner:{
      name:'',
      contact : '',
      address :'',
    }
  });

  const handleStoreChange = (e) =>{
    setFormData({
      ...formData,
      store:{
        ...formData.store,
        [e.target.name] : e.target.value,
      }
    })
  }

  const handleOwnerChange = (e) =>{
    setFormData({
      ...formData,
      owner:{
        ...formData.owner,
        [e.target.name] : e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }


  return (
    <div className= 'bg-primary'>
       <style dangerouslySetInnerHTML={{__html: "\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  \n\nh1 {\n  text-align: center;\n  }\n\n.container {\n  width: 50%;\n  margin: 0 auto;\n  padding: 20px;\n  border-radius: 5px;\n}\n\nlabel {\n  display: block;\n  margin-top: 20px;\n}\n\ninput[type=\"text\"] {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  box-sizing: border-box;\n}\n" }} />
       
        <h1>REGISTER YOUR STORE</h1>
        <div className="container">
          <label htmlFor="store-name">Store name</label>
          <input type="text" id="store-name" name='name' value={formData.store.name} onChange={handleStoreChange} placeholder="Enter the name" />
          <label htmlFor="store-coordinates">Store co-ordinates</label>
          <div>
            <label htmlFor="longitude">Longitude</label>
            <input type="text" id="longitude" name='longitude' value={formData.store.longitude} onChange={handleStoreChange} placeholder="Enter the value" />
          </div>
          <div>
            <label htmlFor="latitude">Latitude</label>
            <input type="text" id="latitude" name='latitude' value={formData.store.latitude} onChange={handleStoreChange} placeholder="Enter the value" />
          </div>
          <label htmlFor="store-pin-code">Store pin code</label>
          <input type="text" id="store-pin-code" name='pin' value={formData.store.pin} onChange={handleStoreChange} placeholder="Enter the value" />
          <label htmlFor="store-address">Store address</label>
          <input type="text" id="store-address" name='address' value={formData.store.address} onChange={handleStoreChange} placeholder="Enter the address" />
          <label htmlFor="store-owner">Store owner :-</label>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name='name' value={formData.owner.name} onChange={handleOwnerChange} placeholder="Enter the name" />
          </div>
          <label htmlFor="contact-no">Contact no.</label>
          <input type="text" id="contact-no" name='contact' value={formData.owner.contact} onChange={handleOwnerChange} placeholder="Enter the number" />
          <label htmlFor="residential-address">Residential address</label>
          <input type="text" id="residential-address" name='address' value={formData.owner.address} onChange={handleOwnerChange} placeholder="Enter the address" />
        <button type='submit' onClick={handleSubmit} className='btn btn-success my-5 w-100'>Submit</button>
        </div>
      </div>
    );
  }
