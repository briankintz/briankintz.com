/* global $ */

$('#affix-target-header, #affix-target-nav').affix({
    offset: {
        top: function() { return $('.container-cover').outerHeight(); }
    }
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var coverBottom = $('.container-cover').outerHeight();

  if (scroll < coverBottom) {
    var o = (coverBottom - scroll + 50) / coverBottom;

    $('.container-cover').css({
      'opacity': o*o*o
    });

  } else if (window.matchMedia('(min-width: 992px)').matches) {
    var about = $('#about');
    var aboutTop = about.offset().top - 50;
    var aboutBottom = aboutTop + about.outerHeight();

    var work = $('#work');
    var workTop = work.offset().top + 50;
    var workBottom = workTop + work.outerHeight();

    var play = $('#play');

    if (scroll > aboutTop && scroll < aboutBottom) {
      var o = (aboutBottom - scroll) / (aboutBottom - aboutTop);
      var factor = o*o*o;

      about.css('opacity', factor);
      work.css('opacity', 1 - factor);
      play.css('opacity', 0);
    } else if (scroll > workTop && scroll < workBottom) {
      var o = (workBottom - scroll) / (workBottom - workTop);
      var factor = o*o*o;

      about.css('opacity', 0);
      work.css('opacity', factor);
      play.css('opacity', 1 - factor);
    }
  } else {
    $('.row-content').css('opacity', 1);
  }
});