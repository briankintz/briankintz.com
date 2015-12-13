/* global $ */

$('#affix-target-header, #affix-target-nav').affix({
    offset: {
        top: function() { return $('.container-cover').outerHeight(); }
    }
});