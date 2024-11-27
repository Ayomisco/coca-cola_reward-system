document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form values
    const storeName = document.getElementById("storeName").value.trim();
    const storeAddress = document.getElementById("storeAddress").value.trim();
    const retailerID = document.getElementById("retailerID").value.trim();
    const ownerName = document.getElementById("ownerName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Regex pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regex pattern for contact number validation (e.g., must be digits and 10-15 characters)
    const contactNumberPattern = /^\d{10,15}$/;

    // Perform simple validation (can be expanded as per your requirements)
    if (!storeName || !storeAddress || !retailerID || !ownerName || !email || !phoneNumber || !password || password !== confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Input',
            text: 'Please fill all fields correctly.'
        });
        return;
    }


    // Validate Business Name
    if (storeName === "") {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Input',
            text: 'Please provide your business name.'
        });
        return;
    }

    // Validate Store Address
    if (storeAddress === "") {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Input',
            text: 'Please provide your store address.'
        });
        return;
    }

    // Validate Email
    if (!emailPattern.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please enter a valid email address.'
        });
        return;
    }

    // Validate Contact Number
    if (!contactNumberPattern.test(phoneNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Contact Number',
            text: 'Please enter a valid contact number (10-15 digits).'
        });
        return;
    }

    // Validate Passwords
    if (password.length < 8) {
        Swal.fire({
            icon: 'error',
            title: 'Weak Password',
            text: 'Password must be at least 8 characters long.'
        });
        return;
    }

    if (password !== confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Password Mismatch',
            text: 'Passwords do not match. Please re-enter your password.'
        });
        return;
    }

    // All validations passed, show success message
    Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'Your registration has been completed successfully!',
        showConfirmButton: true,
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirect or submit the form
            window.location.replace("dashboard.html"); // Replace with the actual URL
        }
    });
});


document.getElementById("loginForm").addEventListener("submit", validateLogin);

function validateLogin(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Regex pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email
    if (!emailPattern.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please enter a valid email address.'
        });
        return;
    }

    // Validate password
    if (password.length < 8) {
        Swal.fire({
            icon: 'error',
            title: 'Weak Password',
            text: 'Password must be at least 8 characters long.'
        });
        return;
    }

    // If all validations pass, show a success message and redirect
    Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'You have logged in successfully!',
        showConfirmButton: true,
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirect to dashboard
            window.location.replace("../dashboard.html"); // Update with the correct URL
        }
    });
}
