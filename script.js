const form = document.getElementById("signup-form");
const password = document.getElementById("user_password");
const confirmPassword = document.getElementById("user_confirm_password");
const wrongPassword = document.getElementById("wrong-password");
const email = document.getElementById("user_email");
const emptyEmail = document.getElementById("empty-email");
const emptyUsername = document.getElementById("empty-username");
const username = document.getElementById("username");
const notMatched = document.getElementById("match-password")
const phoneNumber = document.getElementById("phone_number");


form.addEventListener("submit", (e) =>{
    e.preventDefault();

    wrongPassword.textContent = "";
    notMatched.textContent ="";
    emptyEmail.textContent = "";
    emptyUsername.textContent = "";
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
    email.classList.remove("error");
    username.classList.remove("error");

    if (username.value.length < 3){
        username.classList.add("error");
        emptyUsername.textContent = "Username needs 3 chararters minimun";
        return;
    }

    if(email.value.trim() === ""){
        email.classList.add("error");
        emptyEmail.textContent = "Email is required";
        return;
    }
    else if (!email.value.includes('@') || !email.value.includes('.')){
        email.classList.add("error");
        emptyEmail.textContent = "Invalid email format";
        return;

    }

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

    form.submit();
})

form.addEventListener("input", (e) =>{
    
    if(e.target.id === "username"){
        if(username.value.length >= 3){
            username.classList.remove("error");
            username.classList.add("valid");
            emptyUsername.textContent = "";
        } else {
            username.classList.remove("valid");
        }
    }
    
    if(e.target.id === "user_email"){
        if(email.value.includes ("@") && email.value.includes(".")){
            email.classList.remove("error");
            email.classList.add("valid");
            emptyEmail.textContent = "";
        } else {
        email.classList.remove("valid");
    }
    }
    
    if(e.target.id === "phone_number"){
        if(phoneNumber.value.length === 10){
            phoneNumber.classList.remove("error");
            phoneNumber.classList.add("valid");
        }else {
            phoneNumber.classList.remove("valid");
        }
    }


    if(e.target.id === "user_password"){
        if(password.value.length >= 8){
            password.classList.remove("error");
            password.classList.add("valid");
            wrongPassword.textContent= "";

        } else {
            password.classList.remove("valid");
            
        }
    }

    if(e.target.id === "user_confirm_password"){
        if(password.value === confirmPassword.value && password.value.length >= 8){
            password.classList.remove("error");
            password.classList.add("valid");
            wrongPassword.textContent= "";
            confirmPassword.classList.remove("error");
            confirmPassword.classList.add("valid");
            notMatched.textContent= "";

        } else{
            confirmPassword.classList.remove("valid");
        }
    }   
    
})