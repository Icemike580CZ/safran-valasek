/* Image Slider - Swiper */
var imageSlider = new Swiper('.image-slider', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        //pauseOnMouseEnter: true
    },
    speed: 700,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 4,
    rewind: true,
    zoom: false,
    //simulateTouch: false,
    breakpoints: {
        // when window is <= 580px
        580: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window is <= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window is <= 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window is <= 1200px
        1200: {
            slidesPerView: 4,
            spaceBetween: 20
        },
    }
});

window.addEventListener("DOMContentLoaded", () => {
    let elements = document.getElementsByClassName("image-slider");
    for (let i = 0; i < elements.length; i++) {
        let element = elements.item(i);
        element.addEventListener("mouseover", (ev) => {
            ev.preventDefault();
            imageSlider.autoplay.pause();
            console.log("OVER! [" + imageSlider.autoplay.running + "," + imageSlider.autoplay.paused + "]");
            imageSlider.autoplay.running = false;
            imageSlider.autoplay.paused = false;
        });

        element.addEventListener("mouseout", (ev) => {
            ev.preventDefault();
            imageSlider.autoplay.run();
            console.log("OUT! [" + imageSlider.autoplay.running + "," + imageSlider.autoplay.paused + "]");
            imageSlider.autoplay.running = true;
            imageSlider.autoplay.paused = false;
        });
    };
});
