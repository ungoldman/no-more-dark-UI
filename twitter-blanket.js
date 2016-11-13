$(function() {

  coverMeLikeABlanket = function() {
    $(".dashboard-left").hide();
    $(".dashboard-right").hide();
    $(".moments").hide();
  };

  coverMeLikeABlanket();

  $(window).on('hashchange',function(){ 
    coverMeLikeABlanket();
  });

});
