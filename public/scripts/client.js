/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  loadTweets();

  $('#tweet-form').on('submit', function(event) {
    event.preventDefault();
    submitNewTweet(this);
  });

  // Animates new tweet form when accessing it via the nav button
  $('.nav-col-2').on('click', () => animateNewTweetForm());

  // Animate the character counter for the new tweet form
  $('#new-tweet-text').on('input', function() {
    charCounter(this);
  });

  // Animate in/out for the scroll-top button and nav 'write-new-tweet' based on user's position on page
  $(window).on('scroll', function() {
    animateScrollButton(this);
  });

  // Upon clicking the scroll-top button, smooth scroll animation to top and open tweet form if it is closed
  $('.scroll-top-button').on('click', () => scrollPage());
});