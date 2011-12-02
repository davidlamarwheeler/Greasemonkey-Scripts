// ==UserScript==
// @name          Recolor OnTime
// @namespace     http://www.davidlamarwheeler.com/
// @description   Recolors the eye-bleeding awful of OnTime into something a little more reasonable YEAH!
// @include       http://pm.unitymg.com/projects/*
// @include       https://pm.unitymg.com/projects/*
// @include       https://unitymg.ontimenow.com/*
// @require       https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// @version       0.1.2
// ==/UserScript==

(function($) {
  $(document).bind('DOMSubtreeModified', function(e){
    var pclass = 'ontime-color-coding-foreground-priority-';
    $('.' + pclass + '0').removeClass(pclass + '0').css('font-style', 'italic');
    $('.' + pclass + '1').removeClass(pclass + '1').css('color', '#c00');
    $('.' + pclass + '2').removeClass(pclass + '2').css({
      color: '#222'
    });
    $('.' + pclass + '3').removeClass(pclass + '3').css({
      color: '#999'
    });
    $('.ontime-bold-user-items').css('font-weight', 'normal').css('background-color', '#e0e9ff');
  });
})(jQuery);
