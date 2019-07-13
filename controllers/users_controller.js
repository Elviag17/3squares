var db = require("../models");

//this is the users_controller.js file
exports.registrationPage = function(req, res) {
  res.render("users/registration", {
    layout: "main-registration"
  });
};

exports.userView = function(req, res) {
  res.render("users/userView", {
    layout: "main"
  });
};

exports.signOutUser = function(req, res) {
  req.logout();
  res.redirect("/");
};

// login
exports.loginUser = function(req, res) {
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the members page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed
  res.json("/");
};

// register a user
exports.signUpUser = function(req, res) {
  console.log("Controller--------------------------------");
  console.log(req.body);
  db.User.findAll({
    where: { email: req.body.email }
  }).then(function(users) {
    if (users.length > 0) {
      res.json({
        duplicateUser: true
      });
      //At some point, make sure that only one user can be associated with an email.
    } else {
      db.User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        address: req.body.address,
        living_situation: req.body.living_situation,
        job_situation: req.body.job_situation,
        email: req.body.email,
        password: req.body.password
      })
        .then(function() {
          console.log("AFTER INSERT----------------------");
          res.send({ redirect: "/" });
        })
        .catch(function(err) {
          res.json(err);
        });
    }
  });
};
