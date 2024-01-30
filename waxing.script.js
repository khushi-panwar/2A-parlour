// error msgs
const setError = (element, message) => {
  const inputControl = element;
  console.log(inputControl);
  const errorDisplay = inputControl.parentElement.querySelector('.error');
  console.log(errorDisplay.innerText);
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
  console.log(inputControl, errorDisplay);
  errorDisplay.innerText = message;
  console.log(errorDisplay.innerText);
}

const setSuccessOption = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.parentElement.querySelector('.error');

  errorDisplay.innerText = "";
}



function validateWaxing() {
  // Get the values of the form fields
  let allergyInput = document.getElementById('product-allergy');
  console.log(allergyInput);
  let skinInput = document.getElementById('skin-concern');
  let waxingAreasInput = document.getElementById('area-waxing');
  let postWaxConcernsInput = document.getElementById('post-wax-concerns');
  let hairLengthYesInput = document.getElementById('hairLength-yes');
  let hairLengthNoInput = document.getElementById('hairLength-no');
  let allergy = allergyInput.value;
  let skin = skinInput.value;
  let waxingAreas = waxingAreasInput.value;
  let postWaxConcerns = postWaxConcernsInput.value;
  let hairLengthYes = hairLengthYesInput.checked;
  let hairLengthNo = hairLengthNoInput.checked;
  console.log(hairLengthYesInput, hairLengthYes);


  // if null , then show an error
  if (allergy === '' ) {
    setError(allergyInput, 'Please fill out allergy concern.');
    return;
  }
  else{
    setSuccess(allergyInput);
   
  
  if (skin === '' ) {
    setError(skinInput, 'Please fill out skin concern.');
    return;
  }
  else{
    setSuccess(skinInput);
  }

  if ( waxingAreas === '' ) {
    setError(waxingAreasInput, 'Please fill out area of waxing.');
    return;
  }
  else{
    setSuccess(waxingAreasInput);
  }

  if ( postWaxConcerns === '') {
    setError(postWaxConcernsInput, 'Please fill out post waxing concerns.');
    return;
  }
  else{
    setSuccess(postWaxConcernsInput);
  }

  if (!hairLengthYes && !hairLengthNo) {
    console.log("entered");
    setErrorOption(hairLengthYesInput, 'Please select if your hair is at the desired length for waxing.');
    return;
  }
  else{
    setSuccessOption(hairLengthYesInput);
  }

  Swal.fire({
    title: "Submitted",
    text: "successfully!",
    icon: "success"
  });
}

}