(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function(){
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
});

function actionToggle() {
  $('.action').toggleClass('sl-active')
}