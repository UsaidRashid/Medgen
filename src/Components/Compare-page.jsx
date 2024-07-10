import React from "react";
import "./Compare-page.css";

export default function Compare() {

    return (
        <div className="image">
            <div>
                <h1 className="text"><b>Compare Your Medicines With MedGen Alternatives & Estimate Savings</b></h1>
            </div>
            <div className="comparison-boxes">
                <div className="cards-outer">
                    <div className="cards">
                        <div class="row">
                            <div class="col-sm-6 mb-4 mb-sm-0 ">
                                <div class="card">
                                    <div class="card-body card-1">
                                        <div className="card-write">
                                            <h5 class="card-title">Branded Medicine Name</h5>
                                            <p className="card-list">Medicine info:-</p>
                                            <ul>
                                                <li className="card-list">medicine info</li>
                                                <li className="card-list">medicine info</li>
                                                <li className="card-list">medicine info</li>
                                                <li className="card-list">medicine info</li>
                                                <li className="card-list">medicine info</li>
                                                <li className="card-list">medicine info</li>
                                            </ul>
                                        </div>
                                        <div className="card-price">
                                            <div>&#8377;price</div>
                                            <div>&#8377;price/tab</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 mb-4 mb-sm-0 ">
                                <div class="card">
                                    <div class="card-body card-2">
                                        <div className="card-write">
                                            <h5 class="card-title">Generic Medcine Name</h5>
                                            <p className="card-list">Medicine info:-</p>
                                            <ul>
                                                <li className="card-list">medicine info</li>
                                                <li className="card-list">medicine info</li>
                                                <li className="card-list">medicine info</li>
                                                <li className="card-list">medicine info</li>
                                                <li className="card-list">medicine info</li>
                                                <li className="card-list">medicine info</li>
                                            </ul>
                                        </div>
                                        <div className="card-price">
                                            <div>&#8377;price</div>
                                            <div>&#8377;price/tab</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="price-comparison">
                        <div className="price-box">
                            <div class="current-price-box">
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