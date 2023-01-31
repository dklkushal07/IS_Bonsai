const inputNodeList = document.querySelectorAll(".input-field");
inputNodeList.forEach(element => {
    element.addEventListener("focus",() => {
        element.classList.add("active");
    });
    element.addEventListener("blur",() => {
        element.classList.remove("active");
    });
});