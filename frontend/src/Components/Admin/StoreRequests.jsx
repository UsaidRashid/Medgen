import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

import Sidebar from "./Sidebar";
import axios from "axios";

export default function StoreRequests() {
  const [stores, setStores] = useState([]);
  const [search, SetSearch] = useState([]);
  const [filter, SetFilter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:6969/admin/fetch-unapproved-stores"
        );
        const { stores } = response.data;

        setStores(stores);
        SetFilter(stores);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const handleDeleteStore = async (_id) => {
    try {
      const response = await axios.post(
        "http://localhost:6969/admin/delete-store",
        { _id }
      );
      if (response.status === 200) {
        alert("Store Rejected Successfully");
        window.location.reload();
      } else {
        alert(
          response.data.message
            ? response.data.message
            : "Error deleting the store..."
        );
      }
    } catch (error) {
      console.error("Error in Deleting:", error);
      console.log(`${error.name} -> ${error.message}`);
      if (error.response) {
        alert("Error from server: " + error.response.data.message);
      } else if (error.request) {
        alert("No response from the server");
      } else {
        alert("Error setting up the request: " + error.message);
      }
    }
  };

  const handleAcceptStore = async (_id) => {
    try {
      const response = await axios.post(
        "http://localhost:6969/admin/accept-store",
        { _id }
      );
      if (response.status === 200) {
        alert("Store Accepted Successfully");
        window.location.reload();
      } else {
        alert(
          response.data.message
            ? response.data.message
            : "Error deleting the store..."
        );
      }
    } catch (error) {
      console.error("Error in Deleting:", error);
      console.log(`${error.name} -> ${error.message}`);
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
      name: <b>GST No</b>,
      selector: (row) => row.gst_No,
      sortable: true,
    },
    {
      name: <b>Name</b>,
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: <b>Latitude</b>,
      selector: (row) => row.latitude,
      sortable: true,
    },
    {
      name: <b>Longitude</b>,
      selector: (row) => row.longitude,
      sortable: true,
    },
    {
      name: <b>Pincode</b>,
      selector: (row) => row.pincode,
      sortable: true,
    },
    {
      name: <b>Address</b>,
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: <b>Owner Name</b>,
      selector: (row) => (row.owner ? row.owner.name : ""),
      sortable: true,
    },
    {
      name: <b>Owner Contact</b>,
      selector: (row) => (row.owner ? row.owner.contact : ""),
      sortable: true,
    },
    {
      name: <b>Owner Email</b>,
      selector: (row) => (row.owner ? row.owner.email : ""),
      sortable: true,
    },
    {
      cell: (row) => (
        <button
          className="text-center"
          type="button"
          onClick={() => handleAcceptStore(row._id)}
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
        >
          Accept
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      cell: (row) => (
        <button
          className="text-center bg-success"
          type="button"
          onClick={() => handleDeleteStore(row._id)}
          style={{
            height: "30px",
            width: "90px",
            color: "#fff",
            border: "none",
            borderRadius: ".8rem",
            cursor: "pointer",
            boxShadow: "3px 3px 5px rgba(0, 0, 0, .31)",
            fontSize: "15px",
          }}
        >
          Reject
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <React.Fragment>
      <div className="d-flex flex-row bg-white">
        <div>
          <Sidebar />
        </div>
        <div style={{ width: "85vw" }}>
          <DataTable
            columns={columns}
            data={filter}
            pagination
            selectableRows
            fixedHeader
            selectableRowsHighlight
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 20, 30]}
            striped
            highlightOnHover
            subHeader
            subHeaderComponent={
              <input
                type="text"
                className="w-25 form-control"
                placeholder="Search..."
                onChange={(e) => SetSearch(e.target.value)}
                value={search}
              />
            }
          />
        </div>
      </div>
    </React.Fragment>
  );
}
