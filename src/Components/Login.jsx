import React from "react";
import "../CSS/Login.css";
import  {Link} from 'react-router-dom';

export default function Login() {
  return (
    <div className="container-fluid bg-white">
      <div className="row">
        <div className="col-md-6 text-center">
          <h1 className="text-center mt-3 text-dark">
            <b>Welcome</b>
          </h1>
          <h5 className="text-center mt-3 text-dark">
            Login into your account
          </h5>
          <button
            className="mt-5 bg-light text-dark p-3 border rounded"
            type="button"
            id="text1"
          >
            <b>
              <a href="https://www.google.com/">Login with Google
              <img src="image/removebg.png" className="img2" /></a>
            </b>
          </button>

          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <form>
                  <div class="form-group mt-4 mb-5 ">
                    <input
                      type="email"
                      className="form-control border border-3 border-black p-4 border rounded-5 p-4 h3"
                      placeholder="Username"
                    />
                  </div>
                  <div class="form-group mt-4 mb-3">
                    <input
                      type="password"
                      className="form-control  border border-3 border-black border rounded-5 p-4 h3"
                      placeholder="Password"
                    />
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <label className="form-check-label text-dark h5">
                          {" "}
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckChecked"
                            checked
                          />
                          <b>Remember me</b>
                        </label>{" "}
                      </div>
                      <div className="col-md-4"></div>
                      <div className="col-md-4">
                        <label className="text-dark h5">
                          <b>Recover Password</b>
                        </label>
                      </div>
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
            <h4>Already have an account ? <Link to="/Signup">Signup</Link></h4>
          </div>
        </div>
        <div className="col-md-6">
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
