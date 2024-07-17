const brand=require('../models/brand');




module.exports.addMedicine=async(req,res)=>{
    const medicine={
        medicine_name,
        drug_code,
        salt,
        batch_no,
        mrp
    
    }=req.body;
    const newMedicine=new brand(medicine);
    await newMedicine.save();
    res.send(req.body);


}
//module.exports.fetchMedicine = async (req,res)=>{
 //   const response = await brand.find({});
  
 //   console.log(response);
 //   res.send(response);
 // }