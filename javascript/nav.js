class NavBar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =
            `
        <nav class="nav-bar">
        <a href="home.html" height="60px"><img src="../images/logo with text off white.png" class="nav-bar-logo"></a>
            <ul class="nav-bar-left">
                <li><a href="home.html">Home</a></li>
                <li><a href="product.html">Products</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="about_us.html">About Us</a></li>
                <li><a href="research.html">Research</a></li>
            </ul>
            <div class="nav-bar-right">
            <div id="cart"><button onclick="cartActivation()">CART</button></div>
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
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </div>
    </nav>
    <div class="cart">
                <h2 class="cart-title">Your cart</h2>
                <div class="cart-content">
                    <div class="cart-box">
                    
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

window.customElements.define('navigation-bar', NavBar);


let hamburger = document.querySelector(".hamburger");
let leftMenu = document.querySelector(".nav-bar-left");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    leftMenu.classList.toggle("active");
});

let userNav = document.querySelector(".nav-bar-right");
let loginStatus = localStorage.getItem("login-status");
let loginUserToggle = document.querySelector(".login-user");
let localUsername = (localStorage.getItem("local-username")).substring(1, (localStorage.getItem("local-username")).length - 1);;
console.log(localUsername)
if (loginStatus == "yes") {
    userNav.classList.add('hasUser')
    loginUserToggle.innerHTML = localUsername;
}

logOut = () => {
    if (confirm("Do you really want to sign out?") == true) {
        localStorage.setItem("login-status", "no");
        userNav.classList.remove('hasUser')
        loginUserToggle.innerHTML = `<button onclick="reDirToLogin()">LOGIN</button>`;
    }
}

reDirToLogin = () => {
    window.location.href = "login.html";
}

// cart
let cartIcon = document.querySelector("#cart");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#cart-close");

cartActivation = () => {
    cart.classList.add('active');
};

// CloseCart
cartClose = () => {
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
    //add to cart
    var addCart = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    //Buy button Work
    document.getElementsByClassName('btn-buy').addEventListener('click', butButtonClicked)
}

//Buy button
function butButtonClicked() {
    alert('Your Order is placed')
    var cartContent = document.getElementsByClassName('cart-content')[0];
    while (cartContent.hasChildNodes()) {
        cart.textContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
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

//add to cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-image')[0].innerText;
    console.log(title, price, productImg);
    // addProductToCart(title, price, productImg);
    // updateTotal();
}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemNames = document.getElementsByClassName('cart-product-title');
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title)
            alert('You already have this item in your cart');
        return;
    }
}
var cartBoxContent = `
                        <img src="${productImg}" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <button class="cart-delete">delete</button>`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox
    .getElementsByClassName('cart-delete')[0]
    .addEventListener("click", removeCartItem);
cartShopBox
    .getElementsByClassName('cart-quantity')[0]
    .addEventListener("change", quantityChanged);



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

