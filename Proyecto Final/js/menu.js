document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("menuBtn");
    const menu = document.getElementById("navMenu");

    if (button && menu) {

        button.addEventListener("click", function () {

            menu.classList.toggle("active");

        });

    }

    // Resaltar la página actual
    const enlaces = document.querySelectorAll(".nav a");
    const paginaActual = window.location.pathname.split("/").pop();

    enlaces.forEach(function (enlace) {

        if (enlace.getAttribute("href") === paginaActual) {

            enlace.classList.add("active");

        }

    });

});