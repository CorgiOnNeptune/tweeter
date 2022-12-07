$(document).ready(function() {
  $('#new-tweet-text').on('input', function() {   
    const $counter = $('.counter');
    const tweetLength = $(this).val().length;
    const counterLength = 140 - tweetLength;

    $counter.toggleClass('red-text', counterLength < 0);
    $counter.val(counterLength);
  })
});