import React from 'react'
import background from '../../Images/404.png';
import "../../CSS/Medilo.css";
import { useNavigate } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter';

export default function Medilo() {
  const navigate = useNavigate();

  const openRequest = (e) => {
    e.preventDefault();
    navigate('/user-request-form');
  }

  const [ text ] = useTypewriter({
    words: ['EQUEST HERE!'],
    loop: {},
    delaySpeed: 300,
  });

  return (
    <>
      <div className=' d-flex align-items-center p-5 justify-content-left' style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "right", height: '100vh', backgroundColor: "white" }}>
        <form>
          
         
          <h1 className='text-center' style={{color:"black", fontWeight:"700",fontSize:"80px",marginBottom:"100px"}}>MEDGEN</h1>
          <h1 className='text-center' style={{color:"black",marginBottom:"20px"}}><b>Didn't Get Required Medicine</b></h1>
          <h1 className='text-center mx-5' style={{color:"#2380ea",marginBottom:"22px"}}><b>R{text}</b></h1>
          
          <button style={{ color: "Black",boxShadow: "7px 6px 4px rgba(0, 0, 0, 0.5)",width: "200px",marginLeft:"350px"}} className='btn my-3 fs-4 b123' onClick={openRequest}>Request</button>
        </form>
      </div>
    </>
  )
}
