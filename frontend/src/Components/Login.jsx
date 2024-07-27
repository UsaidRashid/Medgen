import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import loginBg from "../Images/Login.png";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:6969/users/login', formData);

      if (response.status === 200) {
        alert(response.data.message);
        const token = response.data.token;
        localStorage.setItem('token', token);
        navigate('/');
      } else {
        alert('Some Error occured :', response.data.message);
      }
    } catch (error) {
      console.error("Error in Logging in:", error);
      alert(`${error.name} -> ${error.message}`);
      if (error.response) {
        alert("Error from server: " + error.response.data.message);
      } else if (error.request) {
        alert("No response from the server");
      } else {
        alert("Error setting up the request: " + error.message);
      }
    }
  }



  return (
    <div className="container-fluid"style={{ backgroundImage: `url(${loginBg})`, backgroundRepeat: "no-repeat", backgroundSize: "80vh", backgroundPosition: "left", backgroundColor: "white", margin:"0rem 0 5rem 0" }}>
      <div className="row" style={{marginLeft:"49rem"}}>
        <div className="col-11 text-center">
          <h1 className="text-center mt-3 text-dark">
            <b>Welcome</b>
          </h1>
          <h5 className="text-center mt-3 text-dark">
            Login into your account
          </h5>
          <button
            className="mt-5 mb-4 bg-light text-dark p-3 fs-5"
            style={{ width: "45%", borderRadius: "1rem", boxShadow: "5px 5px 4px rgba(0, 0, 0, 0.3)"  }}
            type="button"
            id="text1"
          >
            <b>
              <a href="https://www.google.com/">Login with Google
                <img src="image/removebg.png" className="img2" style={{ height: "27px", width: "27px", marginLeft: "10px" }} /></a>
            </b>
          </button>

          <div className="container" style={{ boxShadow: "7px 6px 4px rgba(0, 0, 0, 0.3)"}}>
            <div className="row">
              <div>
              <h4 className="ms-4">Register your account ? <Link to="/Signup">Signup</Link></h4>
              </div>
              <div >
                <form onSubmit={handleSubmit} className="mt-4">
                  <div class="form-group mt-3 mb-3 ">
                    <input
                      type="text"
                      className="form-control border border-2 border-black border rounded-4"
                      placeholder="Username"
                      name="username"
                      style={{ width: "70%", height: "3rem", marginLeft: "6.3rem" }}
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="form-group mt-3 mb-3">
                    <input
                      type="password"
                      name="password"
                      className="form-control  border border-2 border-black border rounded-4"
                      placeholder="Password"
                      style={{ width: "70%", height: "3rem",  marginLeft: "6.3rem"  }}
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                    <div className="row">
                      <div style={{margin:"0 7rem 0 0 "}}>
                        <label className="form-check-label text-primary h6" >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckChecked"
                            checked
                          />
                          <b>Remember me</b>
                        </label>
                      </div>
                      <div className="col-md-4"></div>
                      <div className="col-md-4">
                        <label className="h6">
                          <b>Recover Password</b>
                        </label>
                      </div>
                    </div>
                  <button
                    type="Login"
                    className="mt-2 bg-light p-3 border rounded-5 w-50 float-centre h4 shadow-lg shadow-white bg-dark text-white"
                  >
                    Login
                  </button>
                </form>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
