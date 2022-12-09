$(document).ready(function() {
  
  // Animate the character counter for the new tweet form
  $('#new-tweet-text').on('input', function() {
    const $counter = $('.counter');
    const tweetLength = $(this).val().length;
    const counterLength = 140 - tweetLength;

    $counter.toggleClass('red-text', counterLength < 0);
    $counter.val(counterLength);
  });

  // Animate in/out for the scroll-top button and nav 'write-new-tweet' based on user's position on page
  $(window).scroll(function() {
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
  
  // Upon clicking the scroll-top button, smooth scroll animation to top and open tweet form if it is closed
  $('.scroll-top-button').click(function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!$('.new-tweet').is(':visible')) {
      animateNewTweetForm();
    }
  });
  
});
