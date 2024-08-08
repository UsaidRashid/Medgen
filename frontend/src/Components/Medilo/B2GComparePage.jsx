import React, { useState, useEffect } from "react";
import "../../CSS/ComparePage.css";
import { useLocation } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import axios from "axios";
import Bg from "../../Images/compareBg.png";

export default function B2GComparePage() {
  const [brand, setBrand] = useState({});
  const [generic, setGeneric] = useState({});

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const genName = params.get("genName");
  const brandName = params.get("brandName");

  useEffect(() => {
    const main = async () => {
      try {
        const response = await axios.post(
          process.env.REACT_APP_BACKEND_URL + "/medilo/compare-meds",
          { genName, brandName }
        );
        if (response.status === 200) {
          setBrand(response.data.brands);
          setGeneric(response.data.generics);
        } else {
          alert(response.data.message || "Error Fetching Compare Details");
        }
      } catch (error) {
        console.error("Error in Comparing:", error);
        if (error.response) {
          alert("Error from server: " + error.response.data.message);
        } else if (error.request) {
          alert("No response from the server");
        } else {
          alert("Error setting up the request: " + error.message);
        }
      }
    };
    main();
  }, []);

  const [text] = useTypewriter({
    words: ["Your Generic Medicines Details", "Your Branded Medicines Details"],
    loop: {},
    delaySpeed: 500,
  });

  return (
    <div
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundColor: "white",
        padding: "1rem",
      }}
    >
      <div>
        <h1 className="text-dark text-center fs-2 fw-bold text-decoration-none font-monospace mx-2">
          <b>#{text}</b>
        </h1>
      </div>
      <div className="d-flex flex-column align-items-center flex-md-row">
        <div
          className="comparison-boxes d-flex flex-column flex-md-row justify-content-evenly w-100"
          style={{ marginBottom: "2rem", marginLeft: "5rem" }}
        >
          <div className="card-container">
            <div className="card border-1 border-dark mb-3 shadow">
              <div className="card-body card-1-1 border-2 border-dark">
                <div className="card-write">
                  <h5 className="card-title fs-2 fw-bold">{brand.name}</h5>
                  <ul style={{ marginTop: "3rem" }}>
                    <li className="card-list fs-5">
                      <strong>Drug Code</strong> : {brand.code}
                    </li>
                    <li className="card-list fs-5">
                      <strong>Salts:</strong>{" "}
                      {brand.salt?.map((salts, idx) => (
                        <span key={idx} className="badge bg-primary me-1">
                          {salts}
                        </span>
                      ))}
                    </li>
                    <li className="card-list fs-5">
                      <strong>Batch Number</strong> : {brand.batch}
                    </li>
                  </ul>
                </div>
                <div className="card-price font-monospace fs-5">
                  <div>
                    <b>Price</b>
                  </div>
                  <div>&#8377;{brand.price}/-</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card border-1 border-dark mb-3 shadow">
              <div className="card-body card-1-1 border-2 border-dark">
                <div className="card-write">
                  <h5 className="card-title fs-2 fw-bold">{generic.name}</h5>
                  <ul style={{ marginTop: "3rem" }}>
                    <li className="card-list fs-5">
                      <strong> Drug Code </strong>: {generic.code}
                    </li>
                    <li className="card-list fs-5">
                      <strong>Salts:</strong>{" "}
                      {generic.salt?.map((salts, idx) => (
                        <span key={idx} className="badge bg-primary me-1">
                          {salts}
                        </span>
                      ))}
                    </li>
                    <li className="card-list fs-5">
                      <strong> Batch Number </strong>: {generic.batch}
                    </li>
                  </ul>
                </div>
                <div className="card-price font-monospace fs-5">
                  <div>
                    <b>Price</b>
                  </div>
                  <div>&#8377;{generic.price}/-</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="price-comparison border-2 border-dark shadow mb-3">
          <div className="price-box">
            <div className="current-price-box">
              <p>Brand Price</p>
              <p>₹{brand.price}</p>
            </div>
            <div className="medgen-price-box">
              <p>Generic Price</p>
              <p>₹{generic.price}</p>
            </div>
          </div>
          <div className="total-savings">
            <p>Total Savings</p>
            <p>₹{brand.price - generic.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
