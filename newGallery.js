window.onload = () => {
  var newSwiper = new Swiper(".swiper-new-container", {
    slidesPerView: 5,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-new-pagination",
      clickable: true,
    },
  });

  const bidPicture = document.getElementById("big-picture");

  const galleryImages = document.querySelectorAll(".swiper-slide img");
  galleryImages.forEach((img, index) => {
    img.onclick = () => {
      bidPicture.src = img.src;
    };
  });
};
