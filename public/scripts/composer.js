$(document).ready(function () {
  $('#new-tweet-text').on('input', function () {
    const $counter = $('.counter');
    const tweetLength = $(this).val().length;
    const counterLength = 140 - tweetLength;

    $counter.toggleClass('red-text', counterLength < 0);
    $counter.val(counterLength);
  });

  $(window).scroll(function () {
    const scrollHeight = $('nav').height() * 3;
    const scrollButton = $('.scroll-top-button');
    const navButton = $('.nav-col-2');

    if (($(this)).scrollTop() >= scrollHeight) {
      navButton.fadeOut();
      return scrollButton.fadeIn();
    }

    if (($(this)).scrollTop() < scrollHeight) {
      navButton.fadeIn();
      return scrollButton.fadeOut();
    }
  });
  
  $('.scroll-top-button').click(function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!$('.new-tweet').is(':visible')) {
      animateNewTweetForm();
    }
  });
});
