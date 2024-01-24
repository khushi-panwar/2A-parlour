

function validateFacial() {
    // Validate skin type selection
    console.log("entered");
    var skinType = document.getElementById("skin").value;
    if (skinType === "") {
        alert("Please select your skin type.");
        return false;
    }

    // Validate skin color selection
    var skinColor = document.querySelector(".palette input:checked");
    if (!skinColor) {
        alert("Please select your skin color.");
        return false;
    }

    // Validate skin concerns textarea
    var skinConcern = document.getElementById("skin-concern").value.trim();
    if (skinConcern === "") {
        alert("Please provide information about your skin concerns.");
        return false;
    }

    // Validate skin routine textarea
    var skinRoutine = document.getElementById("skin-routine").value.trim();
    if (skinRoutine === "") {
        alert("Please provide information about your skincare routine.");
        return false;
    }

    // Validate allergy radio buttons
    var allergyYes = document.getElementById("yes").checked;
    var allergyNo = document.getElementById("no").checked;
    if (!allergyYes && !allergyNo) {
        alert("Please select whether you have allergies to skincare products.");
        return false;
    }

    // Validate preference radio buttons
    var preferenceYes = document.getElementById("yes1").checked;
    var preferenceNo = document.getElementById("no1").checked;
    if (!preferenceYes && !preferenceNo) {
        alert("Please select whether you have preferences for skincare product brands or types.");
        return false;
    }

    // Validate before-and-after photos radio buttons
    var photosYes = document.getElementById("yes2").checked;
    var photosNo = document.getElementById("no2").checked;
    if (!photosYes && !photosNo) {
        alert("Please select whether you are comfortable with taking before-and-after photos.");
        return false;
    }

    // If all validations pass, the form is valid
    alert("Form submitted successfully!");
    return true;
}
