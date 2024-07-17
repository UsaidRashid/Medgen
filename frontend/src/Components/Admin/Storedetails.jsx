import React,{useEffect,useState} from "react";
import DataTable from 'react-data-table-component';
import Sidebar from './Sidebar';

function Storedetails(){
    const columns=[
        {
            name:<h6><b>Owner name</b></h6>,
            selector: row=>row.ownername,
            sortable : true
        },
        {
            name:<h6><b>Store name</b></h6>,
            selector: row=>row.storename,
            sortable : true
        },
        {
            name:<h6><b>Owner address</b></h6>,
            selector: row=>row.owneraddress,
            sortable : true
        },
        {
            name:<h6><b>Store address</b></h6>,
            selector: row=>row.storeaddress,
            sortable : true
        },
        {
            name:<h6><b>Latitude</b></h6>,
            selector: row=>row.latitude, 
            sortable : true
        },
        {
            name:<h6><b>Longitude</b></h6>,
            selector: row=>row.longitude,
            sortable : true
        },
        {
            name:<h6><b>Pincode</b></h6>,
            selector: row=>row.pincode, 
            sortable : true
        },
        {
            name:<h6><b>Contact</b></h6>,
            selector: row=>row.contact, 
            sortable : true
        }
    ];
    const data=[
        {
            ownername:'pratik',
            storename:'balaji medicine',
            owneraddress:'ashok',
            storeaddress:'nAshokagar',
            latitude:'24*',
            longitude:'35*',
            pincode:'234454',
            contact:'234454'
        },
        {
            ownername:'pratik',
            storename:'balaji medicine',
            owneraddress:'ashok',
            storeaddress:'nAshokagar',
            latitude:'24*',
            longitude:'35*',
            pincode:'234454',
            contact:'234454'
        },
        {
            ownername:'pratik',
            storename:'balaji medicine',
            owneraddress:'ashok',
            storeaddress:'nAshokagar',
            latitude:'24*',
            longitude:'35*',
            pincode:'234454',
            contact:'234454'
        },
        {
            ownername:'pratik',
            storename:'balaji medicine',
            owneraddress:'ashok',
            storeaddress:'nAshokagar',
            latitude:'24*',
            longitude:'35*',
            pincode:'234454',
            contact:'234454'
        },
        {
            ownername:'pratik',
            storename:'balaji medicine',
            owneraddress:'ashok',
            storeaddress:'nAshokagar',
            latitude:'24*',
            longitude:'35*',
            pincode:'234454',
            contact:'234454'
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
        <div className='d-flex flex-row bg-white'>
        <div>
                            <Sidebar/>
        </div>
        
        <div className="d-flex flex-column ">
        <div className="container d-flex flex-column " style={{width: "3000px"}}>
        <div className="text-end" ><input type="text" oncahnge={handleFilter}/></div>
        <DataTable 
        
        columns={columns}
        data={records}
        pagination
            selectableRows
            fixedHeader
            selectableRowsHighlight
            highlightOnHover
            
               
             
             subHeaderAlign="right"
            
            >
        </DataTable>
        </div>
        </div>
        </div>
        
    );
}
export default Storedetails;