const form = document.getElementById("signup-form");
const password = document.getElementById("user_password");
const confirmPassword = document.getElementById("user_confirm_password");
const wrongPassword = document.getElementById("wrong-password");
const email = document.getElementById("user_email");
const emptyEmail = document.getElementById("empty_email");
const emptyUsername = document.getElementById("empty-username");
const username = document.getElementById("username");
const notMatched = document.getElementById("match-password")


form.addEventListener("submit", (e) =>{
    e.preventDefault();

    if (password.value.length < 8){
        password.classList.add("error");
        confirmPassword.classList.add("error");
        wrongPassword.textContent = "Password needs 8 characters minimun" 
        return
    }

    if(password.value !== confirmPassword.value){
        password.classList.add("error");
        confirmPassword.classList.add("error");
        wrongPassword.textContent = "Passwords are not the same";
        notMatched.textContent ="Passwords are not the same";
        return
    }


    wrongPassword.textContent = "";
    notMatched.textContent ="";
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
    form.submit();
})