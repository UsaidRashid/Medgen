import React, { useState } from 'react';
import background from '../../Images/adminRequestBg.jpeg';
import '../../CSS/Requests.css';



import { useNavigate } from 'react-router-dom';

import Sidebar from './Sidebar';

const Medicine = () => {
    const navigate = useNavigate();

    const [medicineData, setMedicineData] = useState([
        { medicine: 'Paracetamol', brand: 'Panadol' },
        { medicine: 'Ibuprofen', brand: 'Advil' }
    ]);

    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const newData = [...medicineData];
        newData[index] = { ...newData[index], [name]: value };
        setMedicineData(newData);
    };

    const addMedicine = () => {
        setMedicineData([...medicineData, { medicine: '', brand: '' }]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(medicineData);
        navigate('/admin-response');
    };

    return (
        <div className='d-flex flex-row' style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "80vh", backgroundPosition: "right", height: '95vh', backgroundColor: "white" }}>
            <Sidebar />
            <div className="container-fluid">
                <div>
                    <div className="container-fluid">
                        <div className="grid-container" style={{marginRight:"10rem"}}>
                            <h1 className="text-center mt-4 mb-4"><b>Enter Medicine Details</b></h1>

                            <form className="form-group m-lg-2" onSubmit={handleSubmit}>
                                {medicineData.map((item, index) => (
                                    <div key={index} className="form-group">
                                        <input
                                            type="text"
                                            name="medicine"
                                            value={item.medicine}
                                            onChange={(e) => handleChange(index, e)}
                                            placeholder="Medicine Name"
                                            className="field"
                                            readOnly
                                            style={{ border: "2px solid black", boxShadow: "3px 3px 2px rgba(0, 0, 0, .31)", height: "56px", fontSize: "27px"}}
                                        />
                                        <input
                                            type="text"
                                            name="brand"
                                            value={item.brand}
                                            onChange={(e) => handleChange(index, e)}
                                            placeholder="Brand Name"
                                            className="field"
                                            readOnly
                                            style={{ border: "2px solid black", boxShadow: "3px 3px 2px rgba(0, 0, 0, .31)", height: "56px", fontSize: "27px"}}
                                        />
                                        <button className="m-3 text-center" type="button" style={{ height: "50px", width: "150px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "3rem", cursor: "pointer", marginBottom: "50px",boxShadow: "3px 3px 5px rgba(0, 0, 0, .31)", fontSize: "21px"}} onClick={addMedicine}>
                                            Response
                                        </button>
                                    </div>
                                )
                                )
                                }
                            </form>
                        </div>
                    </div>


                </div>
            </div>


        </div>






    );
};

export default Medicine