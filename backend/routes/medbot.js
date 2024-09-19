const express = require("express");
const router = express.Router();
const medbotController = require("../controllers/medbot");

router.route("/").post(medbotController.respond);

module.exports = router;
