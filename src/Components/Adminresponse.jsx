import React, { useState } from 'react'
import Sidebar from './Sidebar'
import background from '../images/background.png'

export default function Adminresponse() {
const[name,setName]=useState('');
const[code,setCode]=useState('');
const[salt,setSalt]=useState('');
const[batch,setBatch]=useState('');
const[price,setPrice]=useState('');
function handleSubmit(e){
    e.preventDefault();
    console.log(name);
    console.log(code);
    console.log(salt);
    console.log(batch);
    console.log(price);
}
  return (
    <div >
       <div  className="grid-container" style={{backgroundImage:`url(${background})` ,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
        <Sidebar/>
       
          
          
            
            <form className="form-group p-2 my-5" onSubmit={handleSubmit}>
              <h1>+ ADD MEDICINE</h1>
              <div class="mb-3">
                <label for="medicine-name" class="form-label">MEDICINE NAME</label>
                <input type="text" class="form-control" id="medicine-name" name="medicine-name" value={name} onChange={(e)=>setName(e.target.value)} required/>
              </div>
              <div class="mb-3">
                <label for="drug-code" class="form-label">DRUG CODE</label>
                <input type="text" class="form-control" id="drug-code" name="drug-code" value={code} onChange={(e)=>setCode(e.target.value)} required/>
              </div>
              <div class="mb-3">
                <label for="Salt" class="form-label">SALT</label>
                <input type="text" class="form-control" id="Salt" name="Salt" value={salt}onChange={(e)=>setSalt(e.target.value)} required/>
              </div>
              <div class="mb-3">
                <label for="Batch-No" class="form-label">BATCH NUMBER</label>
                <input type="text" class="form-control" id="Batch-No" name="Batch-No" value={batch} onChange={(e)=>setBatch(e.target.value)} required/>
              </div>
              <div class="mb-3">
                <label for="Mrp" class="form-label">MRP</label>
                <input type="text" class="form-control" id="Mrp" name="Mrp" value={price} onChange={(e)=>setPrice(e.target.value)} required/>
              </div>
              <button type="submit" class="btn btn-primary">SUBMIT</button>
            </form>
            </div>
            
            </div>
            
    
  );
}
