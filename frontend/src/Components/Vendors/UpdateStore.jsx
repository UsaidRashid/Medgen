import React, { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import background from "../../Images/store.png";

export default function UpdateStore() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  let decodedToken = null;

  if (token) {
    decodedToken = jwtDecode(token);
  } else {
    alert("Seems like you are not logged in...");
    navigate("/login");
  }

  const [formData, setFormData] = useState({
    name: decodedToken.user.store.name ? decodedToken.user.store.name : "",
    longitude: decodedToken.user.store.longitude
      ? decodedToken.user.store.longitude
      : "",
    latitude: decodedToken.user.store.latitude
      ? decodedToken.user.store.latitude
      : "",
    pincode: decodedToken.user.store.pincode
      ? decodedToken.user.store.pincode
      : "",
    address: decodedToken.user.store.address
      ? decodedToken.user.store.address
      : "",
    gst_No: decodedToken.user.store.gst_No
      ? decodedToken.user.store.gst_No
      : "",
    pincode: decodedToken.user.store.pincode
      ? decodedToken.user.store.pincode
      : "",
    approved: decodedToken.user.store.approved
      ? decodedToken.user.store.approved
      : true,
    storePic: "",
    token: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "storePic") {
      setFormData({
        ...formData,
        storePic: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const token = localStorage.getItem("token");

      formData.token = token;

      const response = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/store/update-store",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert(response.data.message);
        localStorage.removeItem("token");
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/view-store-profile");
      } else {
        alert(
          "There was a problem in registring the store....",
          response.data.message
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
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img
              src={background}
              style={{ width: "50px", height: "500px" }}
              alt=""
              className="img-fluid w-100 h-500 mt-5"
              id="img1"
            ></img>
          </div>
          <div className="col-md-6">
            <h3 className="text-center w-100 mt-5">
              Update your Store Details
            </h3>
            <Form className="mx-5 mt-2" onSubmit={handleSubmit}>
              <Form.Group as={Col} controlId="gst_No">
                <Form.Label>GST No.</Form.Label>
                <Form.Control
                  type="text"
                  name="gst_No"
                  disabled
                  placeholder="Enter GST No."
                  value={formData.gst_No}
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="Storename">
                <Form.Label>Store Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your store name"
                  value={formData.name}
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="Storelng">
                <Form.Label>Store Longitude Co.</Form.Label>
                <Form.Control
                  type="text"
                  name="longitude"
                  placeholder="Enter store Longitude co."
                  value={formData.longitude}
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="Storelat">
                <Form.Label>Store Latitude Co.</Form.Label>
                <Form.Control
                  type="text"
                  name="latitude"
                  placeholder="Enter store latitude co."
                  value={formData.latitude}
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="StorePincode">
                <Form.Label>Store Pincode</Form.Label>
                <Form.Control
                  type="text"
                  name="pincode"
                  inputmode="numeric"
                  maxlength="6"
                  placeholder="Enter Pincode (******)"
                  value={formData.pincode}
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="StoreAddress">
                <Form.Label>Store Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Enter Store Address"
                  value={formData.address}
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="gst_No">
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  type="text"
                  name="gst_No"
                  placeholder="Enter GST No."
                  value={formData.pincode}
                  required
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="form-group">
                <label className="text-dark" style={{ marginTop: "12px" }}>
                  Store Picture
                </label>
                <input
                  type="file"
                  className="form-control mb-1"
                  name="storePic"
                  onChange={handleChange}
                />
              </div>

              <div className="d-grid gap-2 col-6 mx-auto my-4 mb-3  py-4 w-25">
                <Button
                  variant="primary"
                  type="submit"
                  className="btn"
                  style={{ backgroundColor: "#00bbf0" }}
                >
                  Update
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
