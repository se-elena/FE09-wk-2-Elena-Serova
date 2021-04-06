$(document).ready(function(){
  $('.slider-photo').slick({
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    slidesToShow:1,
    slidesToScroll: 1,
    speed: 3000,
    easing: 'ease',
    infinfte: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 800,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchThreshold: 5,
    touchMove: true,
    waitForAnimate: false,
    centerMode: false,
    variableWidth: false,
    rows: 1,
    slidesPerRow: 1,
    vertical: false,
    fade: true,
    asNavFor:".slider-text"
  });
  $('.slider-text').slick({
    arrows: false,
    dots: true,
    fade: true,
    speed: 3000,
    infinfte: true,
    asNavFor:".slider-photo"
  });
});