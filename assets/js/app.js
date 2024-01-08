var  menuIcon = document.querySelector(".menuIcon");
var menuList = document.querySelector(".menuList");

menuIcon.addEventListener("click" , ()=>{
    menuIcon.classList.toggle("active");
    menuList.classList.toggle("active");

}) 