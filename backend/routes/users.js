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
router.route("/update").post(upload.single('profilePic'),userController.updateDetails);
router.route("/fetch-token").post(userController.fetchToken);
router.route("/signup-google").post(userController.signupGoogle);

module.exports = router;
