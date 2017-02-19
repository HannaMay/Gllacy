var inputn = document.querySelector(".input-block__input-name");
var labeln = document.querySelector(".input-block__label-name");
var inputp = document.querySelector(".input-block__input-post");
var labelp = document.querySelector(".input-block__label-post");
var inputc = document.querySelector(".input-block__input-comment");
var labelc = document.querySelector(".input-block__label-comment");
var inputpost = document.querySelector(".post__input");
var labelpost = document.querySelector(".post__input-label");
var inputserch = document.querySelector(".search__input");
var labelserch = document.querySelector(".search__input-label");
var inputlog = document.querySelector(".login-form__inputlog");
var labellog = document.querySelector(".login-form__input-labellog");
var inputpas = document.querySelector(".login-form__inputpas");
var labelpas = document.querySelector(".login-form__input-labelpas");

inputn.addEventListener("focus", function() {
  labeln.classList.toggle("animation");
});
inputn.addEventListener("blur", function() {
  labeln.classList.toggle("animation");
})

inputp.addEventListener("focus", function() {
  labelp.classList.toggle("animation");
});
inputp.addEventListener("blur", function() {
  labelp.classList.toggle("animation");
})

inputc.addEventListener("focus", function() {
  labelc.classList.toggle("animation");
});
inputc.addEventListener("blur", function() {
  labelc.classList.toggle("animation");
})

inputpost.addEventListener("focus", function() {
  labelpost.classList.toggle("animation");
});
inputpost.addEventListener("blur", function() {
  labelpost.classList.toggle("animation");
})

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
