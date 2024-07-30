// import React from "react";
// import { useNavigate } from "react-router-dom";
// import background2 from "../../Images/compare1-bg.png";
// import { useTypewriter } from "react-simple-typewriter";

// const myStyle = {
//     display: "flex",
//     flex: "30%",
// };

// export default function BrandedCompare() {
//     const navigate = useNavigate();

//     const openCompare = (e) => {
//         e.preventDefault();
//         navigate('/compare-generic-medicine');
//     }

//     const [text] = useTypewriter({
//         words: ['Generic Medicine Alternatives', 'Compare Generic Medicines'],
//         loop: {},
//         delaySpeed: 550,
//     });

//     return (
//         <>
//             <div className='justify-content-left' style={{ backgroundImage: `url(${background2})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "right", height: '100vh', backgroundColor: "white" }}>

//                 <h1 className="text" style={{ marginLeft: "4.3rem", color: "white", marginTop: "0px" }}>.</h1>
//                 <h1 className="text" style={{ marginLeft: "18.3rem", color: "black", marginTop: "2.3rem", fontSize: "35px" }}>Here Are The ...</h1>
//                 <h1 className="text" style={{ marginLeft: "10rem", color: "#2380ea", marginTop: "1rem", fontSize: "37px" }}>/{text}/</h1>

//                 <div className="cards-outer mx-5">
//                     <div className="cards" style={myStyle}>
//                         <div className="row">
//                             <div class="col-sm-6 mb-4 mb-sm-0 w-50">
//                                 <div class="card" style={{ backgroundColor: "white", width: "600px", textAlign: "center", height: "50px", border: "1.61px solid", borderColor: "black", borderRadius: "24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)" }}>
//                                     <div>
//                                         <div className="card-write">
//                                             <h5 class="card-title" style={{ marginTop: "4px" }}>Branded Medicine Name....</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <button className="btn btn-primary fs-5" onClick={openCompare} style={{ marginLeft: "3rem", height: "50px", borderRadius: "24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)" }}><b>Compare</b> </button>
//                     </div>
//                     <div className="cards" style={myStyle}>
//                         <div className="row">
//                             <div class="col-sm-6 mb-4 mb-sm-0 w-50">
//                                 <div class="card" style={{ backgroundColor: "white", width: "600px", textAlign: "center", height: "50px", border: "1.61px solid", borderColor: "black", borderRadius: "24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)" }}>
//                                     <div>
//                                         <div className="card-write">
//                                             <h5 class="card-title" style={{ marginTop: "4px" }}>Branded Medicine Name....</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <button className="btn btn-primary fs-5" onClick={openCompare} style={{ marginLeft: "3rem", height: "50px", borderRadius: "24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)" }}><b>Compare</b> </button>
//                     </div>
//                     <div className="cards" style={myStyle}>
//                         <div className="row">
//                             <div class="col-sm-6 mb-4 mb-sm-0 w-50">
//                                 <div class="card" style={{ backgroundColor: "white", width: "600px", textAlign: "center", height: "50px", border: "1.61px solid", borderColor: "black", borderRadius: "24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)" }}>
//                                     <div>
//                                         <div className="card-write">
//                                             <h5 class="card-title" style={{ marginTop: "4px" }}>Branded Medicine Name....</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <button className="btn btn-primary fs-5" onClick={openCompare} style={{ marginLeft: "3rem", height: "50px", borderRadius: "24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)" }}><b>Compare</b> </button>
//                     </div>
//                     <div className="cards" style={myStyle}>
//                         <div className="row">
//                             <div class="col-sm-6 mb-4 mb-sm-0 w-50">
//                                 <div class="card" style={{ backgroundColor: "white", width: "600px", textAlign: "center", height: "50px", border: "1.61px solid", borderColor: "black", borderRadius: "24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)" }}>
//                                     <div>
//                                         <div className="card-write">
//                                             <h5 class="card-title" style={{ marginTop: "4px" }}>Branded Medicine Name....</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <button className="btn btn-primary fs-5" onClick={openCompare} style={{ marginLeft: "3rem", height: "50px", borderRadius: "24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)" }}><b>Compare</b></button>
//                     </div>

//                 </div>
//             </div>
//         </>
//     );
// }

import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import background2 from "../../Images/compare1-bg.png";
import { useTypewriter } from "react-simple-typewriter";
import axios from 'axios';

const myStyle = {
    display: "flex",
    flex: "30%",

}
export default function BrandedCompare() {
    const navigate = useNavigate();

    const openCompare = (e) => {
        e.preventDefault();
        navigate('/compare-generic-medicine');

    }

    const [text] = useTypewriter({
        words: ['Generic Medicine Alternatives', 'Compare Generic Medicines'],
        loop: {},
        delaySpeed: 550,
    });

    const [brands, setbrands] = useState([]);

    useEffect(() => {
        const main = async () => {
            try {
                const response = await axios.post('http://localhost:6969/admin/fetch-brands');
                if (response.status === 200) {
                    setbrands(response.data.brands);
                } else {
                    alert(response.data.message ? response.data.message : 'Error Fetching the medicines from database');
                }

            }
            catch (error) {
                console.error("Error in Fetching Medicines:", error);
                alert(`${error.name}->${error.message}`);
                if (error.response) {
                    alert('Error from server:' + error.responsee.data.message);
                } else if (error.request) {
                    alert("No response from the server");
                } else {
                    alert("Error setting up the request:" + error.messgae);
                }
            }
        };
        main();

    }, []);


return(
    <div>
        <div className='justify-content-left' style={{ backgroundImage: `url(${ background2 })`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "right", height: '100vh', backgroundColor: "white" }}>
            <h1 className="text" style={{ marginLeft: "4.3rem", color: "white", marginTop: "0px" }}>.</h1>
            <h1 className="text" style={{ marginLeft: "18.3rem", color: "black", marginTop: "2.3rem", fontSize: "35px" }}>Here Are The ...</h1>
            <h1 className="text" style={{ marginLeft: "10rem", color: "#2380ea", marginTop: "1rem", fontSize: "37px" }}>/{text}/</h1>
            {brands.map((brand) => {
                return(
                    <div className="cards-outer mx-5">
                        <div className="cards" style={myStyle}>
                            <div className="row">
                                <div class="col-sm-6 mb-4 mb-sm-0 w-50">
                                    <div class="card" style={{ backgroundColor: "white", width: "600px", textAlign: "center", height: "50px", border: "1.61px solid", borderColor: "black", borderRadius: "24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)" }}>
                                        <div>
                                            <div className="card-write">
                                                <h5 class="card-title" style={{ marginTop: "4px" }}>{brand.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary fs-5" onClick={openCompare} style={{ marginLeft: "3rem", height: "50px", borderRadius: "24px", boxShadow: "6px 5px 5px rgba(0, 0, 0, 0.5)" }}><b>Compare</b> </button>
                        </div>

                    </div>

                )
            })};
        </div>
    </div>
);
}
