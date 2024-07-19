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


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    
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
              
               <NavLink to="/admin" className="link" activeclassName="active">
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Dashboard</div>
                </NavLink>

                <NavLink to="/admin/requests" className="link" activeclassName="active">
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Requests</div>
                </NavLink>

                <NavLink to="/admin/response" className="link" activeclassName="active">
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Add Medicine</div>
                </NavLink>

                <NavLink to="/admin/store" className="link" activeclassName="active" >
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Registered Stores</div>
                </NavLink>

           </div>
          
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;