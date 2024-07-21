const User = require('../models/users');
const jwt = require('jsonwebtoken');

module.exports.signup = async (req,res) =>{
    try {
        console.log(req.body);
        let {username , name , email , contact , password} = req.body;

        if(!username || !name || !email || !contact || !password) return res.status(400).json({message:'All the fields are required for registration!'});
        
        const existingEmail = await User.findOne({email});

        if(existingEmail) return res.status(400).json({message:'The given email is already registered!'});

        const newUser = new User({
            name,
            email,
            username,
            contact,
        });

        const registeredUser = await User.register(newUser,req.body.password);

        req.login(registeredUser,(err) => {
            if(err){
                console.log(err);
                return res.status(500).json({message:'Error saving the user',err});
            }
            const token = jwt.sign(  {_id:registeredUser._id} ,'secretkey', { algorithm: 'HS256' });

            return res.status(200).json({message:'User Registered Successfully!',registeredUser,token});
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:'Internal Server Error',error});
    }
    
}

module.exports.login = async (req,res) =>{
    const user = await User.findOne({ username : req.body.username});
    const token = jwt.sign(  {_id:user._id} ,'secretkey', { algorithm: 'HS256' });
    return res.status(200).json({message:'User Logged in successfully',token});
}


module.exports.logout = async (req,res) =>{
    try {
        req.logout( (err) =>{
            if(err) return res.status(500).json({message:'Error while logging out ',err});
            else return res.status(200).json({message:"Logged out successfully"});
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:'Internal Server Error',error});
    }
    
}


module.exports.fetchProfile = async (req,res) => {
    try {
        const token = req.body.token;

        if(!token) res.status(400).json({message:'Seems like you are not logged in!'});
        
        const decodedToken = jwt.verify('secretkey');
        const _id = decodedToken._id;

        const response = await User.findOne({_id});

        if(!response) res.status(400).json({message:'Error in fetching your profile from database! Please log-in again...'});

        res.status(200).json({message:'Profile Details fetched successfully!',response});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:'Internal Server Error',error});
    }
}


module.exports.updateDetails = async (req,res) => {
    try {
        const { name, email , contact , token } = req.body;

        if(!name || !email) return res.status(400).json({message:"Required Fields shouldn't be ignored!"});

        if(!token) return res.status(400).json({message:'Something went wrong! Are you logged in?'});

        const decodedToken = jwt.verify('secretkey');
        const _id = decodedToken._id;


        const updatedProfile = {
            name ,
            email,
            contact,
        };

        const updatedUser = await User.findOneAndUpdate({_id} , updatedProfile, { new : true, runValidators:true});

        if(!updatedUser) return res.status(400).json({message:"Couldn't find user profile ! Please try logging in again"});

        return res.status(200).json({message:'User Updated successfully',updatedProfile});
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:'Internal Server Error',error});
    }
    
}



module.exports.signupGoogle = async (req,res) => {
    try {
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:'Internal Server Error',error});   
    }

}
