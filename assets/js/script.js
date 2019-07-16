$(document).ready(function () {

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $(".header").addClass("header-opacity");
    } else {
      $("header").removeClass("header-opacity");
    }
  });

  AOS.init();

});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2000,
  navText: false,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 4
    },
    992: {
      items: 7
    }
  }
})