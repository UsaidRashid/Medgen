import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import Sidebar from './Sidebar';

const Requests = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.post('http://localhost:6969/admin/fetch-requests');
        if (response.status === 200) {
          setRequests(response.data.response);
        } else {
          alert('There was a problem in signing up the user....', response.data.message);
          navigate('/signup');
        }
      } catch (error) {
        console.error('Error in Registering:', error);
        alert(`${error.name} -> ${error.message}`);
        if (error.response) {
          alert('Error from server: ' + error.response.data.message);
        } else if (error.request) {
          alert('No response from the server');
        } else {
          alert('Error setting up the request: ' + error.message);
        }
      }
    };
    fetchRequests();
  }, [navigate]);

  const handleClick = (e) => {
    navigate('/admin/add-branded-medicine');
  };

  const columns = [
    {
      name: <h6><b>Medicine Name</b></h6>,
      selector: row => row.medName,
      sortable: true,
    },
    {
      name: <h6><b>Name</b></h6>,
      selector: row => row.name,
      sortable: true,
    },
    {
      name: <h6><b>Email</b></h6>,
      selector: row => row.email,
      sortable: true,
    },
    {
      name: <h6><b>Message</b></h6>,
      selector: row => row.message,
      sortable: true,
    },
    {
      cell: row => (
        <button
          onClick={handleClick}
          className="text-center"
          type="button"
          style={{
            height: '30px',
            width: '90px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '.8rem',
            cursor: 'pointer',
            boxShadow: '3px 3px 5px rgba(0, 0, 0, .31)',
            fontSize: '15px',
          }}
        >
          Response
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (

      <React.Fragment>
      <div className='d-flex flex-row bg-white'>
        <div>
          <Sidebar />
        </div>
        <div style={{ width: '85vw' }}>
          <DataTable
            columns={columns}
            data={requests}
            pagination
            selectableRows
            fixedHeader
            selectableRowsHighlight
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 20, 30]}
            striped
            highlightOnHover
            />
      
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default Requests;
