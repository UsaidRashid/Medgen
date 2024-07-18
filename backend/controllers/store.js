

const Store = require('../models/stores');


module.exports.storelocator = async (req, res) => {
    console.log(req.body);
    res.send('In the controller of storeloactor');
}

module.exports.fetchStores = async (req, res) => {
    const stores = await Store.find({});
    res.json(stores);
};

module.exports.registerStore = async (req, res) => {
    const store = new Store({
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        pincode: req.body.pincode,
        address: req.body.address,
        contact: req.body.contact,
        ownerName: req.body.ownerName,
        residentialAddress: req.body.residentialAddress
    });
    const newStore = await store.save();
    res.json(newStore);
};


module.exports.deleteStore = async (req, res) => {
    const store = await Store.findByIdAndDelete(req.params.id);
    if (!store) {
        return res.json('Store not found');
    }
    res.json('Store deleted');
};

module.exports.updateStore = async (req, res) => { 
 
    const store = await Store.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
    if (!store) { 
        return res.json({ message: 'Store not found' }); 
    } 
    res.json(store); 

};
module.exports.fetchStore = async (req,res)=>{
     
    const store =await Store.findById(req.params.id);
    res.json(store);
};






