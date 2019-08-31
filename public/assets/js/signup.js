$(document).ready(function() {
  // Getting references to our form and input

  var signUpButton = $('.signup');
  var firstnameInput = $('input#first-name-input');
  var lastnameInput = $('input#last-name-input');
  var emailInput = $('input#email-input');
  var passwordInput = $('input#password-input');
  var addressInput = $('input#address-input');
  var phoneInput = $('input#phone-input');
  var employedInput = $('input#employed-input');
  var livingInput = $('input#living-situation-input');
  var repeatPasswordInput = $('input#repeat-password-input');

  // var repeatEmailInput = $("input#repeat-email-input");

  // Username "on-the-fly" validation
  // usernameInput.bind('input propertychange', function() {
  //   if (usernameInput.val().trim().length < 6) {
  //     $("#username-form").removeClass("has-success");

  //     $("#username-form").addClass("has-error");
  //     $("#username-feedback").text("username must be at least 6 characters long");
  //   } else {
  //     $("#username-form").removeClass("has-error");

  //     $("#username-form").addClass("has-success");
  //     $("#username-feedback").text("Username valid!");
  //   }
  // });

  // Email "on-the-fly" validation
  emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  emailInput.bind("input propertychange", function() {
    if (!emailRegEx.test($(this).val())) {
      $("#email-form").removeClass("has-success");

      $("#email-form").addClass("has-error");
      $("#email-feedback").text("Invalid Email");
      $("#email-additional-feedback").text("Ex: someone@example.com");
    } else {
      $("#email-form").removeClass("has-error");

      $("#email-form").addClass("has-success");
      $("#email-feedback").text("Valid Email!");
      $("#email-additional-feedback").text("");
    }
  });

  // Check "on-the-fly" if repeated email matches email
  // repeatEmailInput.bind('input propertychange', function() {
  //   if (emailInput.val().trim() !== repeatEmailInput.val().trim()) {
  //     $("#email-repeat-form").removeClass("has-success");

  //     $("#email-repeat-form").addClass("has-error");
  //     $("#email-repeat-feedback").text("Emails Don't Match");
  //   } else {
  //     $("#email-repeat-form").removeClass("has-error");

  //     $("#email-repeat-form").addClass("has-success");
  //     $("#email-repeat-feedback").text("Emails Match!");
  //   }
  // });
  var passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  passwordInput.bind("input propertychange", function() {
    if (!passwordRegEx.test($(this).val())) {
      $("#password-form").removeClass("has-success");

      $("#password-form").addClass("has-error");
      $("#password-feedback").text(
        "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and must be at least 8 characters long."
      );
    } else {
      $("#password-form").removeClass("has-error");

      $("#password-form").addClass("has-success");
      $("#password-feedback").text("Password set correctly!");
    }
  });

  repeatPasswordInput.bind("input propertychange", function() {
    if (passwordInput.val().trim() !== repeatPasswordInput.val().trim()) {
      $("#repeat-password-form").removeClass("has-success");

      $("#repeat-password-form").addClass("has-error");
      $("#repeat-password-feedback").text("Passwords Don't Match");
    } else {
      $("#repeat-password-form").removeClass("has-error");

      $("#repeat-password-form").addClass("has-success");
      $("#repeat-password-feedback").text("Passwords Match!");
    }
  });

  // Check if emails match each other
  signUpButton.on("click", function(event) {
    // Replace all alerts with modals

    var userData = {

      //NEW INFO TO ADD
      first_name: firstnameInput.val().trim(),
      last_name: lastnameInput.val().trim(),
      phone: phoneInput.val().trim(),
      address: addressInput.val().trim(),
      living_situation: livingInput.val().trim(),
      job_situation: employedInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
      //END OF NEW INFO TO ADD
    };

    if (
      !userData.first_name ||
      !userData.last_name ||
      !userData.username ||
      !userData.phone ||
      !userData.address ||
      !userData.living_situation ||
      !userData.job_situation ||
      !userData.email ||
      !userData.password
    ) {
      return alert("Please don't leave fields blank");
    }

    console.log("hey");
    // If we have an email and password, run the signUpUser function
    signUpUser(
      userData.first_name,
      userData.last_name,
      userData.username,
      userData.phone,
      userData.address,
      userData.living_situation,
      userData.job_situation,
      userData.email,
      userData.password
    );
    // emailInput.val('');
    // passwordInput.val('');
    // usernameInput.val('');
    // repeatPasswordInput.val('');
    // repeatEmailInput.val('');
    firstnameInput.val("");
    lastnameInput.val("");
    usernameInput.val("");
    phoneInput.val("");
    addressInput.val("");
    livingInput.val("");
    employedInput.val("");
    emailInput.val("");
    passwordInput.val("");
    repeatPasswordInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(
    first_name,
    last_name,
    username,
    phone,
    address,
    living_situation,
    job_situation,
    email,
    password
  ) {
    console.log("here");
    // debugger;
    $.post("/users/signup", {
      first_name: first_name,
      last_name: last_name,
      phone: phone,
      address: address,
      living_situation: living_situation,
      job_situation: job_situation,
      // username: username,
      email: email,
      password: password
    })
      .then(function(data) {
        if (data.duplicateUser) {
          // Replace with Modal
          alert("Sorry, that username has been taken");
        } else {
          window.location.href = data.redirect;
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
