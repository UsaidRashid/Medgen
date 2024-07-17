const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brand');

router
    .route('/take')
        .post(brandController.take);

        router
    .route('/fetch')
        .post(brandController.fetch);


module.exports= router;