var myIndex = 0;
carousel();
(function () {

  var navButton = document.querySelector("#nav-menu-button");
  var navUl = document.querySelector(".nav-ul");

  function toggleMobileMenu() {
    navUl.classList.toggle("hide-ul");
  }

  navButton.onclick = toggleMobileMenu;
}());
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  //x[myIndex-1].style.display = "block";
  setTimeout(carousel, 4000);
}