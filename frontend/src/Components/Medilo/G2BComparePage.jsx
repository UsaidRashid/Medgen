import React from "react";
import "../../CSS/ComparePage.css";



export default function G2BComparePage() {

    return (
        <div className="image" style={{ height: "1200px" }}>
            <div>
                <h1 className="text-dark fs-2 fw-bold text-decoration-none font-monospace mx-2"><b>Compare Your Medicines With MedGen Alternatives & Estimate Savings</b></h1>
            </div>
            <div className="comparison-boxes">
                <div className="cards-outer">
                    <div className="cards">
                        <div class="row ">


                            <div class="col-sm-6 mb-4 mb-sm-0  ">
                                <div class="card border-4 border-dark shadow-lg" style={{ backgroundColor: "#e6ffff" }}>
                                    <div class="card-body card-1 border-4 border-dark shadow-lg" style={{ backgroundColor: "#e6ffff" }}>
                                        <div className="card-write">
                                            <h5 class="card-title fs-3 fw-bold">Generic Medicine Name</h5>
                                            <p className="card-list fw-bold ">Medicine info:-</p>
                                            <ul>
                                                <li className="card-list">medicine info</li>
                                                <li className="card-list">medicine info</li>
                                                <li className="card-list">medicine info</li>
                                                <li className="card-list">medicine info</li>
                                                <li className="card-list">medicine info</li>
                                                <li className="card-list">medicine info</li>
                                            </ul>
                                        </div>
                                        <div className="card-price font-monospace">
                                            <div>&#8377;price</div>
                                            <div>&#8377;price/tab</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-sm-6 mb-4 mb-sm-0 ml-5">
                                <div class="card border-4 border-dark shadow-lg" style={{ backgroundColor: "#e6ffff" }}>
                                    <div class="card-body card-2 border-4 border-dark shadow-lg" style={{ backgroundColor: "#e6ffff" }}>
                                        <div className="card-write">
                                            <h5 class="card-title fs-3 fw-bold">Branded Medicine Name</h5>
                                            <p className="card-list fw-bold">Medicine info:-</p>
                                            <ul>
                                                <li className="card-list">medicine info</li>
                                                <li className="card-list">medicine info</li>
                                                <li className="card-list">medicine info</li>
                                                <li className="card-list">medicine info</li>
                                                <li className="card-list">medicine info</li>
                                                <li className="card-list">medicine info</li>
                                            </ul>
                                        </div>
                                        <div className="card-price font-monospace">
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
            <div>
                <div className="width-50 text-dark" style={{ marginLeft: "575px", marginTop: "100px" }}>
                    <div class="price-comparison border-3 border-dark shadow-lg font-monospace" style={{ backgroundColor: "#e6ffff" }}>
                        <div className="price-box ">
                            <div class="current-price-box ">
                                <p>Current Price</p>
                                <p>₹00.00</p>
                            </div>
                            <div class="medgen-price-box">
                                <p>MEDGEN Price</p>
                                <p>₹00.00</p>
                            </div>
                        </div>
                        <div class="total-savings">
                            <p> Total Savings</p>
                            <p>₹00.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}