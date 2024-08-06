import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../../CSS/admin.css";
import profile from "../../Images/profile.png";
import { useNavigate, Link } from "react-router-dom";

const Sidebar = ({ children }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = async (e) => {
    alert("Logged out successfully");
    navigate("/");
    localStorage.removeItem("admin");
  };

  return (
    <div className="h-100">
      <div style={{ width: isOpen ? "200px" : "60px", height:'100vh' }} className="sidebar ">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            MEDGEN
          </h1>
          <div
            style={{
              marginLeft: isOpen ? "20px" : "0px",
              marginBottom: "10px",
            }}
            className="bars"
          >
            <FaBars onClick={toggle} />
            {isOpen && (
              <div className="container-fluid">
                <img
                  className="position-absolute bottom-0 start-0"
                  src={profile}
                  alt=""
                  style={{
                    height: "60px",
                    width: "50px",
                    borderRadius: "50",
                    marginBottom: "50px",
                    marginLeft: "70px",
                  }}
                />
              </div>
            )}
          </div>
        </div>

        <Link to="/" className="link" activeclassName="active">
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            Home
          </div>
        </Link>

        <Link to="/admin/dashboard" className="link" activeclassName="active">
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            Dashboard
          </div>
        </Link>

        <Link
          to="/admin/add-medicine"
          className="link"
          activeclassName="active"
        >
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            Add Medicine
          </div>
        </Link>

        <Link to="/admin/requests" className="link" activeclassName="active">
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            Requests
          </div>
        </Link>

        <Link to="/admin/store-requests" className="link" activeclassName="active">
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            Store Requests
          </div>
        </Link>

        <Link to="/admin/stores" className="link" activeclassName="active">
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            Registered Stores
          </div>
        </Link>

        <Link
          to="/admin/brand-medicines"
          className="link"
          activeclassName="active"
        >
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            Brand Medicines
          </div>
        </Link>

        <Link
          to="/admin/generic-medicines"
          className="link"
          activeclassName="active"
        >
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            Generic Medicines
          </div>
        </Link>
        {isOpen && (
          <button
            className="btn btn-danger position-absolute bottom-0 mx-4 "
            onClick={handleLogout}
          >
            Logout as Admin
          </button>
        )}
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
