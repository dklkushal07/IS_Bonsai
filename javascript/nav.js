// Creating a class Navbar that inherits a plain HTML element
class NavBar extends HTMLElement {
    constructor() {
        super(); // Calls the constructor of HTMLElement
        // Initialises the innerHTML attribute of NavBar
        this.innerHTML =
            `
        <nav class="nav-bar">
        <img src="../images/logo with text off white.png" onclick="sendToHome()"class="nav-bar-logo">
            <ul class="nav-bar-left">
                <li><a href="home.html">Home</a></li>
                <li><a href="product.html">Products</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="about_us.html">About Us</a></li>
                <li><a href="research.html">Research</a></li>
            </ul>
            <div class="nav-bar-right">
            <div id="cart"><button onclick="cartActivation(); cartCLose();">CART</button></div>
                <div class="login-logout">
                    <div class="login-user"><button onclick="reDirToLogin()">LOGIN</button>
                    </div>
                    <div id="logout">
                        <button onclick="logOut()" >
                            <img src="../images/icons/logout.svg">
                            </img>
                        </button>
                    </div>
                </div>
            </div>
    </nav>
    <div class="cart">
                <h2 class="cart-title">Your cart</h2>
                <div class="cart-content">
                    <div class="cart-box">
                        <img src="../images/1.jpg" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">Sakura</div>
                            <div class="cart-price">$20</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <button class="cart-delete">delete</button>
                    </div>
                </div>
                <div class="total">
                    <div class="total-title">Total</div>
                    <div class="total-price">$0</div>
                </div>
                <button type="button" class="btn-buy">Buy Now</button>
                <button id="cart-close" type="button" onclick="cartClose()">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `
    }
}

// Defining the custom element navigation-bar as an object of NavBar
window.customElements.define('navigation-bar', NavBar);




let userNav = document.querySelector(".nav-bar-right");
let loginStatus = localStorage.getItem("login-status");
let loginUserToggle = document.querySelector(".login-user");
// If the user has been logged in, change the content of "Login button" to the localUsername
if (loginStatus == "yes") {
    // Removing the double quotations surrounding the string
    let localUsername = (localStorage.getItem("local-username")).substring(1, (localStorage.getItem("local-username")).length - 1);; 
    // Adds 'hasUser' to the classList of userNav
    userNav.classList.add('hasUser')
    loginUserToggle.innerHTML = localUsername;
}
// A funtion that logs the user out
let logOut = () => {
    // Confirm prompt that asks the user if they want to log out or not
    if (confirm("Do you really want to sign out?") == true) {
        // Sets the value of 'login-status' in localStorage to 'no'
        localStorage.setItem("login-status", "no");
        // Removes 'hasUser' from the classList of userNav
        userNav.classList.remove('hasUser')
        //Changes the innerHTML of loginUserToggle to "Login button"
        loginUserToggle.innerHTML = `<button onclick="reDirToLogin()">LOGIN</button>`;
    }
}

//Function that redirects to login page
let reDirToLogin = () => {
    window.location.href="../html/login.html";
}

// Fuction the redirects to home page when the logo in navbar is clicked
let sendToHome = () => {
    window.location.href="../html/home.html";
}


// cart
let cartIcon = document.querySelector("#cart");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#cart-close");

let cartActivation = () => {
    cart.classList.add('active');
};

// CloseCart
let cartClose = () => {
    cart.classList.remove('active');
};

// Cart working JS
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

// working function
function ready() {
    var removeCartButton = document.getElementsByClassName('cart-delete');
    console.log(removeCartButton);
    for (var i = 0; i < removeCartButton.length; i++) {
        var button = removeCartButton[i];
        button.addEventListener('click', removeCartItem);
    }
    //Quantity Changes
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
}

// remove Items from cart
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

//Quantity Changes
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateTotal();
}

//Update Total
function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
        total = Math.round(total * 100) / 100;
    }

    document.getElementsByClassName('total-price')[0].innerText = "$" + total;
}
