let arch;
let eyebrowYes = document.getElementById('eyebrow-yes');
let eyebrow_product = document.querySelector('.eyebrowProduct')
// if choose option yes then display another 
eyebrowYes.addEventListener('click', () => {
    eyebrow_product.style.display = "block"
})
function validateEyebrow() {
    let eyebrowBefore = document.querySelector('input[name="eyebrow"]:checked');
    let eyebrowProduct = document.querySelector('textarea[name="eyebrow-product"]').value;

    // Check if at least one arch option is selected
    if (!arch) {
        alert("Please select an eyebrow arch option.");
    return;
    }

    // Check if user selected the options or not
    if (!eyebrowBefore) {
        alert("Please answer the question about eyebrow threading before.");
        return false;
    }

    if (eyebrowBefore === "yes") {
        if (eyebrowProduct.trim() === "") {
            alert("Please enter your preference for eyebrow product.");
            return;
        }
        return;
    }

    // If all validations pass
    Swal.fire({
        title: "Submitted",
        text: "successfully!",
        icon: "success"
    });
}

function eyebrowArch(archVal) {
    arch = archVal;
    console.log(arch);
}