const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const passport = require('passport');

router
    .route('/signup')
        .post(userController.signup);

router
    .route('/login')
        .post(passport.authenticate('local'),userController.login);

router
    .route('/logout')
        .post(userController.logout);


module.exports= router;