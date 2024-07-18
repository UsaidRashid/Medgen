const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

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
    .route('/fetch-stores')
        .post(adminController.fetchStores);

router
    .route('/fetch-dashboard')
        .post(adminController.fetchDashboard);

router
    .route('/delete-store')
        .post(adminController.deleteStore);
    
        
module.exports=router;