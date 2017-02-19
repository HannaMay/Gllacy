
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

var inputn = document.querySelector(".input-block__input-name");
var labeln = document.querySelector(".input-block__label-name");
var inputp = document.querySelector(".input-block__input-post");
var labelp = document.querySelector(".input-block__label-post");
var inputc = document.querySelector(".input-block__input-comment");
var labelc = document.querySelector(".input-block__label-comment");
var inputpost = document.querySelector(".post__input");
var labelpost = document.querySelector(".post__input-label");

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

var comlink = document.querySelector(".communication-form__link");
var popup = document.querySelector(".input");
var close = popup.querySelector(".button--close");
var shadow = document.querySelector(".shadow");

comlink.addEventListener("click", function(event){
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

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.9387, 30.327],
            zoom: 16,
            controls: []
        },
        {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/pin-shadow.png',
            iconImageSize: [218, 142],
            iconImageOffset: [-235, -130]
        });

    myMap.geoObjects.add(myPlacemark);
});
