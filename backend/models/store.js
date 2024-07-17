const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema(
    {    
        storeId: String,
        storeName: String,
        latitude: Number,
        longitude: Number,
        pincode: String,
        address: String,
        contact: String,
        ownerName: String,
        residentialAddress: String
    }
);

module.exports = mongoose.model('store',storeSchema);