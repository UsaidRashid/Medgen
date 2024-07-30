import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../CSS/ComparePage.css";
import { useTypewriter } from "react-simple-typewriter";
import Bg from "../../Images/compareBg.png";

export default function G2BComparePage() {
    const [names, setNames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post("http://localhost:6969/admin/fetch-generics");
                if (response.data && response.data.names) {
                    setNames(response.data.names);
                    console.log(response.data.names);
                } else {
                    console.error("Invalid data structure:", response.data);
                }
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchData();
    }, []); // Dependency array added

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
                backgroundColor: "white"
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
                            <div className="column">
                                <div className="col-sm-12 mb-3 mb-sm-0" style={{ marginTop: "2.7rem" }}>
                                    {names.map((name, index) => (
                                        <div key={index} className="card border-1 border-dark mb-3 shadow">
                                            <div className="card-body card-1-1 border-2 border-dark">
                                                <div className="card-write">
                                                    <h5 className="card-title fs-3 fw-bold">Branded Medicine Name</h5>
                                                    <ul>
                                                        <li className="card-list">{name.name}</li>
                                                        <li className="card-list">{name.code}</li>
                                                        <li className="card-list">{name.salt}</li>
                                                        <li className="card-list">{name.batch}</li>
                                                        <li className="card-list">{name.price}</li>
                                                    </ul>
                                                </div>
                                                <div className="card-price font-monospace fs-5">
                                                    <div>&#8377;price</div>
                                                    <div>&#8377;price/tab</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-sm-12 mb-3 mb-sm-0 ml-5">
                                    <div className="card border-1 border-dark shadow">
                                        <div className="card-body card-2-2 border-2 border-dark">
                                            <div className="card-write">
                                                <h5 className="card-title fs-3 fw-bold">Generic Medicine Name</h5>
                                                <ul>
                                                    <li className="card-list">medicine info</li>
                                                    <li className="card-list">medicine info</li>
                                                    <li className="card-list">medicine info</li>
                                                </ul>
                                            </div>
                                            <div className="card-price font-monospace fs-5">
                                                <div>&#8377;price</div>
                                                <div>&#8377;price/tab</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="width-50 text-dark hover" style={{ margin: "0 0 10px 0" }}>
                    <div className="price-comparison border-2 border-dark shadow mb-3">
                        <div className="price-box">
                            <div className="current-price-box">
                                <p>Current Price</p>
                                <p>₹00.00</p>
                            </div>
                            <div className="medgen-price-box">
                                <p>MEDGEN Price</p>
                                <p>₹00.00</p>
                            </div>
                        </div>
                        <div className="total-savings">
                            <p>Total Savings</p>
                            <p>₹00.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
