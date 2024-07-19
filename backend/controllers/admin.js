const brand=require('../models/brands');
const generic=require('../models/generics');
const store=require('../models/stores');
const request=require('../models/requests');

//for adding the brand medicines

module.exports.addBrand=async(req,res)=>{
    try{
        const medicine={
            name,
            code,
            salt,
            batch,
            price
        
        }=req.body;

        const newBrand=new brand(medicine);
        await newBrand.save();
        
        return res.status(200).json({messsage:'Brand Medicine added successfully' ,newBrand});
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message:'Internal Server Error',error});
    }
}

// for adding the generic medicines
module.exports.addGeneric=async(req,res)=>{
    try{
        const medicine={
            name,
            code,
            salt,
            batch,
            price
        
        }=req.body;

        const newGeneric=new generic(medicine);
        await newGeneric.save();

        return res.status(200).json({messsage:'Generic Medicine Added Successfully!',newGeneric});
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message:'Internal Server Error',error});
    }
}

//for fetching the requests
module.exports.fetchRequests = async (req,res)=>{
    try{
        const response = await request.find({});
        
        console.log(response);
        return res.status(200).json({messsage:'Requests fetched successfully!',response});
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message:'Internal Server Error',error});
    }
}

// for fetching the store details
module.exports.fetchStores=async(req,res)=>{
    try{
        const response = await store.find({}); 
        console.log(response);
        return res.status(200).json({messsage:'Stores fetched successfully!',response});
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message:'Internal Server Error',error});
    }
}

// for fetching the dashboard
module.exports.fetchDashboard=async(req,res)=>{
    try{
        const A = await generic.find({}); 
        console.log(A);
        

        const B = await brand.find({});
        console.log(B);
        
        const C = await request.find({});
        console.log(C);

        const D = await store.find({});
        console.log(D);

        
        return res.status(200).json({messsage:'Dashboard Updated Successfully!',a:A.length,b:B.length,c:C.length,d:D.length}); 
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message:'Internal Server Error',error});
    }
}

//for deleting store details
module.exports.deleteStore=async(req,res)=>{
    try{
        const result = await store.deleteOne({_id : req.body._id}); 
        console.log(result);
        return res.status(200).json({messsage:'Store Deleted Successfully'});
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message:'Internal Server Error',error});
    }
}


