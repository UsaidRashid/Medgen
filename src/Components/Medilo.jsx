import React from 'react'
import background from '../Images/medilo-bg.png';
import { useNavigate } from 'react-router-dom';

export default function Medilo() {
    const navigate = useNavigate();

    const openBranded = (e) => {
        e.preventDefault();
        navigate('/branded-search');
    }

    const openGeneric = (e) => {
        e.preventDefault();
        navigate('/generic-search');
    }

    return (
            
            
    <div className='d-flex flex-row justify-content-center align-items-center ' style={{backgroundImage:`url(${background})` ,backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center",height:'100vh'}}>

        <div className='hover fs-1 p-2 w-25 h-50 mx-5 d-flex flex-column justify-content-center border border-success rounded border-opacity-50 text-bg-success' onClick={openGeneric}>
            Generic Search
        </div>
        <div className='hover fs-1 p-2 w-25 h-50 mx-5 d-flex flex-column justify-content-center border border-success rounded border-opacity-50 text-bg-success' onClick={openBranded}>
            Brand Search
        </div>
    </div>
  )
}
