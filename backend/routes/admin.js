const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');
const storeController = require('../controllers/store');

router
    .route('/add-brand')
        .post(adminController.addBrand);
    
router
    .route('/add-generic')
        .post(adminController.addGeneric);

router
    .route('/fetch-requests')
        .post(adminController.fetchRequests);

router
    .route('/fetch-dashboard')
        .post(adminController.fetchDashboard);

router
    .route('/fetch-stores')
        .post(storeController.fetchStores);


router
    .route('/delete-store')
        .post(storeController.deleteStore);
    
        
module.exports=router;
