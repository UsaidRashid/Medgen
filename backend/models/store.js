const mongoose = require('mongoose'); 
 
const storeSchema = new mongoose.Schema( 
    {     
        storeID: String, 
        storeName: String, 
        latitude: Number, 
        longitude: Number, 
        pincode: String, 
        address: String, 
        contactNo: String, 
        ownerName: String, 
        residentialAddress: String 
    } 
); 
 
module.exports = mongoose.model('store',storeSchema);