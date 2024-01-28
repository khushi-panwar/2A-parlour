function validateWaxing() {
  // Get the values of the form fields
  var allergy = document.getElementById('product-allergy').value;
  var waxingAreas = document.getElementById('area-waxing').value;
  var postWaxConcerns = document.getElementById('post-wax-concerns').value;
  var hairLengthYes = document.getElementById('hairLength-yes').checked;
  var hairLengthNo = document.getElementById('hairLength-no').checked;

// if null , then show an error
  if (allergy === ''  || waxingAreas === '' || postWaxConcerns === '') {
      alert('Please fill out all the required fields.');
      return ;
  }

  if (!hairLengthYes && !hairLengthNo) {
      alert('Please select if your hair is at the desired length for waxing.');
      return ;
  }

  alert('Form submitted successfully!');
}

