let maintext = document.getElementById('main-text');
let hills = document.getElementById('bonsai-img');


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove("show");
        }
    })
})
const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((element) => observer.observe(element));

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    text.style.left =25+ value * -0.15 + '%';
    text.style.top = 180 + value + 'px';
    hills.style.top = value * -1 + 'px';
}

)