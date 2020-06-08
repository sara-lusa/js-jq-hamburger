// Evento click per far apparire l'hamburger-menu
$('.header-right > a').click(
  function() {
    $('.hamburger-menu').addClass('active');
  }
);

// Evento click per far scomparire l'hamburger menu
$('a.close').click(
  function() {
    $('.hamburger-menu').removeClass('active');
  }
);
