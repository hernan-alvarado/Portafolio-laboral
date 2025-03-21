const proyectosSwiper = new Swiper(".proyectosSwiper", {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            spaceBetween: 40
        }
    }
});

const certificacionesSwiper = new Swiper(".certificacionesSwiper", {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            spaceBetween: 15,
            slidesPerView: 1
        },
        768: {
            spaceBetween: 20,
            slidesPerView: 1
        },
        1024: {
            spaceBetween: 25,
            slidesPerView: 1
        }
    }
});