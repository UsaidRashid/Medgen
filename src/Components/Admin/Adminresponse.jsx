import React, { useState } from 'react'
import Sidebar from './Sidebar'
import background from '../../Images/background.png'

export default function Adminresponse() {
  const [formData,setFormData] = useState({
    name:'',
    code:'',
    salt:'',
    batch:'',
    price:'',
  });


  function handleSubmit(e){
      e.preventDefault();
      console.log(formData);
  }

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    })
  };

  return (
    <div >
       <div  className="grid-container" style={{backgroundColor:'#e6ffff'}} >
        <Sidebar/>
       
          
          
            
            <form className="form-group p-2 my-5" onSubmit={handleSubmit}>
              <h1>+ ADD MEDICINE</h1>
              <div class="mb-3">
                <label for="medicine-name" class="form-label">MEDICINE NAME</label>
                <input type="text" class="form-control" id="medicine-name" name="name" value={formData.name} onChange={handleChange} required/>
              </div>
              <div class="mb-3">
                <label for="drug-code" class="form-label">DRUG CODE</label>
                <input type="text" class="form-control" id="drug-code" name="code" value={formData.code} onChange={handleChange} required/>
              </div>
              <div class="mb-3">
                <label for="Salt" class="form-label">SALT</label>
                <input type="text" class="form-control" id="Salt" name="salt" value={formData.salt}onChange={handleChange} required/>
              </div>
              <div class="mb-3">
                <label for="Batch-No" class="form-label">BATCH NUMBER</label>
                <input type="text" class="form-control" id="Batch-No" name="batch" value={formData.batch} onChange={handleChange} required/>
              </div>
              <div class="mb-3">
                <label for="Mrp" class="form-label">MRP</label>
                <input type="text" class="form-control" id="Mrp" name="price" value={formData.price} onChange={handleChange} required/>
              </div>
              <button type="submit" class="btn btn-primary">SUBMIT</button>
            </form>
            </div>
            
            </div>
            
    
  );
}
