window.onload = () => {
  var newSwiper = new Swiper(".swiper-new-container", {
    slidesPerView: 5,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-new-pagination",
      clickable: true,
    },
  });
};
