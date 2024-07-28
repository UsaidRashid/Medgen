import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';

export default function GenericMedicines() {
  const [generics,setGenerics] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedAlternativesFor, setSelectedAlternativesFor] = useState([]);

  const handleShow = (alternatives) => {
    setSelectedAlternativesFor(alternatives);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  useEffect(()=>{
    const main = async () =>{
      try {
          const response = await axios.post('http://localhost:6969/admin/fetch-generics');
          if(response.status===200){
              setGenerics(response.data.generics);
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
        const response = await axios.post('http://localhost:6969/admin/delete-generic',{_id});
        if(response.status===200){
          alert('Generic Medicine Deleted Successfully');
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
        <h3 className="ms-2 text-decoration-underline">Generic Medicines</h3>
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
              {generics.map((generic) => (
                <tr key={generic._id}>
                  <td>{generic.name}</td>
                  <td>{generic.code}</td>
                  <td>{generic.salt}</td>
                  <td>{generic.batch}</td>
                  <td>{generic.price}</td>
                  <td><button className="btn btn-danger" onClick={()=>handleDelete(generic._id)}>Delete</button></td>
                  <td><button className="btn btn-warning" onClick={()=>handleShow(generic.alternativeFor)}>Alternatives</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
                                                    <Modal show={show} onHide={handleClose}>
                                                      <Modal.Header closeButton>
                                                        <Modal.Title>Alternative For Medicines...</Modal.Title>
                                                      </Modal.Header>
                                                      <Modal.Body>
                                                        {selectedAlternativesFor.length > 0 ? (
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
                                                              {selectedAlternativesFor.map((alternative, index) => (
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
                                                          <p>Not used as an alternative for any Brand Medicine.</p>
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
