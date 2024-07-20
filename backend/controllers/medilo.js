const brand=require('../models/brands');
const generic=require('../models/generics');
const request=require('../models/requests');

module.exports.brandMedicine=async(req,res)=>{
       try{
              const{name}=req.body;
              if(!name) return res.status(400).json({message:'Please Fill in something in the search bar!'});

              const medicine=await brand.findOne({name});
              if(!medicine) return res.status(201).json({message:`Seems like our database doesnt have any medicine named ${name}... \nYou can request for it to admin! OR Check if you entered a correct name`});

              return res.status(200).json({message:'Brand Medicine Fetched Successfully...',medicine});
       }catch(error){
              console.error(error);
              return res.status(500).json({message:'Internal Server Error',error});
       }
}

module.exports.genericMedicine=async(req,res)=>{
       try{
              const{name}=req.body;
              if(!name) return res.status(400).json({message:'Please Fill in something in the search bar!'});

              const medicine=await brand.findOne({name});
              if(!medicine) return res.status(201).json({message:`Seems like our database doesnt have any medicine named ${name}... \nYou can request for it to admin! OR Check if you entered a correct name`});

              return res.status(200).json({message:'Generic Medicine Fetched Successfully...',medicine});
       }catch(error){
              console.error(error);
              return res.status(500).json({message:'Internal Server Error',error});
       }         
}



module.exports.compareGeneric=async(req,res)=>{
       try{
              const {genname,brandname}=req.body;
              const brands=await brand.findOne({name:brandname});
              const generics=await generic.findOne({name:genname});
              return res.status(200).json({message:'Compare Details Fetched Successfully...',generics,brands});    
       }
       catch(error){
              console.error(error);
              return res.status(500).json({message:'Internal Server Error',error});
       }   
}

module.exports.compareBrand=async(req,res)=>{        
       try{
              const {genname,brandname}=req.body;
              const brands=await brand.findOne({name:brandname});
              const generics=await generic.findOne({name:genname});
              return res.status(200).json({message:'Compare Details Fetch Successfully...',generics,brands});    
       }
       catch(error){
              console.error(error);
              return res.status(500).json({message:'Internal Server Error',error});
       }   
}

module.exports.requestMedicine=async(req,res)=>{
       try{
              const{name,email,medName,message}=req.body;
              if(!name || !email || !medName) return res.status(400).json({message:'Some Important Information is missing... \nPlease fill in all the fields'});
              const newReq=new request(req.body);
              await newReq.save();
              return res.status(200).json({message:'Request Created Successfully',newReq})
       }catch(error){
              console.error(error);
              return res.status(500).json({message:'internal server error',error});
       }  
} 