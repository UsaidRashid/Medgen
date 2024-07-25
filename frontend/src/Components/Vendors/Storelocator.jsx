import React, { useEffect, useState } from "react";
import axios from "axios";
import background from "../../Images/storeLocator.png";
import "../../CSS/Storeinfo.css"

function Storelocator() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:6969/store/fetch-stores"
        );
        const { stores } = response.data;
        setStores(stores);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  });

  return (
    <div className="Store text-dark  " style={{ backgroundColor: "white" }}>
      <h1 className="text-center fw-bold">Store Locator</h1>
      <div class="md-form mt-2 w-50" style={{ marginLeft: "380px",  boxShadow: "8px 8px 12px rgb(0,0,0,.2)", borderRadius:"1rem" }}>
        <input
          class="form-control"
          id="larger"
          type="text"
          placeholder="&nbsp;&nbsp;&nbsp;Search"
          aria-label="Search"
        />
      </div>
      <div>
        <ul
        className="d-flex flex-column flex-wrap justify-content-evenly" style={{color:"white"}}
        >
          {stores.map((store) => (
            <li
              className="my-3 h-50 d-flex flex-row justify-content-center " 
              key={store.id}
            >
              <div
                class="card border-2 border border-2 border-dark store-123" 
                style={{ width: "60rem", fontSize:"18px"}}
              >
                <div
                  class="card-body d-flex flex-column"
                  style={{ backgroundColor: "#E6E6FA", backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "14rem", backgroundPosition: "right"}}
                >
                  <h2 
                  class="card-title fw-bold font-monospace fs-2"
                  style={{marginTop:"1px"}}
                  >
                    {store.name}
                  </h2>
                  <p class="card-text ">
                    <strong>Address:</strong> {store.address}
                  </p>
                  <p class="card-text">
                    <strong>Latitude:</strong> {store.latitude}
                  </p>
                  <p class="card-text">
                    <strong>Longitude:</strong> {store.longitude}
                  </p>
                  <p class="card-text">
                    <strong>Pincode:</strong> {store.pincode}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Storelocator;
