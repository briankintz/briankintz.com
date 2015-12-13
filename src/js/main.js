/* global $ */

$('#affix-target-header, #affix-target-nav').affix({
    offset: {
        top: function() { return $('.container-cover').outerHeight(); }
    }
});

$(window).scroll(function() {
  var coverH = $('.container-cover').outerHeight();
  var scrollH = $(window).scrollTop();

  if (scrollH < coverH) {
    var o = (coverH - scrollH + 50)/coverH;

    $('.container-cover').css({
      'opacity': o*o*o
    });
  }
});