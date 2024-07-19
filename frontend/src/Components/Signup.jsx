import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Signup.css";
import axios from 'axios';

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    contact: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(formData);

      const response = await axios.post('http://localhost:6969/users/signup',formData);
      

      if( response.status===200){
          alert('Signed Up Successfully!');
          navigate("/");
      }else{
          alert('There was a problem in signing up the user....',response.message);
          navigate('/signup')
      }      

    } catch (error) {
        console.error("Error in Registering:", error);
        alert( `${error.name} -> ${error.message}`);
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
    <>
      <div className="container-fluid bg-white">
        <div className="row">
          <div className="col-md-6">
            <img
              src="image/ss.png"
              alt=""
              className="img-fluid w-100 h-600"
              id="img1"
            ></img>
          </div>
          <div className="col-md-6 ">
            <h3 className="text-center mt-3 text-dark">
              <b>Signup for a new account</b>
            </h3>
            <form className="mx-5 mb-5" onSubmit={handleSubmit}>
              <div className="form-group mt-3">
                <label className="text-dark">Name</label>
                <input
                  type="name"
                  name = 'name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-control border border-3 border-black p-2 border rounded-3 h3"
                />
              </div>
              <div className="form-group mt-3">
                <label className="text-dark">Username</label>
                <input
                  type="username"
                  name = 'username'
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="form-control border border-3 border-black p-2 border rounded-3 h3"
                />
              </div>
              <div className="form-group">
                <label className="text-dark">Email Address</label>
                <input
                  type="email"
                  name = 'email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-control mb-1 border border-3 border-black p-2 border rounded-3 h3"
                />
              </div>
              <div className="form-group">
                <label className="text-dark">Contact No</label>
                <input
                  type="number"
                  name = 'contact'
                  value={formData.contact}
                  onChange={handleChange}
                  className="form-control mb-1 border border-3 border-black p-2 border rounded-3 h3"
                />
              </div>
              <div className="form-group">
                <label className="text-dark">Password</label>
                <input
                  type="password"
                  name = 'password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="form-control mb-1 border border-3 border-black p-2 border rounded-3 h3"
                />
              </div>
              {/* <div className="form-group">
                <label className="mb-2 text-dark">Confirm Password</label>
                <input type="password" className="form-control mb-1 border border-3 border-black p-2 border rounded-3 h3" />
              </div> */}
              <button
                type="submit"
                className="mt-2 bg-light p-3 border rounded-5 w-50 float-centre h4 shadow-lg shadow-white bg-dark text-white"
              >
                <b>Sign up</b>
              </button>
            </form>
            <div className="text-center">
              <h4 className="text-center mt-3 mb-3 text-black">
                <b>Or Sign up with</b>
              </h4>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <button className="p-2 shadow-lg function">
                      <img src="image/removebg.png" className="google" />
                      <a href="https://www.google.com/">Google</a>
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button className="p-2 shadow-lg function">
                      <img src="image/download.jpeg" className="google" />
                      <a href="https://www.instagram.com/">Instagram</a>
                    </button>
                  </div>
                </div>
              </div>
              <h4 className="text-center mt-3 text-black">
                Already have an account?
                <b>
                  <Link to="/login">Login</Link>
                </b>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
