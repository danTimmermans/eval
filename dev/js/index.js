let burger = document.querySelector(".mini-burger");
let menuPop = document.querySelector(".menu-pop");


burger.addEventListener("click", () =>{
    menuPop.classList.toggle("active");
});