const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema(
    {
        medicineName : {
            type : String,
            required : true,
        },
        userName : {
            type : String,
            required : true,
        },
        email : {
            type : String,
            required : true,
        },
        contact:{
            type : String,
        }
    }
);

module.exports = mongoose.model('Request',requestSchema);

