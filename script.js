document.addEventListener("DOMContentLoaded", () => { // Wait for the DOM to load
    // get reference to form and inputs
    const form = document.getElementById("registration-form");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const feedbackDiv = document.getElementById("form-feedback");

    // listen to form submission
    form.addEventListener('submit', function(event){
        event.preventDefault(); // stop the form from reloading the page
    })

    // Testing: log input values to verify functionality
    console.log('username:', usernameInput.value);
    console.log('email:', emailInput.value);
    console.log('password:', passwordInput.value);
});