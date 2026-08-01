document.addEventListener("DOMContentLoaded", () => {


/*
Botón volver arriba
*/


const topButton = document.createElement("button");


topButton.textContent = "↑";


topButton.className = "top-button";


document.body.appendChild(topButton);





window.addEventListener("scroll",()=>{


if(window.scrollY > 300){

topButton.classList.add("show");

}else{

topButton.classList.remove("show");

}


});





topButton.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});



});