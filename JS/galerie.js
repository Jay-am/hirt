// Swiper Configuration
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1.75,
  spaceBetween: 2.5,
  centeredSlides: true,
  freeMode: true,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    500: {
      slidesPerView: 1
    },
    900: {
      slidesPerView: 1.75
    }
  }
});
