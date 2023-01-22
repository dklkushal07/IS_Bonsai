function popup(){
    var about_us = document.getElementById('about_us');
    about_us.classList.toggle('active');
    var modal = document.getElementById('modal');
    modal.classList.toggle('active');
}

const closeButton = document.getElementById("closeBtn");

closeButton.addEventListener("click", close);
function close() {
    document.getElementById('about_us').classList.remove('active');
    document.getElementById('modal').classList.remove('active');
};

// function close(){
//     newFunction();

//     function newFunction() {
//         document.getElementById('about_us').classList.remove('active');
//         document.getElementById('modal').classList.remove('active');
//     }
// }
    // const closeBtn=document.getElementById('closeBtn')
    // closeBtn.addEventListener("click",close(){
    //     this.parentElement.style.display='none';
    // })


 