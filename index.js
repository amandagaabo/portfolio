function startApp() {
  // toggle show-menu class when mobile hamburger nav icon is clicked
  function handleNavIconClick() {
    $('#nav-icon').click(() => {
      $('#myTopnav').toggleClass('show-menu');
    });
  }

  function handleNavLinkClick() {
    $('#myTopnav').on('click', '.nav-link', (e) => {
      // if mobile and show-menu is active then hide the top menu on nave link click
      if ($('#myTopnav').hasClass('show-menu')) {
        $('#myTopnav').removeClass('show-menu');
      }

      // nice scroll to the path in the link
      const element = e.target;
      const path = $(element).attr('href') || '';

      $.scrollTo($(path), {
        axis: 'y',
        duration: 1000,
        specialEasing: {
          width: 'linear',
          height: 'easeInOutSine'
        }
      });
    });
  }

  // make the nav bar smaller when the user scrolls down
  function handleNavSize() {
    $(document).on('scroll', () => {
      if ($(document).scrollTop() > 100) {
        $('.topnav').removeClass('large-nav').addClass('small-nav');
      } else {
        $('.topnav').removeClass('small-nav').addClass('large-nav');
      }
    });
  }

  handleNavIconClick();
  handleNavLinkClick();
  handleNavSize();
}

$(startApp);
