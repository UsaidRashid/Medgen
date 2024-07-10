import React from "react";
import background2 from '../images/background2.png';
import map from "../images/map.png";
import medilo from "../images/medilo.png";

export default function Homepage(){
    return(
        <div>
              <img className="w-100 h-100" style={{borderRadius:'0'}} src={background2} alt="home"/>
            <div className="d-flex flex-row justify-content-between bg-dark">
                <div className="p-2 mx-5">
                <img className="store" src={map} alt=""/>
                <h6 className="text-white">Find Care Location</h6>
                </div>
                <div className="p-2 mx-5">
                <img className="med" src={medilo} alt=""/>
                <h6 className="text-white">Medilo</h6>
                </div>
            </div>
        </div>           
    );
}