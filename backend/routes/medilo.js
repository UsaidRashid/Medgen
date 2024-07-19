const express = require('express');
const router = express.Router();
const mediloController=require('../controllers/medilo');

router
  .route('/brand-search')
  .post(mediloController.brandMedicine);

 router
  .route('/generic-search')
  .post(mediloController.genericMedicine);
  
  router
  .route('/generic-compare')
  .post(mediloController.compareGeneric); 

  router
  .route('/brand-compare')
  .post(mediloController.compareBrand);
  
  router
  .route('/request-medicine')
  .post(mediloController.requestMedicine);
module.exports= router;