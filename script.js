const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }

});

const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const message = document.getElementById("message");
const rememberMe = document.getElementById("rememberMe");

loginForm.addEventListener("submit", (event) => {

    // Stop the page from refreshing
    event.preventDefault();

    // Get the values entered by the user
    const enteredUsername = username.value.trim();
    const enteredPassword = password.value;

    // Check if fields are empty
    if (enteredUsername === "" || enteredPassword === "") {
       message.textContent = "Please enter username and password!";
    message.className = "error-message";
        return;
    }

    // Check login credentials
    if (
        enteredUsername === "intern@techsgstudio.com" &&
        enteredPassword === "TSG@2026"
    ) 
    {
        message.textContent = "Login Successful!";
        message.style.color = "#1769AA";
    }
 
    else {
        message.textContent = "Invalid username or password!";
        message.style.color = "#D9534F";
    }

    if (rememberMe.checked) {
    localStorage.setItem("rememberedUsername", enteredUsername);
} else {
    localStorage.removeItem("rememberedUsername");
}

});
const savedUsername = localStorage.getItem("rememberedUsername");

if (savedUsername) {
    username.value = savedUsername;
    rememberMe.checked = true;
}

//Forget password functioality

const forgotPassword = document.getElementById("forgotPassword");

forgotPassword.addEventListener("click", (event) => {

    // Prevent the page from jumping to the top
    event.preventDefault();

    message.textContent = "Please contact TSG Studio to reset your password.";
    message.className = "error-message";
});