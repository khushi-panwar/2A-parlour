document.addEventListener("DOMContentLoaded", function () {
    // Function to validate the form
    function validateForm() {
      var hairService = document.getElementById("hairService").value;
      var currentHairLength = document.getElementById("currentHairLength").value;
      var hairThickness = document.getElementById("hairThickness").value;
      var desiredHaircutStyle = document.getElementById("desiredHaircutStyle").value;
      var referenceImages = document.getElementById("referenceImages").value;
      var desiredHairColor = document.getElementById("desiredHairColor").value;
      var typeOfColoring = document.getElementById("typeOfColoring").value;
      var colorPreferences = document.getElementById("colorPreferences").value;
      var preferredStyling = document.getElementById("preferredStyling").value;
      var occasion = document.getElementById("occasion").value;
  
      // Complex validations
      if (!hairService) {
        alert("Please select a Hair Styling Service.");
        return false;
      }
  
      if (hairService === "haircut") {
        if (!currentHairLength || !hairThickness || !desiredHaircutStyle || !referenceImages) {
          alert("Please fill in all the required fields for Haircut.");
          return false;
        }
      } else if (hairService === "coloring") {
        if (!desiredHairColor || !typeOfColoring || !colorPreferences) {
          alert("Please fill in all the required fields for Coloring/Highlights.");
          return false;
        }
      } else if (hairService === "styling") {
        if (!preferredStyling || !occasion) {
          alert("Please fill in all the required fields for Hair Styling Preferences.");
          return false;
        }
      }
  
      return true; // Form is valid
    }
  
    // Attach the validation function to the form's submit event
    var form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
      if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
      }
    });
  });
  