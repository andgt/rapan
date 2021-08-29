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

$(".slider__card-gallery").on("afterChange", function(event, slick, currentSlide, nextSlide){
  $(".slider__current-count").text(currentSlide + 1);
});

$('.menu__gallery').slick({
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 320,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
        }
    },
    {
      breakpoint: 768,
        settings: "unslick"
    },
  ]
});

$(window).resize(function() {
  if (window.innerWidth < 768) {
    $('.menu__gallery').not('.slick-initialized').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000
    })
  } else {
      $('.menu__gallery').slick('unslick');
    }
});
