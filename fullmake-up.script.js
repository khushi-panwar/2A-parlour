let accessoriesPic = document.getElementById("accessories-pic");
let accessoriesDescription = document.getElementById("description");
let accessoriesDiv = document.querySelector(".accessories-label");
let accessoriesYes = document.getElementById("yes");

accessoriesYes.addEventListener("click", ()=>{
  accessoriesPic.style.display = "block"
  accessoriesDescription.style.display = "block"
  accessoriesDiv.style.display = "block"
})



let hairtype, skincolor;
function validateFullMakeUp() {
  // Validate skin type selection
  if (!skincolor) {
    alert("skin color not selected");
    return;
  }

  if (!hairtype) {
    alert("hair type not selected");
    return;
  }

  // Validate hair type selection
  // let hairTypeCards = document.querySelectorAll(".row.requirement .card input:checked");
  // if (hairTypeCards.length === 0) {
  //   alert("Please select your hair type.");
  //   return false;
  // }

  // Validate outfit description and color
  let outfitDescription = document.querySelector("textarea[name='outfit']").value.trim();
  let outfitFile = document.querySelector("input[name='outfit']").value.trim();
  if (outfitDescription === "" && outfitFile === "") {
    alert("Please provide your outfit description or upload an outfit image.");
    return false;
  }

  // Validate accessories selection

  let accessoriesNo = document.getElementById("no").checked;
  if (!accessoriesYes && !accessoriesNo) {
    alert("Please select whether you have matching jewellery.");
    return false;
  }
  // console.log(accessoriesYes)

  if(accessoriesDescription.value.trim() === ""){
    alert("can not be empty")
    return;
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

function skinColor(color){
  skincolor= color;
  console.log(skincolor);
}