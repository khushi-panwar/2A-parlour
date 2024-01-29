let allergyYes = document.getElementById("yes");
let preferenceYes = document.getElementById("yes1");
let allergyDescribe = document.querySelector('.allergy-yes');
let brandProduct = document.querySelector('.name-preference');

allergyYes.addEventListener('click', () => {
allergyDescribe.style.display= 'block';
})
preferenceYes.addEventListener('click', () => {
brandProduct.style.display= 'block';
})




function validateFacial() {
    // Validate skin type selection
    console.log("entered");
    let skinType = document.getElementById("skin").value;
    if (skinType === "") {
        alert("Please select your skin type.");
        return false;
    }

  

    // Validate skin concerns textarea
    let skinConcern = document.getElementById("skin-concern").value.trim();
    if (skinConcern === "") {
        alert("Please provide information about your skin concerns.");
        return false;
    }

    // Validate skin routine textarea
    let skinRoutine = document.getElementById("skin-routine").value.trim();
    if (skinRoutine === "") {
        alert("Please provide information about your skincare routine.");
        return false;
    }

    // Validate allergy radio buttons
    let allergyYes = document.getElementById("yes").checked;
    let allergyNo = document.getElementById("no").checked;
    if (!allergyYes && !allergyNo) {
        alert("Please select whether you have allergies to skincare products.");
        return false;
    }

    // Validate preference radio buttons
    let preferenceYes = document.getElementById("yes1").checked;
    let preferenceNo = document.getElementById("no1").checked;
    if (!preferenceYes && !preferenceNo) {
        alert("Please select whether you have preferences for skincare product brands or types.");
        return false;
    }

    // Validate before-and-after photos radio buttons
    let photosYes = document.getElementById("yes2").checked;
    let photosNo = document.getElementById("no2").checked;
    if (!photosYes && !photosNo) {
        alert("Please select whether you are comfortable with taking before-and-after photos.");
        return false;
    }

    // If all validations pass, the form is valid
    Swal.fire({
        title: "Submitted",
        text: "successfully!",
        icon: "success"
    });
    return true;
}
