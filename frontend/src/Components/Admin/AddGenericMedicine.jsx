import React, { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import Sidebar from './Sidebar'
import background from '../../Images/response-bg.jpg'
import axios from 'axios';

export default function AddGenericMedicine() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    code: '',
    salt: '',
    batch: '',
    price: '',
    alternativeFor: [{ name: '', code: '', salt: '', batch: '', price: '' }]
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAlternativeChange = (index, event) => {
    const { name, value } = event.target;
    const updatedAlternatives = formData.alternativeFor.map((alternative, i) =>
      i === index ? { ...alternative, [name]: value } : alternative
    );
    setFormData({ ...formData, alternativeFor: updatedAlternatives });
  };

  const addAlternativeField = () => {
    setFormData({
      ...formData,
      alternativeFor: [
        ...formData.alternativeFor,
        { name: '', code: '', salt: '', batch: '', price: '' }
      ]
    });
  };

  const deleteAlternativeField = (index) => {
    const updatedAlternatives = formData.alternativeFor.filter((_, i) => i !== index);
    setFormData({ ...formData, alternativeFor: updatedAlternatives });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post('http://localhost:6969/admin/add-generic', formData);
        console.log(response);
      if (response.status === 200) {
        alert(response.data.message);
        navigate("/admin/add-medicine");
      } else {
        alert('There was a problem in adding the medicine....', response.data.message);
      }
    } catch (error) {
      console.error("Error in Adding Medicine:", error);
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
      <div className='d-flex' style={{backgroundColor:'white', backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "80vh", backgroundPosition: "right", height: '95vh'}}>
        <Sidebar/>
        <div className="container-fluid" style={{border: "2px solid black", width: "85vh", height: "84.6vh", margin: "2.7rem 0rem 2rem 7rem", backgroundColor: "white", borderRadius: "2rem", boxShadow: "6px 5px 13px rgba(0, 0, 0, 0.61)"}}>
          <h1 className='font-weight-bold' style={{margin:"1.3rem 0 0 4.5rem", color:"black"}}>ADD</h1>
          <div className="overflow-auto" style={{maxHeight: "70vh"}}>
            <form className="form-group p-2 my-4" onSubmit={handleSubmit}>
              <h5>Generic Medicine Information...</h5>
              <div className="mb-3 px-3">
                <label htmlFor="medicine-name" className="form-label text-dark">MEDICINE NAME</label>
                <input  type="text" style={{border: ".8px solid black"}} className="form-control" id="medicine-name" name="name" value={formData.name} onChange={handleChange} required/>
              </div>
              <div className="mb-3 px-3">
                <label htmlFor="drug-code" className="form-label text-dark">DRUG CODE</label>
                <input  type="text" style={{border: ".8px solid black"}} className="form-control" id="drug-code" name="code" value={formData.code} onChange={handleChange} required/>
              </div>
              <div className="mb-3 px-3">
                <label htmlFor="Salt" className="form-label text-dark">SALT</label>
                <input  type="text" style={{border: ".8px solid black"}} className="form-control" id="Salt" name="salt" value={formData.salt} onChange={handleChange} required/>
              </div>
              <div className="mb-3 px-3">
                <label htmlFor="Batch-No" className="form-label text-dark">BATCH NUMBER</label>
                <input  type="number" style={{border: ".8px solid black"}} className="form-control" id="Batch-No" name="batch" value={formData.batch} onChange={handleChange} required/>
              </div>
              <div className="mb-3 px-3">
                <label htmlFor="Mrp" className="form-label text-dark">MRP</label>
                <input  type="number" style={{border: ".8px solid black"}} className="form-control" id="Mrp" name="price" value={formData.price} onChange={handleChange} required/>
              </div>
              <hr />
              <div className="mb-3">
                <h5>Branded Medicines Information...</h5>
              {formData.alternativeFor.map((alternative, index) => (
                <div key={index} className="mb-3">
                  <h6>Branded Medicine {index + 1}</h6>
                  <div className="mb-3 px-3">
                    <label htmlFor={`alt-medicine-name-${index}`} className="form-label text-dark">MEDICINE NAME</label>
                    <input required type="text" className="form-control" id={`alt-medicine-name-${index}`} name="name" value={alternative.name} onChange={(event) => handleAlternativeChange(index, event)} />
                  </div>
                  <div className="mb-3 px-3">
                    <label htmlFor={`alt-drug-code-${index}`} className="form-label text-dark">DRUG CODE</label>
                    <input required type="text" className="form-control" id={`alt-drug-code-${index}`} name="code" value={alternative.code} onChange={(event) => handleAlternativeChange(index, event)} />
                  </div>
                  <div className="mb-3 px-3">
                    <label htmlFor={`alt-salt-${index}`} className="form-label text-dark">SALT</label>
                    <input required type="text" className="form-control" id={`alt-salt-${index}`} name="salt" value={alternative.salt} onChange={(event) => handleAlternativeChange(index, event)} />
                  </div>
                  <div className="mb-3 px-3">
                    <label htmlFor={`alt-batch-${index}`} className="form-label text-dark">BATCH NUMBER</label>
                    <input required type="number" className="form-control" id={`alt-batch-${index}`} name="batch" value={alternative.batch} onChange={(event) => handleAlternativeChange(index, event)} />
                  </div>
                  <div className="mb-3 px-3">
                    <label htmlFor={`alt-price-${index}`} className="form-label text-dark">MRP</label>
                    <input required type="number" className="form-control" id={`alt-price-${index}`} name="price" value={alternative.price} onChange={(event) => handleAlternativeChange(index, event)} />
                  </div>
                  <button type="button" className="btn btn-danger" onClick={() => deleteAlternativeField(index)}>
                    Delete Alternative
                  </button>
                  <hr />
                </div>
              ))}
                <button type="button" className="btn btn-secondary" onClick={addAlternativeField}>
                  Add Alternative
                </button>
              </div>
              <button type="submit" className="fs-6 btn btn-primary" style={{margin:".6rem 0 0 28.4rem", borderRadius: ".7rem", width:"120px", boxShadow: "2px 3px 7px rgba(0, 0, 0, 0.4)"}}>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}  