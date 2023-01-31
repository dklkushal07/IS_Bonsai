class NavBar extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = 
        `
        <nav class="nav-bar">
        <a href="home.html" src="../images/logo.png" class="nav-bar-logo">LOGO</a>
            <ul class="nav-bar-left">
                <li><a href="home.html">Home</a></li>
                <li><a href="product.html">Products</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="about_us.html">About Us</a></li>
            </ul>
            <div class="nav-bar-right">
                <a href="cart.html" src="../images/cart.png">Cart</a>
                <a href="login.html">Login</a>
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
                        <img src="../images/1.jpg" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">Bonsai</div>
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
                <button id="cart-close" aria-label="Close Alert" type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `
    }
}

window.customElements.define('navigation-bar',NavBar);


let hamburger = document.querySelector(".hamburger");
let leftMenu = document.querySelector(".nav-bar-left");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    leftMenu.classList.toggle("active");
});

// cart
let cartIcon = document.querySelector("#cart");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#cart-close");

cartIcon.onclick = () =>{
    cart.classList.add('active');
};

// CloseCart
closeCart.onclick = () =>{
    cart.classList.remove('active');
};

// Cart working JS
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else {
    ready();
}

// working function
function ready(){
    var removeCartButton = document.getElementsByClassName('cart-delete');
    console.log(removeCartButton);
    for (var i = 0; i < removeCartButton.length; i++){
        var button = removeCartButton[i];
        button.addEventListener('click', removeCartItem);
    }
}

// remove Items from cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}