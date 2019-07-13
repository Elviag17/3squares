$(document).ready(function() {
  // Getting references to our form and input
  var signUpButton = $('.signupvendor');
  var vendornameInput = $('input#vendor-name-input');
  var vendorcontactnameInput = $('input#vendor-contact-name-input');
  var vendorphoneInput = $('input#vendor-phone-input');
  var emailInput = $('input#vendor-email-input');
  var passwordInput = $('input#password-input');
  var vendoraddressInput = $('input#vendor-address-input');
  var vendorwebsiteInput = $('input#vendor-website-url-input');
  var distributorInput = $('input#distributor-only-input');
  var pickuptimeInput = $('input#pickup-time-input');
  var pickupareaInput = $('input#pickup-area-input');
  var pickuplocationInput = $('input#pickup-location-input');
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
  emailInput.bind('input propertychange', function() {
    if (!emailRegEx.test($(this).val())) {
      $('#email-form').removeClass('has-success');

      $('#email-form').addClass('has-error');
      $('#email-feedback').text('Invalid Email');
      $('#email-additional-feedback').text('Ex: someone@example.com');
    } else {
      $('#email-form').removeClass('has-error');

      $('#email-form').addClass('has-success');
      $('#email-feedback').text('Valid Email!');
      $('#email-additional-feedback').text('');
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
  passwordInput.bind('input propertychange', function() {
    if (!passwordRegEx.test($(this).val())) {
      $('#password-form').removeClass('has-success');

      $('#password-form').addClass('has-error');
      $('#password-feedback').text(
        'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and must be at least 8 characters long.'
      );
    } else {
      $('#password-form').removeClass('has-error');

      $('#password-form').addClass('has-success');
      $('#password-feedback').text('Password set correctly!');
    }
  });

  repeatPasswordInput.bind('input propertychange', function() {
    if (passwordInput.val().trim() !== repeatPasswordInput.val().trim()) {
      $('#repeat-password-form').removeClass('has-success');

      $('#repeat-password-form').addClass('has-error');
      $('#repeat-password-feedback').text("Passwords Don't Match");
    } else {
      $('#repeat-password-form').removeClass('has-error');

      $('#repeat-password-form').addClass('has-success');
      $('#repeat-password-feedback').text('Passwords Match!');
    }
  });

  // Check if emails match each other
  signUpButton.on('click', function(event) {
    // Replace all alerts with modals

    var userData = {
      //NEW INFO TO ADD
      vendor_name: vendornameInput.val().trim(),
      vendor_address: vendoraddressInput.val().trim(),
      vendor_phone: vendorphoneInput.val().trim(),
      vendor_contact_name: vendorcontactnameInput.val().trim(),
      vendor_email: emailInput.val().trim(),
      vendor_password: vendoraddressInput.val().trim(),
      vendor_website_url: vendorwebsiteInput.val().trim(),
      time_for_pickup: pickuptimeInput.val().trim(),
      pickup_area_name: pickupareaInput.val().trim(),
      pickup_location: pickuplocationInput.val().trim(),
      distributor_only: distributorInput.val().trim()
    };

    if (
      !userData.vendor_name ||
      !userData.vendor_address ||
      !userData.vendor_phone ||
      !userData.vendor_contact_name ||
      !userData.vendor_email ||
      !userData.vendor_password ||
      !userData.vendor_website_url ||
      !userData.time_for_pickup ||
      !userData.pickup_area_name ||
      !userData.pickup_location
    ) {
      return alert("Please don't leave fields blank");
    }

    console.log('hey');
    // If we have an email and password, run the signUpUser function
    signUpUser(
      userData.vendor_name,
      userData.vendor_address,
      userData.vendor_phone,
      userData.vendor_contact_name,
      userData.vendor_email,
      userData.vendor_password,
      userData.vendor_website_url,
      userData.time_for_pickup,
      userData.pickup_area_name,
      userData.pickup_location,
      userData.distributor_only
    );
    vendornameInput.val('');
    vendoraddressInput.val('');
    vendorphoneInput.val('');
    vendorcontactnameInput.val('');
    emailInput.val('');
    vendoraddressInput.val('');
    vendorwebsiteInput.val('');
    pickuptimeInput.val('');
    pickupareaInput.val('');
    pickuplocationInput.val('');
    distributorInput.val('');
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(
    vendor_name,
    vendor_address,
    vendor_phone,
    vendor_contact_name,
    vendor_email,
    vendor_password,
    vendor_website_url,
    time_for_pickup,
    pickup_area_name,
    pickup_location,
    distributor_only
  ) {
    console.log('here');
    // debugger;
    $.post('/users/signup', {
      vendor_name: vendor_name,
      vendor_address: vendor_address,
      vendor_phone: vendor_phone,
      vendor_contact_name: vendor_contact_name,
      vendor_email: vendor_email,
      vendor_password: vendor_password,
      vendor_website_url: vendor_website_url,
      time_for_pickup: time_for_pickup,
      pickup_area_name: pickup_area_name,
      pickup_location: pickup_location,
      distributor_only: distributor_only
    })
      .then(function(data) {
        if (data.duplicateUser) {
          // Replace with Modal
          alert('Sorry, that username has been taken');
        } else {
          window.location = data.redirect;
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
