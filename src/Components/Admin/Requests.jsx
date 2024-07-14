import React, { useState } from 'react';
import '../../CSS/Requests.css'; 
import { useNavigate } from 'react-router-dom';

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
        <div className="container-fluid mt-5">
            <h1 className="text-center mt-3">Enter Medicine Details</h1>
            <form className="form-group m-lg-4" onSubmit={handleSubmit}>
                {medicineData.map((item, index) => (
                    <div key={index} className="form-group">
                        <input
                            type="text"
                            name="medicine"
                            value={item.medicine}
                            onChange={(e) => handleChange(index, e)}
                            placeholder="Medicine Name"
                            className="field"
                        />
                        <input 
                            type="text"
                            name="brand"
                            value={item.brand}
                            onChange={(e) => handleChange(index, e)}
                            placeholder="Brand Name"
                            className="field"
                        />
                        <button className="p-2 mt-5 text-bg-primary text-center" type="button" onClick={handleSubmit}>
                    Response
                </button>
                    </div>
                ))}
            </form>
        </div>
    );
};

export default Medicine