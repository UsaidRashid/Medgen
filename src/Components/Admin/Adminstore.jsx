import { useState } from 'react'
import "../../CSS/admin.css"
import Header from "./Header"
import Sidebar from './Sidebar'
import Storedetails from './Storedetails'

function Adminstore() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  
    return (
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Storedetails/>
      </div>
    )
  }
  
  export default Adminstore