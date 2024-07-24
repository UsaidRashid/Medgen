import React,{useEffect,useState} from "react";
import DataTable from 'react-data-table-component';
import Sidebar from './Sidebar';
import axios from 'axios';

function Storedetails(){


    const [stores, setStores] = useState([]);

    useEffect(()=>{
      const fetchData = async () => {
        try{
          console.log("store");
           const response = await axios.post('http://localhost:6969/admin/fetch-stores');
           const{stores} =response.data;
           setStores(stores);
          }catch (error) {
            console.error("Error fetching data", error);
          }
        
        };
        fetchData();
        },);

    
    
    return( 
        <>
        <div className='d-flex flex-row bg-white'>
        <div>
                            <Sidebar/>
        </div>

        <div>


<table>
    <thead>
        <tr>
            <th>gst_No</th>
            
            <th>name</th>
            <th>latitude</th>
            <th>longitude</th>
            <th>pincode</th>
            <th>address</th>
            <th>owner</th>
            
        </tr>
    </thead>
    <tbody>
        {stores.map(store=>(

        <tr key={store.gst_No}>
            <td>{store.name}</td>
            <td>{store.latitude}</td>
            <td>{store.longitude}</td>   
            <td>{store.pincode}</td> 
            <td>{store.address}</td> 
            <td>{store.owner}</td> 
        </tr>
        ))
        }
    </tbody>
</table>
</div>

            </div>          
        </> 
)}

export default Storedetails;