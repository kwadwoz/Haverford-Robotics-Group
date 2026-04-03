let carouselSlideIndex = 1;

function showCarouselSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("carousel-dot");
  if (!slides || slides.length === 0) return;
  if (n > slides.length) {carouselSlideIndex = 1}
  if (n < 1) {carouselSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[carouselSlideIndex-1].classList.add("active");
  dots[carouselSlideIndex-1].classList.add("active");
}

function plusSlides(n) {
  showCarouselSlides(carouselSlideIndex += n);
}

function currentSlide(n) {
  showCarouselSlides(carouselSlideIndex = n);
}

document.addEventListener("DOMContentLoaded", function() {
    showCarouselSlides(carouselSlideIndex);
    // Optional: Auto-play the slider every 5 seconds
    setInterval(function() {
      plusSlides(1);
    }, 5000);
});
