import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';

export default function BrandMed() {
  const [brand,setBrand] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedAlternatives, setSelectedAlternatives] = useState([]);

  const handleShow = (alternatives) => {
    setSelectedAlternatives(alternatives);
    setShow(true);
  };

  const handleClose = () => setShow(false);


  useEffect(()=>{
    const main = async () =>{
      try {
          const response = await axios.post('http://localhost:6969/admin/fetch-brands');
          if(response.status===200){
              console.log(response.data.brands);
              setBrand(response.data.brands);
          }else{
              alert(response.data.message?response.data.message:'Error Fetching the medicines from database');
          }
      } catch (error) {
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

  const handleDelete = async (_id) => {
      try {
          const response = await axios.post('http://localhost:6969/admin/delete-brand',{_id});
          
          if(response.status===200){
             alert('Brand Medicine Deleted Successfully');
             window.location.reload();
            }
          else alert(response.data.message?response.data.message:'Error in deleting...');
      } catch (error) {
          console.error("Error in Deleting Medicine:", error);
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

  return (
    <>
      <div className="d-flex flex-row bg-white  ">
        <div>
          <Sidebar />
        </div>
        <div className="w-100">
        <h3 className="ms-2 text-decoration-underline">Branded Medicines</h3>
          <table
            className="table table-striped table-hover mt-2 ms-2 w-100"
            style={{ width: "100%", border: "2px solid black" }}
          >
            <thead >
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Drug-Code</th>
                <th scope="col">Salt</th>
                <th scope="col">Batch-Number</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {brand.map((brand) => (
                <tr key={brand._id}>
                  <td>{brand.name}</td>
                  <td>{brand.code}</td>
                  <td>{brand.salt}</td>
                  <td>{brand.batch}</td>
                  <td>{brand.price}</td>
                  <td><button className="btn btn-danger" onClick={()=>handleDelete(brand._id)}>Delete</button></td>
                  <td><button className="btn btn-warning" onClick={() => handleShow(brand.alternatives)}>Alternatives</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


                                                    <Modal show={show} onHide={handleClose}>
                                                      <Modal.Header closeButton>
                                                        <Modal.Title>Alternative Medicines</Modal.Title>
                                                      </Modal.Header>
                                                      <Modal.Body>
                                                        {selectedAlternatives.length > 0 ? (
                                                          <table className="table">
                                                            <thead>
                                                              <tr>
                                                              <th scope="col">Name</th>
                                                              <th scope="col">Drug-Code</th>
                                                              <th scope="col">Salt</th>
                                                              <th scope="col">Batch-Number</th>
                                                              <th scope="col">Price</th>
                                                              </tr>
                                                            </thead>
                                                            <tbody>
                                                              {selectedAlternatives.map((alternative, index) => (
                                                                <tr key={index}>
                                                                  <td>{alternative.name}</td>
                                                                  <td>{alternative.code}</td>
                                                                  <td>{alternative.salt}</td>
                                                                  <td>{alternative.batch}</td>
                                                                  <td>{alternative.price}</td>
                                                                </tr>
                                                              ))}
                                                            </tbody>
                                                          </table>
                                                        ) : (
                                                          <p>No alternatives available.</p>
                                                        )}
                                                      </Modal.Body>
                                                      <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleClose}>
                                                          Close
                                                        </Button>
                                                      </Modal.Footer>
                                                    </Modal>


    </>
  );
}
