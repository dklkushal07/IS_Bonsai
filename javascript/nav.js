let hamburger = document.querySelector(".hamburger");
let leftMenu = document.querySelector(".nav-bar-left");
console.log("suvan");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    leftMenu.classList.toggle("active");
});