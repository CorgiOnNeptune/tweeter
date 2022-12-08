const solidIcons = () => {
  $('.tweet-interaction-icons').children().each(function() {
    $(this).hover(function() {
      $(this).addClass('fa-solid');
    }, function() {
      $(this).removeClass('fa-solid');
    });
  });
};


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


const animateNewTweetForm = () => {
  const $newTweet = $('.new-tweet');
  if ($newTweet.is(':visible')) {
    $('.tweet-error').slideUp('slow');
    return $newTweet.slideUp('slow');
  }

  if (!$newTweet.is(':visible')) {
    $newTweet.slideDown({
      duration: 'slow',
      start: function () {
        $newTweet.css('display', 'flex');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      complete: function () {
        $('#new-tweet-text').focus();
      }
    });
  }
};