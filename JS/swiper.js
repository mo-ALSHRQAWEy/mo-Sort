var swiper = new Swiper(".slide-swp", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests: true,
      clickable:true
    },
    autoplay:{
        delay:2500,
    },
    loop:true
  });


  /* swiper slide products */
var swiper = new Swiper(".slide_product", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    speed: 1200,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        1200: { slidesPerView: 5 },
        1000: { slidesPerView: 4 },
        700: { slidesPerView: 3 },
        500: { slidesPerView: 2 },
        0: { slidesPerView: 1 }
    }
});






