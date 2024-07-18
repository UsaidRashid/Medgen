const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');
const brandController = require('../controllers/medilo');

router
    .route('/addMedicine')
        .post(adminController.addMedicine);

router
    .route('/take')
        .post(brandController.take);

router
    .route('/fetch')
        .post(brandController.fetch);

module.exports= router;