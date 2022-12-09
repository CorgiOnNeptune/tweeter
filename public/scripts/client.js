/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  
  $('.nav-col-2').click(function() {
    // animate function located in '/helpers.js'
    animateNewTweetForm();
  });

  // AJAX POST new tweet to '/tweets'
  $('#tweet-form').submit(function(event) {
    event.preventDefault();

    const $form = $(this);
    const $error = $('.tweet-error');
    const url = $form.attr('action');
    const inputText = $form.children($('textarea')).val();

    // handleError function located in '/helpers.js'
    handleErrorHTML(inputText.length > 140, $error, 'Your message is too long');
    handleErrorHTML(!inputText, $error, 'You did not enter a message');

    $.ajax({
      method: 'POST',
      data: $form.serialize(),
      url,
    })
      .then(() => {
        $error.slideUp('slow');
        $(this).each(function() {
          this.reset();
        });
        animateNewTweetForm();
        loadTweets();
      })

      .catch((err) => {
        console.log('error', err);
      });
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
      });
  };

  loadTweets();
});