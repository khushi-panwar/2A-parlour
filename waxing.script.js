function validateWaxing() {
  // Get the values of the form fields
  let allergy = document.getElementById('product-allergy').value;
  let waxingAreas = document.getElementById('area-waxing').value;
  let postWaxConcerns = document.getElementById('post-wax-concerns').value;
  let hairLengthYes = document.getElementById('hairLength-yes').checked;
  let hairLengthNo = document.getElementById('hairLength-no').checked;

// if null , then show an error
  if (allergy === ''  || waxingAreas === '' || postWaxConcerns === '') {
      alert('Please fill out all the required fields.');
      return ;
  }

  if (!hairLengthYes && !hairLengthNo) {
      alert('Please select if your hair is at the desired length for waxing.');
      return ;
  }

  Swal.fire({
    title: "Submitted",
    text: "successfully!",
    icon: "success"
});
}

