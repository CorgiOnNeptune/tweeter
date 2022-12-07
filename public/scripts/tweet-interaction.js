$(document).ready(function() {
  $('.tweet-interaction-icons').children().each(function() {
    $(this).hover(function() {
      $(this).addClass('fa-solid');
    }, function() {
      $(this).removeClass('fa-solid');
    })
  });
});