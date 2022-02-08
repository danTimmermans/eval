let burger = document.querySelector(".mini-burger");
let menuPop = document.querySelector(".menu-pop");
let menuOut = document.querySelector(".menu_out");

burger.addEventListener("click", () =>{
    menuPop.classList.toggle("active");
});