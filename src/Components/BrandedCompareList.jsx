import React from "react";
import { useNavigate } from "react-router-dom";
import background2 from "../Images/compare1-bg.png";

const myStyle = {
    display: "flex",
    flex: "30%",
};

export default function BrandedCompare() {
    const navigate = useNavigate();

    const openCompare = (e) => {
        e.preventDefault();
        navigate('/compare-medicines');
    }

    return (
        <>
            <div className='justify-content-left' style={{ backgroundImage: `url(${background2})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "right", height: '100vh', backgroundColor: "white" }}>
                <div>
                    <h1 className="text" style={{ marginLeft: "4.3rem", color: "black", marginTop:"0px"}}><b>Branded Medicines Alternatives: -</b></h1>
                </div>
                <div className="cards-outer mx-5">
                    <div className="cards" style={myStyle}>
                        <div className="row">
                            <div class="col-sm-6 mb-4 mb-sm-0 w-50">
                                <div class="card" style={{ backgroundColor: "white", width: "600px", textAlign: "center", height: "50px" , border: "1.61px solid", borderColor:"black", borderRadius:"24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)"}}>
                                    <div>
                                        <div className="card-write">
                                            <h5 class="card-title" style={{ marginTop: "4px" }}>Branded Medicine Name....</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <button className="btn btn-primary fs-5" onClick={openCompare} style={{ marginLeft: "3rem", height: "50px", borderRadius:"24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)"}}><b>Compare</b> </button>
                    </div>
                    <div className="cards" style={myStyle}>
                        <div className="row">
                            <div class="col-sm-6 mb-4 mb-sm-0 w-50">
                                <div class="card" style={{ backgroundColor: "white", width: "600px", textAlign: "center", height: "50px" , border: "1.61px solid", borderColor:"black", borderRadius:"24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)"}}>
                                    <div>
                                        <div className="card-write">
                                            <h5 class="card-title" style={{ marginTop: "4px" }}>Branded Medicine Name....</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <button className="btn btn-primary fs-5" onClick={openCompare} style={{ marginLeft: "3rem", height: "50px", borderRadius:"24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)"}}><b>Compare</b> </button>
                    </div>
                    <div className="cards" style={myStyle}>
                        <div className="row">
                            <div class="col-sm-6 mb-4 mb-sm-0 w-50">
                                <div class="card" style={{ backgroundColor: "white", width: "600px", textAlign: "center", height: "50px" , border: "1.61px solid", borderColor:"black", borderRadius:"24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)"}}>
                                    <div>
                                        <div className="card-write">
                                            <h5 class="card-title" style={{ marginTop: "4px" }}>Branded Medicine Name....</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <button className="btn btn-primary fs-5" onClick={openCompare} style={{ marginLeft: "3rem", height: "50px", borderRadius:"24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)"}}><b>Compare</b> </button>
                    </div>
                    <div className="cards" style={myStyle}>
                        <div className="row">
                            <div class="col-sm-6 mb-4 mb-sm-0 w-50">
                                <div class="card" style={{ backgroundColor: "white", width: "600px", textAlign: "center", height: "50px" , border: "1.61px solid", borderColor:"black", borderRadius:"24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)"}}>
                                    <div>
                                        <div className="card-write">
                                            <h5 class="card-title" style={{ marginTop: "4px" }}>Branded Medicine Name....</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <button className="btn btn-primary fs-5" onClick={openCompare} style={{ marginLeft: "3rem", height: "50px", borderRadius:"24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)"}}><b>Compare</b></button>
                    </div>

                </div>
            </div>
        </>
    );
}