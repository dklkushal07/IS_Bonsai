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



const signUp = e => {
    let usernameInput = document.getElementById('username-signup').value,
        emailInput = document.getElementById('email').value,
        passInput = document.getElementById('pass-signup').value;

    function formValid(){
        if (usernameInput.length<4) {
            alert("The username must be at least 4 characters!")
            return false
        }      
        if (passInput.length<4) {
            alert("The password must be at least 4 characters!")
            return false
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
            alert('Please enter a valid email address!');
            return false;
        }
        else{
            return true;
        }
    }

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.usernameInput == usernameInput
        );
    if(!exist && formValid()){
        formData.push({ usernameInput, emailInput, passInput });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('.signup-form').reset();
        alert("Account Created");
        theContainer.classList.toggle("signup-mode");
    }
    else{
        if (exist){alert("The username is taken!");}
    }
    e.preventDefault();
}

function signIn(e) {
    let username = document.getElementById('username').value, pass = document.getElementById('pass').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.usernameInput == username && data.passInput == pass);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        localStorage.setItem('login-status','yes');
        localStorage.setItem('local-username',JSON.stringify(username))
        alert("Logged in successfully!") ;
        location.replace('/IS_Bonsai/html/home.html');
    }
    e.preventDefault();
}