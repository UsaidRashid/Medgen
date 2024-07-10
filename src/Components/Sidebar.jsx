import React from 'react'
import './Sidebar.css'

import profile from '../images/profile.png'
import 
{BsGrid1X2Fill, BsPeopleFill,BsListCheck, BsMenuButtonWideFill}
 from 'react-icons/bs'

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
                <a href="#">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Request
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Response
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Vendor
                </a>
            </li>
            
        </ul>
    </aside>
  );
}

