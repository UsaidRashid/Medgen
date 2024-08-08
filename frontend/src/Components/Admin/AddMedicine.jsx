import React from "react";
import background from "../../Images/add-medicine-background.png";
import "../../CSS/Medilo.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useTypewriter } from "react-simple-typewriter";

const myStyle = {
  color: "Black",
  backgroundPosition: "right",
  boxShadow: "7px 6px 4px rgba(0, 0, 0, 0.5)",
  width: "200px",
  marginTop: "8rem",
};

export default function AddMedicine() {
  const navigate = useNavigate();

  const openBSearch = (e) => {
    e.preventDefault();
    navigate("/admin/add-branded-medicine");
  };

  const navigate1 = useNavigate();

  const openGSearch = (e) => {
    e.preventDefault();
    navigate("/admin/add-generic-medicine");
  };

  const [text] = useTypewriter({
    words: ["Generic Medicines", "Branded Medicines"],
    loop: {},
    delaySpeed: 500,
  });

  return (
    <>
      <div className="d-flex flex-row">
        <div>
          <Sidebar />
        </div>

        <div
          className="d-flex align-items-center p-5 justify-content-left"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "80vh",
            backgroundPosition: "right",
            height: "95vh",
            width: "800vh",
            backgroundColor: "white",
          }}
        >
          <form>
            <h1 style={{ color: "black", marginLeft: "4rem" }}>
              Select Your Medicine Type
            </h1>
            <h1 style={{ color: "blue", marginLeft: "5.5rem" }}>#{text}</h1>
            <button
              style={myStyle}
              className="btn mx-5 fs-4 b123"
              onClick={openGSearch}
            >
              Add Generic Medicine
            </button>
            <button
              style={myStyle}
              className="btn mx-5 fs-4 b123"
              onClick={openBSearch}
            >
              Add Brand Medicine
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
