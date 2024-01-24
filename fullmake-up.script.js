// validation.js

// Function to validate the form
function validateFullMakeUp() {
    // Validate skin type selection
    var skinType = document.getElementById("skin").value;
    if (skinType === "") {
      alert("Please select your skin type.");
      return false;
    }
  
    // Validate hair type selection
    var hairTypeCards = document.querySelectorAll(".row.requirement .card input:checked");
    if (hairTypeCards.length === 0) {
      alert("Please select your hair type.");
      return false;
    }
  
    // Validate outfit description and color
    var outfitDescription = document.querySelector("textarea[name='outfit']").value.trim();
    var outfitFile = document.querySelector("input[name='outfit']").value.trim();
    if (outfitDescription === "" && outfitFile === "") {
      alert("Please provide your outfit description or upload an outfit image.");
      return false;
    }
  
    // Validate accessories selection
    var accessoriesYes = document.getElementById("yes").checked;
    var accessoriesNo = document.getElementById("no").checked;
    if (!accessoriesYes && !accessoriesNo) {
      alert("Please select whether you have matching jewellery.");
      return false;
    }
  
    // If all validations pass, the form is valid
    alert("Form submitted successfully!");
    return true;
  }
  