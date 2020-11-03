$(document).ready(function() {

    new WOW().init();


    $('#parallaximg').enllax();

    $(window).scroll(function() {
        var sec1 = $(".sec-int-1").position();
        var sec2 = $(".sec-int-2").position();

        var scrollFromTop = $(window).scrollTop();

        if ((scrollFromTop > 0) && (scrollFromTop < sec2.top)) { $(".page-num").html("01"); }
        if (scrollFromTop > sec1.top) { $(".page-num").html("02"); }


    });

    /* Menu */
    $('.menu').on('click', function(e) {

        if ($(".menu-open").hasClass("menu-open-opened")) {
            $(".menu-open").removeClass("menu-open-opened");
            $(".menu").html('<i class="fas fa-bars"></i>');
        } else {
            $(".menu-open").addClass("menu-open-opened");
            $(".menu").html('<i class="fas fa-times"></i>');
        }

        e.preventDefault();
    })

    /* on-scrol */
    var scroller = $('.scroll-down'),
        social = $('.legend'),
        scrollClass = 'on-scroll',
        activateAtY = 20;

    function deactivateScroller() {
        if (!scroller.hasClass(scrollClass)) {
            scroller.addClass(scrollClass);
            social.addClass(scrollClass);
        }
    }

    function activateScroller() {
        if (scroller.hasClass(scrollClass)) {
            scroller.removeClass(scrollClass);
            social.removeClass(scrollClass);
        }
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() > activateAtY) {
            deactivateScroller();
        } else {
            activateScroller();
        }
    });

    /* Menu talents */

    $('a[href="#talentcolla"]').on('click', function(e) {

        if ($(this).hasClass("collapsed")) {
            $(this).find('label').html("&uarr;");
        } else {
            $(this).find('label').html("&darr;");
        }
        e.preventDefault();
    })


    //initialize swiperinstagram
    var instagram = new Swiper('.swiper-instagram', {
        slidesPerView: '4',
        spaceBetween: 10,
        navigation: {
            nextEl: '.swipe-right',
            prevEl: '.swipe-left',
        },
        grabCursor: true
    })

    var highlight = new Swiper('.swiper-highlight-int', {
        slidesPerView: '4',
        spaceBetween: 10,
        navigation: {
            nextEl: '.swipe-right',
            prevEl: '.swipe-left'
        },
        preventClicks: false
    })




});