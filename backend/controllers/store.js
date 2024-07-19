const Store = require('../models/stores'); 
 
 
module.exports.fetchStores = async (req, res) => { 
    try { 
        const stores = await Store.find({}); 
        res.status(200).json({ message: "Here we can see the data of all Stores...", stores }); 
    } catch (error) { 
        console.error(error); 
        return res.status(500).json({ message: 'Internal Server Error', error }); 
    } 
}; 
 
module.exports.registerStore = async (req, res) => { 
    try { 
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
        res.status(200).json({ message: "Your Store Successfully Added...", newStore }); 
    } catch (error) { 
        console.error(error); 
        return res.status(500).json({ message: 'Internal Server Error', error }); 
    } 
}; 
 
module.exports.updateStore = async (req, res) => { 
    try { 
        const { _id } = req.body; 
        const store = await Store.findOneAndUpdate({ _id }); 
        if (!store) { 
            return res.status(400).json({ message: 'Store not found' }); 
        } 
        res.status(200).json({ message: "Store Details Updated Successfully...", store }); 
    } catch (error) { 
        console.error(error); 
        return res.status(500).json({ message: 'Internal Server Error', error }); 
    } 
}; 
 
module.exports.deleteStore = async (req, res) => { 
    try { 
        const { _id } = req.body; 
        const store = await Store.findOneAndDelete({ _id }); 
        if (!store) { 
            return res.json({ message: 'Store not found' }); 
        } 
        res.status(200).json({ message: 'Store deleted successfully...' }); 
    } catch (error) { 
        console.error(error); 
        return res.status(500).json({ message: 'Internal Server Error', error }); 
    } 
}; 
 
module.exports.fetchStore = async (req, res) => { 
    try { 
        const { _id } = req.body; 
        const store = await Store.findOne({ _id }); 
        res.status(200).json({ message: "Your Requested Store Details...", store }); 
    } catch (error) { 
        console.error(error); 
        return res.status(500).json({ message: 'Internal Server Error', error }); 
    } 
};

