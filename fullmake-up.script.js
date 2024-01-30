

let accessoriesPic = document.getElementById("accessories-pic");
let accessoriesDescription = document.getElementById("description");
let accessoriesDiv = document.querySelector(".accessories-label");
let accessoriesYesInput = document.getElementById("yes");



accessoriesYesInput.addEventListener("click", () => {
  accessoriesPic.style.display = "block"
  accessoriesDescription.style.display = "block"
  accessoriesDiv.style.display = "block"
})

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
console.log(errorDisplay);
  errorDisplay.innerText = message;
  console.log(errorDisplay.innerText);
}

const setSuccessOption = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.parentElement.querySelector('.error');

  errorDisplay.innerText = "";
}

let hairtype, skincolor;
 function validateFullMakeUp() {
  // Validate skin type selection
  if (!skincolor) {
    alert( "skin color not selected");
    return;
  }
  // let hairTypeCards = document.querySelectorAll(".row.requirement .card input");

  if (!hairtype) {
    alert("hair type not selected");
    return;
  }


  // Validate outfit description and color
  let outfitDescriptionInput = document.querySelector("textarea[name='outfit']");
  let outfitDescription = outfitDescriptionInput.value.trim();

  
  if (outfitDescription === "" ) {
    setError(outfitDescriptionInput,"Please provide your outfit description or upload an outfit image.");
    return false;
  }
  else{
    setSuccess(outfitDescriptionInput);
  }

  // Validate accessories selection

  let accessoriesNoInput= document.getElementById("no");
  let accessoriesNo = accessoriesNoInput.checked;
  let accessoriesYes = accessoriesYesInput.checked;
  if (!accessoriesYes && !accessoriesNo) {
    setErrorOption(accessoriesNoInput, "Please select whether you have matching jewellery.");
    return ;
  }
  else{
    setSuccessOption(accessoriesNoInput);
  }

  // If all validations pass, the form is valid
  Swal.fire({
    title: "Submitted",
    text: "successfully!",
    icon: "success"
  });
  return true;
}

function validateHairType(hairType) {
  hairtype = hairType
  console.log(hairtype)
}

function skinColor(color) {
  skincolor = color;
  console.log(skincolor);
}

// import validation error msg functionality
// import {setError } from './index.script.js'