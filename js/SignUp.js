"use strict";
let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let passwordInput=document.getElementById("passwordInput");
let loginBtn = document.getElementById("loginBtn");
let userEmailInput=document.getElementById("userEmailInput");
let userPasswordInput=document.getElementById("userPasswordInput");
let signUpBtn = document.getElementById("signUpBtn");
let signUpForm = document.getElementById("signUpForm");
let signInForm = document.getElementById("signInForm")




let infoList=[];
if(localStorage.getItem("allInfo")!==null){
    infoList=JSON.parse(localStorage.getItem("allInfo"));
}




signUpBtn.addEventListener("click", function (){
    if(nameInput.value==""||emailInput.value==""||passwordInput.value==""){
        document.getElementById("errorMessage").classList.remove("d-none");
    }else{
        document.getElementById("errorMessage").classList.add("d-none");
        let person ={
            name:nameInput.value,
            email:emailInput.value,
            password:passwordInput.value
        };
            infoList.push(person);
            
            localStorage.setItem("allInfo",JSON.stringify(infoList));
            clearForm();
    }
});




loginBtn.addEventListener("click", function () {
    let isUserFound = false; 

    for (let i = 0; i < infoList.length; i++) {
        if (
            infoList[i].email.trim().toLowerCase() === userEmailInput.value.trim().toLowerCase() &&
            infoList[i].password === userPasswordInput.value
        ) {
            isUserFound = true;

            document.getElementById("loggedIn").classList.remove("d-none");
            document.getElementById("signInBx").classList.add("d-none");
            document.querySelector("#welcomeBx h1").innerHTML = `Welcome ${infoList[i].name}`;
        }
    }
    if (!isUserFound) {
        document.getElementById("validationMessage").classList.remove("d-none");
    }
});


document.querySelector("#signIn").addEventListener("click",function(){
    signUpBx.classList.add("d-none");
    signInBx.classList.remove("d-none");
    document.title="Login";

})
document.querySelector("#signUp").addEventListener("click",function(){
    signUpBx.classList.remove("d-none");
    signInBx.classList.add("d-none");
    document.title="Sign Up";
})

function clearForm(){
    nameInput.value="";
    emailInput.value="";
    passwordInput.value="";
}


signUpForm.addEventListener("submit",function(e){
    e.preventDefault();
})
signInForm.addEventListener("submit",function(e){
    e.preventDefault();
})