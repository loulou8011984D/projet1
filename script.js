const displayForm = document.getElementById("displayForm");
let forLogin = document.getElementById("forLogin");
let loginForm = document.getElementById("loginForm");
let forRegister = document.getElementById("forRegister");
let forContainer = document.getElementById("forContainer");
displayForm.addEventListener("click",showForm);

forRegister.addEventListener("click",()=>{
    forLogin.classList.remove("active");
    forRegister.classList.add("active");
    if (registerForm.classList.contains("toggleForm")){
    formContainer.style.transform = "translate(100%)";
    }
})

function showForm(){
    document.querySelector(".form-wrapper .card").classList.toggle("show");

}