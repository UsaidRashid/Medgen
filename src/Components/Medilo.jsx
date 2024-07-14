import React from 'react'
import background from '../Images/medilo-bg.png';
import "../CSS/Medilo.css";
import { useNavigate } from 'react-router-dom';

const myStyle = {
  color: "Black",
  backgroundPosition: "right",
  boxShadow: "7px 6px 4px rgba(0, 0, 0, 0.5)",
  width: "200px",
};

const myStyle2 = {
  color: "black",
  marginBottom: "20px",
};

const myStyle3 = {
  color: "black",
  marginBottom: "150px",
  fontWeight: "500",
};


export default function Medilo() {
  const navigate = useNavigate();

    const openBSearch = (e) =>{
        e.preventDefault();
        navigate('/branded-search');
    }

  const navigate1 = useNavigate();

    const openGSearch = (e) =>{
        e.preventDefault();
        navigate1('/generic-search');
    }

  return (
    <>
      <div className=' d-flex align-items-center p-5 justify-content-left' style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "right", height: '100vh', backgroundColor: "white" }}>
        <form>
          <h1 className='text-center' style={myStyle2}><b>MEDILO</b></h1>
          <h1 className='text-center' style={{ color: "black" }}>Here you can</h1>
          <h1 className='text-center' style={myStyle3}>choose an option for search...</h1>
          <button style={myStyle} className='btn mx-5 fs-4 b123' onClick={openGSearch}>Generic Search</button>
          <button style={myStyle} className='btn mx-5 fs-4 b123' onClick={openBSearch}>Brand Search</button>
        </form>
      </div>
    </>
  )
}
