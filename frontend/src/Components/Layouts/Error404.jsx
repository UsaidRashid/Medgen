import React from 'react'
import img from '../../Images/error-404.png'
import '../../CSS/error.css'

const Error404 = () => {
  return (
    <div className='Error-container error404 d-flex flex-column my-5 justify-content-center align-items-center'>
        <img src={img} alt="" />
        <h1 className='mt-3'>404: Page Not Found</h1>
        <p className='fw-bold'>Oops,The page you are looking for does not exist</p>
    </div>
  )
}

export default Error404