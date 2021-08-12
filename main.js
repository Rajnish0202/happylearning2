let menuBar = document.querySelector("#menu");
let navBar = document.querySelector(".navbar");

menuBar.addEventListener("click",function(){
 menuBar.classList.toggle("fa-times")
navBar.classList.toggle("active");
});

window.onscroll=(function(){
 menuBar.classList.remove("fa-times")
navBar.classList.remove("active");
});