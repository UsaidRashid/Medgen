import React, { useState } from 'react';
import '../CSS/Medicine.css'; // Import external CSS file

const Medicine = () => {
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
        console.log(medicineData); // Replace with your submission logic
    };

    return (
        <div className="container-fluid bg#e6ffff">
            <h1 className="text-center text-dark">Enter Medicine Details</h1>
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
                            readOnly
                        />
                        <input 
                            type="text"
                            name="brand"
                            value={item.brand}
                            onChange={(e) => handleChange(index, e)}
                            placeholder="Brand Name"
                            className="field"
                            readOnly
                        />
                        <button className="p-2 mt-5 m-lg-3 shadow rounded-3 text-center btn btn-outline-dark flex-grow-1" type="button" onClick={addMedicine}>
                    Response
                </button>
                    </div>
                ))}
            </form>
        </div>
    );
};

export default Medicine