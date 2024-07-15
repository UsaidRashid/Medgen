import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../CSS/Signup.css';


export default function Signup() {
  const navigate = useNavigate();
  
  const [formData,setFormData] = useState({
    name:'',
    username:'',
    email:'',
    password:'',
  });


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formData);
    navigate('/');
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };





  return (
    <>
      <div className="container-fluid bg-white">
        <div className="row">
          <div className="col-md-6">
            <img src="image/ss.png" alt="" className="img-fluid w-100 h-600" id="img1"></img>
          </div>
          <div className="col-md-6 ">
            <h3 className="text-center mt-3 text-dark"><b>Signup for a new account</b></h3>
            <form className="mx-5 mb-5">
              <div className="form-group mt-3">
                <label className="text-dark">First Name</label>
                <input type="name"  className="form-control border border-3 border-black p-2 border rounded-3 h3"  />
              </div>
              <div className="form-group">
                <label className="text-dark">Last Name</label>
                <input type="company" className="form-control mb-1 border border-3 border-black p-2 border rounded-3 h3" />
              </div>
              <div className="form-group">
                <label className="text-dark">Email Address</label>
                <input type="email" className="form-control mb-1 border border-3 border-black p-2 border rounded-3 h3" />
              </div>
              <div className="form-group">
                <label className="text-dark">Password</label>
                <input type="password" className="form-control mb-1 border border-3 border-black p-2 border rounded-3 h3" />
              </div>
              <div className="form-group">
                <label className="mb-2 text-dark">Confirm Password</label>
                <input type="password" className="form-control mb-1 border border-3 border-black p-2 border rounded-3 h3" />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="mt-2 bg-light p-3 border rounded-5 w-50 float-centre h4 shadow-lg shadow-white bg-dark text-white"
                ><b>Sign up</b>
                  
                </button>
                <h4 className="text-center mt-3 mb-3 text-black"><b>Or Sign up with</b></h4>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                       <button className="p-2 shadow-lg function" ><img src="image/removebg.png" className="google"/><a href="https://www.google.com/">Google</a></button>
                    </div>
                    <div className="col-md-6">
                    <button className="p-2 shadow-lg function" ><img src="image/download.jpeg" className="google"/><a href="https://www.instagram.com/">Instagram</a></button>
                    </div>
                  </div>
                </div>
                <h4 className="text-center mt-3 text-black">Already have an account?<b><a href="Login">Sign in</a></b></h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
