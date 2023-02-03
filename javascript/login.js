const inputNodeList = document.querySelectorAll(".input-field");
const toggleList = document.querySelectorAll(".toggle-ls");
const theContainer = document.querySelector(".login-container");
// Function that is executed for each element in InputNodeList
inputNodeList.forEach(element => {
    // if the value of empty string is not empty, active class is added on focus and removed on blur to element.
    if (element.value != "") element.classList.add("active");
    element.addEventListener("focus", () => {
        element.classList.add("active");
    });
    element.addEventListener("blur", () => {
        if (element.value != "") return;
        element.classList.remove("active");
    });
});
// function that is executed for each toggleButton in toggleList
toggleList.forEach(toggleButton => {
    // on clicking the toggleButton, the class 'signup-mode' is added to or removed from theContainer
    toggleButton.addEventListener("click", () => {
        theContainer.classList.toggle("signup-mode");
    });
});
// sets the key value pair 'login-status':'no'
localStorage.setItem('login-status',"no");

// function that takes event as a parameter
const signUp = e => {
    let usernameInput = document.getElementById('username-signup').value,
        emailInput = document.getElementById('email').value,
        passInput = document.getElementById('pass-signup').value;

    // function for form validation
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
    // converts formData JSON string value from local storage to an array and stores it on formData variable
    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    //exist is a boolean that is true if the username exists, false if the username doesnt exist
    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.usernameInput == usernameInput
        );
    if(!exist && formValid()){
        //Pushes the input values object to formData
        formData.push({ usernameInput, emailInput, passInput });
        // Sets the formData in local storage to JSON string of formData
        localStorage.setItem('formData', JSON.stringify(formData));
        //Resets the signup form input
        document.querySelector('.signup-form').reset();
        alert("Account Created");
        theContainer.classList.toggle("signup-mode");
    }
    else{
        if (exist){alert("The username is taken!");}
    }
    e.preventDefault();
}

// signIn function that takes event as parameter
function signIn(e) {
    let username = document.getElementById('username').value, pass = document.getElementById('pass').value;
    // lets formData be an array of JSON string value of formData from the localstorage
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    // exist boolean is true if the input username,password are same as the ones in formData
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.usernameInput == username && data.passInput == pass);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        // sets the value of 'login-status' in local storage to 'yes'
        localStorage.setItem('login-status','yes');
        // sets the value of 'local-username' in local storage to JSON string value of username
        localStorage.setItem('local-username',JSON.stringify(username))
        alert("Logged in successfully!") ;
        // redirects to home page
        location.replace('../html/home.html');
    }
    e.preventDefault();
}