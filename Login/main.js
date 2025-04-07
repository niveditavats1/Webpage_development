function signIn() {
    const email = document.getElementById("Email").ariaValueMax;
    const password = document.getElementById("Password").ariaValueMax;

    if(email==="admin" && password === "123") {
        alert("Login successful");
    } else {
        alert("login failed");
    }
}