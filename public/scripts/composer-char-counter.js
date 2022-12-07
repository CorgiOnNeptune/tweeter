$(document).ready(function() {
  $('#new-tweet-text').on('input', function () {   
    const counter = $('.counter');
    const tweetLength = $(this).val().length;
    const counterLength = 140 - tweetLength;

    if (counterLength < 0) {
      counter.addClass('red-text');
    }

    if (counterLength >= 0) {
      counter.removeClass('red-text');
    }

    counter.val(counterLength);
  })
});