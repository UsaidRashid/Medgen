import React, { useEffect, useState } from "react";
import "../../CSS/ComparePage.css";
import { useTypewriter } from "react-simple-typewriter";
import Bg from "../../Images/compareBg.png";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function G2BComparePage() {
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
          "http://localhost:6969/medilo/compare-meds",
          { genName, brandName }
        );
        if (response.status === 200) {
          //   alert(response.data.message);

          setBrand(response.data.brands);
          setGeneric(response.data.generics);
        } else {
          alert(response.data.message || "Error Fetching Compare Details");
        }
      } catch (error) {
        console.error("Error in Comparing:", error);
        console.log(`${error.name} -> ${error.message}`);
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
    words: ["Your Generic Medicines prices", "Your Branded Medicines prices"],
    loop: {},
    delaySpeed: 500,
  });

  return (
    <div
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vh",
        backgroundPosition: "right",
        backgroundColor: "white",
      }}
    >
      <div>
        <h1
          className="text-center font-monospace ft-bold fs-2 mx-2"
          style={{ color: "#2380ea" }}
        >
          <b>#Compare {text}</b>
        </h1>
      </div>
      <div className="d-flex">
        <div className="comparison-boxes" style={{ marginBottom: "2rem" }}>
          <div>
            <div className="cards">
              <div class="column">
                <div
                  class="col-sm-12 mb-3 mb-sm-0"
                  style={{ marginTop: "2.7rem" }}
                >
                  <div class="card border-1 border-dark mb-3 shadow">
                    <div class="card-body card-1-1 border-2 border-dark">
                      <div className="card-write">
                        <h5 class="card-title fs-3 fw-bold">{brand.name}</h5>
                        <ul>
                          <li className="card-list">
                            Drug Code : {brand.code}
                          </li>
                          <li className="card-list">Salt : {brand.salt}</li>
                          <li className="card-list">
                            Batch Number : {brand.batch}
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
                <div class="col-sm-12 mb-3 mb-sm-0 ml-5">
                  <div class="card border-1 border-dark shadow">
                    <div class="card-body card-2-2 border-2 border-dark">
                      <div className="card-write">
                        <h5 class="card-title fs-3 fw-bold">{generic.name}</h5>
                        <ul>
                          <li className="card-list">
                            Drug Code : {generic.code}
                          </li>
                          <li className="card-list">Salt : {generic.salt}</li>
                          <li className="card-list">
                            Batch Number : {generic.batch}
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
          </div>
        </div>
        <div
          className="width-50 text-dark hover"
          style={{ margin: "0 0 10px 0" }}
        >
          <div class="price-comparison border-2 border-dark shadow mb-3">
            <div className="price-box ">
              <div class="current-price-box ">
                <p>Brand Price</p>
                <p>₹{brand.price}</p>
              </div>
              <div class="medgen-price-box">
                <p>Generic Price</p>
                <p>₹{generic.price}</p>
              </div>
            </div>
            <div class="total-savings">
              <p> Total Savings</p>
              <p>₹{brand.price - generic.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
