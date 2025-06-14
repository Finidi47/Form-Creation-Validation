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

    //     Testing: log input values to verify functionality
    // console.log('username:', usernameInput.value);
    // console.log('email:', emailInput.value);
    // console.log('password:', passwordInput.value);

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();


        // Testing: very if the values are clean
    // console.log('Trimmed username:', username);
    // console.log('Trimmed email:', email);
    // console.log('Trimmed password:', password);

    // validating the inputs
    let isValid = true;
    let messages = [];

    if (username.length < 3){
        isValid = false;
        messages.push('Username must be at least 3 characters long.')
    }
    //Testing the value of username is !0
   // console.log("Username input after trim:", username, "Length:", username.length);

    if(!email.includes('.') || !email.includes("@")){
        isValid = false;
        messages.push('Please enter a valid email address');
    }

    if (password.length < 8){
        isValid = false;
        messages.push("Password must be at least 8 characters long")
    }

    console.log(messages);

    //showing the feedback div
    feedbackDiv.style.display = 'block';
    if(isValid){    //Alternative: if (messages.length === 0)
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = '#28a745';
    } else{
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = "#dc3545";
    }


}) //end of submit listener

});