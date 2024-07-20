const Store = require('../models/stores');


module.exports.registerStore = async (req, res) => {
    try {
        
        const { gst_No, name, latitude, longitude, pincode, address, contact, ownerName, residentialAddress } = req.body;
        
        if(!gst_No || !name || !pincode || !address || !contact || !ownerName || !residentialAddress) return res.status(400).json({message:'Some required information is missing... Please fill in all the fields!'});

        const store = new Store({
            gst_No,
            name,
            latitude,
            longitude,
            pincode,
            address,
            contact,
            ownerName,
            residentialAddress,
        });

        const newStore = await store.save();
        res.status(200).json({ message: "Your Store Successfully Added...", newStore });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error', error });
    }
};

module.exports.updateStore = async (req, res) => {
    try {
        
        const { gst_No, name, latitude, longitude, pincode, address, contact, ownerName, residentialAddress } = req.body;
        if(!gst_No || !name || !pincode || !address || !contact || !ownerName || !residentialAddress) return res.status(400).json({message:'Some required information is missing... Please fill in all the fields!'});

        const store = await Store.findOneAndUpdate({ gst_No }, req.body, { new: true , runValidators: true });

        if (!store)  return res.status(400).json({ message: 'Store not found' });
        res.status(200).json({ message: "Store Details Updated Successfully...", store });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error', error });
    }
};

module.exports.deleteStore = async (req, res) => {
    try {
        const { gst_No } = req.body;
        const store = await Store.findOneAndDelete({ gst_No });
        if (!store)    return res.status(400).json({ message: 'Store not found' });
        res.status(200).json({ message: 'Store deleted successfully...' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error', error });
    }
};

module.exports.fetchStores = async (req, res) => {
    try {
        const { gst_No } = req.body;
        if(gst_No===undefined){
            const stores = await Store.find({});
            res.status(200).json({ message: "Here we can see the data of all Stores...", stores });
        }else{
            const store = await Store.findOne({ gst_No });
            if(!store) return res.json({ message: 'Store not found' });
            res.status(200).json({ message: "Your Requested Store Details...", store });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error', error });
    }
};
