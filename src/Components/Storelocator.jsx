import React, { useState } from 'react';
//import '../CSS/Storelocator.css';//

function Storelocator() {
  const [stores, setStores] = useState([
    {
      id: 1,
      name: 'Store A',
      address: '123 Main St, Delhi, India',
      latitude: 40.7128,
      longitude: -74.006,
      pincode: '12345'
    },
    {
      id: 2,
      name: 'Store B',
      address: '456 , Agra, India',
      latitude: 34.0522,
      longitude: -118.2437,
      pincode: '282004'
    },
    {
        id: 2,
        name: 'Store C',
        address: '456 , Agra, India',
        latitude: 34.0522,
        longitude: -118.2437,
        pincode: '282004'
      },
      {
        id: 2,
        name: 'Store D',
        address: '456 , Agra, India',
        latitude: 34.0522,
        longitude: -118.2437,
        pincode: '282004'
      },
    // Add more stores as needed
  ]);

  return (

    <div className="Store text-dark  " style={{backgroundColor:"#e6ffff"}}>
      <h1 className="text-center fw-bold">Store Locator</h1>
      <div class="md-form mt-2 w-50  shadow-lg" style={{marginLeft:"380px"}}>
  
  <input class="form-control" id='larger' type="text" placeholder="&nbsp;&nbsp;&nbsp;Search" aria-label="Search"/>
</div>
      <div className=" "> 
      
        <ul>
          {stores.map(store => (
            
            
            <li className="my-3 hover fs-3 p-2 h-50  d-flex  flex-row  justify-content-center " key={store.id}>
              <div class="card shadow-lg border-2 border-black bg-white" style={{width:"35rem"}}>
  
   <div class="card-body d-flex flex-column"style={{backgroundColor:"white"}}>
    <h2 class="card-title text-center fw-bold font-monospace ">{store.name}</h2>
    <p class="card-text"><strong>Store ID:</strong> {store.id}</p>
    <p class="card-text"><strong>Address:</strong> {store.address}</p>
    <p class="card-text"><strong>Latitude:</strong> {store.latitude}</p>
    <p class="card-text"><strong>Longitude:</strong> {store.longitude}</p>
    <p class="card-text"><strong>Pincode:</strong> {store.pincode}</p>
  </div>
</div>

            
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Storelocator
