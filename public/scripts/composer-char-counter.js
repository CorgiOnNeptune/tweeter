$(document).ready(function() {
  $('#new-tweet-text').on('input', function () {   
    const counter = $('.counter');
    const tweetLength = $(this).val().length;
    let counterLength = 140 - tweetLength;

    if (counterLength < 0) {
      counter.addClass('negative-char');
    }

    if (counterLength >= 0) {
      counter.removeClass('negative-char');
    }

    counter.val(counterLength);
  })
});