/*global jQuery */

(function ($) {
  "use strict";

  function scrollTo (eles, opts) {
    if (!$(eles).length) { return; }
    opts = opts || {};
    opts.duration = opts.duration || 600;
    opts.easing = opts.easing || 'swing';
    $('html,body').delay(100).animate({
      easing: opts.easing,
      scrollTop: $(eles).offset().top - $('#header').outerHeight(true)
    }, opts.duration);
  }

  function getRandomIntFromInterval (min, max) {
    return Math.floor(Math.random() * (max - min + 1) +min);
  }

  var Nav = {
    open: function () {
      $('body').addClass('nav-open');
    },
    close: function () {
      $('body').removeClass('nav-open');
    }
  };

  $(document).ready(function () {
    var $body = $('body').on('click', function () {
      Nav.close();
    }),
      randomNumber = getRandomIntFromInterval(1, 5),
      path = 'dist/img/carousel/',
      src = path + 'hero_' + randomNumber + '.jpg';

    $('#hero').css('background-image', 'url("' + src + '")');

    /*
    $('.carousel').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: false,
      speed: 1000
    });
    */

    $('#hamburger').on('click', function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      if ($body.hasClass('nav-open')) {
        Nav.close();
      } else {
        Nav.open();
      }
    });

    $('#nav').on('click', function (ev) {
      ev.stopPropagation();
    });

    $('#nav .nav').on('click', function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      Nav.close();
    });

    $('.nav').on('click', function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      scrollTo($(this).attr('href'), {
        easing: 'easeOutCubic'
      });
    });

  });

}(jQuery));