import { useState } from 'react'
import "./admin.css"
import Header from "./Header"
import Sidebar from './Sidebar'
import Storedeatils from './Storedetails'

function Adminstore() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  
    return (
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Storedeatils/>
      </div>
    )
  }
  
  export default Adminstore