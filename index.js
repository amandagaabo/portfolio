function startApp() {
  //toggle responsive class when mobil nav icon is clicked
  function handleNavIconClick() {
    $('#nav-icon').click(function() {
      $('#myTopnav').toggleClass("show-menu");
    })
  };

  function handleNavLinkClick() {
    $('#myTopnav').on('click', '.nav-link', function() {
      // get current nav
      const currentNav = $(this);

      // if mobile and drop down menu is shown then hide the top menu on click
      if ($('#myTopnav').hasClass('show-menu')) {
        $('#myTopnav').removeClass('show-menu');
      }

      // nice scroll to the path in the link
      const path = $(this).attr('href');
      $.scrollTo($(`${path}`), {
        axis: 'y',
        duration: 1000,
        specialEasing: {
          width: 'linear',
          height: 'easeInOutSine'
        }
      });
    })
  };

  function handleNavSize() {
    $(document).on("scroll", function() {
    	if($(document).scrollTop() > 100) {
    		$(".topnav").removeClass("large-nav").addClass("small-nav");
    	} else {
    		$(".topnav").removeClass("small-nav").addClass("large-nav");
    	}
    });
  };

  handleNavIconClick();
  handleNavLinkClick();
  handleNavSize();

};

$(startApp);
