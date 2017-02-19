
var inputserch = document.querySelector(".search__input");
var labelserch = document.querySelector(".search__input-label");
var inputlog = document.querySelector(".login-form__inputlog");
var labellog = document.querySelector(".login-form__input-labellog");
var inputpas = document.querySelector(".login-form__inputpas");
var labelpas = document.querySelector(".login-form__input-labelpas");

inputserch.addEventListener("focus", function() {
  labelserch.classList.toggle("animation");
});
inputserch.addEventListener("blur", function() {
  labelserch.classList.toggle("animation");
})

inputlog.addEventListener("focus", function() {
  labellog.classList.toggle("animation");
});
inputlog.addEventListener("blur", function() {
  labellog.classList.toggle("animation");
})

inputpas.addEventListener("focus", function() {
  labelpas.classList.toggle("animation");
});
inputpas.addEventListener("blur", function() {
  labelpas.classList.toggle("animation");
})
