let menuBarsIcon = document.querySelector("#menu-icon");
let xMarkIcon = document.querySelector("#x-nav-icon");
let nav = document.querySelector("#nav");

menuBarsIcon.addEventListener("click", (e) => {
  menuBarsIcon.style.display = "none";
  xMarkIcon.style.display = "flex";
  nav.style.display = "flex";
  e.preventDefault();
});

xMarkIcon.addEventListener("click", (e) => {
  menuBarsIcon.style.display = "flex";
  xMarkIcon.style.display = "none";
  nav.style.display = "none";
  e.preventDefault();
});