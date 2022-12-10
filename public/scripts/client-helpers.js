// AJAX POST new tweet to '/tweets'
const submitNewTweet = (element) => {
  const $form = $(element);
  const $error = $('.tweet-error');
  const $input = $form.find('textarea');

  // handleError function located in '/helpers.js'
  handleErrorHTML($input.val().length > 140, $error, 'Your message is toolong');
  handleErrorHTML(!$input.val(), $error, 'You did not enter a message');

  $.post('/tweets', $form.serialize())
    .then(() => {
      $form[0].reset();
      loadTweets();
      $error.slideUp('slow');
      animateNewTweetForm();
    });
};


// AJAX GET tweets from server '/tweets'
const loadTweets = () => {
  $.get('/tweets')
    .then((data) => {
      renderTweets(data);
      solidIcons();
    });
};


// Render all the tweet elements within the servers data.
const renderTweets = function(tweets) {
  const $tweetContainer = $('#tweets-container');

  // Empty to prevent duplicate tweets
  $tweetContainer.empty();
  
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $tweetContainer.prepend($tweet);
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