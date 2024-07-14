import React, { useState } from "react";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";



export default function Navbar() {
    const [isLoggedin,setIsLoggedIn] = useState(true);

    return (
        <>
            <nav class="navbar navbar-expand-lg" style={{backgroundColor:'#0a2351'}}>
  <div class="container-fluid">
    <img src={logo} style={{borderRadius:'0',height:'50px'}} alt="" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link active text-white" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/about-us">About us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" role="button"  id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Our Services
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/medilo">Medilo</a></li>
            <li><a class="dropdown-item" href="/store-locator">Store Locator</a></li>
          </ul>
        </li>
      </ul>
      <div className="d-flex flex-row w-25 justify-content-around">
        {isLoggedin? <button type="button" class="btn btn-outline-success">Login</button> : <button type="button" class="btn btn-outline-danger">Logout</button>}
      </div>
     
    </div>
  </div>
</nav>
        </>
    );
}