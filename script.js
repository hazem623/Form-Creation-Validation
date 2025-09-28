document.addEventListener('DOMContentLoaded', function() {
    // Form and Feedback Selection
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Form Submission Event
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve and trim input values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Initialize validation variables
        let isValid = true;
        let messages = [];

        // Username Validation
        if(username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters.");
        }

        // Email Validation
        if(!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password Validation
        if(password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters.");
        }

        // Display Feedback
        feedbackDiv.style.display = "block";
        if(isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.style.backgroundColor = "#d4edda";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.backgroundColor = "#f8d7da";
        }
    });
});
