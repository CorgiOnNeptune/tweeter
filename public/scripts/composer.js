// Animate the character counter for the new tweet form
const charCounter = (element) => {
  const $counter = $('.counter');
  const tweetLength = $(element).val().length;
  const counterLength = 140 - tweetLength;

  $counter.toggleClass('red-text', counterLength < 0);
  $counter.val(counterLength);
};

// Animate in/out for the scroll-top button and nav 'write-new-tweet' based on user's position on page
const animateScrollButton = (element) => {
  const $window = $(element);
  const $navButton = $('.nav-col-2');
  const $scrollButton = $('.scroll-top-button');
  const scrollHeight = $('nav').height() * 3;

  if ($window.scrollTop() >= scrollHeight) {
    $navButton.fadeOut();
    return $scrollButton.fadeIn();
  }

  if ($window.scrollTop() < scrollHeight) {
    $navButton.fadeIn();
    return $scrollButton.fadeOut();
  }
};

// Smooth scroll animation to top of page
const scrollPage = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!$('.new-tweet').is(':visible')) {
    animateNewTweetForm();
  }
};