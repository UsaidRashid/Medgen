const brand=require('../models/brands');
const generic=require('../models/generics');
const store=require('../models/stores');
const request=require('../models/requests');

module.exports.addBrand=async(req,res)=>{
    try{
        const medicine={
            name,
            code,
            salt,
            batch,
            price
        
        }=req.body;

        if(!name || !code || !batch || !price || !salt) return res.status(400).json({message:'Some important information about medicine is missing...'});

        const newBrand=new brand(medicine);
        await newBrand.save();
        
        return res.status(200).json({messsage:'Brand Medicine added successfully' ,newBrand});
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message:'Internal Server Error',error});
    }
}

module.exports.addGeneric=async(req,res)=>{
    try{
        const medicine={
            name,
            code,
            salt,
            batch,
            price
        
        }=req.body;

        if(!name || !code || !salt || !batch || !price) return res.status(400).json({message:'Some important information about medicine is missing...'});

        const newGeneric=new generic(medicine);
        await newGeneric.save();

        return res.status(200).json({messsage:'Generic Medicine Added Successfully!',newGeneric});
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message:'Internal Server Error',error});
    }
}

module.exports.fetchRequests = async (req,res)=>{
    try{
        const response = await request.find({});
        
        return res.status(200).json({messsage:'Requests fetched successfully!',response});
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message:'Internal Server Error',error});
    }
}


module.exports.fetchDashboard=async(req,res)=>{
    try{
        const generics = await generic.find({}); 
        
        const brands = await brand.find({});

        const requests = await request.find({});
        
        const stores = await store.find({});
        
        return res.status(200).json({messsage:'Dashboard Updated Successfully!',genCnt:generics.length,brandCnt:brands.length,reqCnt:requests.length,storeCnt:stores.length}); 
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message:'Internal Server Error',error});
    }
}


