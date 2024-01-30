
const nextBtn = document.getElementById('submit')
// console.log(nextBtn);


const setError = (element, message) => {
  const inputControl = element;
  const errorDisplay = inputControl.parentElement.querySelector('.error');

  errorDisplay.innerText = message;
}

const setSuccess = element => {
  const inputControl = element;
  const errorDisplay = inputControl.parentElement.querySelector('.error');

  errorDisplay.innerText = ""
};

const setErrorOption = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.parentElement.querySelector('.error');
console.log(errorDisplay);
  errorDisplay.innerText = message;
  console.log(errorDisplay.innerText);
}

const setSuccessOption = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.parentElement.querySelector('.error');

  errorDisplay.innerText = "";
}

// validation for Email
function validateEmail(email) {
  console.log("entered in regex");
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

nextBtn.addEventListener('click', function (event) {
event.preventDefault(); // Prevent the form from submitting for now
// Validate first name
const firstNameInput = document.querySelector('input[name="firstName"]');
const firstNameValue = firstNameInput.value.trim();

if (firstNameValue === '' || /\d/.test(firstNameValue)) {
  setError(firstNameInput, 'Field can not be null or with numbers.')
  return;
}else{
  setSuccess(firstNameInput);
}

// Validate last name
const lastNameInput = document.querySelector('input[name="lastName"]');
const lastNameValue = lastNameInput.value.trim();

if (lastNameValue === '') {
  setError(lastNameInput, 'Field can not be empty.')
  return;
 
}else if(/\d/.test(lastNameValue)){
  setError(lastNameInput, 'field can not contain numbers');
  return;
}
else{
  setSuccess(lastNameInput);
}

// validate email
const emailInput = document.querySelector('input[name="email"]');
const emailValue = emailInput.value.trim();

if (emailValue === '' || !emailValue.endsWith('@gmail.com')) {
  setError(emailInput, 'enter a valid email  address'); 
  return;
}else if(!validateEmail(emailValue)){
  setError(emailInput, 'Field can not contain Special character other then @ and dor(.).')
  return;
 
}
else{
  setSuccess(emailInput);
}



// Validation for Phone No.
let phoneInput = document.querySelector('input[name="phone"]');
let phoneValue = phoneInput.value;

if (phoneValue.trim() === '' || !isValidPhone(phoneValue)) {
  setError(phoneInput, 'Field can not be null.');
  return;
}
else{
  setSuccess(phoneInput);
}

function isValidPhone(phone) {
  let phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

// Validation for Address
let addressInput = document.querySelector('input[name="address"]');
let addressValue =addressInput.value;
if (addressValue.trim() === '') {
 setError(addressInput, 'Address can not be empty.');
 return;
}
else{
  setSuccess(addressInput);
}

let selectedDay = document.querySelector('input[name="radio"]');
let selectedDayValue = document.querySelector('input[name="radio"]:checked');
if (!selectedDayValue) {
  setErrorOption(selectedDay, 'One day must be selected.');
  return;
}
else{
  setSuccessOption(selectedDay);
}

// Validate radio buttons for specific time
let selectedTime = document.querySelector('input[name="radio1"]:checked');
let selectedTimeInput = document.querySelector('input[name="radio1"]');
if (!selectedTime) {
  console.log("entered to selectedTimd");
  setErrorOption(selectedTimeInput, 'Please select a time for the appointment.');
  return;
}
else{
 setSuccessOption(selectedTimeInput);
}

// Validate date/time
let selectedDateTimeInput = document.querySelector('input[name="dateTime"]');
let selectedDateTime = document.querySelector('input[name="dateTime"]').value;
if (selectedDateTime.trim() === '') {
  setError(selectedDateTimeInput, 'Please select a date and time for the appointment.');
  return;
}
else{
  setSuccess(selectedDateTimeInput);
}


// Validate radio buttons for how they heard about you
let selectedHeardInput = document.querySelector('input[name="heard"]');
let selectedHeard = document.querySelector('input[name="heard"]:checked');
if (!selectedHeard) {
  setErrorOption(selectedHeardInput, 'Field must be selected.');
  return;
}
else{
  setSuccessOption(selectedHeardInput);
}



  // If validations pass, redirect to page2
  window.location.href = "./page2.html"

});


// export {setError , setSuccess, setErrorOption,  setSuccessOption};