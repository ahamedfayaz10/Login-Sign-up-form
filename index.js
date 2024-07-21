
var loginform = document.getElementById("login-page")
var signupform = document.getElementById("signup-page")

signupform.style.display = "none"

function change(){
    loginform.style.display = "none"
    signupform.style.display = "block"
}

function rechange(){
    loginform.style.display = "block"
    signupform.style.display = "none"
}