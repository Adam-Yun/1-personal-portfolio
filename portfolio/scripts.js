$(function() {
    $('#A-Y').hover(function() {
      $('#Adam-Yun').css('background-color', 'yellow');
    }, function() {
      // on mouseout, reset the background colour
      $('#Adam-Yun').css('background-color', '');
    });
  });