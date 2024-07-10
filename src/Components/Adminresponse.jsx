import React, { useState } from 'react'
import Sidebar from './Sidebar'
import "./Adminresponse.css"
import background from '../images/background.png'
import Form from 'bootstrap/'

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

    <div>
         
       <div style={{backgroundImage:`url(${background})` ,backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"}} className="d-flex flex-row mb-3">
       <div className="p-2 w-25"> 
       <Sidebar/>
    </div>
  <div className="p-2 w-100" ><main>
      <h1>+ ADD MEDICINE</h1>
      <form onSubmit={handleSubmit}>
        <label for="medicine-name">MEDICINE NAME</label>
        <input type="text" id="medicine-name" value={name}onChange={(e)=>setName(e.target.value)} name="medicine-name" />
        <br />
        <br />
        <label for="drug-code">DRUG CODE</label>
        <input type="text" id="drug-code" value={code}onChange={(e)=>setCode(e.target.value)} name="drug-code" />
        <br />
        <br />
        <label for="Salt">SALT</label>
        <input type="text" id="Salt" value={salt}onChange={(e)=>setSalt(e.target.value)} name="Salt" />
        <br />
        <br />
        
        <label for="Batch-No">BATCH NUMBER</label>
        <input type="text" id="Batch-No" value={batch}onChange={(e)=>setBatch(e.target.value)} name="Batch-No" />
        <br />
        <br />
        <label for="Mrp">MRP</label>
        <input type="text" id="Mrp" value={price}onChange={(e)=>setPrice(e.target.value)} name="Mrp" />
        <br />
        <br />

        <input type="submit" value="SUBMIT" />
      </form>
      
    </main></div>
</div>
    </div>
  );
}
