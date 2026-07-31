document.addEventListener("DOMContentLoaded",()=>{


const button =
document.getElementById("menuBtn");


const menu =
document.getElementById("navMenu");



if(button && menu){



button.addEventListener("click",()=>{


menu.classList.toggle("active");



});



}



});