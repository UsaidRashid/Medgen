const express = require("express");
const router = express.Router();
const mediloController = require("../controllers/medilo");

router.route("/brand-search").post(mediloController.brandMedicine);
router.route("/generic-search").post(mediloController.genericMedicine);
router.route("/compare-meds").post(mediloController.compareMeds);
router.route("/request-medicine").post(mediloController.requestMedicine);
router.route('/generic-elastic-search').post(mediloController.GenericElasticSearch);
router.route('/brand-elastic-search').post(mediloController.BrandElasticSearch);

module.exports = router;
