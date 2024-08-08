import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import viewStore from "../../Images/viewStoreProfile.png";
import axios from "axios";

export default function ViewSingleStore() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const _id = params.get("key");

  const [detail, setdetail] = useState({
    gst_No: "",
    name: "",
    latitude: "",
    longitude: "",
    pincode: "",
    address: "",
    owner: {
      name: "",
      contact: "",
      email: "",
    },
  });

  useEffect(() => {
    const main = async () => {
      try {
        const response = await axios.post(
          process.env.REACT_APP_BACKEND_URL+"/store/fetch-stores",
          { _id }
        );
        if (response.status === 200) {
          console.log(response);
          setdetail(response.data.store);
          console.log(detail);
        } else if (response.status === 201) {
          alert(response.data.message);
        } else {
          alert(response.data.message);
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
    main();
  }, []);

  return (
    <div>
      <div class="container rounded bg-white mt-5 mb-5 border border-2 border-dark shadow-lg">
        <div class="row">
          <div class="col-md-7 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                src={detail?.storePic ? detail?.storePic : viewStore}
                class="rounded-circle mt-5"
                width="500px"
                height="500px"
              />
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h3 class="text-right">Store Profile</h3>
              </div>
              <div class="row mt-2">
                <div class="col-md-12">
                  <label class="labels">
                    {" "}
                    <h5>Gst No.</h5>
                  </label>
                  <p>{detail?.gst_No}</p>
                </div>
                <div class="col-md-12 mt-2">
                  <label class="labels">
                    <h5>Name</h5>
                  </label>
                  <p>{detail?.name}</p>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-12">
                  <label class="labels ">
                    <h5>Latitude</h5>
                  </label>
                  <p>{detail?.latitude}</p>
                </div>
                <div class="col-md-12">
                  <label class="labels">
                    <h5>Longitute</h5>
                  </label>
                  <p>{detail?.longitude}</p>
                </div>
                <div class="row mt-2">
                  <div class="col-md-12">
                    <label class="labels">
                      <h5>Pincode</h5>
                    </label>
                    <p>{detail?.pincode}</p>
                  </div>
                  <div class="col-md-12">
                    <label class="labels">
                      <h5>Address</h5>
                    </label>{" "}
                    <p>{detail?.address}</p>
                  </div>
                  <h3 class="text-right">Owner Details</h3>
                  <div class="row mt-2">
                    <div class="col-md-12">
                      <label class="labels">
                        <h5>Name</h5>
                      </label>
                      <p>{detail?.owner?.name}</p>
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="col-md-12">
                      <label class="labels">
                        <h5>Contact</h5>
                      </label>
                      <p>{detail?.owner?.contact}</p>
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="col-md-12">
                      <label class="labels">
                        <h5>Email</h5>
                      </label>
                      <p>{detail?.owner?.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-center">Map details</h1>
          <iframe
            className="rounded"
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d100!2d${detail?.latitude}!3d${detail?.longitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1722440482744!5m2!1sen!2sin`}
            width="600"
            height="450"
            style={{ border: "3px solid black", marginTop: "150px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
