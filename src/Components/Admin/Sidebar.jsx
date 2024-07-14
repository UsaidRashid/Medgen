import React from 'react'
import '../../CSS/Sidebar.css'

import profile from '../../Images/profile.png'
import {BsGrid1X2Fill, BsPeopleFill,BsListCheck, BsMenuButtonWideFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        
        <div className='sidebar-title'>
          
            <div className='sidebar-brand w-100'>
                <BsPeopleFill  className='icon_header'/> Hello Admin
            </div>
           
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
        <img src={profile} alt=""/>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/admin">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin/requests">
                    <BsMenuButtonWideFill className='icon'/> Requests
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin/response">
                    <BsListCheck className='icon'/> Response
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/admin/store">
                    <BsPeopleFill className='icon'/> Vendor
                </Link>
            </li>
            
        </ul>
    </aside>
  );
}

