let maintext = document.getElementById('main-text');
let hills = document.getElementById('bonsai-img');


window.addEventListener('scroll', function () {
    let value = window.scrollY;
    text.style.left =25+ value * -0.15 + '%';
    text.style.top = 180 + value + 'px';
    hills.style.top = value * -1 + 'px';
}

)