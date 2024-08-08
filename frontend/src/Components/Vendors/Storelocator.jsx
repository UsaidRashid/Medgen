import React, { useEffect, useState } from "react";
import axios from "axios";
import background from "../../Images/storeLocator.png";
// import "../../CSS/Storeinfo.css";
import { useNavigate } from "react-router-dom";

function Storelocator() {
  const [stores, setStores] = useState([]);
  const [pincode, setPin] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          process.env.REACT_APP_BACKEND_URL + "/store/fetch-stores"
        );
        if (response.status === 200) {
          setStores(response.data.stores);
        } else {
          alert(
            response.data.message
              ? response.data.message
              : `Error Fetching Stores`
          );
        }
      } catch (error) {
        console.error("Error in Registering:", error);
        console.log(`${error.name} -> ${error.message}`);
        if (error.response) {
          alert("Error from server: " + error.response.data.message);
        } else if (error.request) {
          alert("No response from the server");
        } else {
          alert("Error setting up the request: " + error.message);
        }
      }
    };
    if (pincode === "") fetchData();
  });

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/store/fetch-stores",
        { pincode }
      );
      if (response.status === 200) {
        alert(`Fetched stores at pincode ${pincode} successfully`);
        setStores(response.data.stores);
      } else {
        alert(
          response.data.message
            ? response.data.message
            : `Error Fetching Stores at pincode ${pincode}`
        );
      }
    } catch (error) {
      console.error("Error in Searching:", error);
      console.log(`${error.name} -> ${error.message}`);
      if (error.response) {
        alert("Error from server: " + error.response.data.message);
      } else if (error.request) {
        alert("No response from the server");
      } else {
        alert("Error setting up the request: " + error.message);
      }
    }
  };

  const openStore = (_id) => {
    navigate(`/view-single-store?key=${_id}`);
  };

  return (
    // <div className="Store text-dark  " style={{ backgroundColor: "white" }}>
    //   <h1 className="text-center fw-bold">Store Locator</h1>

    //   <div
    //     className="input-group mt-2 w-50 mx-auto"
    //     style={{
    //       boxShadow: "8px 8px 12px rgba(0,0,0,0.2)",
    //       borderRadius: "1rem",
    //       overflow: "hidden",
    //     }}
    //   >
    //     <input
    //       type="text"
    //       className="form-control"
    //       placeholder="Search by Pincode"
    //       aria-label="Search"
    //       value={pincode}
    //       onChange={(e) => setPin(e.target.value)}
    //       style={{ border: "none", boxShadow: "none" }}
    //     />
    //     <div className="input-group-append">
    //       <button
    //         className="btn btn-primary"
    //         type="button"
    //         onClick={handleSearch}
    //         style={{ border: "none" }}
    //       >
    //         <i className="fas fa-search"></i> Search
    //       </button>
    //     </div>
    //   </div>

    //   <div>
    //     <ul
    //       className="d-flex flex-column flex-wrap justify-content-space-evenly"
    //       style={{ color: "white" }}
    //     >
    //       {stores.map((store) => (
    //         <li
    //           className="my-3 h-50 d-flex flex-row justify-content-center "
    //           key={store.id}
    //           onClick={() => openStore(store._id)}
    //         >
    //           <div
    //             class="card border border-2 border-dark "
    //             style={{ width: "60rem", fontSize: "18px" }}
    //           >
    //             <div class="card-body d-flex flex-column " style={{ marginLeft: '-700px' }}>
    //               <img
    //                 src={store.storePic ? store.storePic : background}
    //                 alt=""
    //                 style={{
    //                   width: "10rem",
    //                   position: "absolute",
    //                   right: 0,
    //                 }}
    //                 className="mt-4 me-4"
    //               />
    //               <h2
    //                 class="card-title fw-bold font-monospace fs-2"
    //                 style={{ margin: "1px 0 0 2rem" }}
    //               >
    //                 {store.name}
    //               </h2>
    //               <div style={{ margin: "1px 0 0 2rem" }}>
    //                 <p class="card-text ">
    //                   <strong>Address:</strong> {store.address}
    //                 </p>
    //                 <p class="card-text">
    //                   <strong>Latitude:</strong> {store.latitude}
    //                 </p>
    //                 <p class="card-text">
    //                   <strong>Longitude:</strong> {store.longitude}
    //                 </p>
    //                 <p class="card-text">
    //                   <strong>Pincode:</strong> {store.pincode}
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
    <div className="Store text-dark" style={{ backgroundColor: "white" }}>
    <h1 className="text-center fw-bold">Store Locator</h1>
  
    <div
      className="input-group mt-2 mx-auto"
      style={{
        boxShadow: "8px 8px 12px rgba(0,0,0,0.2)",
        borderRadius: "1rem",
        overflow: "hidden",
        maxWidth: "500px",
        width: "100%",
      }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Search by Pincode"
        aria-label="Search"
        value={pincode}
        onChange={(e) => setPin(e.target.value)}
        style={{ border: "none", boxShadow: "none" }}
      />
      <div className="input-group-append">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSearch}
          style={{ border: "none" }}
        >
          <i className="fas fa-search"></i> Search
        </button>
      </div>
    </div>
  
    <div>
      <ul className="d-flex flex-column flex-wrap justify-content-space-evenly" style={{ color: "white" }}>
        {stores.map((store) => (
          <li
            className="my-3 d-flex justify-content-center"
            key={store.id}
            onClick={() => openStore(store._id)}
          >
            <div
              className="card border border-2 border-dark"
              style={{ width: "100%", maxWidth: "60rem", fontSize: "18px" }}
            >
              <div
                class="card border border-2 border-dark "
                style={{ width: "60rem", fontSize: "18px" }}
              >
                <div
                  class="card-body d-flex flex-column "
                  style={{ marginLeft: "-700px" }}
                >
                  <img
                    src={store.storePic ? store.storePic : background}
                    alt=""
                    className="img-fluid"
                    style={{ width: "100%" }}
                  />
                </div>
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
