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
 


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/Request",
            name:"Request",
            icon:<FaUserAlt/>
        },
        {
            path:"/Response",
            name:"Response",
            icon:<FaRegChartBar/>
        },
        
        
        {
            path:"/Storedetails",
            name:"Store details",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="">
       
        
           <div style={{width: isOpen ? "200px" : "60px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "60px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
          
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;