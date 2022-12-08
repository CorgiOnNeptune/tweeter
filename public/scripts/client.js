/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  // AJAX POST new tweet to '/tweets'
  $('#tweet-form').submit(function(event) {
    event.preventDefault();

    const $form = $(this);
    const url = $form.attr('action');
    let inputText = $form.children($('textarea')).val();

    if (inputText.length > 140) {
      return alert('Your message is too long!');
    }

    if (!inputText) {
      return alert('No message entered.');
    }

    $.ajax({
      method: 'POST',
      data: $form.serialize(),
      url,
    })
      .then(() => {
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
  const timestamp = timeago.format(tweet.createdAt);
  const $tweet = $(`<article>`, { class: 'tweet' });

  // Create 'header' elements of the tweet card
  const $header = $(`<header>`);
  const $tweetInfo = $(`<div class="tweet-info"><p>${tweet.user.name}</p></div>`);
  const $tweetAvatar = $('<img>', {
    class: "tweet-avatar",
    src: tweet.user.avatars
  });
  const $tweetHandle = $(`<div class="tweet-handle"><p>${tweet.user.handle}</p></div>`);

  const $body = $(`<div class="tweet-body"><p>${tweet.content.text}</p></div>`);

  // Create 'footer' elements of the tweet card
  const $footer = $(`<footer>`);
  const $timestamp = $(`<p>${timestamp}</p>`);
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