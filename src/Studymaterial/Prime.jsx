import React,{useState} from 'react';

export default function Prime() {
   const[number,setNumber]=useState('');
   const Calculate=()=>{
    const num=parseInt(number);
    let t=0;
    for(let i=2;i<num;i++){
          if(num%i==0){
            t=t+1;
          }
    }
    if(t>0){
        console.log("it is not prime")
    }
    else{
        console.log("it is prime")
    }
   }
  return (
    <>
    <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
    <button onClick={Calculate}>Calculate Prime</button>
    </>
  )
}
