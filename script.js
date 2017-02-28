$( "#aboutButton" ).click(function() {
  $('html,body').animate({
        scrollTop: $("#about").offset().top - 50},
        'slow');
});

$( "#eboardButton" ).click(function() {
  $('html,body').animate({
        scrollTop: $("#eboard").offset().top - 50},
        'slow');
});

$( "#homeButton" ).click(function() {
  $('html,body').animate({
        scrollTop: $("body").offset().top},
        'slow');
});