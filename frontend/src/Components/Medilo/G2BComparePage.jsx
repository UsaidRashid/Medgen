import React from "react";
import "../../CSS/ComparePage.css";
import { useTypewriter } from "react-simple-typewriter";
import Bg from "../../Images/compareBg.png";
 
export default function G2BComparePage() {

    const [text] = useTypewriter({
        words: ["Your Generic Medicines prices", "Your Branded Medicines prices"],
        loop: {},
        delaySpeed: 500,
    });

    return (
        <div style={{ backgroundImage: `url(${Bg})`, backgroundRepeat: "no-repeat", backgroundSize: "100vh", backgroundPosition: "right", backgroundColor: "white"}}>
            <div>
                <h1 className="text-center fs-2 fw-bold font-monospace mx-2" style={{color: "#2380ea"}}><b>#Compare {text}</b></h1>
            </div> 
            <div className="d-flex">
            <div className="comparison-boxes" style={{marginBottom:"2rem"}}>
                <div>
                    <div className="cards">
                        <div class="column">
                            <div class="col-sm-12 mb-3 mb-sm-0" style={{marginTop:"2.7rem"}} >
                                <div class="card border-1 border-dark mb-3 shadow" >
                                    <div class="card-body card-1-1 border-2 border-dark">
                                        <div className="card-write">
                                            <h5 class="card-title fs-3 fw-bold">Generic Medicine Name</h5>
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
                            <div class="col-sm-12 mb-3 mb-sm-0 ml-5">
                                <div class="card border-1 border-dark shadow">
                                    <div class="card-body card-2-2 border-2 border-dark" >
                                        <div className="card-write">
                                            <h5 class="card-title fs-3 fw-bold">Branded Medicine Name</h5>
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
                <div className="width-50 text-dark hover" style={{margin:"0 0 10px 0" }}>
                    <div class="price-comparison border-2 border-dark shadow mb-3">
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