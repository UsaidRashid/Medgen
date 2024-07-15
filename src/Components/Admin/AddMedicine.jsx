import React, { useState } from 'react'
import Sidebar from './Sidebar'
import background from '../../Images/response-bg.jpg'

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
   
       <div className='d-flex' style={{backgroundColor:'white', backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "80vh", backgroundPosition: "right", height: '95vh'}} >
        
           <Sidebar/> 
          <div style={{border: "2px solid black", width: "85vh", height: "84.6vh" ,margin: "2.7rem 0rem 2rem 7rem", backgroundColor: "white", borderRadius: "2rem", boxShadow: "6px 5px 13px rgba(0, 0, 0, 0.61)"}}>
             <h1 className='font-weight-bold' style={{margin:"1.3rem 0 0 4.5rem", color:"black"}}>+ ADD MEDICINE INFO</h1>
            <form className="form-group p-2 my-4" onSubmit={handleSubmit}>
            
              <div class="mb-3 px-3">
                <label for="medicine-name" class="form-label text-dark">MEDICINE NAME</label>
                <input type="text" style={{border: ".8px solid black"}} class="form-control" id="medicine-name" name="name" value={formData.name} onChange={handleChange} required/>
              </div>
              <div class="mb-3 px-3">
                <label for="drug-code" class="form-label text-dark">DRUG CODE</label>
                <input type="text" style={{border: ".8px solid black"}} class="form-control" id="drug-code" name="code" value={formData.code} onChange={handleChange} required/>
              </div>
              <div class="mb-3 px-3">
                <label for="Salt" class="form-label text-dark">SALT</label>
                <input type="text" style={{border: ".8px solid black"}} class="form-control" id="Salt" name="salt" value={formData.salt}onChange={handleChange} required/>
              </div>
              <div class="mb-3 px-3">
                <label for="Batch-No" class="form-label text-dark">BATCH NUMBER</label>
                <input type="text" style={{border: ".8px solid black"}} class="form-control" id="Batch-No" name="batch" value={formData.batch} onChange={handleChange} required/>
              </div>
              <div class="mb-3 px-3">
                <label for="Mrp" class="form-label text-dark">MRP</label>
                <input type="text" style={{border: ".8px solid black"}} class="form-control" id="Mrp" name="price" value={formData.price} onChange={handleChange} required/>
              </div>
              <button type="submit" class="fs-6 btn btn-primary" style={{margin:".6rem 0 0 28.4rem", borderRadius: ".7rem", width:"120px",  boxShadow: "2px 3px 7px rgba(0, 0, 0, 0.4)"}}>SUBMIT</button>
            </form>
            </div>
            </div>
             </div>
            
    
  );
}
