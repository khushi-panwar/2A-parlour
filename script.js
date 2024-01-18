document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('beauty-parlor-form');
    const inputFields = Array.from(document.querySelectorAll('#beauty-parlor-form input'));
  
    // Add your complex validation logic here
  
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      form.classList.add('was-validated');
    });
  
    inputFields.forEach(function (field) {
      field.addEventListener('input', function () {
        field.setCustomValidity('');
        field.classList.remove('is-invalid');
      });
    });
  });