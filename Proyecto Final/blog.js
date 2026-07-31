document.addEventListener("DOMContentLoaded", () => {


const searchInput = document.getElementById("blogSearch");

const articles = document.querySelectorAll(".blog-card");

const noResults = document.getElementById("noResults");



searchInput.addEventListener("keyup", () => {


let searchValue = searchInput.value.toLowerCase();

let visibleArticles = 0;



articles.forEach(article => {


let text = article.textContent.toLowerCase();



if(text.includes(searchValue)){


article.style.display = "block";

visibleArticles++;


}else{


article.style.display = "none";


}


});



if(visibleArticles === 0){

noResults.classList.remove("hidden");

}else{

noResults.classList.add("hidden");

}



});



});