document.addEventListener("DOMContentLoaded", () => {


const filters = document.querySelectorAll(".gallery-filter");

const items = document.querySelectorAll(".gallery-item");

const images = document.querySelectorAll(".gallery-item img");


const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");





filters.forEach(button => {


button.addEventListener("click", () => {



filters.forEach(btn => {

btn.classList.remove("active");

});


button.classList.add("active");



const filter = button.dataset.filter;



items.forEach(item => {



if(
filter === "all" ||
item.dataset.category === filter
){


item.style.display="block";


}else{


item.style.display="none";


}


});



});



});








images.forEach(image => {


image.addEventListener("click", () => {


lightboxImage.src = image.src;


lightbox.classList.add("show");


});


});






closeLightbox.addEventListener("click", () => {


lightbox.classList.remove("show");


});





lightbox.addEventListener("click", (e)=>{


if(e.target === lightbox){

lightbox.classList.remove("show");

}


});



});