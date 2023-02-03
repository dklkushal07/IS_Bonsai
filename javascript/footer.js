class FooterElement extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =
        `
        <footer class="footer">
        <div class="row">
            <div class="col">
                <h3>SHRUBS</h3>
                <p>Shrubs is a bonsai plant website that offers a wide selection of high-quality
                bonsai trees and accessories. With a focus on customer satisfaction, Shrubs is
                dedicated to providing a user-friendly shopping experience for bonsai enthusiasts of all levels.</p>
            </div>
            <div class="col" style="margin-left: 45px;">
                <h3>Office</h3>
                <p>Kamal Marg</p>
                <p>Kamalpokhari, Kathmandu</p>
                <p>Bagmati, 44600, Nepal</p>
                <p class="email">contact@shrubs.com</p>
                <p>+977 9808638249</p>
            </div>
            <div class="col">
                <h3>Links</h3>
                <ul>
                    <li><a href="home.html">home</a></li>
                    <li><a href="about_us.html">about us</a></li>
                    <li><a href="blog.html">blog</a></li>
                    <li><a href="product.html">shop</a></li>
                    <li><a href="research.html">research</a></li>
                    <li><a href="login.html">log in</a></li>
                </ul>
            </div>
            <div class="col" style="margin-left: -55px;">
                <h3>Newsletter</h3>
                <form class="footer-form">
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
        <p class="copyright" style="text-align : center;">Shrubs Co. &copy 2023 - All Rights Reserved</p>
    </footer>
        `
    }
}

window.customElements.define('page-footer',FooterElement);