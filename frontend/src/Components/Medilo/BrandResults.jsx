import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import Bg from "../../Images/compareBg.png";

export default function BrandResults() {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const salts = location.state.props || '';

  useEffect(() => {
    const main = async () => {
      try {
        console.log(salts);
        const response = await axios.post(
          "http://localhost:6969/medilo/brand-elastic-search",
          { salts }
        );
        console.log("salt", response);
        if (response.status === 200) {
          setResults(response.data.results);
        } else {
          alert(response.data.message || "Error Fetching Salts");
        }
      } catch (error) {
        console.error("Error in Fetching:", error);
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
    words: ["Your Brand Medicines Details"],
    loop: {},
    delaySpeed: 500,
  });

  return (
    <div
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundColor: "white",
        minHeight: "100vh",
      }}
    >
      <h1 className="text-center font-monospace fw-bold fs-2 mb-5" style={{ color: "#2380ea" }}>
          <b>#Compare {text}</b>
        </h1>
      <div className="container py-5 justify-content-center">
        
        <div className="column">
        {results?.map((result, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card border-1 border-dark shadow h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fs-3 fw-bold">
                    {result._source.name}
                  </h5>
                  <ul className="list-unstyled flex-grow-1">
                    <li className="card-list mb-2">
                      <strong>Drug Code:</strong> {result._source.code}
                    </li>
                    <li className="card-list mb-2">
                      <strong>Salts:</strong> {result._source.salt?.map((salts, idx) => (
                        <span key={idx} className="badge bg-primary me-1">{salts}</span>
                      ))}
                    </li>
                    <li className="card-list mb-2">
                      <strong>Batch Number:</strong> {result._source.batch}
                    </li>
                  </ul>
                  <div className="card-price font-monospace fs-5 mt-3">
                    <div>
                      <strong>Price:</strong> &#8377;{result._source.price}/-
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
