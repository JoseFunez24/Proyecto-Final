document.addEventListener("DOMContentLoaded", () => {


const search = document.getElementById("eventSearch");

const filter = document.getElementById("eventFilter");

const events = document.querySelectorAll(".event-card");

const noEvents = document.getElementById("noEvents");



function filterEvents(){


const text = search.value.toLowerCase();

const category = filter.value;


let visible = 0;



events.forEach(event => {


const content = event.textContent.toLowerCase();

const eventCategory = event.dataset.category;



const matchesText = content.includes(text);

const matchesCategory =
category === "todos" ||
eventCategory === category;



if(matchesText && matchesCategory){


event.style.display="flex";

visible++;


}else{


event.style.display="none";


}


});




if(visible === 0){

noEvents.classList.remove("hidden");

}else{

noEvents.classList.add("hidden");

}



}




search.addEventListener(
"keyup",
filterEvents
);



filter.addEventListener(
"change",
filterEvents
);



});