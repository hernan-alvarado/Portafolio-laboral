
document.addEventListener('DOMContentLoaded', function() {
    const text = "¡Hola! Soy Hernán Alvarado.//Desarrollador FullStack JavaScript//Especializado en aplicaciones modernas//+2 años de experiencia"; 
    const element = document.getElementById('typewriter');
    const phrases = text.split('//');
    let i = 0;
    let j = 0;
    let currentPhrase = [];
    
    function typeWriter() {
        if (i < phrases.length) {
            if (j < phrases[i].length) {
                currentPhrase.push(phrases[i][j]);
                element.innerHTML = currentPhrase.join('') + '<span class="cursor">|</span>';
                j++;
                setTimeout(typeWriter, 50);
            } else {
                currentPhrase = [];
                element.innerHTML += '<br><br>';
                i++;
                j = 0;
                setTimeout(typeWriter, 1000);
            }
        }
    }
    
    typeWriter();
});

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