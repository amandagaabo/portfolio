function startApp() {

  //toggle responsive class when mobil nav icon is clicked
  function handleNavIconClick() {
    $('#nav-icon').click(function() {
      $('#myTopnav').toggleClass("show-menu");
    })
  };

  handleNavIconClick();

  function handleNavLinkClick() {
    $('#myTopnav').on('click', '.link', function() {
      if ($('#myTopnav').hasClass('show-menu')) {
        $('#myTopnav').removeClass("show-menu");
      }
    })
  };

  handleNavLinkClick();

}

$(startApp)
