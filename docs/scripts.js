

var menuIcon = document.getElementById("hamburger_icon");

var menu = document.getElementById("hamburger_menu");

menuIcon.addEventListener("click", function() {menu.style.display = "block"; menu.style.animation = "hamburger_in .75s ease";});

var backIcon = document.getElementById("back_arrow");

backIcon.addEventListener("click", function() {menu.style.animation = "hamburger_out .75s ease forwards";});
