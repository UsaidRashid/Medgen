import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import background2 from "../../Images/compare1-bg.png";
import { useTypewriter } from "react-simple-typewriter";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function BrandedCompare() {
  const [medicine, setMedicine] = useState({ name: "", alternativeFor: [] });

  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("key");

  useEffect(() => {
    const main = async () => {
      try {
        const response = await axios.post(
          "http://localhost:6969/medilo/generic-search",
          { name }
        );
        if (response.status === 200) {
          setMedicine(response.data.medicine);
        } else if (response.status === 201) {
          alert(response.data.message);
          navigate("/medicine-not-found");
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.error("Error in Searching:", error);
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

  const openCompare = (genName, brandName) => {
    navigate(
      `/compare-generic-medicine?genName=${genName}&brandName=${brandName}`
    );
  };

  const [text] = useTypewriter({
    words: [
      `${medicine.name} is alternative for`,
      `Compare Brand Medicines of ${medicine.name}`,
    ],
    loop: {},
    delaySpeed: 550,
  });

  return (
    <div
      className="d-flex flex-column align-items-start"
      style={{
        backgroundImage: `url(${background2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "right",
        height: "100%",
        backgroundColor: "white",
        padding: "20px",
      }}
    >
      <h1 className="text-white mt-0 mb-3" style={{ visibility: "hidden" }}>
        .
      </h1>
      <h1
        className="text-black mb-2"
        style={{ marginLeft: "8rem", fontSize: "35px" }}
      >
        Here Are The ...
      </h1>
      <h1
        className="text-primary"
        style={{ marginLeft: "6rem", fontSize: "37px" }}
      >
        /{text}/
      </h1>

      {medicine.alternativeFor.map((alternative) => (
        <div className="d-flex align-items-center my-3 mx-5" key={alternative.name}>
          <div className="card flex-grow-1 d-flex align-items-center justify-content-center p-3 text-center shadow-sm mx-3" 
               style={{ borderRadius: "24px", height: "60px" }}>
            <h5 className="card-title mb-0 text-truncate">{alternative.name}</h5>
          </div>
          <button
            className="btn btn-primary fs-5 shadow-sm"
            onClick={() => openCompare(medicine.name, alternative.name)}
            style={{
              borderRadius: "24px",
              padding: "0.5rem 2rem",
            }}
          >
            <b>Compare</b>
          </button>
        </div>
      ))}
    </div>
  );
}
