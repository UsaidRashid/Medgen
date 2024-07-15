import React,{useEffect,useState} from "react";
import DataTable from 'react-data-table-component';
import Sidebar from './Sidebar';

function Storedetails(){
    const columns=[
        {
            name:'Owner name',
            selector: row=>row.ownername,
            sortable : true
        },
        {
            name:'Store name',
            selector: row=>row.storename,
            sortable : true
        },
        {
            name:'Location',
            selector: row=>row.location,
            sortable : true
        },
        {
            name:'Pincode',
            selector: row=>row.pincode, 
            sortable : true
        }
    ];
    const data=[
        {
            ownername:'pratik',
            storename:'balaji medicine',
            location:'Ashok nagar',
            pincode:'234454'
        },
        {
            ownername:'shamita',
            storename:'balaji medicine',
            location:'Ashok nagar',
            pincode:'234454'
        },
        {
            ownername:'suhasnit',
            storename:'bali medicine',
            location:'kamla nagar',
            pincode:'234454'
        },
        {
            ownername:'pratik',
            storename:'balaji medicine',
            location:'Ashok nagar',
            pincode:'234454'
        },
        {
            ownername:'pratik',
            storename:'balaji medicine',
            location:'Ashok nagar',
            pincode:'234454'
        },
        {
            ownername:'pratik',
            storename:'balaji medicine',
            location:'Ashok nagar',
            pincode:'234454'
        },
        {
            ownername:'pratik',
            storename:'balaji medicine',
            location:'Ashok nagar',
            pincode:'234454'
        },
        {
            ownername:'pratik',
            storename:'balaji medicine',
            location:'Ashok nagar',
            pincode:'234454'
        },
        {
            ownername:'pratik',
            storename:'balaji medicine',
            location:'Ashok nagar',
            pincode:'234454'
        },
        {
            ownername:'pratik',
            storename:'balaji medicine',
            location:'Ashok nagar',
            pincode:'234454'
        },
        {
            ownername:'pratik',
            storename:'balaji medicine',
            location:'Ashok nagar',
            pincode:'234454'
        },
        {
            ownername:'pratik',
            storename:'balaji medicine',
            location:'Ashok nagar',
            pincode:'234454'
        },
        {
            ownername:'pratik',
            storename:'balaji medicine',
            location:'Ashok nagar',
            pincode:'234454'
        },
        {
            ownername:'pratik',
            storename:'balaji medicine',
            location:'Ashok nagar',
            pincode:'234454'
        },
        {
            ownername:'yosaf',
            storename:'balaji medicine',
            location:'Ashok nagar',
            pincode:'234454'
        }
    ]
    const [records,setRecords]=useState(data);
    
    function handleFilter(event){
        const newData=data.filter(row=>{
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }
    return(
        <div className='d-flex flex-row'>
        <div>
                            <Sidebar/>
        </div>
        
        <div>
        <div className="container fluid">
        <div className="text-end"><input type="text" oncahnge={handleFilter}/></div>
        <DataTable
        columns={columns}
        data={records}
        selectableRows
        fixedHeader
        pagination
        ></DataTable>
        </div>
        </div>
        </div>
    );
}
export default Storedetails;