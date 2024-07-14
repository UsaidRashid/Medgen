import React from "react";
import background2 from '../Images/background2.png';
import map from "../Images/map.png";
import medilo from "../Images/medilo.png";
import { Link , useNavigate} from "react-router-dom";

export default function Homepage(){
    const navigate = useNavigate();

    const openMedilo = (e) =>{
        e.preventDefault();
        navigate('/medilo');
    }  

    const openStore = (e) => {
        e.preventDefault();
        navigate('/store-locator');
    }

    return(
        <div>
              <img className="w-100 h-100" style={{borderRadius:'0'}} src={background2} alt="home"/>
            <div className="d-flex flex-row justify-content-between bg-dark">
                <div className="p-2 mx-5" onClick={openStore}>
                <img className="store" src={map} alt=""/>
                <h6 className="text-white">Find Care Location </h6>
                </div>
                <div className="p-2 mx-5" onClick={openMedilo}>
                <img className="med" src={medilo} alt=""/>
                <h6 className="text-white">Medilo</h6>
                </div>
            </div>
        </div>           
    );
}