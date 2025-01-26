
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const emailSuccess = document.getElementById("emailSuccess");
const passwordSuccess = document.getElementById("passwordSuccess");


function validateEmail() {
    const email = emailInput.value;
    if (email.length > 3 && email.includes('@') && email.includes('.')) {
        emailError.style.display = "none";
        emailSuccess.style.display = "block";
    } else {
        emailSuccess.style.display = "none";
        emailError.style.display = "block";
    }
}


function validatePassword() {
    const password = passwordInput.value;
    if (password.length > 8) {
        passwordError.style.display = "none";
        passwordSuccess.style.display = "block";
    } else {
        passwordSuccess.style.display = "none";
        passwordError.style.display = "block";
    }
}


emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);


submitBtn.addEventListener("click", () => {
    
    if (emailSuccess.style.display === "block" && passwordSuccess.style.display === "block") {
        const confirmSignup = confirm("Do you want to submit the form?");
        if (confirmSignup) {
            alert("Signup Successful!");
        } else {
            
            window.location.reload();
            emailInput.value = "";
            passwordInput.value = "";
            emailSuccess.style.display = "none";
            passwordSuccess.style.display = "none";
        }
    } else {
        alert("Please make sure all fields are valid.");
    }
});
