/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  // AJAX Form submission
  $('#tweet-form').submit(function(event) {
    event.preventDefault();

    const $form = $(this);
    const url = $form.attr('action');

    $.ajax({
      method: 'POST',
      data: $form.serialize(),
      url,
    })
    //TODO Use this?
      .then((data) => {
        console.log('data ➡️ ', data);
      
      })
      .catch((err) => {
        console.log('error', err);
      })
  });

  const loadTweets = () => {
    $.ajax({
      method: 'GET',
      url: '/tweets'
    })
      .then((data) => {
        console.log('data', data);
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

    $('#tweets-container').append($tweet);
  }
};

const createTweetElement = function (tweet) {
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
  const $timestamp = $(`<p>${tweet.createdAt}</p>`);
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