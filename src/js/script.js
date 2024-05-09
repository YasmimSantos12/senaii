let button=document.querySelector(".menu-icon")
let menu=document.querySelector("nav ul")
let menuIcon=document.querySelector(".menu-icon i")

button.addEventListener('click',function(){
    menu.classList.toggle("active")
})