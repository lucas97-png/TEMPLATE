// MAP GOOGLE API
function initMap() {

    const wroclove = {
        lat: 51.107883,
        lng: 17.038538
    };

    const map = new google.maps.Map(document.querySelector(".map__wrapper"), {
        zoom: 15,
        center: wroclove,
    });

    const marker = new google.maps.Marker({
        position: wroclove,
        map: map,
    });
}

// SCROLL TO FOOTER
let btn = document.querySelector('#scroll');

let el = document.querySelector("footer");

btn.addEventListener('click', function () {
    el.scrollIntoView(false);
});

//HAMBURGER

const burgerIcon = document.querySelector('.nav__activator');

burgerIcon.addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('collapse-active');
    burgerIcon.classList.toggle('collapse-active');
})