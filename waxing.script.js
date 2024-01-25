
    // Function to validate the form
    function validateWaxing() {
      // var productAllergy = document.getElementById("product-allergy");
      // console.log(productAllergy);
      var skinConditions = document.getElementById("skin-conditions").value;
      var areaWaxing = document.getElementById("area-waxing").value;
      var postWaxConcerns = document.getElementById("post-wax-concerns").value;
      var hairLengthYes = document.getElementById("hairLength-yes");
      var hairLengthNo = document.getElementById("hairLength-no");
  
      // Complex validations
      if (!productAllergy || !skinConditions || !areaWaxing || !postWaxConcerns) {
        alert("Please fill in all the required fields.");
        return false;
      }
  
      if (!validateEmail(productAllergy)) {
        alert("Please enter a valid email address for product allergies.");
        return false;
      }
  
      if (hairLengthYes.checked || hairLengthNo.checked) {
        return true; // Either option is selected
      } else {
        alert("Please select whether your hair is at the desired length for waxing.");
        return false;
      }
    }
  
    // Function to validate email format
    function validateEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
