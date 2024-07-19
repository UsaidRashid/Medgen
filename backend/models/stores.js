const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema(
    {    
        gst_No : {
            type : String,
            required : true,
            unique : true,
        },
        name:{
            type : String,
            required: true,
        },
        latitude : {
            type : Number,
        },
        longitude : {
            type : Number,
        },
        pincode: {
            type : String,
            required: true,
        },
        address : {
            type : String,
            required : true,
        },
        contact: {
            type : Number,
            required : true,
        },
        ownerName : {
            type : String,
            required : true,
        },
        residentialAddress:{
            type : String ,
            required : true,
        }
    }
);

module.exports = mongoose.model('Store',storeSchema);