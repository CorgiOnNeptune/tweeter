$(document).ready(function() {
  $('.tweet').hover(function() {
    $(this).addClass('box-shadow');
  }, function() {
    $(this).removeClass('box-shadow');
  });

  $('.tweet-interaction-icons').children().each(function() {
    $(this).hover(function() {
      $(this).addClass('fa-solid');
    }, function() {
      $(this).removeClass('fa-solid');
    })
  });
});