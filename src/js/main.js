window.onbeforeunload = function() { window.scrollTo(0,0); }

window.onload = function() {
  var cover = document.querySelector('#cover');
  var blur = document.querySelector('#blur');

  var img = new Image();
  img.onload = function() {
    cover.className += ' in';
    blur.className += ' out';

    setTimeout(function(cover) {
      cover.innerHTML = '<span class="animated fadeIn"><span class="fa fa-angle-down animated infinite pulse"></span></span>';
    }, 2500, cover);
  }

  var style = window.getComputedStyle(cover, ':before');
  img.src = style.backgroundImage.slice(4, -1).replace(/"/g, "");

  for (i = 1; i <= 5; i++) {
    new Waypoint({
      element: document.getElementById('row-work-' + i),
      handler: waypointIn,
      offset: '90%'
    });
  }
}

function waypointIn() {
  this.element.className += " in"
  this.destroy();
}