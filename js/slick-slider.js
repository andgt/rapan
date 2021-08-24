window.$ = jQuery;
window.jQuery = jQuery;

$(document).ready(function() {
  $('.slider__card-gallery').slick({
    arrows: true,
    slidesToShow: 1,
    speed: 1000,
    dots: false,
    autoplay: false,
    initialSlide: 1,
    centerMode: true,
    variableWidth: true,
  });
});
