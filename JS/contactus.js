$(document).ready(function () {
    // Form validation
    const form = $('#contact-form');
  
    form.on('submit', function (event) {
      event.preventDefault();
      let isValid = true;
  
      $(this).find('input, textarea').each(function () {
        if (!validateField($(this))) {
          isValid = false;
        }
      });
  
      if (isValid) {
        alert('Form submitted successfully');
        form[0].reset();
      }
    });
  
    form.on('blur', 'input, textarea', function () {
      validateField($(this));
    });
  
    function validateField(field) {
      const value = field.val().trim();
      const errorMessage = field.siblings('.error-message');
  
      if (!value) {
        errorMessage.text(`${field.prev('label').text()} is required`);
        field.addClass('invalid');
        return false;
      } else {
        errorMessage.text('');
        field.removeClass('invalid');
        return true;
      }
    }
  });
  