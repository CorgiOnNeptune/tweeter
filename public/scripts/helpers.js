// Function targets each icon child in the tweet article footers to fill the icons in with solid color.
const solidIcons = () => {
  $('.tweet-interaction-icons').children().each(function() {
    $(this).hover(function() {
      $(this).addClass('fa-solid');
    }, function() {
      $(this).removeClass('fa-solid');
    });
  });
};

// Function sends an HTML animated error when new tweet input isn't good
const handleErrorHTML = (boolean, element, msg) => {
  if (!boolean) {
    return;
  }
  const warningIcon = '<i class="fa-solid fa-triangle-exclamation"></i>';

  element.hide();
  element.html(`${warningIcon} ${msg} ${warningIcon}`);
  element.slideDown('slow');

  const error = new Error(msg);
  error.code = 400;
  throw error;
};

// Animates new tweet form when accessing it via either the header button or scroll to top button
const animateNewTweetForm = () => {
  const $newTweet = $('.new-tweet');
  if ($newTweet.is(':visible')) {
    $('.tweet-error').slideUp('slow');
    return $newTweet.slideUp('slow');
  }

  if (!$newTweet.is(':visible')) {
    $newTweet.slideDown({
      duration: 'slow',
      start: function() {
        $newTweet.css('display', 'flex');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      complete: function() {
        $('#new-tweet-text').focus();
      }
    });
  }
};