$('#togglePassword').on('click', function () {
    const passwordField = $('#password');
    const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
    passwordField.attr('type', type);

    // Toggle the button text
    const buttonText = type === 'password' ? 'Show' : 'Hide';
    $(this).text(buttonText);
});$('#togglePassword').on('click', function () {
        const passwordField = $('#password');
        const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
        passwordField.attr('type', type);

        // Toggle the button text
        const buttonText = type === 'password' ? 'Show' : 'Hide';
        $(this).text(buttonText);
    });