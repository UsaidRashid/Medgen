const express = require('express');
const router = express.Router();
const storeController = require('../controllers/store');

router
    .route('/storelocator')
    .post(storeController.storelocator);


router.route('/getname')
    .get(storeController.getAllStores);

router.route('/registerstore')
    .post(storeController.registerStore);

module.exports = router;