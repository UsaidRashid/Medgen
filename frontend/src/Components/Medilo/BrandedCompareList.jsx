import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import background2 from "../../Images/compare1-bg.png";
import { useTypewriter } from "react-simple-typewriter";
import { useState } from "react";
import axios from "axios";

const myStyle = {
    display: "flex",
    flex: "30%",
};

export default function GenericCompare() {
    const navigate = useNavigate();
     const [generics,setGenerics] = useState([]);
      
     useEffect(()=>{
        const main = async () =>{
          try {
              const response = await axios.post('http://localhost:6969/admin/fetch-generics');
              if(response.status===200){
                  setGenerics(response.data.generics);
              }else{
                  alert(response.data.message?response.data.message:'Error Fetching the medicines from database');
              }
          }
          catch (error) {
            console.error("Error in Fetching Medicines:", error);
            alert( `${error.name} -> ${error.message}`);
            if (error.response) {
              alert("Error from server: " + error.response.data.message);
            } else if (error.request) {
              alert("No response from the server");
            } else {
              alert("Error setting up the request: " + error.message);
            }
          }
        }
          main();
      },[]);






    const openCompare = (e) => {
        e.preventDefault();
        navigate('/compare-brand-medicine',{medicine:"paracetamol"});
    }

    const [text] = useTypewriter({
        words: ['Branded Medicine Alternatives', 'Compare Branded Medicines'],
        loop: {},
        delaySpeed: 550,
    });

    return (
       
        <>


         {generics.map((item) => (

           <div key={item.name}>
           <p>{item.type}</p>  
     </div>
      ))}
            <div className='justify-content-left' style={{ backgroundImage: `url(${background2})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "right", height: '100vh', backgroundColor: "white" }}>
                <h1 className="text" style={{ marginLeft: "4.3rem", color: "white", marginTop: "0px" }}>.</h1>
                <h1 className="text" style={{ marginLeft: "18.3rem", color: "black", marginTop: "2.3rem", fontSize: "35px" }}>Here Are The ...</h1>
                <h1 className="text" style={{ marginLeft: "10rem", color: "#2380ea", marginTop: "1rem", fontSize: "37px" }}>/{text}/</h1>

                <div className="cards-outer mx-5">
                    <div className="cards" style={myStyle}>
                        <div className="row">
                            <div class="col-sm-6 mb-4 mb-sm-0 w-50">
                                <div class="card" style={{ backgroundColor: "white", width: "600px", textAlign: "center", height: "50px", border: "1.61px solid", borderColor: "black", borderRadius: "24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)" }}>
                                    <div>
                                        <div className="card-write">
                                            <h5 class="card-title" style={{ marginTop: "4px" }}>Generic Medicine Name....</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary fs-5" onClick={openCompare} style={{ marginLeft: "3rem", height: "50px", borderRadius: "24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)" }}><b>Compare</b> </button>
                    </div>
                    <div className="cards" style={myStyle}>
                        <div className="row">
                            <div class="col-sm-6 mb-4 mb-sm-0 w-50">
                                <div class="card" style={{ backgroundColor: "white", width: "600px", textAlign: "center", height: "50px", border: "1.61px solid", borderColor: "black", borderRadius: "24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)" }}>
                                    <div>
                                        <div className="card-write">
                                            <h5 class="card-title" style={{ marginTop: "4px" }}>Generic Medicine Name....</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary fs-5" onClick={openCompare} style={{ marginLeft: "3rem", height: "50px", borderRadius: "24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)" }}><b>Compare</b> </button>
                    </div>
                    <div className="cards" style={myStyle}>
                        <div className="row">
                            <div class="col-sm-6 mb-4 mb-sm-0 w-50">
                                <div class="card" style={{ backgroundColor: "white", width: "600px", textAlign: "center", height: "50px", border: "1.61px solid", borderColor: "black", borderRadius: "24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)" }}>
                                    <div>
                                        <div className="card-write">
                                            <h5 class="card-title" style={{ marginTop: "4px" }}>Generic Medicine Name....</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary fs-5" onClick={openCompare} style={{ marginLeft: "3rem", height: "50px", borderRadius: "24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)" }}><b>Compare</b> </button>
                    </div>
                    <div className="cards" style={myStyle}>
                        <div className="row">
                            <div class="col-sm-6 mb-4 mb-sm-0 w-50">
                                <div class="card" style={{ backgroundColor: "white", width: "600px", textAlign: "center", height: "50px", border: "1.61px solid", borderColor: "black", borderRadius: "24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)" }}>
                                    <div>
                                        <div className="card-write">
                                            <h5 class="card-title" style={{ marginTop: "4px" }}>Generic Medicine Name....</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary fs-5" onClick={openCompare} style={{ marginLeft: "3rem", height: "50px", borderRadius: "24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)" }}><b>Compare</b> </button>
                    </div>

                </div>
            </div>
        </>
    );
}