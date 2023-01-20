function popup(){
    var about_us = document.getElementById('about_us');
    about_us.classList.toggle('active');
    var modal = document.getElementById('modal');
    modal.classList.toggle('active');
}

function close(){
    document.getElementById('about_us').classList.remove('active');
}
    // const closeBtn=document.getElementById('closeBtn')
    // closeBtn.addEventListener("click",close(){
    //     this.parentElement.style.display='none';
    // })


 