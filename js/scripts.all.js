(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function(){
    $('.mainslider_box').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
  autoplaySpeed: 2000,
        fade: true,
        arrows: false,
        dots: true
      });
      $('.info_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true
        autoplay: true,
  autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        prevArrow: '.info_slider_box .arrows .prev',
        nextArrow: '.info_slider_box .arrows .next'
      });

      $('.burger').on('click',function(){
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
          $('body').css('overflow-y', 'hidden');
        } else $('body').css('overflow-y', 'scroll');
        $('header .holder nav').toggleClass('active');
      });
      $('.subitem').on('click',function(){
        $(this).find('.sub').slideToggle();
      });


      $('.input .inputit').on('blur', function(){
        if($(this).val().length > 0){
            $(this).parent().find('label').addClass('active');
        } else $(this).parent().find('label').removeClass('active');
    });
      
});
},{}]},{},[1]);
