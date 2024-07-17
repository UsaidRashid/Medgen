const Brand = require('../models/brand');
module.exports.take = async (req, res) => {
    
   const {name}=req.body;

    const response=await Brand.find({name});
    console.log(response);
     res.send(response);
}

const Generic=require('../models/generic');
module.exports.fetch = async (req, res) => {
    
   const {genname,brandname}=req.body;
    
    const response2=await Generic.find({name:genname});
    const response3=await Brand.find({name:brandname});
    console.log(response2,response3);

     res.send(response2);
}
