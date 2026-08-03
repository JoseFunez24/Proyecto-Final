document.addEventListener("DOMContentLoaded", () => {


/*
Botón volver arriba
*/


const topButton = document.createElement("button");


topButton.textContent = "↑";


topButton.className = "top-button";


document.body.appendChild(topButton);

// Carrusel automático

const slides = document.querySelectorAll(".hero-slide");
const indicators = document.querySelectorAll(".indicator");

let current = 0;

function showSlide(index){

    slides.forEach(slide=>{

        slide.classList.remove("active");

    });

    indicators.forEach(dot=>{

        dot.classList.remove("active");

    });

    slides[index].classList.add("active");

    indicators[index].classList.add("active");

}

setInterval(()=>{

    current++;

    if(current>=slides.length){

        current=0;

    }

    showSlide(current);

},5000);

indicators.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        current=index;

        showSlide(current);

    });

});


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