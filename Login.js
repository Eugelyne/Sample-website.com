// Function to handle user signup
function signup() {
    const username = document.getElementById("signup-username").value.trim();
    const password = document.getElementById("signup-password").value;
    const errorMessage = document.getElementById("signup-error-message");

    errorMessage.textContent = "";

    if (localStorage.getItem(username)) {
        errorMessage.textContent = "Username already exists. Please choose another.";
    } else {

        localStorage.setItem(username, password);
        alert("Signing up completed! Logging you into...");
        
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("currentUser", username);
        window.location.assign('Webpage.html');
    }
}

// Function to handle user login
function login() {
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value;
    const errorMessage = document.getElementById("login-error-message");

    errorMessage.textContent = "";

    if (localStorage.getItem(username) && localStorage.getItem(username) === password) {
        alert("Logging you into...");
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("currentUser", username);
        window.location.assign('Webpage.html');
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
}


// Function to show the login form
function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none"; 
    document.getElementById("welcome-message").style.display = "none"; 
}

// Function to show the signup form
function showSignupForm() {
    document.getElementById("login-form").style.display = "none"; 
    document.getElementById("signup-form").style.display = "block"; 
    document.getElementById("login-error-message").textContent = ""; 
}
