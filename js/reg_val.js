document.getElementById("nextSectionBtn").addEventListener("click", function () {
   document.getElementById("section1").style.display = "none";
   document.getElementById("section2").style.display = "block";
});

document.getElementById("previousSectionBtn").addEventListener("click", function () {
   document.getElementById("section2").style.display = "none";
   document.getElementById("section1").style.display = "block";
});

const stateCityMapping = {
   Lagos: ["Ikeja", "Lekki", "Surulere"],
   Abuja: ["Garki", "Wuse", "Maitama"],
   Kano: ["Kano", "Bichi", "Gwale"],
   Rivers: ["Port Harcourt", "Obio Akpor", "Okrika"],
   Oyo: ["Ibadan", "Ogbomosho", "Iseyin"]
};

const cityBA = {
   Ikeja: ["John Doe", "Jane Smith"],
   Lekki: ["Chris Brown", "Emma Watson"],
   Kano: ["Abdul Mohammed", "Fatima Bello"],
   "Port Harcourt": ["Samuel Kalu", "Angela Uche"],
   Ibadan: ["Tunde Balogun", "Aisha Bello"]
};

document.getElementById("state").addEventListener("change", function () {
   const state = this.value;
   const citySelect = document.getElementById("city");
   citySelect.innerHTML = '<option value="" disabled selected>Select a city</option>';
   if (stateCityMapping[state]) {
      stateCityMapping[state].forEach(city => {
         const option = document.createElement("option");
         option.value = city;
         option.textContent = city;
         citySelect.appendChild(option);
      });
   }
});

document.getElementById("city").addEventListener("change", function () {
   const city = this.value;
   const baSelect = document.getElementById("brandAmbassador");
   baSelect.innerHTML = '<option value="" disabled selected>Select a brand ambassador</option>';
   if (cityBA[city]) {
      cityBA[city].forEach(ba => {
         const option = document.createElement("option");
         option.value = ba;
         option.textContent = ba;
         baSelect.appendChild(option);
      });
   }
});


document.getElementById("retailerRegistrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form values
    const storeName = document.getElementById("storeName").value.trim();
    const storeAddress = document.getElementById("storeAddress").value.trim();
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
    if (!storeName || !storeAddress || !ownerName || !email || !phoneNumber || !password || password !== confirmPassword) {
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
            // If the form is valid, submit it
            document.getElementById("retailerRegistrationForm").submit();  // Trigger the form submission
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
