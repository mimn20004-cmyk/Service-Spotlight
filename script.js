const overlay = document.getElementById("overlay");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

let timer;

function openModal(){

    overlay.classList.remove("hidden");

    timer = setTimeout(() => {

        closeModal();

    },10000);

}

function closeModal(){

    overlay.classList.add("hidden");

    clearTimeout(timer);

}

openBtn.addEventListener("click",openModal);

closeBtn.addEventListener("click",closeModal);

overlay.addEventListener("click",(e)=>{

    if(e.target===overlay){

        closeModal();

    }

});