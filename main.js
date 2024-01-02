const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    loop: true,
    pagination: {
      el: ".swiper-pagination"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
