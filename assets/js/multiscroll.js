/*!
 * multiscroll.js 0.2.3
 * https://github.com/alvarotrigo/multiscroll.js
 *
 * @license
 * Get a multiScroll.js Commercial License for commercial use
 * https://alvarotrigo.com/multiScroll/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/multiScroll/ - A project by Alvaro Trigo
 */
! function (A, U, N, j, Q) {
  A.fn.multiscroll = function (h) {
    var p, g, r = A.fn.multiscroll,
      e = h && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(h.licenseKey) || -1 < N.domain.indexOf("alvarotrigo.com"),
      a = "ms-notransition",
      S = !0,
      c = [];
    h = A.extend({
      verticalCentered: !0,
      scrollingSpeed: 700,
      easing: "easeInQuart",
      easingcss3: "ease-out",
      menu: !1,
      sectionsColor: [],
      anchors: [],
      navigation: !1,
      navigationPosition: "right",
      navigationColor: "#000",
      navigationTooltips: [],
      loopBottom: !1,
      loopTop: !1,
      css3: !0,
      paddingTop: 0,
      paddingBottom: 0,
      fixedElements: null,
      normalScrollElements: null,
      keyboardScrolling: !0,
      touchSensitivity: 5,
      sectionSelector: ".ms-section",
      leftSelector: ".ms-left",
      rightSelector: ".ms-right",
      afterLoad: null,
      onLeave: null,
      afterRender: null,
      afterResize: null
    }, h), A.extend(A.easing, {
      easeInQuart: function (e, t, n, o, i) {
        return o * (t /= i) * t * t * t + n
      }
    });
    var n = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
      o = "ontouchstart" in U || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints;
    ".ms-right" !== h.rightSelector && A(h.rightSelector).addClass("ms-right"), ".ms-left" !== h.leftSelector && A(h.leftSelector).addClass("ms-left");
    var i, s, l, b = A(".ms-left").find(".ms-section").length,
      m = A(U).height(),
      t = function () {
        var e;
        e = U.PointerEvent ? {
          down: "pointerdown",
          move: "pointermove"
        } : {
          down: "MSPointerDown",
          move: "MSPointerMove"
        };
        return e
      }(),
      d = {
        touchmove: "ontouchmove" in U ? "touchmove" : t.move,
        touchstart: "ontouchstart" in U ? "touchstart" : t.down
      };

    function v() {
      var e = U.location.hash.replace("#", "");
      if (e.length) {
        var t = A(".ms-left").find('[data-anchor="' + e + '"]');
        if (t.length)("undefined" == typeof lastScrolledDestiny || e !== lastScrolledDestiny) && E(t)
      }
    }

    function u(e) {
      e.preventDefault();
      var t = A(this).parent().index();
      E(A(".ms-left .ms-section").eq(t))
    }

    function f() {
      var e = A(this).data("tooltip");
      A('<div class="multiscroll-tooltip ' + h.navigationPosition + '">' + e + "</div>").hide().appendTo(A(this)).fadeIn(200)
    }

    function w() {
      A(this).find(".multiscroll-tooltip").fadeOut(200, function () {
        A(this).remove()
      })
    }! function () {
      h.licenseKey;
      e || (W("error", "multiScroll.js version 0.2.3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"), W("error", "https://github.com/alvarotrigo/multiScroll.js#options"))
    }(), L(), q(), h.css3 && (h.css3 = function () {
      var e, t = N.createElement("p"),
        n = {
          webkitTransform: "-webkit-transform",
          OTransform: "-o-transform",
          msTransform: "-ms-transform",
          MozTransform: "-moz-transform",
          transform: "transform"
        };
      for (var o in N.body.insertBefore(t, null), n) t.style[o] !== Q && (t.style[o] = "translate3d(1px,1px,1px)", e = U.getComputedStyle(t).getPropertyValue(n[o]));
      return N.body.removeChild(t), e !== Q && 0 < e.length && "none" !== e
    }()), A("html, body").css({
      overflow: "hidden",
      height: "100%"
    }), ".ms-section" !== h.sectionSelector && A(h.sectionSelector).each(function () {
      A(this).addClass("ms-section")
    }), h.navigation && (A("body").append('<div id="multiscroll-nav"><ul></ul></div>'), (i = A("#multiscroll-nav")).css("color", h.navigationColor), i.addClass(h.navigationPosition)), A(".ms-right, .ms-left").css({
      width: "50%",
      position: "absolute",
      height: "100%",
      "-ms-touch-action": "none"
    }), A(".ms-right").css({
      right: "1px",
      top: "0",
      "-ms-touch-action": "none",
      "touch-action": "none"
    }), A(".ms-left").css({
      left: "0",
      top: "0",
      "-ms-touch-action": "none",
      "touch-action": "none"
    }), A(".ms-left .ms-section, .ms-right .ms-section").each(function () {
      var e, t = A(this).index();
      if ((h.paddingTop || h.paddingBottom) && A(this).css("padding", h.paddingTop + " 0 " + h.paddingBottom + " 0"), void 0 !== h.sectionsColor[t] && A(this).css("background-color", h.sectionsColor[t]), void 0 !== h.anchors[t] && A(this).attr("data-anchor", h.anchors[t]), h.verticalCentered && (e = A(this)).addClass("ms-table").wrapInner('<div class="ms-tableCell" style="height: ' + z(e) + 'px" />'), A(this).closest(".ms-left").length && h.navigation) {
        var n = "";
        h.anchors.length && (n = h.anchors[t]);
        var o = h.navigationTooltips[t];
        void 0 === o && (o = ""), h.navigation && i.find("ul").append('<li data-tooltip="' + o + '"><a href="#' + n + '"><span></span></a></li>')
      }
    }), A(".ms-right").html(A(".ms-right").find(".ms-section").get().reverse()), A(".ms-left .ms-section, .ms-right .ms-section").each(function () {
      var e = A(this).index();
      A(this).css({
        height: "100%"
      }), !e && h.navigation && i.find("li").eq(e).find("a").addClass("active")
    }).promise().done(function () {
      A(".ms-left .ms-section.active").length || (A(".ms-right").find(".ms-section").last().addClass("active"), A(".ms-left").find(".ms-section").first().addClass("active")), h.navigation && i.css("margin-top", "-" + i.height() / 2 + "px"), A.isFunction(h.afterRender) && h.afterRender.call(this), T(), M(), "complete" == N.readyState ? X() : A(U).on("load", function () {
        X()
      })
    }), A(U).on("hashchange", v), A(N).keydown(function (e) {
      clearTimeout(l);
      var t = A(N.activeElement);
      if (!t.is("textarea") && !t.is("input") && !t.is("select") && h.keyboardScrolling) {
        var n = e.which; - 1 < A.inArray(n, [40, 38, 32, 33, 34]) && e.preventDefault(), l = setTimeout(function () {
          ! function (e) {
            var t = e.shiftKey;
            if (!S) return;
            switch (e.which) {
              case 38:
              case 33:
                r.moveSectionUp();
                break;
              case 32:
                if (t) {
                  r.moveSectionUp();
                  break
                }
                case 40:
                case 34:
                  r.moveSectionDown();
                  break;
                case 36:
                  r.moveTo(1);
                  break;
                case 35:
                  r.moveTo(A(".ms-left .ms-section").length);
                  break;
                default:
                  ;
            }
          }(e)
        }, 150)
      }
    }), A(N).mousedown(function (e) {
      if (1 == e.button) return e.preventDefault(), !1
    }), A(N).on("click", "#multiscroll-nav a", u), A(N).on({
      mouseenter: f,
      mouseleave: w
    }, "#multiscroll-nav li"), h.normalScrollElements && (A(N).on("mouseenter", h.normalScrollElements, function () {
      r.setMouseWheelScrolling(!1)
    }), A(N).on("mouseleave", h.normalScrollElements, function () {
      r.setMouseWheelScrolling(!0)
    })), A(U).on("resize", y);
    var x = m;

    function y() {
      if (n) {
        var e = A(N.activeElement);
        if (!e.is("textarea") && !e.is("input") && !e.is("select")) {
          var t = A(U).height();
          j.abs(t - x) > 20 * j.max(x, t) / 100 && (C(!0), x = t)
        }
      } else clearTimeout(s), s = setTimeout(function () {
        C(!0)
      }, 350)
    }

    function C(e) {
      m = A(U).height(), A(".ms-tableCell").each(function () {
        A(this).css({
          height: z(A(this).parent())
        })
      }), h.scrollOverflow && scrollBarHandler.createScrollBarForAll(), T(), A.isFunction(h.afterResize) && h.afterResize.call(this)
    }

    function T() {
      h.css3 ? (P(A(".ms-left"), "translate3d(0px, -" + A(".ms-left").find(".ms-section.active").position().top + "px, 0px)", !1), P(A(".ms-right"), "translate3d(0px, -" + A(".ms-right").find(".ms-section.active").position().top + "px, 0px)", !1)) : (A(".ms-left").css("top", -A(".ms-left").find(".ms-section.active").position().top), A(".ms-right").css("top", -A(".ms-right").find(".ms-section.active").position().top))
    }

    function E(e) {
      var t = e.index(),
        n = A(".ms-right").find(".ms-section").eq(b - 1 - t),
        o = e.data("anchor"),
        i = A(".ms-left .ms-section.active").index() + 1,
        s = function (e) {
          var t = A(".ms-left .ms-section.active").index(),
            n = e.index();
          if (n < t) return "up";
          return "down"
        }(e),
        a = h.scrollingSpeed < 700,
        l = a ? 700 : h.scrollingSpeed;
      S = !1;
      var r, c, m, d = e.position().top,
        v = n.position().top;
      if (n.addClass("active").siblings().removeClass("active"), e.addClass("active").siblings().removeClass("active"), function (e) {
          h.anchors.length && (location.hash = e);
          M()
        }(o), h.css3) {
        A.isFunction(h.onLeave) && h.onLeave.call(this, i, t + 1, s);
        var u = "translate3d(0px, -" + d + "px, 0px)",
          f = "translate3d(0px, -" + v + "px, 0px)";
        P(A(".ms-left"), u, !0), P(A(".ms-right"), f, !0), h.scrollingSpeed ? (clearTimeout(p), p = setTimeout(function () {
          A.isFunction(h.afterLoad) && h.afterLoad.call(this, o, t + 1), S = !a
        }, h.scrollingSpeed)) : A.isFunction(h.afterLoad) && h.afterLoad.call(this, o, t + 1)
      } else A.isFunction(h.onLeave) && h.onLeave.call(this, i, t + 1, s), A(".ms-left").animate({
        top: -d
      }, h.scrollingSpeed, h.easing, function () {
        A.isFunction(h.afterLoad) && h.afterLoad.call(this, o, t + 1), S = !a
      }), A(".ms-right").animate({
        top: -v
      }, h.scrollingSpeed, h.easing);
      lastScrolledDestiny = o, r = o, h.menu && (A(h.menu).find(".active").removeClass("active"), A(h.menu).find('[data-menuanchor="' + r + '"]').addClass("active")), c = o, m = t, h.navigation && (A("#multiscroll-nav").find(".active").removeClass("active"), c ? A("#multiscroll-nav").find('a[href="#' + c + '"]').addClass("active") : A("#multiscroll-nav").find("li").eq(m).find("a").addClass("active")), a && (clearTimeout(g), g = setTimeout(function () {
        S = !0
      }, l))
    }

    function L() {
      N.addEventListener ? (N.addEventListener("mousewheel", D, !1), N.addEventListener("wheel", D, !1)) : N.attachEvent("onmousewheel", D)
    }
    r.moveSectionUp = function () {
      var e = A(".ms-left .ms-section.active").prev(".ms-section");
      !e.length && h.loopTop && (e = A(".ms-left .ms-section").last()), e.length && E(e)
    }, r.moveSectionDown = function () {
      var e = A(".ms-left .ms-section.active").next(".ms-section");
      !e.length && h.loopBottom && (e = A(".ms-left .ms-section").first()), e.length && E(e)
    }, r.moveTo = function (e) {
      E(isNaN(e) ? A('.ms-left [data-anchor="' + e + '"]') : A(".ms-left .ms-section").eq(e - 1))
    };
    var k = (new Date).getTime();

    function D(e) {
      var t = (new Date).getTime(),
        n = (e = e || U.event).wheelDelta || -e.deltaY || -e.detail,
        o = j.max(-1, j.min(1, n)),
        i = void 0 !== e.wheelDeltaX || void 0 !== e.deltaX,
        s = j.abs(e.wheelDeltaX) < j.abs(e.wheelDelta) || j.abs(e.deltaX) < j.abs(e.deltaY) || !i,
        a = t - k;
      if (k = t, c.push(j.abs(n)), 200 < a && (c = []), S) {
        var l = B(c, 10);
        B(c, 70) <= l && s && (o < 0 ? r.moveSectionDown() : r.moveSectionUp())
      }
      return !1
    }

    function B(e, t) {
      for (var n = 0, o = e.slice(j.max(e.length - t, 1)), i = 0; i < o.length; i++) n += o[i];
      return j.ceil(n / t)
    }

    function P(e, t, n) {
      var o, i, s;
      n ? (o = e, i = "all " + h.scrollingSpeed + "ms " + h.easingcss3, o.removeClass(a), o.css({
        "-webkit-transition": i,
        transition: i
      })) : e.addClass(a), e.css({
        "-webkit-transform": s = t,
        "-moz-transform": s,
        "-ms-transform": s,
        transform: s
      })
    }

    function M() {
      var e = A(".ms-left .ms-section.active"),
        t = e.data("anchor"),
        n = e.index(),
        o = String(n);
      h.anchors.length && (o = t), o = o.replace("/", "-").replace("#", "");
      var i = new RegExp("\\b\\s?ms-viewing-[^\\s]+\\b", "g");
      A("body")[0].className = A("body")[0].className.replace(i, ""), A("body").addClass("ms-viewing-" + o)
    }

    function z(e) {
      var t = m;
      if (h.paddingTop || h.paddingBottom) {
        var n = parseInt(e.css("padding-top")) + parseInt(e.css("padding-bottom"));
        t = m - n
      }
      return t
    }

    function X() {
      var e = U.location.hash.replace("#", ""),
        t = A('.ms-left .ms-section[data-anchor="' + e + '"]');
      e.length && t.length && E(t)
    }
    r.setKeyboardScrolling = function (e) {
      h.keyboardScrolling = e
    }, r.setMouseWheelScrolling = function (e) {
      e ? L() : N.addEventListener ? (N.removeEventListener("mousewheel", D, !1), N.removeEventListener("wheel", D, !1)) : N.detachEvent("onmousewheel", D)
    }, r.setScrollingSpeed = function (e) {
      h.scrollingSpeed = e
    };
    var R = 0,
      Y = 0;

    function F(e) {
      if (I(e)) {
        event.preventDefault();
        A(".ms-left .ms-section.active");
        if (S) {
          var t = O(e);
          Y = t.y, t.x, j.abs(R - Y) > A(U).height() / 100 * h.touchSensitivity && (Y < R ? r.moveSectionDown() : R < Y && r.moveSectionUp())
        }
      }
    }

    function I(e) {
      return void 0 === e.pointerType || "mouse" != e.pointerType
    }

    function K(e) {
      if (I(e)) {
        var t = O(e);
        R = t.y, t.x
      }
    }

    function q() {
      (o || n) && (N.removeEventListener(d.touchstart, K), N.removeEventListener(d.touchmove, F, {
        passive: !1
      }), N.addEventListener(d.touchstart, K), N.addEventListener(d.touchmove, F, {
        passive: !1
      }))
    }

    function O(e) {
      var t = [];
      return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, o && I(e) && void 0 !== e.touches && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
    }

    function W(e, t) {
      U.console && U.console[e] && U.console[e]("multiScroll: " + t)
    }
    r.destroy = function () {
      r.setKeyboardScrolling(!1), r.setMouseWheelScrolling(!1), (o || n) && (N.removeEventListener(d.touchstart, K), N.removeEventListener(d.touchmove, F, {
        passive: !1
      })), A(U).off("hashchange", v).off("resize", y), A(N).off("mouseenter", "#multiscroll-nav li").off("mouseleave", "#multiscroll-nav li").off("click", "#multiscroll-nav a")
    }, r.build = function () {
      r.setKeyboardScrolling(!0), r.setMouseWheelScrolling(!0), q(), A(U).on("hashchange", v).on("resize", y), A(N).on("mouseenter", "#multiscroll-nav li", f).on("mouseleave", "#multiscroll-nav li", w).on("click", "#multiscroll-nav a", u)
    }
  }
}(jQuery, window, document, Math);
//# sourceMappingURL=jquery.multiscroll.min.js.map