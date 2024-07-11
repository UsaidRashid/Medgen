import React, { useState } from "react";
import "../CSS/Login.css";
export default function Login() {

  const [username,Setusername]=useState('');
  const [password,Setpassword]=useState('');

  const handlelogin=(e)=>{
    e.preventDefault();
    console.log(username);
    console.log(password);
  }
  const handleChange=(e)=>{
    Setusername(e.target.value);
  }
  const handlePassword=(e)=>{
    Setpassword(e.target.value);
  }

  return (
    <>
    <form onSubmit={handlelogin}>
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
              <input type="username" className="form-control mb-1" placeholder="Username" onChange={handleChange} />
            </div>
            <div className="form-group mt-5 ">
              <input type="password" className="form-control mb-2" placeholder="Password" onChange={handlePassword}/>
            </div>
            <button type="submit" className="btn btn-primary buttonsave mt-5 mb-3" id="button" ><b>Log in</b></button>
            <h4 className="text-center mt-5 ">Don't have an account ?<b> Sign up </b></h4>
          </div>
          <div className="col-md-6">
            <img src="image/1.png" alt="" className="medicine" />
          </div>
        </div>
      </div>
      </form>
    </>
  );
}
