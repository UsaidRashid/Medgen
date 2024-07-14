import React,{useState} from 'react'

export default function Complex() {

const[rea1,setRea1]=useState('');
const[img1,setImg1]=useState('');
const[rea2,setRea2]=useState('');
const[img2,setImg2]=useState('');
const[rea3,setRea3]=useState('');
const[img3,setImg3]=useState('');

const add=()=>{
    setRea3(parseInt(rea1)+parseInt(rea2));
    setImg3(parseInt(img1)+parseInt(img2));
}

  return (
    <div>
        <input type="number" value={rea1} placeholder='real 1' onChange={(e)=>setRea1(e.target.value)}/>
        <input type="number" value={img1} placeholder='img 1' onChange={(e)=>setImg1(e.target.value)}/>
        <input type="number" value={rea2} placeholder='real 2' onChange={(e)=>setRea2(e.target.value)}/>
        <input type="number" value={img2} placeholder='img 2' onChange={(e)=>setImg2(e.target.value)}/>
        <input type="number" value={rea3} placeholder='real 3' onChange={(e)=>setRea3(e.target.value)}/>
        <input type="number" value={img3} placeholder='img 3' onChange={(e)=>setImg3(e.target.value)}/>
        <button onClick={add}>Calculate</button>
    </div>
  )
}
