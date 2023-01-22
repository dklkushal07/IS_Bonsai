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
        `;
    }
}

window.customElements.define('navigation-bar',NavBar);


let hamburger = document.querySelector(".hamburger");
let leftMenu = document.querySelector(".nav-bar-left");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    leftMenu.classList.toggle("active");
});