$(document).ready(function() {

  $(".nav-work").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#footer").offset().top
    }, 700);
  });
  $(".nav-work-index").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#monthly-recap").offset().top
    }, 500);
  });

})
