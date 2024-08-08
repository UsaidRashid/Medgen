import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

export default function GenericMedicines() {
  const [generics, setGenerics] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedAlternativesFor, setSelectedAlternativesFor] = useState([]);

  const handleShow = (alternatives) => {
    setSelectedAlternativesFor(alternatives);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  useEffect(() => {
    const main = async () => {
      try {
        const response = await axios.post(
          process.env.REACT_APP_BACKEND_URL + "/admin/fetch-generics"
        );
        if (response.status === 200) {
          setGenerics(response.data.generics);
        } else {
          alert(
            response.data.message
              ? response.data.message
              : "Error Fetching the medicines from database"
          );
        }
      } catch (error) {
        console.error("Error in Fetching Medicines:", error);
        alert(`${error.name} -> ${error.message}`);
        if (error.response) {
          alert("Error from server: " + error.response.data.message);
        } else if (error.request) {
          alert("No response from the server");
        } else {
          alert("Error setting up the request: " + error.message);
        }
      }
    };
    main();
  }, []);

  const handleDelete = async (_id) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/admin/delete-generic",
        { _id }
      );
      if (response.status === 200) {
        alert("Generic Medicine Deleted Successfully");
        window.location.reload();
      } else
        alert(
          response.data.message ? response.data.message : "Error in deleting..."
        );
    } catch (error) {
      console.error("Error in Deleting Medicine:", error);
      alert(`${error.name} -> ${error.message}`);
      if (error.response) {
        alert("Error from server: " + error.response.data.message);
      } else if (error.request) {
        alert("No response from the server");
      } else {
        alert("Error setting up the request: " + error.message);
      }
    }
  };

  const columns = [
    {
      name: (
        <h6>
          <b>Name</b>
        </h6>
      ),
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: (
        <h6>
          <b>Drug-Code</b>
        </h6>
      ),
      selector: (row) => row.code,
      sortable: true,
    },
    {
      name: (
        <h6>
          <b>Salt</b>
        </h6>
      ),
      selector: (row) => row.salt,
      sortable: true,
    },
    {
      name: (
        <h6>
          <b>Batch-Number</b>
        </h6>
      ),
      selector: (row) => row.batch,
      sortable: true,
    },
    {
      name: (
        <h6>
          <b>Price</b>
        </h6>
      ),
      selector: (row) => row.price,
      sortable: true,
    },
    {
      cell: (row) => (
        <button
          className="text-center"
          type="button"
          style={{
            height: "30px",
            width: "90px",
            backgroundColor: "#ff0000",
            color: "#fff",
            border: "none",
            borderRadius: ".8rem",
            cursor: "pointer",
            boxShadow: "3px 3px 5px rgba(0, 0, 0, .31)",
            fontSize: "15px",
          }}
          onClick={() => handleDelete(row._id)}
        >
          Delete
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      cell: (row) => (
        <button
          className="text-center"
          type="button"
          style={{
            height: "40px",
            width: "90px",
            backgroundColor: "#3FA2F6",
            color: "#fff",
            border: "none",
            borderRadius: ".8rem",
            cursor: "pointer",
            boxShadow: "3px 3px 5px rgba(0, 0, 0, .31)",
            fontSize: "15px",
          }}
          onClick={() => handleShow(row.alternativeFor)}
        >
          Alternatives For
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <>
      <div className="d-flex flex-row bg-white">
        <Sidebar />
        <div className="w-100">
          <DataTable
            columns={columns}
            data={generics}
            pagination
            highlightOnHover
            selectableRows
            fixedHeader
            selectableRowsHighlight
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 20, 30]}
            striped
          />
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
