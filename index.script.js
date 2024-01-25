
const nextBtn = document.getElementById('submit')
console.log(nextBtn);
nextBtn.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the form from submitting for now

  // Validate first name
  const firstNameInput = document.querySelector('input[name="firstName"]');
  const firstNameValue = firstNameInput.value.trim();

  if (firstNameValue === '' || /\d/.test(firstNameValue)) {
    alert('First name can not be null or with numbers.');
    return;
  }

  // Validate last name
  const lastNameInput = document.querySelector('input[name="lastName"]');
  const lastNameValue = lastNameInput.value.trim();

  if (lastNameValue === '' || /\d/.test(lastNameValue)) {
    alert('Last name can not be null or with numbers.');
    return;
  }

  // validate email

  const emailInput = document.querySelector('input[name="email"]');
  const emailValue = emailInput.value.trim();

  if (emailValue === '' || !emailValue.endsWith('@gmail.com')) {
    alert('Email address should not be blank and must end with @gmail.com.');
    return;
  }

  // Validation for Phone No.
  var phone = document.querySelector('input[name="phone"]').value;

  if (phone.trim() === '' || !isValidPhone(phone)) {
    alert('Please enter a valid Phone Number');
    return;
  }

  function isValidPhone(phone) {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }

  // Validation for Address
  var address = document.querySelector('input[name="address"]').value;
  if (address.trim() === '') {
    alert('Please enter your Address');
    return ;
  }

  var selectedDay = document.querySelector('input[name="radio"]:checked');
    if (!selectedDay) {
      alert('Please select a day for the appointment.');
      return ;
    }

    // Validate radio buttons for specific time
    var selectedTime = document.querySelector('input[name="radio1"]:checked');
    if (!selectedTime) {
      alert('Please select a time for the appointment.');
      return;
    }

    // Validate date/time
    var selectedDateTime = document.querySelector('input[name="dateTime"]').value;
    if (selectedDateTime.trim() === '') {
      alert('Please select a date and time for the appointment.');
      return;
    }

    // Validate radio buttons for how they heard about you
    var selectedHeard = document.querySelector('input[name="heard"]:checked');
    if (!selectedHeard) {
      alert('Please select how you heard about us.');
      return;
    }


  // If validations pass, redirect to page2
  window.location.href = "./page2.html"

});

