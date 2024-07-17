const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router
    .route('/addMedicine')
        .post(adminController.addMedicine);

        module.exports=router;


        