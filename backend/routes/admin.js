const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const storeController = require("../controllers/store");

router.route("/add-brand").post(adminController.addBrand);
router.route("/add-generic").post(adminController.addGeneric);
router.route("/fetch-requests").post(adminController.fetchRequests);
router.route("/fetch-dashboard").post(adminController.fetchDashboard);
router.route("/fetch-stores").post(storeController.fetchStores);
router.route("/delete-store").post(storeController.deleteStore);
router.route("/fetch-brands").post(adminController.fetchBrands);
router.route("/fetch-generics").post(adminController.fetchGenerics);
router.route("/delete-brand").post(adminController.deleteBrand);
router.route("/delete-generic").post(adminController.deleteGeneric);

module.exports = router;
