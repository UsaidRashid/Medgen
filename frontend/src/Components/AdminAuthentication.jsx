import React from 'react'
import '../CSS/auth.css';
import authentication from "../Images/auth.png";
import { Link} from "react-router-dom";

export default function AdminAuthentication() {
  
  return (
    <>
        <h1 className="text-center mt-3 text-dark">
        <b>Admin Authentication</b>
        </h1>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-5">
                <img
              src={authentication}
              alt=""
              className="img-fluid w-100 h-500 "
              id="img2"
            ></img>
                </div>
                <div className="col-md-6 mt-5 p-5">
              {/* <div className="col-md-1"></div>
              <div className="col-md-10"> */}
                <form>
                  <div class="form-group mt-5 mb-5 ">
                    <input
                      type="email"
                      className="form-control border border-3 border-black p-4 border rounded-5 p-4 h2"
                      placeholder="Username"
                    />
                  </div>
                  <div class="form-group mt-5 mb-4">
                    <input
                      type="password"
                      className="form-control  border border-3 border-black border rounded-5 p-4 h3"
                      placeholder="Password"
                    />
                  </div>

                  <button
                    type="Login"
                    className="mt-4 bg-light p-3 border rounded-5 w-25 float-centre h4 shadow-lg shadow-white bg-dark text-white">
                  <Link to='/admin'>Login</Link> 
                  </button>
                  </form>
                </div>
            </div>
        </div>
        
    </>
  )
}
