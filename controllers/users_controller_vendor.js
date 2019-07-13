var db = require('../models');

//this is the users_controller.js file
exports.registrationPage = function(req, res) {
  res.render('users/vendorregistration', {
    layout: 'main-registration'
  });
};

exports.signOutUser = function(req, res) {
  req.logout();
  res.redirect('/');
};

// login
exports.loginUser = function(req, res) {
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the members page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed
  res.json('/');
};

// register a user
exports.signUpUser = function(req, res) {
  console.log('Controller--------------------------------');
  console.log(req.body);
  db.User.findAll({
    where: { vendor_email: req.body.email }
  }).then(function(users) {
    if (users.length > 0) {
      res.json({
        duplicateUser: true
      });
      //At some point, make sure that only one user can be associated with an email.
    } else {
      db.User.create({
        vendor_name: req.body.vendor_name,
        vendor_address: req.body.vendor_address,
        vendor_phone: req.body.vendor_phone,
        vendor_contact_name: req.body.vendor_contact_name,
        vendor_email: req.body.vendor_email,
        vendor_website_url: req.body.vendor_website_url,
        time_for_pickup: req.body.time_for_pickup,
        pickup_area_name: req.body.pickup_area_name,
        pickup_location: req.body.pickup_location,
        distributor_only: req.body.distributor_only
      })
        .then(function() {
          console.log('AFTER INSERT----------------------');
          res.send({ redirect: '/' });
        })
        .catch(function(err) {
          res.json(err);
        });
    }
  });
};
