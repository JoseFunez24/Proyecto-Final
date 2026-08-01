document.addEventListener("DOMContentLoaded",()=>{


const form = document.getElementById("contactForm");

const response = document.getElementById("contactResponse");



form.addEventListener("submit",(event)=>{


event.preventDefault();



const name =
document.getElementById("contactName").value.trim();


const email =
document.getElementById("contactEmail").value.trim();


const subject =
document.getElementById("contactSubject").value.trim();


const message =
document.getElementById("contactMessage").value.trim();






if(
name === "" ||
email === "" ||
subject === "" ||
message === ""
){


response.textContent =
"Por favor completa todos los campos.";


response.className="error";


return;


}






const emailFormat =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;



if(!emailFormat.test(email)){


response.textContent =
"Ingresa un correo electrónico válido.";


response.className="error";


return;


}







response.textContent =
"Mensaje enviado correctamente. Gracias por comunicarte con nosotros.";

response.className="success";



form.reset();



});



});