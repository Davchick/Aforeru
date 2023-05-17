const burgerMenu = document.querySelector(".burger__menu");
const navigationMenu = document.querySelector(".header__nav");
const background = document.querySelector(".overlay");
const body = document.querySelector("body");

if (burgerMenu) {
  burgerMenu.addEventListener("click", function (e) {
    background.classList.toggle("active");
    burgerMenu.classList.toggle("active");
    navigationMenu.classList.toggle("active");
    body.classList.toggle("lock");
  });
}

background.addEventListener("click", function (e) {
  background.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  navigationMenu.classList.toggle("active");
  body.classList.toggle("lock");
});
