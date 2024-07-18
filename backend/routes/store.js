const express = require('express');
const router = express.Router();
const storeController = require('../controllers/store');

router
    .route('/storelocator')
    .post(storeController.storelocator);


router.route('/fetch-stores')
    .get(storeController.fetchStores);

router.route('/fetch-store/:id')
    .get(storeController.fetchStore);

router.route('/register-store')
    .post(storeController.registerStore);

router.route('/update-store/:id')
    .put(storeController.updateStore);

router.route('/delete-store/:id')
    .delete(storeController.deleteStore);

module.exports = router;