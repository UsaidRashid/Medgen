import React, { useEffect, useState } from "react";
import logo from "../../Images/logo-navbar.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import profile from '../../Images/profile.png';

export default function Navbar() {
    const navigate = useNavigate();
    const [isLoggedin,setIsLoggedIn] = useState(false);

    const token = localStorage.getItem('token');

    useEffect(()=>{
        if(token!==null) setIsLoggedIn(true);
        else setIsLoggedIn(false);
    })

    const handleLogin = (e) =>{
      navigate('/login');
    }

    const handleLogout = async (e) => {
      try {
        e.preventDefault();
        
        const response = await axios.post('http://localhost:6969/users/logout');

        alert(response.data.message);
        if( response.status===200){
            localStorage.removeItem('token');
            navigate('/');
        }
      } catch (error) {
          console.error("Error in Logging out:", error);
          alert( `${error.name} -> ${error.message}`);
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
        <>
            <nav class="navbar navbar-expand-lg " style={{ backgroundColor:'black'}}>
  <div class="container-fluid">
    <img src={logo} style={{borderRadius:'0',height:'50px',width:'80px'}} alt="" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link class="nav-link text-white" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="/about-us">About us</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" role="button"  id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Our Services
          </a>
          <ul class="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
            <li ><Link className="dropdown-item" to="/medilo">Medilo</Link></li>
            <li ><Link className="dropdown-item" to="/store-locator">Store Locator</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="/store-registration-form">Register Your Store!</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="/user-request-form">Request for a medicine!</Link>
        </li>
      </ul>
      
      <div className="d-flex flex-row w-25 justify-content-around">
        {!isLoggedin? <button style={{borderRadius:'100px',width:'200px'}} type="button" onClick={handleLogin} class="btn btn-success">Login</button> : <button style={{borderRadius:'100px',width:'200px'}} type="button" onClick={handleLogout} class="btn btn-danger">Logout</button>}
        <div className='container-fluid'>
        <Link class="nav-link text-white" to="/user-profile">  <img className=" bottom-0 start-0" src={profile}  style={{height:"50px",width:"50px",borderRadius:"50"}}/></Link>

          </div>

      </div>
     
    </div>
  </div>
</nav>
        </>
    );
}