import React from "react";
import logo from '../images/logo.png';
import background2 from '../images/background2.png';
// import "./Homepage.css";
import map from "../images/map.png";
import medilo from "../images/medilo.png";

export default function Homepage(){
    return(
        <div>
            <div className="home">
              <img className="Image" src={background2} alt="home"/>

            </div>
            <div className="d-flex flex-row justify-content-between">
                <div className="p-2 left">
                <img className="store" src={map} alt="" id="left"/>
                <h6>Find Care Location</h6>
                </div>
                <div className="p-2  w-100">
                <img className="med" src={medilo} alt="" id="right"/>
                <h6>Medilo</h6>
                </div>
                
               
                
            </div>
               
            </div>
            
            
    );
}