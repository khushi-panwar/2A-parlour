document.addEventListener("DOMContentLoaded", function () {
    // Function to validate the form
    function validateForm() {
        // Validate Nail Shape selection
        var nailShapeRadios = document.getElementsByName("nail-shape");
        var nailShapeSelected = false;
        for (var i = 0; i < nailShapeRadios.length; i++) {
            if (nailShapeRadios[i].checked) {
                nailShapeSelected = true;
                break;
            }
        }
        if (!nailShapeSelected) {
            alert("Please select a Nail Shape.");
            return false;
        }

        // Validate textarea inputs
        var manicureType = document.querySelector("textarea[name='manicureType']").value;
        var polish = document.querySelector("textarea[name='polish']").value;

        if (!manicureType || !polish) {
            alert("Please fill in all the textarea fields.");
            return false;
        }

        // Validate file upload
        var artPreferenceFile = document.getElementById("art-preference");
        if (artPreferenceFile.value) {
            var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
            if (!allowedExtensions.exec(artPreferenceFile.value)) {
                alert("Please upload a file with a valid extension (.jpg, .jpeg, .png).");
                return false;
            }
        }

        // Validate radio button selections
        if (!validateRadioGroup("nail-art")) {
            alert("Please select your Nail Art preference.");
            return false;
        }

        if (!validateRadioGroup("massage")) {
            alert("Please select your Hand Massage preference.");
            return false;
        }

        return true; // Form is valid
    }

    // Function to validate radio button selection in a group
    function validateRadioGroup(groupName) {
        var radioGroup = document.getElementsByName(groupName);
        for (var i = 0; i < radioGroup.length; i++) {
            if (radioGroup[i].checked) {
                return true; // At least one option is selected
            }
        }
        return false; // No option is selected
    }

    // Attach the validation function to the form's submit event
    var form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
