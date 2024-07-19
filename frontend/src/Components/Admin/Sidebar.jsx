import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import '../../CSS/admin.css';
 import profile from '../../Images/profile.png';
 import axios from 'axios';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

const fetchStores = async (e) => {
    try {
        e.preventDefault();
       
        const response = await axios.post('http://localhost:6969/admin/fetch-stores');
        if( response.status===200){
             alert('Store founded');
             console.log(response);
        }else{
              alert('There was a problem in founding stores....',response.message);
        }      
    } catch (error) {
        console.error("Error in Founding Stores:", error);
            alert( `${error.name} -> ${error.message}`);
        if (error.response) {
            alert("Error from server: " + error.response.data.message);
        } else if (error.request) {
            alert("No response from the server");
        } else {
            alert("Error setting up the request: " + error.message);
            }
        }
      };


      const fetchRequests = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:6969/admin/fetch-requests');
            if( response.status===200){
                 alert('Requests founded');
                 console.log(response);
            }else{
                  alert('There was a problem in founding requests....',response.message);
            }      
        } catch (error) {
            console.error("Error in Founding Requests:", error);
                alert( `${error.name} -> ${error.message}`);
            if (error.response) {
                alert("Error from server: " + error.response.data.message);
            } else if (error.request) {
                alert("No response from the server");
            } else {
                alert("Error setting up the request: " + error.message);
                }
            }
          };

          const fetchDashboard = async (e) => {
            try {
                e.preventDefault();
                const response = await axios.post('http://localhost:6969/admin/fetch-dashboard');
                if( response.status===200){
                     alert('Dashboard founded');
                     console.log(response);
                }else{
                      alert('There was a problem in founding requests....',response.message);
                }      
            } catch (error) {
                console.error("Error in Founding Dashboard:", error);
                    alert( `${error.name} -> ${error.message}`);
                if (error.response) {
                    alert("Error from server: " + error.response.data.message);
                } else if (error.request) {
                    alert("No response from the server");
                } else {
                    alert("Error setting up the request: " + error.message);
                    }
                }
              };
    
    
    

    return (
        <div className="">
       
        
           <div style={{width: isOpen ? "200px" : "60px"}} className="sidebar ">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">MEDGEN</h1>
                   <div style={{marginLeft: isOpen ? "20px" : "0px",marginBottom:"10px"}} className="bars">
                       <FaBars onClick={toggle}/>
                       <div className='container-fluid'>
                        <img className="position-absolute bottom-0 start-0" src={profile} alt="" style={{height:"50px",width:"50px",borderRadius:"50"}}/>
                        </div>
                        </div>
                   <div>
                    
                   </div>
               </div>
              
               <NavLink to="/admin" className="link" activeclassName="active" onClick={fetchDashboard}>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Dashboard</div>
                </NavLink>

                <NavLink to="/admin/requests" className="link" activeclassName="active" onClick={fetchRequests}>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Requests</div>
                </NavLink>

                <NavLink to="/admin/response" className="link" activeclassName="active">
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Add Medicine</div>
                </NavLink>

                <NavLink to="/admin/store" className="link" activeclassName="active" onClick={fetchStores}>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Registered Stores</div>
                </NavLink>
                   
                       
               
           </div>
          
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;