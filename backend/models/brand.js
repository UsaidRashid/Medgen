const mongoose = require('mongoose');

<<<<<<< HEAD

const brandSchema = new mongoose.Schema(
    {
        medicine_name : {
            type : String,
            required : true,
        },
        drug_code : {
            type : Number,
=======
const brandSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
        },
        code : {
            type : String,
>>>>>>> diya
            required : true,
        },
        salt : {
            type : String,
<<<<<<< HEAD
            required : true,
        },
        batch_no : {
            type : String,
            required : true,
        },
        mrp : {
=======
        },
        batch : {
            type : Number,
            required : true,
        },
        price : {
>>>>>>> diya
            type :Number ,
            required: true,
        }
    }
);

module.exports = mongoose.model('brand',brandSchema);

