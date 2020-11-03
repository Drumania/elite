/* jQuery.enllax.js - v1.1.0 | copyright 2015, MMK Jony | https://github.com/mmkjony/enllax.js | released under the MIT license */ ! function(t) { "use strict";
    t.fn.enllax = function(r) { var a = t(window).height(),
            n = t(document).height(),
            o = t.extend({ ratio: 0, type: "background", direction: "vertical" }, r),
            e = t("[data-enllax-ratio]");
        e.each(function() { var r, e, s, i = t(this),
                c = i.offset().top,
                l = i.outerHeight(),
                p = i.data("enllax-ratio"),
                d = i.data("enllax-type"),
                x = i.data("enllax-direction");
            r = p ? p : o.ratio, e = d ? d : o.type, s = x ? x : o.direction; var f = Math.round(c * r),
                u = Math.round((c - a / 2 + l) * r); "background" == e ? "vertical" == s ? i.css({ "background-position": "center " + -f + "px" }) : "horizontal" == s && i.css({ "background-position": -f + "px center" }) : "foreground" == e && ("vertical" == s ? i.css({ "-webkit-transform": "translateY(" + u + "px)", "-moz-transform": "translateY(" + u + "px)", transform: "translateY(" + u + "px)" }) : "horizontal" == s && i.css({ "-webkit-transform": "translateX(" + u + "px)", "-moz-transform": "translateX(" + u + "px)", transform: "translateX(" + u + "px)" })), t(window).on("scroll", function() { var o = t(this).scrollTop();
                f = Math.round((c - o) * r), u = Math.round((c - a / 2 + l - o) * r), "background" == e ? "vertical" == s ? i.css({ "background-position": "center " + -f + "px" }) : "horizontal" == s && i.css({ "background-position": -f + "px center" }) : "foreground" == e && n > o && ("vertical" == s ? i.css({ "-webkit-transform": "translateY(" + u + "px)", "-moz-transform": "translateY(" + u + "px)", transform: "translateY(" + u + "px)" }) : "horizontal" == s && i.css({ "-webkit-transform": "translateX(" + u + "px)", "-moz-transform": "translateX(" + u + "px)", transform: "translateX(" + u + "px)" })) }) }) } }(jQuery);