
function validateManicure() {
    // Validate Nail Shape 
    let nailShapeRadios = document.getElementsByName("nail-shape");
    let nailShapeSelected = false;
    for (let i = 0; i < nailShapeRadios.length; i++) {
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
    let manicureType = document.querySelector("textarea[name='manicureType']").value;
    let polish = document.querySelector("textarea[name='polish']").value;

    if (!manicureType || !polish) {
        alert("Please fill in all the textarea fields.");
        return false;
    }

    // Validate file upload
    let artPreferenceFile = document.getElementById("art-preference");
    if (artPreferenceFile.value) {
        console.log(artPreferenceFile.value);
        let allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
        if (!allowedExtensions.exec(artPreferenceFile.value)) {
            alert("Please upload a file with a valid extension (.jpg, .jpeg, .png).");
            return false;
        }
    }

    let massageLight = document.getElementById('light').checked;
    let massageMedium = document.getElementById('medium').checked;
    let massageFirm = document.getElementById('firm').checked;
  
    console.log(massageLight, massageMedium, massageFirm);
    if (!massageLight && !massageMedium && !massageFirm) {
      alert("Please select a Hand Massage Preference.");
      return;
    }
    // If all validations pass,
    // alert("Form submitted successfully!");
    Swal.fire({
        title: "Submitted",
        text: "successfully!",
        icon: "success"
    });
    return true;
}
