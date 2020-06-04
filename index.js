var toggleButton=document.getElementsByClassName("toggle-button")[0];
var navbarLinks=document.getElementsByClassName("navbar-links")[0];
toggleButton.addEventListener("click",dothis);
function dothis(){
  navbarLinks.classList.toggle("active");
}
