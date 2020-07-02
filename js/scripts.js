var menu = document.querySelector(".menu-toggle");
var section = document.querySelector(".menu-section");
var nav = document.querySelector("nav ul");

menu.addEventListener("click", function menuModal(){
    menu.classList.toggle("on");
    section.classList.toggle("on");
    nav.classList.toggle("hidden");
});

var today = new Date();
var year = today.getFullYear();

document.querySelector("#anio").innerHTML = year;

new WOW().init();