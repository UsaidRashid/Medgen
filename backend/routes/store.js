const express = require('express');
const router = express.Router();
const storeController = require('../controllers/store')

router
    .route('/fetch-stores')
        .post(storeController.fetchStores);

router 
    .route('/register-store')
        .post(storeController.registerStore);

router
    .route('/update-store')
        .post(storeController.updateStore);

router
    .route('/delete-store')
        .post(storeController.deleteStore);

        
module.exports = router;
