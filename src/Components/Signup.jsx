import React from "react";
import '../CSS/Signup.css';
export default function Signup() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img src="image/1.png" alt="" className="medicine" />
          </div>
          <div className="col-md-6">
            <h3 className="text-center mt-3"><b>Signup for a new account</b></h3>
            <form className="mx-5 mb-5">
              <div className="form-group mt-3">
                <label>First Name</label>
                <input type="company" className="form-control mb-1"  />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="company" className="form-control mb-1" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="job" className="form-control mb-1" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="country" className="form-control mb-1" />
              </div>
              <div className="form-group">
                <label className="mb-2">Confirm Password</label>
                <input type="address" className="form-control mb-1" />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary buttonsave mt-2 mb-3"
                ><b>Sign up</b>
                  
                </button>
                <h4 className="text-center mt-3 mb-3"><b>Or Sign up with</b></h4>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                       <button className="p-2" ><img src="image/download.png" className="google"/>Google</button>
                    </div>
                    <div className="col-md-6">
                    <button className="p-2" ><img src="image/download.jpeg" className="google"/>Instagram</button>
                    </div>
                  </div>
                </div>
                <h4 className="text-center mt-3 ">Already have an account?<b>Sign in</b></h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
