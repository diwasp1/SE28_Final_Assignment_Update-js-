// prevent link to other page

var aTag = document.getElementsByTagName("a");

var prevent = function (e) {
  e.preventDefault();
};

for (var i = 0; i < aTag.length; i++) {
  aTag[i].onclick = prevent;
}

/* -------------------------------------- side nav -------------------------------------- */
var sideNav = document.getElementById("sidenav");
var hamburger = document.querySelector(".header__hamburger");
var closeButton = document.querySelector(".close-button");

hamburger.addEventListener("click", openNav);
closeButton.addEventListener("click", closeNav);

// sidenav open

function openNav() {
  sideNav.style.width = "18.75em";
}

// sidenav close

function closeNav(e) {
  sideNav.style.width = "0";
}

// window

