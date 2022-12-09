// Render all the tweet elements within the servers data.
const renderTweets = function (tweets) {
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);

    $('#tweets-container').prepend($tweet);
  }
};

const createTweetElement = function(tweet) {
  const timePosted = timeago.format(tweet.createdAt);
  const $tweet = $(`<article>`, { class: 'tweet' });

  // Create 'header' elements of the tweet card
  const $header = $(`<header>`);
  const $tweetInfo = $(`<div class="tweet-info">`);
  $(`<p>`).text(tweet.user.name).appendTo($tweetInfo);
  const $tweetAvatar = $('<img>', {
    class: "tweet-avatar",
    src: tweet.user.avatars
  });
  const $tweetHandle = $(`<div class="tweet-handle"><p>${tweet.user.handle}</p></div>`);

  const $body = $(`<div class="tweet-body">`);
  $(`<p>`).text(tweet.content.text).appendTo($body);

  // Create 'footer' elements of the tweet card
  const $footer = $(`<footer>`);
  const $timestamp = $(`<p>${timePosted}</p>`);
  const $icons = $(
    `<div class="tweet-interaction-icons">
    <i class="fa-regular fa-flag"></i>
    <i class="fa-regular fa-share-from-square"></i>
    <i class="fa-regular fa-heart"></i>
    </div>`
  );

  $tweetInfo.prepend($tweetAvatar);
  $header.append($tweetInfo, $tweetHandle);
  $footer.append($timestamp, $icons);
  $tweet.append($header, $body, $footer);

  return $tweet;
};

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