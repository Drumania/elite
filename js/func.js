$(document).ready(function() {

    new WOW().init();

    var screenWid = $(window).width();
    if (screenWid < 600) {
        $('body').width(screenWid);
        changeUrlsFichas();
    }

    function changeUrlsFichas() {

        $('#talentcolla a').each(function(index) {
            var hrefAct = $(this).attr('href');
            //f-desktop/Ficha - Bryan Carrasco.pdf

            var res = hrefAct.replace("f-desktop/Ficha - ", "f-mobile/");

            $(this).attr('href', res);

        });

        $('.swiper-slide .slide-wrap a').each(function(index) {
            var hrefAct = $(this).attr('href');
            //f-desktop/Ficha - Bryan Carrasco.pdf

            var res = hrefAct.replace("f-desktop/Ficha - ", "f-mobile/");

            $(this).attr('href', res);

        });

    }

    $('#parallaximg').enllax();

    $(window).scroll(function() {
        var sec1 = $(".sec-1").position();
        var sec2 = $(".sec-2").position();
        var sec3 = $(".sec-3").position();
        var sec4 = $(".sec-4").position();
        var sec5 = $(".sec-5").position();
        var sec6 = $(".sec-6").position();
        var sec7 = $(".sec-7").position();
        var sec8 = $(".sec-8").position();
        var sec9 = $(".sec-9").position();
        var scrollFromTop = $(window).scrollTop();

        if ((scrollFromTop > 0) && (scrollFromTop < sec2.top)) { $(".page-num").html("01"); }
        if ((scrollFromTop > sec1.top) && (scrollFromTop < sec3.top)) { $(".page-num").html("01"); }
        if ((scrollFromTop > sec2.top) && (scrollFromTop < sec4.top)) { $(".page-num").html("02"); }
        if ((scrollFromTop > sec3.top) && (scrollFromTop < sec5.top)) { $(".page-num").html("03"); }
        if ((scrollFromTop > sec4.top) && (scrollFromTop < sec6.top)) { $(".page-num").html("04"); }
        if ((scrollFromTop > sec5.top) && (scrollFromTop < sec7.top)) { $(".page-num").html("<span class='blacked'>05</span>"); }
        if ((scrollFromTop > sec6.top) && (scrollFromTop < sec8.top)) { $(".page-num").html("<span class='blacked'>06</span>"); }
        if ((scrollFromTop > sec7.top) && (scrollFromTop < sec9.top)) { $(".page-num").html("<span class='blacked'>07</span>"); }

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


    //talents
    var nodes = document.querySelectorAll("[data-parallax]");
    for (var i = 0; i < nodes.length; i++) {
        var children = nodes[i].children;
        for (var n = 0; n < children.length; n++) {
            children[n].setAttribute("data-index", n + 2);
        }
        nodes[i].addEventListener("mousemove", function(e) {
            var elms = this.children;
            for (var c = 0; c < elms.length; c++) {
                var divisor = parseInt(elms[c].getAttribute("data-index"));
                var startX = this.offsetWidth / 2;
                var startY = this.offsetHeight / 4;
                elms[c].style.left = startX - (((e.screenX / divisor) - e.clientX) / 4) + "px";
                elms[c].style.top = startY - (((e.screenY / divisor) - e.clientY) / 4) + "px";
            }
        });
    }

    //initialize swiper jugadores
    var home = new Swiper('.swiper-home', {
        slidesPerView: 1,
        centerInsufficientSlides: true,
        centeredSlides: true,
        initialSlide: 0,
        navigation: {
            nextEl: '.swipe-right',
            prevEl: '.swipe-left',
        },
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination-home',
            clickable: true,
            renderBullet: function(index, className) {
                var guion = '-';
                if (index == 2) {
                    guion = ' ';
                }
                return '<span class="' + className + ' custom-home-bullets">' + 0 + (index + 1) + '. </span> ' + guion + ' ';
            },
        },
    })

    //initialize swiper jugadores
    var talents = new Swiper('.swiper-container', {
        centerInsufficientSlides: true,
        spaceBetween: 50,
        centeredSlides: true,
        initialSlide: 0,
        slidesPerView: 3,
        grabCursor: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination' //,
                //type: 'fraction',
        },
        breakpoints: {
            600: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    })

    //initialize swiper testimonials
    var testimonial = new Swiper('.swiper-testimonial', {
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination-test'
        },
        grabCursor: true
    })

    //instagram


    /*
        $(".demo").myig(
            ins_id = 7136594238, // your user_id
            ins_count = 10, // Count of media to return
            ins_token = '987033.ba4c844.d8075ab486ee4587b974ab5b6a403f19' // your token
        );
    */

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




});