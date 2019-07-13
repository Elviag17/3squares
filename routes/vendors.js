var express = require('express');
var router = express.Router();

var passport = require('../config/passport');
// var users_controller = require('../controllers/users_controller');
var users_controller_vendor = require('../controllers/users_controller_vendor');
// var users_controller_distributor = require('../controllers/users_controller_distributor');
var isAuthenticated = require('../config/middleware/isAuthenticated');

// router.get('/signup', users_controller_vendor.registrationPage);

router.get('/vendorregistration', users_controller_vendor.registrationPage);

// router.get('/distregistration', users_controller_distributor.registrationPage);

router.get('/sign-out', users_controller_vendor.signOutUser);

router.post(
  '/login',
  passport.authenticate('local'),
  users_controller_vendor.loginUser
);

router.post('/signup', users_controller_vendor.signUpUser);

// router.post('/signupvendor', users_controller_vendor.signUpUser);

module.exports = router;
