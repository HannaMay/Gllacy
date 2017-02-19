var comlink=document.querySelector(".communication-form__link");
var popup = document.querySelector(".input");
var close = popup.querySelector(".button--close");
var shadow=document.querySelector(".shadow");


comlink.addEventListener("click", function(even){
  event.preventDefault();
  shadow.classList.add("shadow-show");
  popup.classList.add("input-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("input-show");
  shadow.classList.remove("shadow-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("input-show")) {
      popup.classList.remove("input-show");
      shadow.classList.remove("shadow-show");
    }
  }
});
