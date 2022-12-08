const solidIcons = () => {
  $('.tweet-interaction-icons').children().each(function() {
    $(this).hover(function() {
      $(this).addClass('fa-solid');
    }, function() {
      $(this).removeClass('fa-solid');
    })
  });
}

const handleErrorHTML = (boolean, element, msg) => {
  if (!boolean) {
    return;
  }
  const warningIcon = '<i class="fa-solid fa-triangle-exclamation"></i>';

  element.hide();
  element.html(`${warningIcon} ${msg} ${warningIcon}`);
  return element.slideDown('slow');
}