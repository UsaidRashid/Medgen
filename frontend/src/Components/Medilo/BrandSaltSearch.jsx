import React, { useState } from "react";
import background from "../../Images/Bg21.png";
import { useTypewriter } from "react-simple-typewriter";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const myStyle2 = {
  marginLeft: "1rem",
  alignItems: "center",
  height: "100vh",
};

const myStyle3 = {
  marginLeft: "6rem",
  marginBottom: "5rem",
  width: "42%",
  padding: "10px",
  fontSize: "18px",
  border: "2px solid black",
  borderRadius: "9rem",
  boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)",
};

const myStyle4 = {
  height: "50px",
  width: "150px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5rem",
  cursor: "pointer",
  marginTop: "50px",
  marginLeft: "50px",
  boxShadow: "6px 6px 4px rgba(0, 0, 0, 0.5)",
  fontSize: "21px",
};

export default function BrandSaltSearch() {
  const [text] = useTypewriter({
    words: ["Salts of Brand Medicine", "Find Best Medicines"],
    loop: {},
    delaySpeed: 500,
  });

  const [salts, setSalts] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate(`/brand-results`,{state:{props:salts}});
  };

  const handleChange = (e) => {
    setSalts(e.target.value);
  };

  return (
    <div>
      <div
        className="image"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "80vh",
          backgroundPosition: "right",
          height: "100vh",
          backgroundColor: "white",
        }}
      >
        <div>
          <h1 style={{ color: "White" }}>.</h1>
          <h1 style={{ color: "Black", margin: "150px 0px 0px 310px" }}>
            Please Enter...
          </h1>
          <h1 style={{ color: "#2380ea", margin: "0px 0px 0px 230px" }}>
            /{text}/
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          style={myStyle2}
        >
          <input
            type="text"
            placeholder="Enter Salts Here..."
            onChange={handleChange}
            className="search-input"
            style={myStyle3}
          />
          <button className="search-button" style={myStyle4}>
            <b>Search</b>
            <i className="fa fa-search" />
          </button>
        <p className="mx-5"><strong> NOTE: </strong> <i>The name of the salts must be comma separated!</i></p>
        </form>
      </div>
    </div>
  );
}
