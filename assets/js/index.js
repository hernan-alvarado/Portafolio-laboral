
const proyectosSwiper = new Swiper(".proyectosSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 1,
            spaceBetween: 30
        }
    }
});


const certificacionesSwiper = new Swiper(".certificacionesSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 30
        }
    }
});