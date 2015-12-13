/* global $ */

$('.row-affix, .nav-affix').affix({
    offset: {
        top: function() { return $('.container-cover').outerHeight(); }
    }
});

$('.row-affix').on('affix.bs.affix', function() {
  $('.col-content').addClass('affix-sibling');
});

$('.row-affix').on('affix-top.bs.affix', function() {
  $('.col-content').removeClass('affix-sibling');
});