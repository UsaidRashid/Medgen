const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");
const passport = require("passport");
const upload = require("../configs/multerConfig");

router.route("/signup").post(upload.single('profilePic'),userController.signup);

router
  .route("/login")
  .post(passport.authenticate("local"), userController.login);

router.route("/logout").post(userController.logout);
router.route("/update").post(userController.updateDetails);
router.route("/signup-google").post(userController.signupGoogle);

module.exports = router;
