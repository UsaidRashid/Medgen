import React from "react";
import { useNavigate } from "react-router-dom";

export default function BrandedCompare() {
    const navigate = useNavigate();

    const openCompare = (e) =>{
        e.preventDefault();       
        navigate('/compare-medicines');
    }

    return (
        <div className="image">
            <h1 className="text"><b>Branded Medicines Alternatives: -</b></h1>
            <div className="cards-outer mx-5">
                <div className="cards ">
                    <div className="row w-50">
                        <div class="col-sm-6 mb-4 mb-sm-0 w-50">
                            <div class="card">
                                <div class="">
                                    <div className="card-write">
                                        <h5 class="card-title">Branded Medicine Name....</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="compare-btn ">
                        <button className="btn btn-primary" onClick={openCompare}>Compare</button>
                    </div>
                </div>
                <div className="cards ">
                    <div className="row w-50">
                        <div class="col-sm-6 mb-4 mb-sm-0 w-100">
                            <div class="card">
                                <div class="w-100">
                                    <div className="card-write">
                                        <h5 class="card-title">Branded Medicine Name....</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="compare-btn ">
                        <button className="btn btn-primary" onClick={openCompare}>Compare</button>
                    </div>
                </div><div className="cards ">
                    <div className="row w-50">
                        <div class="col-sm-6 mb-4 mb-sm-0 w-100">
                            <div class="card">
                                <div class="w-100">
                                    <div className="card-write">
                                        <h5 class="card-title">Branded Medicine Name....</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="compare-btn ">
                        <button className="btn btn-primary" onClick={openCompare}>Compare</button>
                    </div>
                </div><div className="cards ">
                    <div className="row w-50">
                        <div class="col-sm-6 mb-4 mb-sm-0 w-100">
                            <div class="card">
                                <div class="w-100">
                                    <div className="card-write">
                                        <h5 class="card-title">Branded Medicine Name....</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="compare-btn ">
                        <button className="btn btn-primary" onClick={openCompare}>Compare</button>
                    </div>
                </div><div className="cards ">
                    <div className="row w-50">
                        <div class="col-sm-6 mb-4 mb-sm-0 w-100">
                            <div class="card">
                                <div class="w-100">
                                    <div className="card-write">
                                        <h5 class="card-title">Branded Medicine Name....</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="compare-btn ">
                        <button className="btn btn-primary" onClick={openCompare}>Compare</button>
                    </div>
                </div><div className="cards ">
                    <div className="row w-50">
                        <div class="col-sm-6 mb-4 mb-sm-0 w-100">
                            <div class="card">
                                <div class="w-100">
                                    <div className="card-write">
                                        <h5 class="card-title">Branded Medicine Name....</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="compare-btn ">
                        <button className="btn btn-primary" onClick={openCompare}>Compare</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}