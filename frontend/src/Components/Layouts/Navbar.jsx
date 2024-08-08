import React, { useEffect, useState } from "react";
import logo from "../../Images/logo-navbar.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import profile from "../../Images/profile.png";
import { jwtDecode } from "jwt-decode";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [storeOwner, setStoreOwner] = useState(false);
  const [approved, setApproved] = useState(false);
  const [token, setToken] = useState();
  const [profilePic, setProfilePic] = useState("");
  let decodedToken = null;

  useEffect(() => {
    setToken(localStorage.getItem("token"));

    if (token) {
      decodedToken = jwtDecode(token);
    }

    setProfilePic(decodedToken?.user?.profilePic);
    if (token !== null) setIsLoggedIn(true);
    else setIsLoggedIn(false);
    if (
      decodedToken?.user?.store === undefined ||
      decodedToken?.user?.store === null
    )
      setStoreOwner(false);
    else setStoreOwner(true);

    if (decodedToken?.user?.store?.approved === false) setApproved(false);
    else setApproved(true);
  });

  const handleLogin = (e) => {
    navigate("/login");
  };

  const handleLogout = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/users/logout"
      );

      alert(response.data.message);
      if (response.status === 200) {
        localStorage.removeItem("token");
        navigate("/");
      }
    } catch (error) {
      console.error("Error in Logging out:", error);
      alert(`${error.name} -> ${error.message}`);
      if (error.response) {
        alert("Error from server: " + error.response.data.message);
      } else if (error.request) {
        alert("No response from the server");
      } else {
        alert("Error setting up the request: " + error.message);
      }
    }
  };

  const fetchToken = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/users/fetch-token",
        { _id: decodedToken?.user?._id }
      );
      if (response.status === 200) {
        setToken(response.data.token);
        localStorage.removeItem("token");
        localStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      console.error("Error in fetching token:", error);
      alert(`${error.name} -> ${error.message}`);
      if (error.response) {
        alert("Error from server: " + error.response.data.message);
      } else if (error.request) {
        alert("No response from the server");
      } else {
        alert("Error setting up the request: " + error.message);
      }
    }
  };

  return (
    <>
      <nav
        class="navbar navbar-expand-lg"
        style={{
          backgroundColor: "black",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
      >
        <div class="container-fluid">
          <img
            src={logo}
            style={{ borderRadius: "0", height: "70px", width: "60px" }}
            alt=""
          />

          <div
            class="collapse navbar-collapse w-100 d-flex flex-row justify-content-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100">
              <li class="nav-item">
                <Link class="nav-link text-white fs-5" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white fs-5" to="/about-us">
                  About us
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white fs-5"
                  role="button"
                  id="navbarDropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </a>
                <ul
                  class="dropdown-menu "
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/medilo">
                      Medilo
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/store-locator">
                      Store Locator
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                {storeOwner && approved ? (
                  <Link
                    class="nav-link text-white fs-5"
                    to="/view-store-profile"
                  >
                    View Your Store!
                  </Link>
                ) : storeOwner && !approved ? (
                  <Link
                    className="nav-link text-white fs-5"
                    onClick={fetchToken}
                  >
                    Pending Approval
                  </Link>
                ) : (
                  <Link
                    class="nav-link text-white fs-5"
                    to="/store-registration-form"
                  >
                    Register Your Store!
                  </Link>
                )}
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white fs-5" to="/user-request-form">
                  Request for a medicine!
                </Link>
              </li>
            </ul>

            <div className="d-flex flex-row justify-content-center">
              {!isLoggedin ? (
                <button
                  style={{ borderRadius: "100px", width: "200px" }}
                  type="button"
                  onClick={handleLogin}
                  class="btn btn-success"
                >
                  Login
                </button>
              ) : (
                <button
                  style={{ borderRadius: "100px", width: "200px" }}
                  type="button"
                  onClick={handleLogout}
                  class="btn btn-danger"
                >
                  Logout
                </button>
              )}
              <div className="container-fluid">
                <Link class="nav-link text-dark fs-s" to="/user-profile">
                  {" "}
                  <img
                    className=" bottom-0 start-0"
                    src={profilePic ? profilePic : profile}
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50px",
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
