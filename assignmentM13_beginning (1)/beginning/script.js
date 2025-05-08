$(document).ready(function () {
  // Accordion
  $('.accordion-title').click(function () {
    $('.accordion-content').not($(this).next()).slideUp(); 
    $(this).next('.accordion-content').slideToggle();
  });

  // Modal
  $(".open-modal").on("click", function () {
    var targetModal = $(this).data("target");
    $("#" + targetModal).fadeIn();
  });

  $(".close-btn, .close").on("click", function () {
    $(this).closest(".modal").fadeOut();
  });

  $(window).on("click", function (e) {
    if ($(e.target).hasClass("modal")) {
      $(e.target).fadeOut();
    }
  });

  // Back to Top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#backToTop').fadeIn();
    } else {
      $('#backToTop').fadeOut();
    }
  });

  $('#backToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
  });
});