const brand=require('../models/brands');
const generic=require('../models/generics');
const request=require('../models/requests');
module.exports.brandMedicine=async(req,res)=>{
    try{
           const{
            name,
           }=req.body;
           const medicine=await brand.findOne({name});
        return res.status(200).json({message:'Brand Medicine fetched successfully',medicine});
    }catch(error){
           console.error(error);
           return res.status(500).json({message:'internal server error',error});}
    }

module.exports.genericMedicine=async(req,res)=>{
        try{
               const{
                name,
               }=req.body;
               const newGeneric=new generic({name});
               const medicine2=await brand.findOne({name});
               return res.status(200).json({message:'successfully inserted',medicine2});
        }catch(error){
               console.error(error);
               return res.status(500).json({message:'internal server error',error});}         
   }



   module.exports.compareGeneric=async(req,res)=>{
        
       try{
        const {genname,brandname}=req.body;
        const brands=await brand.findOne({name:brandname});
        const generics=await generic.findOne({name:genname});
        return res.status(200).json({message:'compare details fetch successfully',generics,brands});    
       }
       catch(error){
        console.error(error);
        return res.status(500).json({message:'internal server error',error});
        }   
    }

    module.exports.compareBrand=async(req,res)=>{
        
        try{
         const {genname,brandname}=req.body;
         const brands=await brand.findOne({name:brandname});
         const generics=await generic.findOne({name:genname});
         return res.status(200).json({message:'compare details fetch successfully',generics,brands});    
        }
        catch(error){
         console.error(error);
         return res.status(500).json({message:'internal server error',error});
         }   
     }

     module.exports.requestMedicine=async(req,res)=>{
        try{
               const{
                name,
                email,
                medName,
                message
               }=req.body;
               const newReq=new request(req.body);
               await newReq.save();
               return res.status(200).json({message:'request generated successfully',newReq})
        }catch(error){
           console.error(error);
         return res.status(500).json({message:'internal server error',error});
         }  
        } 