function validatePassword(password, confirmPassword) {
    if (password === confirmPassword) {
        console.log("Password Matched. Password validation Successful.");
    } else {
        console.log("Password didn't match. Password validation unsuccessful.");
    }
}

// Example usage:
const password = "securePassword123";
const confirmPassword = "securePassword128";

validatePassword(password, confirmPassword);
