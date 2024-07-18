const brand=require('../models/brands');
const store = require('../models/stores');
const request = require('../models/requests');
const generic = require('../models/generics');


module.exports.addBrand=async(req,res)=>{
    try {
        const medicine={
            name,
            code,
            salt,
            batch,
            price
            }=req.body;
        const newBrand=new brand(medicine);
        await newBrand.save();
        return res.status(200).json({message:'Brand Medicine Added Successfully',newBrand});

    } catch (error) {
    console.error(error);
    return res.status(500).json({message:'Internal Server Error',error});
    }}



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
        return res.status(200).json({message:'Generic Medicine Added Successfully',newGeneric});
    }catch (error) {
        console.error(error);
        return res.status(500).json({message:'Internal Server Error',error});
    }}



module.exports.fetchRequest = async (req,res)=>{
    try{
        const response = await request.find({}); 
        console.log(response);
        return res.status(200).json({message:'Request Find Successfully',response});
    }catch (error) {
        console.error(error);
        return res.status(500).json({message:'Internal Server Error',error});
    }}



module.exports.fetchStore=async(req,res)=>{
    try{
        const response = await store.find({});
        console.log(response);
        return res.status(200).json({message:'Store Find Successfully',response});
    }catch (error) {
        console.error(error);
        return res.status(500).json({message:'Internal Server Error',error});
    }}



module.exports.fetchDashboard=async(req,res)=>{
    try{
        const A = await generic.find({});
        console.log(A);
  
        const B = await brand.find({});
        console.log(B);

        const C = await request.find({});
        console.log(C);
   
        const D = await store.find({});
        console.log(B);
 
        return res.status(200).json({message:'Dashboard Found Successfully', a:A.length,b:B.length,c:C.length,d:D.length});

    }catch (error) {
        console.error(error);
        return res.status(500).json({message:'Internal Server Error',error});
    }}



module.exports.deleteStore=async(req,res)=>{
    try{
        const result = await store.deleteOne({ _id:req.body._id});
        console.log(result);
        return res.status(200).json({message:'Successfully Deleted Store'});
    }catch (error) {
        console.error(error);
        return res.status(500).json({message:'Internal Server Error',error});
    }}
