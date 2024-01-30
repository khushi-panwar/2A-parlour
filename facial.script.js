let allergyYes = document.getElementById("yes");
let preferenceYes = document.getElementById("yes1");
let allergyDescribe = document.querySelector('.allergy-yes');
let brandProduct = document.querySelector('.name-preference');
let skincolor;

allergyYes.addEventListener('click', () => {
    allergyDescribe.style.display = 'block';
})
preferenceYes.addEventListener('click', () => {
    brandProduct.style.display = 'block';
})


// error msgs
const setError = (element, message) => {
    const inputControl = element;
    // console.log(inputControl);
    const errorDisplay = inputControl.parentElement.querySelector('.error');
    console.log(errorDisplay.innerText);
    errorDisplay.innerText = message;
}

const setSuccess = element => {
    const inputControl = element;
    const errorDisplay = inputControl.parentElement.querySelector('.error');
    console.log(inputControl, errorDisplay);
    errorDisplay.innerText = ""
    // console.log(errorDisplay.innerText);
};

const setErrorOption = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.parentElement.querySelector('.error');
    console.log(inputControl , errorDisplay );
    errorDisplay.innerText = message;
    // console.log(errorDisplay.innerText);
}

const setSuccessOption = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.parentElement.querySelector('.error');

    errorDisplay.innerText = "";
}


function validateFacial() {
    // Validate skin type selection
    let skinTypeInput = document.getElementById("skin");
    let skinType = skinTypeInput.value;
    if (skinType === "") {
        console.log("entered");
        setError(skinTypeInput, "Please select a skin type.");
        return;
    } else {
        setSuccess(skinTypeInput);
    }

    // Validate skin type selection
    if (!skincolor) {
        alert("skin color not selected");
        return;
    }

    // Validate skin concerns textarea
    let skinConcernInput = document.getElementById("skin-concern");
    let skinConcern = skinConcernInput.value.trim();
    if (skinConcern === "") {
        setError(skinConcernInput, "Please provide information about your skin concerns.");
        return;
    }
    else{
        setSuccess(skinConcernInput)
    }

    // Validate skin routine textarea
    let skinRoutineInput = document.getElementById("skin-routine");
    let skinRoutine = skinRoutineInput.value.trim();
    if (skinRoutine === "") {
        setError(skinRoutineInput, "Please provide information about your skincare routine.");
        return;
    }
    else{
        setSuccess(skinRoutineInput)
    }

    // Validate allergy radio buttons
    let allergyYesInput = document.getElementById("yes");
    let allergyNoInput = document.getElementById("no");
    let allergyYes = allergyYesInput.checked;
    let allergyNo = allergyNoInput.checked;
    if (!allergyYes && !allergyNo) {
        setErrorOption(allergyYesInput ,"Please select whether you have allergies to skincare products.");
        return ;
    }else{
        setSuccessOption(allergyYesInput);
    }

    // Validate preference radio buttons
    let preferenceYesInput = document.getElementById("yes1");
    let preferenceNoInput = document.getElementById("no1");
    let preferenceYes = preferenceYesInput.checked;
    let preferenceNo = preferenceNoInput.checked;
    if (!preferenceYes && !preferenceNo) {
        setErrorOption(preferenceYesInput, "Please select whether you have preferences for skincare product brands or types.");
        return;
    }
    else{
        setSuccessOption(preferenceYesInput);
    }

    // Validate before-and-after photos radio buttons
    let photosYesInput = document.getElementById("yes2");
    let photosNoInput = document.getElementById("no2");
    let photosYes = photosYesInput.checked;
    let photosNo = photosNoInput.checked;
    if (!photosYes && !photosNo) {
        setErrorOption(photosYesInput, "Please select whether you are comfortable with taking before-and-after photos.");
        return;
    }
    else{
        setSuccessOption(photosYesInput)
    }

    // If all validations pass, the form is valid
    Swal.fire({
        title: "Submitted",
        text: "successfully!",
        icon: "success"
    });
    return true;
}

function skinColor(color) {
    skincolor = color;
    console.log(skincolor);
}