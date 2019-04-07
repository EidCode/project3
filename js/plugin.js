/*global $, console */
$(function () {
    "use strict";
    $(window).scroll(function () {
        window.console.log($('.navbar').height());
        window.console.log($(window).scrollTop());
        var navbar = $('.navbar');
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });
    
    $("input").focus(function () {
        $(this).attr("placeholder", "");
        
        
    });
    $("input").blur(function () {
        $(".header form input:first-child").attr("placeholder", "@email");
        $(".header form input:nth-child(2)").attr("placeholder", "password");
        $(".header form input:nth-child(3)").attr("placeholder", "notes");
    });
    

    $('.header').height($(window).height());
    $('.overlay').height($(window).height());

    $(window).on("resize", function () {
        $('.header').height($(window).height());
        $('.overlay').height($(window).height());
    });
    $("html").niceScroll({
        cursorcolor: 'rgba(42, 20, 24, 0.9)',
        cursorwidth: '6px',
        cursorborder: '#232323'
    });
    
    $(".tabs-section li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        console.log($(this).data('class'));
        $(".tabs-section .tabs-content > div").hide();
        $('.' + $(this).data('class')).fadeIn(1000);
    });
    
});