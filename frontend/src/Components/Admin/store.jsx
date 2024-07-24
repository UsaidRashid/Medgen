import React, { useEffect,useState } from 'react'
import axios from 'axios';

export default function Diya() {
    
        const [brands,setBrands]= useState([]);
        useEffect(()=>{
            axios.get('http://localhost:3005/Diya')
                .then (response =>{
                    setBrands(response.data)
                    console.log("dgdjgd");
                })
                .catch(error=>{
                    console.error('erjugrjhg',error);
                })
            })
        
    
  return (
    <div>hgytyt

    <h1>hhhh</h1>
    <table>
        <thead>
            <tr>
                <th>name</th>
                
            </tr>
        </thead>
        <tbody>
            {brands.map(brand=>(

            <tr key={brand.name}>
                <td>{brand.drug}</td>
                <td>{brand.salt}</td>
                
            </tr>
            ))
            }
        </tbody>
    </table>
    </div>
  )
}