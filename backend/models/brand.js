const mongoose = require('mongoose');


const brandSchema = new mongoose.Schema(
    {
        medicine_name : {
            type : String,
            required : true,
        },
        drug_code : {
            type : Number,
            required : true,
        },
        salt : {
            type : String,
            required : true,
        },
        batch_no : {
            type : String,
            required : true,
        },
        mrp : {
            type :Number ,
            required: true,
        }
    }
);

module.exports = mongoose.model('brand',brandSchema);

