const Store = require('../models/store'); 
 
 
module.exports.storelocator = async (req,res) =>{ 
    console.log(req.body); 
    res.send('In the controller of storelocator'); 
} 


module.exports.getAllStores = async (req, res) => { 
    const stores = await Store.find({}); 
    res.json(stores); 
};

module.exports.registerStore = async (req, res) => { 
    const store = new Store({ 
    storeId: req.body.storeID, 
    storeName: req.body.storeName, 
    latitude: req.body.latitude, 
    longitude: req.body.longitude, 
    pincode: req.body.pincode, 
    address: req.body.address, 
    contactNo: req.body.contactNo, 
    ownerName: req.body.ownerName, 
    residentialAddress: req.body.residentialAddress 
}); 
const newStore = await store.save(); 
res.json(newStore); 
};

