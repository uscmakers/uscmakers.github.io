$( "#aboutButton" ).click(function() {
  $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});

$( "#eboardButton" ).click(function() {
  $('html,body').animate({
        scrollTop: $("#eboard").offset().top},
        'slow');
});

// $( "#homeButton" ).click(function() {
//   $('html,body').animate({
//         scrollTop: $("body").offset().top},
//         'slow');
// });