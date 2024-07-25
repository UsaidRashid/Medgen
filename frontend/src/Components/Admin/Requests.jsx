import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

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


    const handleClick = (e) => {
        navigate('/admin/add-branded-medicine');
    }

    return(

    <>
       
        <div className="d-flex">
            
            <div>
                <Sidebar/>
                </div>
                <div>
            <h1 className="fs-2 mx-4">Medicine Request List</h1>
            <table className="table table-striped table-hover  " style={{ width: '85vw', border: '0.2px' }}>
                <thead>
                    <tr>
                        <th scope="col">Medicine Name</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Message</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {requests.map((request, index) => (
                        <tr key={index}>
                            <td >{request.medName}</td>
                            <td>{request.name}</td>
                            <td>{request.email}</td>
                            <td>{request.message}</td>
                            <td><button onClick={handleClick} className="text-center" type="button" style={{ height: "30px", width: "90px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: ".8rem", cursor: "pointer", boxShadow: "3px 3px 5px rgba(0, 0, 0, .31)", fontSize: "15px" }} >
                                Response
                            </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
          </div>
        </div>
        </>

    );
};

export default Requests;
