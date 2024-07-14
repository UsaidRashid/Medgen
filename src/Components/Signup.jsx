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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img style={{borderRadius:'0'}} src="image/1.png" alt="" className="medicine my-5" />
          </div>
          <div className="col-md-6">
            <h3 className="text-center mt-3"><b>Signup for a new account</b></h3>
            <form className="mx-5 mb-5">
              <div className="form-group mt-3">
                <label>Name</label>
                <input type="company" name="name" value={formData.name} onChange={handleChange} className="form-control mb-1"  />
              </div>
              <div className="form-group">
                <label>Username</label>
                <input type="company" name="username"  value={formData.username} onChange={handleChange} className="form-control mb-1" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="job" name="email"  value={formData.email} onChange={handleChange} className="form-control mb-1" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" name="password"  value={formData.password} onChange={handleChange} className="form-control mb-1" />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary buttonsave mt-2 mb-3"
                  onClick={handleSubmit}
                ><b>Sign up</b>
                  
                </button>
                <h4 className="text-center mt-3 mb-3"><b>Or Sign up with</b></h4>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                       <button className="p-2 bg-dark text-white" ><img src="image/download.png" className="google"/>Google</button>
                    </div>
                    <div className="col-md-6">
                    <button className="p-2 bg-dark text-white" ><img src="image/download.jpeg" className="google"/>Instagram</button>
                    </div>
                  </div>
                </div>
                <h4 className="text-center mt-3 ">Already have an account? <Link to='/login'>Login</Link>  </h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
