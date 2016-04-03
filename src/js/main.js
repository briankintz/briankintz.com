window.onbeforeunload = function() { window.scrollTo(0,0); }

window.onload = function() {
  var waypoint1 = new Waypoint({
    element: document.getElementById('row-work-1'),
    handler: waypointIn,
    offset: '90%'
  });

  var waypoint1 = new Waypoint({
    element: document.getElementById('row-work-2'),
    handler: waypointIn,
    offset: '90%'
  });

  var waypoint1 = new Waypoint({
    element: document.getElementById('row-work-3'),
    handler: waypointIn,
    offset: '90%'
  });
}

function waypointIn() {
  this.element.className += " in"
  this.destroy();
}