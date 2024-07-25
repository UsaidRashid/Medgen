import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    <div className="container-fluid bg-white">
      <div className="row">
        <div className="col-md-6 fs-5 text-center">
          <h1 className="text-center mt-3 text-dark">
            <b>Welcome</b>
          </h1>
          <h5 className="text-center mt-3 text-info">
           <i> Login into your account</i>
          </h5>
          <button
            className="mt-4 mb-3  bg-light text-dark p-3 border rounded-3"
            type="button"
            id="text1"
          >
            <b>
              <a href="https://www.google.com/">Login with Google
                <img src="image/removebg.png" className="img2" style={{ height: "27px", width: "27px", marginLeft: "10px" }} /></a>
            </b>
          </button>

          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <form onSubmit={handleSubmit}>
                  <div class="form-group mt-3 mb-5 ">
                  <h5 ClassName="mb-3 text-info"><b>Register your account</b><br/>
                  <Link to="/Signup"><i>Signup</i></Link></h5>
                    <input
                      type="text"
                      className="form-control mt-4 border border-2 border-black p-3 border rounded-5 p-3 h3"
                      placeholder="Username"
                      name="username"
                      style={{ width: "70%", height: "3rem" }}
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div class="form-group  mb-3">
                  
                    <input
                      type="password"
                      name="password"
                      className="form-control  border border-2 border-black border rounded-5 p-3 h3"
                      placeholder="Password"
                      style={{ width: "70%", height: "3rem" }}
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5">
                        <label className="form-check-label text-dark h5">
                          <input
                            class="form-check-input"
                            
                            id="flexSwitchCheckChecked"
                            type="checkbox"
                            checked
                          />
                          Remember me
                        </label>
                      </div>
                      <div className="col-md-3"></div>
                      <div className="col-md-3">
                        <label className="text-dark h5">
                          Recover Password
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="Login"
                    className="mt-4 bg-light p-3 border rounded-5 w-50 float-centre h4 shadow-lg shadow-white bg-dark text-white"
                  >
                    Login
                  </button>
                </form>
              </div>
              <div className="col-md-1"></div>
            </div>
            
          </div>
        </div>
        <div className="col-md-6"style={{marginTop:"14rem"}}>
          <img
            src="image/ss.png"
            alt=""
            className="img-fluid w-100 h-600"
          ></img>
        </div>
      </div>
    </div>
  );
}
