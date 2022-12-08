/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  // AJAX POST new tweet to '/tweets'
  $('#tweet-form').submit(function(event) {
    event.preventDefault();

    const $form = $(this);
    const $error = $('.tweet-error');
    const url = $form.attr('action');
    let inputText = $form.children($('textarea')).val();

    handleError(inputText.length > 140, $error, 'Your message is too long');
    handleError(!inputText, $error, 'You did not enter a message');

    $.ajax({
      method: 'POST',
      data: $form.serialize(),
      url,
    })
      .then(() => {
        $error.slideUp('slow');
        $(this).each(function () {
          this.reset();
        });
        loadTweets();
      
      })
      .catch((err) => {
        console.log('error', err);
      })
  });

  // AJAX GET tweets from server '/tweets'
  const loadTweets = () => {
    $.ajax({
      method: 'GET',
      url: '/tweets'
    })
      .then((data) => {
        renderTweets(data);
        solidIcons();
      })

      .catch((err) => {
        console.log('error ➡️ ', err);
    })
  }

  loadTweets();
});

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    let $tweet = createTweetElement(tweet);

    $('#tweets-container').prepend($tweet);
  }
};

const createTweetElement = function (tweet) {
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

const solidIcons = () => {
  $('.tweet-interaction-icons').children().each(function() {
    $(this).hover(function() {
      $(this).addClass('fa-solid');
    }, function() {
      $(this).removeClass('fa-solid');
    })
  });
}

const handleError = (boolean, element, msg) => {
  if (!boolean) {
    return;
  }
  const warningIcon = '<i class="fa-solid fa-triangle-exclamation"></i>';

  element.hide();
  element.html(`${warningIcon} ${msg} ${warningIcon}`);
  return element.slideDown('slow');
}