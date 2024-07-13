import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Login.css";

export default function Login() {

  const navigate=useNavigate();
  
  const [formData , setFormData] = useState({
    username : '',
    password : '',
  });

  const handleChange = (e) =>{
    setFormData({
      ...formData,
        [e.target.name] : e.target.value,
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formData);
    navigate('/')
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-center mt-3">
              <b>Welcome</b>
            </h3>
            <h5 className="text-center mt-5">Please enter your details</h5>

            <button className="btn btn-primary" id="change" type="button">
              Login with Google
            </button>
            <h4 className="line">Or</h4>

            <div className="form-group mt-5">
              <input name="username" onChange={handleChange} value={formData.username} type="username" className="form-control mb-1" placeholder="Username" />
            </div>
            <div className="form-group mt-5 ">
              <input name="password" onChange={handleChange} value={formData.password} type="password" className="form-control mb-2" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary buttonsave mt-5 mb-3" id="button" onClick={handleSubmit}><b>Log in</b></button>
            <h4 className="text-center mt-5 ">Don't have an account ?<Link to='/signup'> Sign up </Link></h4>
          </div>
          <div className="col-md-6">
            <img style={{borderRadius:'0'}} src="image/1.png" alt="" className="medicine my-5" />
          </div>
        </div>
      </div>
    </>
  );
}
