class FooterElement extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =
        `
        <footer class="footer">
        <div class="footer_container">
            <div class="row">
                <div class="footer-col">
                    <h4>bonsai</h4>
                    <ul>
                        <li><a href="#">home</a></li>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">blog</a></li>
                        <li><a href="#">shop</a></li>
                        <li><a href="#">cart</a></li>
                        <li><a href="#">log in</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>types</h4>
                    <ul>
                        <li><a href="#">moyogi</a></li>
                        <li><a href="#">fukingashi</a></li>
                        <li><a href="#">kengai</a></li>
                        <li><a href="#">chokkan</a></li>
                        <li><a href="#">shohaku</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>follow us</h4>
                    <ul>
                        <li><a href="#">instagram</a></li>
                        <li><a href="#">facebook</a></li>
                        <li><a href="#">twitter</a></li>
                        <li><a href="#">linkedin</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>feedback</h4>
                    <ul>
                        <form>
                            Give your feedback here:<br>
                            <textarea cols="30" rows="3"></textarea>
                        </form>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        function toggle(){
            var blur = document.getElementById('blur');
            blur.classList.toggle('active');
            var popup = document.getElementById('popup');
            popup.classList.toggle('active');
        }
    </script>
    <footer class="footer">
        `
    }
}

window.customElements.define('page-footer',FooterElement);