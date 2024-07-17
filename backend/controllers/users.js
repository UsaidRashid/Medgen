const User = require('../models/users');


module.exports.signup = async (req,res) =>{
    console.log(req.body);
    res.send('In the controller of signup');
}

module.exports.login = async (req,res) =>{

}


module.exports.logout = async (req,res) =>{
    
}