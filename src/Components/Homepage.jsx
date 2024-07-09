import React from "react";
import logo1 from '../Images/logo1.jpg';
import background from '../Images/background.png';
import "./Homepage.css";
import map from "../Images/map.png";
import medilo from "../Images/medilo.png";

export default function Homepage(){
    return(
        <div>
            <div className="home">
              <img className="Image" src={background} alt="home"/>

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