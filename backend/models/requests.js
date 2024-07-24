const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema(
    {
        medName : {
            type : String,
            required : true,
        },
        name : {
            type : String,
            required : true,
        },
        email : {
            type : String,
            required : true,
        },
        message:{
            type : String,
        }
    }
);

module.exports = mongoose.model('Request',requestSchema);

