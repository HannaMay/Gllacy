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
  inputn.setAttribute("placeholder", "");
});
inputn.addEventListener("blur", function() {
  labeln.classList.toggle("animation");
  inputn.setAttribute("placeholder", "Как вас зовут?")
})

inputp.addEventListener("focus", function() {
  labelp.classList.toggle("animation");
  inputp.setAttribute("placeholder", "");
});
inputp.addEventListener("blur", function() {
  labelp.classList.toggle("animation");
  inputp.setAttribute("placeholder", "Ваша почта для ответа")
})

inputc.addEventListener("focus", function() {
  labelc.classList.toggle("animation");
  inputc.setAttribute("placeholder", "");
});
inputc.addEventListener("blur", function() {
  labelc.classList.toggle("animation");
  inputc.setAttribute("placeholder", "Напишите что-нибудь...")
})

inputpost.addEventListener("focus", function() {
  labelpost.classList.toggle("animation");
  inputpost.setAttribute("placeholder", "");
});
inputpost.addEventListener("blur", function() {
  labelpost.classList.toggle("animation");
  inputpost.setAttribute("placeholder", "Электронная почта")
})

inputserch.addEventListener("focus", function() {
  labelserch.classList.toggle("animation");
  inputserch.setAttribute("placeholder", "");
});
inputserch.addEventListener("blur", function() {
  labelserch.classList.toggle("animation");
  inputserch.setAttribute("placeholder", "Что ищем?")
})

inputlog.addEventListener("focus", function() {
  labellog.classList.toggle("animation");
  inputlog.setAttribute("placeholder", "");
});
inputlog.addEventListener("blur", function() {
  labellog.classList.toggle("animation");
  inputlog.setAttribute("placeholder", "Электронная почта")
})

inputpas.addEventListener("focus", function() {
  labelpas.classList.toggle("animation");
  inputpas.setAttribute("placeholder", "");
});
inputpas.addEventListener("blur", function() {
  labelpas.classList.toggle("animation");
  inputpas.setAttribute("placeholder", "Пароль")
})
