var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    speed: 0,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-nav__list');
let menuLinks = menu.querySelectorAll('.header-item__link');
let main = document.querySelector('.main');

burger.addEventListener('click',

    function () {
        burger.classList.toggle('burger--active');
        menu.classList.toggle('header-nav__list--active');
        document.body.classList.toggle('stop-scroll');
        main.classList.toggle('blur');
    })

menuLinks.forEach(function (el) {

    el.addEventListener('click', function () {
        burger.classList.remove('burger--active');
        menu.classList.remove('header-nav__list--active');
        document.body.classList.remove('stop-scroll')
        main.classList.remove('blur')
    })
})
