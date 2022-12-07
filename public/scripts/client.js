/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  renderTweets(tempData);
});

const renderTweets = function (tweets) {
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


// Temporary test data. TODO - Get from server.
const tempData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders ofgiants"
    },
    "createdAt": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "createdAt": 1461113959088
  }
];