import React from 'react'
import Sidebar from './Sidebar'
import "./Adminresponse.css"
import background from '../images/background.png'
import Form from 'bootstrap/'

export default function Adminresponse() {

  return (
    <div>
         
       <div style={{backgroundImage:`url(${background})` ,backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"}} className="d-flex flex-row mb-3">
       <div className="p-2 w-25"> 
       <Sidebar/>
    </div>
  <div className="p-2 w-100" ><main>
      <h1>+ ADD MEDICINE</h1>
      <form>
        <label for="medicine-name">MEDICINE NAME</label>
        <input type="text" id="medicine-name" name="medicine-name" />
        <br />
        <br />
        <label for="drug-code">DRUG CODE</label>
        <input type="text" id="drug-code" name="drug-code" />
        <br />
        <br />
        <label for="Salt">SALT</label>
        <input type="text" id="Salt" name="Salt" />
        <br />
        <br />
        
        <label for="Batch-No">BATCH NUMBER</label>
        <input type="text" id="Batch-No" name="Batch-No" />
        <br />
        <br />
        <label for="Mrp">MRP</label>
        <input type="text" id="Mrp" name="Mrp" />
        <br />
        <br />

        <input type="submit" value="SUBMIT" />
      </form>
      
    </main></div>
</div>
    </div>
  );
}
