// import React, { useState } from 'react';
// import '../../CSS/Requests.css';
// import { useNavigate } from 'react-router-dom';

import Sidebar from './Sidebar';

// const Medicine = () => {

//     const navigate = useNavigate();

//     const [medicineData, setMedicineData] = useState([
//         { medicine: 'Paracetamol', brand: 'Panadol' },
//         { medicine: 'Ibuprofen', brand: 'Advil' }
//     ]);

//     const handleChange = (index, event) => {
//         const { name, value } = event.target;
//         const newData = [...medicineData];
//         newData[index] = { ...newData[index], [name]: value };
//         setMedicineData(newData);
//     };

//     const respond = () => {
//         navigate('/admin/response');
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(medicineData);
//         navigate('/admin-response');
//     };



//     return (
//         <div className='d-flex flex-row' style={{ backgroundColor: "white" }}>
//             <Sidebar />
//             <div className="container-fluid">
//                 <div>
//                     <div className="container-fluid">
//                         <div className="grid-container" style={{marginRight:"10rem"}}>
//                             <h1 className="text-center mt-4 mb-4"><b>Enter Medicine Details</b></h1>

//                             <form className="form-group m-lg-2" onSubmit={handleSubmit}>
//                                 {medicineData.map((item, index) => (
//                                     <div key={index} className="form-group">
//                                         <input
//                                             type="text"
//                                             name="medicine"
//                                             value={item.medicine}
//                                             onChange={(e) => handleChange(index, e)}
//                                             placeholder="Medicine Name"
//                                             className="field"
//                                             readOnly
//                                             style={{ border: "2px solid black", boxShadow: "3px 3px 2px rgba(0, 0, 0, .31)", height: "56px", fontSize: "27px"}}
//                                         />
//                                         <input
//                                             type="text"
//                                             name="brand"
//                                             value={item.brand}
//                                             onChange={(e) => handleChange(index, e)}
//                                             placeholder="Brand Name"
//                                             className="field"
//                                             readOnly
//                                             style={{ border: "2px solid black", boxShadow: "3px 3px 2px rgba(0, 0, 0, .31)", height: "56px", fontSize: "27px"}}
//                                         />
//                                         <button className="m-3 text-center" type="button" style={{ height: "50px", width: "150px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "3rem", cursor: "pointer", marginBottom: "50px",boxShadow: "3px 3px 5px rgba(0, 0, 0, .31)", fontSize: "21px"}} onClick={respond}>
//                                             Response
//                                         </button>
//                                     </div>
//                                 )
//                                 )
//                                 }
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>






//     );
// };

// export default Medicine


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Requests = () => {

    const navigate = useNavigate();

    const [requests, setrequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {


            try {
                const response = await axios.post('http://localhost:6969/admin/fetch-requests');


                if (response.status === 200) {
                    setrequests(response.data.response);
                } else {
                    alert('There was a problem in signing up the user....', response.data.message);
                    navigate('/signup')
                }

            } catch (error) {
                console.error("Error in Registering:", error);
                alert(`${error.name} -> ${error.message}`);
                if (error.response) {
                    alert("Error from server: " + error.response.data.message);
                } else if (error.request) {
                    alert("No response from the server");
                } else {
                    alert("Error setting up the request: " + error.message);
                }
            }
        }
        fetchRequests();
    }, [navigate]);


    return (
        <div>
            <h1>Medicine List</h1>
            <table border="1" style={{ borderCollapse: 'collapse', width: '100%', marginBottom: "30rem" }}>
                <thead>
                    <tr>
                        <th>Medicine Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request, index) => (
                        <tr key={index}>
                            <td>{request.medicineName}</td>
                            <td>{request.userName}</td>
                            <td>{request.email}</td>
                            <td>{request.contact}</td>
                            <td><button className="text-center" type="button" style={{ height: "30px", width: "90px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: ".8rem", cursor: "pointer",boxShadow: "3px 3px 5px rgba(0, 0, 0, .31)", fontSize: "15px"}} >
                                             Response
                                       </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Requests;
