import React, { useState } from 'react';
import '../CSS/Storelocator.css';

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
    <div className="Store">
      <h1>Store Locator</h1>
      <div className="store-list my-5"> 
      <div class="md-form mt-2">
  <i class="material-icons mdc-button__icon"></i>
  <input class="form-control" id='larger' type="text" placeholder="&nbsp;&nbsp;&nbsp;Search" aria-label="Search"/>
</div>
        <ul>
          {stores.map(store => (
            <li key={store.id} className='my-5 mx-5'>
              <h3>{store.name}</h3>
              <p><strong>Store ID:</strong> {store.id}</p>
              <p><strong>Address:</strong> {store.address}</p>
              <p><strong>Latitude:</strong> {store.latitude}</p>
              <p><strong>Longitude:</strong> {store.longitude}</p>
              <p><strong>Pincode:</strong> {store.pincode}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Storelocator
