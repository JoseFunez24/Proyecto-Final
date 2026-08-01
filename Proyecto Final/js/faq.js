document.addEventListener("DOMContentLoaded",()=>{


const questions =
document.querySelectorAll(".faq-question");



questions.forEach(question=>{


question.addEventListener("click",()=>{



const item =
question.parentElement;



const answer =
item.querySelector(".faq-answer");





item.classList.toggle("active");





if(item.classList.contains("active")){


answer.style.maxHeight =
answer.scrollHeight + "px";



question.querySelector("span").textContent="-";



}else{


answer.style.maxHeight="0";


question.querySelector("span").textContent="+";


}



});



});


});