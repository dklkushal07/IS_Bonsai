const inputNodeList = document.querySelectorAll(".input-field");
const toggleList = document.querySelectorAll(".toggle-ls");
const theContainer = document.querySelector(".login-container");
inputNodeList.forEach(element => {
    if (element.value != "") element.classList.add("active");
    element.addEventListener("focus", () => {
        element.classList.add("active");
    });
    element.addEventListener("blur", () => {
        if (element.value != "") return;
        element.classList.remove("active");
    });
});
toggleList.forEach(toggleButton => {
    toggleButton.addEventListener("click", () => {
        theContainer.classList.toggle("signup-mode");
    });
});

// const signUp = e => {
//     let usernameInput = document.getElementById('username-signup').value,
//         emailInput = document.getElementById('email').value,
//         passInput = document.getElementById('pass-signup').value;

//     let formData = JSON.parse(localStorage.getItem('formData')) || [];

//     let exist = formData.length && 
//         JSON.parse(localStorage.getItem('formData')).some(data => 
//             data.usernameInput == usernameInput
//         );

//     if(!exist){
//         formData.push({ usernameInput, emailInput, passInput });
//         localStorage.setItem('formData', JSON.stringify(formData));
//         // document.querySelector('form').reset();
//         alert("Account Created");
//     }
//     else{
//         alert("The username is taken!");
//     }
//     e.preventDefault();
// }

// function signIn(e) {
//     let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
//     let formData = JSON.parse(localStorage.getItem('formData')) || [];
//     let exist = formData.length && 
//     JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
//     if(!exist){
//         alert("Incorrect login credentials");
//     }
//     else{
//         location.href = "/";
//     }
//     e.preventDefault();
// }