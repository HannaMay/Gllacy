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
