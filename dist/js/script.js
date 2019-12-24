$(document).ready(function() {

  // jump to footer
  $(".nav-work").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#footer").offset().top
    }, 700);
  });

  // jump to first project
  $(".nav-work-index").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#monthly-recap").offset().top
    }, 500);
  });

  // make fixed nav
  $(window).bind('scroll', function () {
    var x = $('.nav-work').parents('nav')
    if ($(window).scrollTop() > 108) {
        x.addClass('fixed');
    } else {
        x.removeClass('fixed');
    }
  });

})
