class FooterElement extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =
        `
        <footer class="footer">
        <div class="row">
            <div class="col">
                <h3>logo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dicta nemo, id possimus ea culpa saepe ullam! Quisquam hic 
                    iusto, facere ab nobis a? Aspernatur eveniet itaque libero
                     aut unde! Dolore.</p>
            </div>
            <div class="col" style="margin-left: 45px;">
                <h3>Office</h3>
                <p>Kamal Marg</p>
                <p>Kamalpokhari, Kathmandu</p>
                <p>Bagmati, 44600, Nepal</p>
                <p class="email">suvanmagar7@gmail.com</p>
                <p>+977 9808253241</p>
            </div>
            <div class="col">
                <h3>Links</h3>
                <ul>
                    <li><a href="home.html">home</a></li>
                    <li><a href="about_us.html">about us</a></li>
                    <li><a href="blog.html">blog</a></li>
                    <li><a href="product.html">shop</a></li>
                    <li><a href="cart.html">cart</a></li>
                    <li><a href="login.html">log in</a></li>
                </ul>
            </div>
            <div class="col" style="margin-left: -55px;">
                <h3>Newsletter</h3>
                <form>
                    <input type="email" placeholder="Enter your email id" required>
                    <button type="submit">Submit</button>
                </form>
                <h3>Socials</h3>
                <div class="socials">
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                    <a href="#">Whatsapp</a>
                </div>
            </div>
        </div>
        <hr>
        <p class="copyright" style="text-align : center;">Armor Co. &copy 2023 - All Rights Reserved</p>
    </footer>
        `
    }
}

window.customElements.define('page-footer',FooterElement);