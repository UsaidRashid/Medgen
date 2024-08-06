const express = require("express");
const router = express.Router();
const storeController = require("../controllers/store");
const upload = require("../configs/multerConfig");

router.route("/register-store").post(upload.single('storePic'),storeController.registerStore);
router.route("/fetch-stores").post(storeController.fetchStores);
router.route("/update-store").post(upload.single('storePic'),storeController.updateStore);
router.route("/delete-store").post(storeController.deleteStore);

module.exports = router;