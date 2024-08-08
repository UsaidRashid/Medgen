 import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import viewStore from "../../Images/viewStoreProfile.png";
import axios from "axios";
import "../../CSS/ViewSingleStore.css";

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
    const fetchStoreDetails = async () => {
      try {
        const response = await axios.post(
          "http://localhost:6969/store/fetch-stores",
          { _id }
        );
        if (response.status === 200) {
          setdetail(response.data.store);
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching store details:", error);
        alert("Error fetching store details. Please try again.");
      }
    };
    fetchStoreDetails();
  }, [_id]);

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-12 col-lg-7 mb-4 mb-lg-0">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              src={detail?.storePic || viewStore}
              className="img-fluid rounded-circle"
              alt="Store"
            />
          </div>
        </div>
        <div className="col-md-12 col-lg-5">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3>Store Profile</h3>
            </div>
            <div className="row">
              <div className="col-12 mb-2">
                <label className="form-label">
                  <h5>GST No.</h5>
                </label>
                <p>{detail?.gst_No}</p>
              </div>
              <div className="col-12 mb-2">
                <label className="form-label">
                  <h5>Name</h5>
                </label>
                <p>{detail?.name}</p>
              </div>
              <div className="col-12 mb-2">
                <label className="form-label">
                  <h5>Latitude</h5>
                </label>
                <p>{detail?.latitude}</p>
              </div>
              <div className="col-12 mb-2">
                <label className="form-label">
                  <h5>Longitude</h5>
                </label>
                <p>{detail?.longitude}</p>
              </div>
              <div className="col-12 mb-2">
                <label className="form-label">
                  <h5>Pincode</h5>
                </label>
                <p>{detail?.pincode}</p>
              </div>
              <div className="col-12 mb-4">
                <label className="form-label">
                  <h5>Address</h5>
                </label>
                <p>{detail?.address}</p>
              </div>
              <div className="col-12">
                <h3>Owner Details</h3>
                <div className="mb-2">
                  <label className="form-label">
                    <h5>Name</h5>
                  </label>
                  <p>{detail?.owner?.name}</p>
                </div>
                <div className="mb-2">
                  <label className="form-label">
                    <h5>Contact</h5>
                  </label>
                  <p>{detail?.owner?.contact}</p>
                </div>
                <div className="mb-2">
                  <label className="form-label">
                    <h5>Email</h5>
                  </label>
                  <p>{detail?.owner?.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-4">
          <h1 className="text-center">Map Details</h1>
          <iframe
            className="rounded w-100 "
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d100!2d${detail?.latitude}!3d${detail?.longitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1722440482744!5m2!1sen!2sin`}
            height="450"
            style={{ border: "3px solid black" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Store Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
