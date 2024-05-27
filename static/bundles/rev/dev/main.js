/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://127.0.0.1:8000/static/bundles/rev/dev/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./rev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/revolution/layers.css":
/*!***********************************!*\
  !*** ./css/revolution/layers.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./css/revolution/navigation.css":
/*!***************************************!*\
  !*** ./css/revolution/navigation.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./css/revolution/settings.css":
/*!*************************************!*\
  !*** ./css/revolution/settings.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./js/revolution/extensions/revolution.extension.actions.min.js":
/*!**********************************************************************!*\
  !*** ./js/revolution/extensions/revolution.extension.actions.min.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/********************************************
 * REVOLUTION 5.3 EXTENSION - ACTIONS
 * @version: 2.0.7 (28.02.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function ($) {
  "use strict";

  function getScrollRoot() {
    var d,
      a = document.documentElement,
      b = document.body,
      c = ("undefined" != typeof window.pageYOffset ? window.pageYOffset : null) || b.scrollTop || a.scrollTop;
    return a.scrollTop = b.scrollTop = c + (c > 0) ? -1 : 1, d = a.scrollTop !== c ? a : b, d.scrollTop = c, d;
  }
  var _R = jQuery.fn.revolution,
    _ISM = _R.is_mobile(),
    extension = {
      alias: "Actions Min JS",
      name: "revolution.extensions.actions.min.js",
      min_core: "5.4",
      version: "2.0.7"
    };
  jQuery.extend(!0, _R, {
    checkActions: function checkActions(a, b, c) {
      return "stop" !== _R.compare_version(extension).check && void checkActions_intern(a, b, c);
    }
  });
  var checkActions_intern = function checkActions_intern(a, b, c) {
      c && jQuery.each(c, function (c, d) {
        d.delay = parseInt(d.delay, 0) / 1e3, a.addClass("tp-withaction"), b.fullscreen_esclistener || "exitfullscreen" != d.action && "togglefullscreen" != d.action || (jQuery(document).keyup(function (b) {
          27 == b.keyCode && jQuery("#rs-go-fullscreen").length > 0 && a.trigger(d.event);
        }), b.fullscreen_esclistener = !0);
        var e = "backgroundvideo" == d.layer ? jQuery(".rs-background-video-layer") : "firstvideo" == d.layer ? jQuery(".tp-revslider-slidesli").find(".tp-videolayer") : jQuery("#" + d.layer);
        switch (jQuery.inArray(d.action, ["toggleslider", "toggle_mute_video", "toggle_global_mute_video", "togglefullscreen"]) != -1 && a.data("togglelisteners", !0), d.action) {
          case "togglevideo":
            jQuery.each(e, function (b, c) {
              c = jQuery(c);
              var d = c.data("videotoggledby");
              void 0 == d && (d = new Array()), d.push(a), c.data("videotoggledby", d);
            });
            break;
          case "togglelayer":
            jQuery.each(e, function (b, c) {
              c = jQuery(c);
              var e = c.data("layertoggledby");
              void 0 == e && (e = new Array()), e.push(a), c.data("layertoggledby", e), c.data("triggered_startstatus", d.layerstatus);
            });
            break;
          case "toggle_mute_video":
            jQuery.each(e, function (b, c) {
              c = jQuery(c);
              var d = c.data("videomutetoggledby");
              void 0 == d && (d = new Array()), d.push(a), c.data("videomutetoggledby", d);
            });
            break;
          case "toggle_global_mute_video":
            jQuery.each(e, function (b, c) {
              c = jQuery(c);
              var d = c.data("videomutetoggledby");
              void 0 == d && (d = new Array()), d.push(a), c.data("videomutetoggledby", d);
            });
            break;
          case "toggleslider":
            void 0 == b.slidertoggledby && (b.slidertoggledby = new Array()), b.slidertoggledby.push(a);
            break;
          case "togglefullscreen":
            void 0 == b.fullscreentoggledby && (b.fullscreentoggledby = new Array()), b.fullscreentoggledby.push(a);
        }
        switch (a.on(d.event, function () {
          if ("click" === d.event && a.hasClass("tp-temporarydisabled")) return !1;
          var c = "backgroundvideo" == d.layer ? jQuery(".active-revslide .slotholder .rs-background-video-layer") : "firstvideo" == d.layer ? jQuery(".active-revslide .tp-videolayer").first() : jQuery("#" + d.layer);
          if ("stoplayer" == d.action || "togglelayer" == d.action || "startlayer" == d.action) {
            if (c.length > 0) {
              var e = c.data();
              void 0 !== e.clicked_time_stamp && new Date().getTime() - e.clicked_time_stamp > 150 && (clearTimeout(e.triggerdelayIn), clearTimeout(e.triggerdelayOut)), e.clicked_time_stamp = new Date().getTime(), "startlayer" == d.action || "togglelayer" == d.action && "in" != c.data("animdirection") ? (e.animdirection = "in", e.triggerstate = "on", _R.toggleState(e.layertoggledby), _R.playAnimationFrame && (clearTimeout(e.triggerdelayIn), e.triggerdelayIn = setTimeout(function () {
                _R.playAnimationFrame({
                  caption: c,
                  opt: b,
                  frame: "frame_0",
                  triggerdirection: "in",
                  triggerframein: "frame_0",
                  triggerframeout: "frame_999"
                });
              }, 1e3 * d.delay))) : ("stoplayer" == d.action || "togglelayer" == d.action && "out" != c.data("animdirection")) && (e.animdirection = "out", e.triggered = !0, e.triggerstate = "off", _R.stopVideo && _R.stopVideo(c, b), _R.unToggleState(e.layertoggledby), _R.endMoveCaption && (clearTimeout(e.triggerdelayOut), e.triggerdelayOut = setTimeout(function () {
                _R.playAnimationFrame({
                  caption: c,
                  opt: b,
                  frame: "frame_999",
                  triggerdirection: "out",
                  triggerframein: "frame_0",
                  triggerframeout: "frame_999"
                });
              }, 1e3 * d.delay)));
            }
          } else !_ISM || "playvideo" != d.action && "stopvideo" != d.action && "togglevideo" != d.action && "mutevideo" != d.action && "unmutevideo" != d.action && "toggle_mute_video" != d.action && "toggle_global_mute_video" != d.action ? (d.delay = "NaN" === d.delay || NaN === d.delay ? 0 : d.delay, punchgs.TweenLite.delayedCall(d.delay, function () {
            actionSwitches(c, b, d, a);
          }, [c, b, d, a])) : actionSwitches(c, b, d, a);
        }), d.action) {
          case "togglelayer":
          case "startlayer":
          case "playlayer":
          case "stoplayer":
            var e = jQuery("#" + d.layer),
              f = e.data();
            e.length > 0 && void 0 !== f && (void 0 !== f.frames && "bytrigger" != f.frames[0].delay || void 0 === f.frames && "bytrigger" !== f.start) && (f.triggerstate = "on");
        }
      });
    },
    actionSwitches = function actionSwitches(tnc, opt, a, _nc) {
      switch (a.action) {
        case "scrollbelow":
          a.speed = void 0 !== a.speed ? a.speed : 400, a.ease = void 0 !== a.ease ? a.ease : punchgs.Power2.easeOut, _nc.addClass("tp-scrollbelowslider"), _nc.data("scrolloffset", a.offset), _nc.data("scrolldelay", a.delay), _nc.data("scrollspeed", a.speed), _nc.data("scrollease", a.ease);
          var off = getOffContH(opt.fullScreenOffsetContainer) || 0,
            aof = parseInt(a.offset, 0) || 0;
          off = off - aof || 0, opt.scrollRoot = jQuery(document);
          var sobj = {
            _y: opt.scrollRoot.scrollTop()
          };
          punchgs.TweenLite.to(sobj, a.speed / 1e3, {
            _y: opt.c.offset().top + jQuery(opt.li[0]).height() - off,
            ease: a.ease,
            onUpdate: function onUpdate() {
              opt.scrollRoot.scrollTop(sobj._y);
            }
          });
          break;
        case "callback":
          eval(a.callback);
          break;
        case "jumptoslide":
          switch (a.slide.toLowerCase()) {
            case "+1":
            case "next":
              opt.sc_indicator = "arrow", _R.callingNewSlide(opt.c, 1);
              break;
            case "previous":
            case "prev":
            case "-1":
              opt.sc_indicator = "arrow", _R.callingNewSlide(opt.c, -1);
              break;
            default:
              var ts = jQuery.isNumeric(a.slide) ? parseInt(a.slide, 0) : a.slide;
              _R.callingNewSlide(opt.c, ts);
          }
          break;
        case "simplelink":
          window.open(a.url, a.target);
          break;
        case "toggleslider":
          opt.noloopanymore = 0, "playing" == opt.sliderstatus ? (opt.c.revpause(), opt.forcepause_viatoggle = !0, _R.unToggleState(opt.slidertoggledby)) : (opt.forcepause_viatoggle = !1, opt.c.revresume(), _R.toggleState(opt.slidertoggledby));
          break;
        case "pauseslider":
          opt.c.revpause(), _R.unToggleState(opt.slidertoggledby);
          break;
        case "playslider":
          opt.noloopanymore = 0, opt.c.revresume(), _R.toggleState(opt.slidertoggledby);
          break;
        case "playvideo":
          tnc.length > 0 && _R.playVideo(tnc, opt);
          break;
        case "stopvideo":
          tnc.length > 0 && _R.stopVideo && _R.stopVideo(tnc, opt);
          break;
        case "togglevideo":
          tnc.length > 0 && (_R.isVideoPlaying(tnc, opt) ? _R.stopVideo && _R.stopVideo(tnc, opt) : _R.playVideo(tnc, opt));
          break;
        case "mutevideo":
          tnc.length > 0 && _R.muteVideo(tnc, opt);
          break;
        case "unmutevideo":
          tnc.length > 0 && _R.unMuteVideo && _R.unMuteVideo(tnc, opt);
          break;
        case "toggle_mute_video":
          tnc.length > 0 && (_R.isVideoMuted(tnc, opt) ? _R.unMuteVideo(tnc, opt) : _R.muteVideo && _R.muteVideo(tnc, opt)), _nc.toggleClass("rs-toggle-content-active");
          break;
        case "toggle_global_mute_video":
          opt.globalmute === !0 ? (opt.globalmute = !1, void 0 != opt.playingvideos && opt.playingvideos.length > 0 && jQuery.each(opt.playingvideos, function (a, b) {
            _R.unMuteVideo && _R.unMuteVideo(b, opt);
          })) : (opt.globalmute = !0, void 0 != opt.playingvideos && opt.playingvideos.length > 0 && jQuery.each(opt.playingvideos, function (a, b) {
            _R.muteVideo && _R.muteVideo(b, opt);
          })), _nc.toggleClass("rs-toggle-content-active");
          break;
        case "simulateclick":
          tnc.length > 0 && tnc.click();
          break;
        case "toggleclass":
          tnc.length > 0 && (tnc.hasClass(a.classname) ? tnc.removeClass(a.classname) : tnc.addClass(a.classname));
          break;
        case "gofullscreen":
        case "exitfullscreen":
        case "togglefullscreen":
          if (jQuery("#rs-go-fullscreen").length > 0 && ("togglefullscreen" == a.action || "exitfullscreen" == a.action)) {
            jQuery("#rs-go-fullscreen").appendTo(jQuery("#rs-was-here"));
            var paw = opt.c.closest(".forcefullwidth_wrapper_tp_banner").length > 0 ? opt.c.closest(".forcefullwidth_wrapper_tp_banner") : opt.c.closest(".rev_slider_wrapper");
            paw.unwrap(), paw.unwrap(), opt.minHeight = opt.oldminheight, opt.infullscreenmode = !1, opt.c.revredraw(), void 0 != opt.playingvideos && opt.playingvideos.length > 0 && jQuery.each(opt.playingvideos, function (a, b) {
              _R.playVideo(b, opt);
            }), _R.unToggleState(opt.fullscreentoggledby);
          } else if (0 == jQuery("#rs-go-fullscreen").length && ("togglefullscreen" == a.action || "gofullscreen" == a.action)) {
            var paw = opt.c.closest(".forcefullwidth_wrapper_tp_banner").length > 0 ? opt.c.closest(".forcefullwidth_wrapper_tp_banner") : opt.c.closest(".rev_slider_wrapper");
            paw.wrap('<div id="rs-was-here"><div id="rs-go-fullscreen"></div></div>');
            var gf = jQuery("#rs-go-fullscreen");
            gf.appendTo(jQuery("body")), gf.css({
              position: "fixed",
              width: "100%",
              height: "100%",
              top: "0px",
              left: "0px",
              zIndex: "9999999",
              background: "#ffffff"
            }), opt.oldminheight = opt.minHeight, opt.minHeight = jQuery(window).height(), opt.infullscreenmode = !0, opt.c.revredraw(), void 0 != opt.playingvideos && opt.playingvideos.length > 0 && jQuery.each(opt.playingvideos, function (a, b) {
              _R.playVideo(b, opt);
            }), _R.toggleState(opt.fullscreentoggledby);
          }
          break;
        default:
          var obj = {};
          obj.event = a, obj.layer = _nc, opt.c.trigger("layeraction", [obj]);
      }
    },
    getOffContH = function getOffContH(a) {
      if (void 0 == a) return 0;
      if (a.split(",").length > 1) {
        var b = a.split(","),
          c = 0;
        return b && jQuery.each(b, function (a, b) {
          jQuery(b).length > 0 && (c += jQuery(b).outerHeight(!0));
        }), c;
      }
      return jQuery(a).height();
    };
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./js/revolution/extensions/revolution.extension.kenburn.min.js":
/*!**********************************************************************!*\
  !*** ./js/revolution/extensions/revolution.extension.kenburn.min.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/********************************************
 * REVOLUTION 5.0 EXTENSION - KEN BURN
 * @version: 1.3 (15.02.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function (a) {
  "use strict";

  var b = jQuery.fn.revolution,
    c = {
      alias: "KenBurns Min JS",
      name: "revolution.extensions.kenburn.min.js",
      min_core: "5.4",
      version: "1.2.0"
    };
  jQuery.extend(!0, b, {
    stopKenBurn: function stopKenBurn(a) {
      return "stop" !== b.compare_version(c).check && void (void 0 != a.data("kbtl") && a.data("kbtl").pause());
    },
    startKenBurn: function startKenBurn(a, d, e) {
      if ("stop" === b.compare_version(c).check) return !1;
      var f = a.data(),
        g = a.find(".defaultimg"),
        h = g.data("lazyload") || g.data("src"),
        j = (f.owidth / f.oheight, "carousel" === d.sliderType ? d.carousel.slide_width : d.ul.width()),
        k = d.ul.height();
      a.data("kbtl") && a.data("kbtl").kill(), e = e || 0, 0 == a.find(".tp-kbimg").length && (a.append('<div class="tp-kbimg-wrap" style="z-index:2;width:100%;height:100%;top:0px;left:0px;position:absolute;"><img class="tp-kbimg" src="' + h + '" style="position:absolute;" width="' + f.owidth + '" height="' + f.oheight + '"></div>'), a.data("kenburn", a.find(".tp-kbimg")));
      var m = function m(a, b, c, d, e, f, g) {
          var h = a * c,
            i = b * c,
            j = Math.abs(d - h),
            k = Math.abs(e - i),
            l = new Object();
          return l.l = (0 - f) * j, l.r = l.l + h, l.t = (0 - g) * k, l.b = l.t + i, l.h = f, l.v = g, l;
        },
        n = function n(a, b, c, d, e) {
          var f = a.bgposition.split(" ") || "center center",
            g = "center" == f[0] ? "50%" : "left" == f[0] || "left" == f[1] ? "0%" : "right" == f[0] || "right" == f[1] ? "100%" : f[0],
            h = "center" == f[1] ? "50%" : "top" == f[0] || "top" == f[1] ? "0%" : "bottom" == f[0] || "bottom" == f[1] ? "100%" : f[1];
          g = parseInt(g, 0) / 100 || 0, h = parseInt(h, 0) / 100 || 0;
          var i = new Object();
          return i.start = m(e.start.width, e.start.height, e.start.scale, b, c, g, h), i.end = m(e.start.width, e.start.height, e.end.scale, b, c, g, h), i;
        },
        o = function o(a, b, c) {
          var d = c.scalestart / 100,
            e = c.scaleend / 100,
            f = void 0 != c.offsetstart ? c.offsetstart.split(" ") || [0, 0] : [0, 0],
            g = void 0 != c.offsetend ? c.offsetend.split(" ") || [0, 0] : [0, 0];
          c.bgposition = "center center" == c.bgposition ? "50% 50%" : c.bgposition;
          var h = new Object(),
            i = a * d,
            k = (i / c.owidth * c.oheight, a * e);
          k / c.owidth * c.oheight;
          if (h.start = new Object(), h.starto = new Object(), h.end = new Object(), h.endo = new Object(), h.start.width = a, h.start.height = h.start.width / c.owidth * c.oheight, h.start.height < b) {
            var m = b / h.start.height;
            h.start.height = b, h.start.width = h.start.width * m;
          }
          h.start.transformOrigin = c.bgposition, h.start.scale = d, h.end.scale = e, c.rotatestart = 0 === c.rotatestart ? .01 : c.rotatestart, h.start.rotation = c.rotatestart + "deg", h.end.rotation = c.rotateend + "deg";
          var o = n(c, a, b, f, h);
          f[0] = parseFloat(f[0]) + o.start.l, g[0] = parseFloat(g[0]) + o.end.l, f[1] = parseFloat(f[1]) + o.start.t, g[1] = parseFloat(g[1]) + o.end.t;
          var p = o.start.r - o.start.l,
            q = o.start.b - o.start.t,
            r = o.end.r - o.end.l,
            s = o.end.b - o.end.t;
          return f[0] = f[0] > 0 ? 0 : p + f[0] < a ? a - p : f[0], g[0] = g[0] > 0 ? 0 : r + g[0] < a ? a - r : g[0], f[1] = f[1] > 0 ? 0 : q + f[1] < b ? b - q : f[1], g[1] = g[1] > 0 ? 0 : s + g[1] < b ? b - s : g[1], h.starto.x = f[0] + "px", h.starto.y = f[1] + "px", h.endo.x = g[0] + "px", h.endo.y = g[1] + "px", h.end.ease = h.endo.ease = c.ease, h.end.force3D = h.endo.force3D = !0, h;
        };
      void 0 != a.data("kbtl") && (a.data("kbtl").kill(), a.removeData("kbtl"));
      var p = a.data("kenburn"),
        q = p.parent(),
        r = o(j, k, f),
        s = new punchgs.TimelineLite();
      if (s.pause(), r.start.transformOrigin = "0% 0%", r.starto.transformOrigin = "0% 0%", s.add(punchgs.TweenLite.fromTo(p, f.duration / 1e3, r.start, r.end), 0), s.add(punchgs.TweenLite.fromTo(q, f.duration / 1e3, r.starto, r.endo), 0), void 0 !== f.blurstart && void 0 !== f.blurend && (0 !== f.blurstart || 0 !== f.blurend)) {
        var t = {
            a: f.blurstart
          },
          u = {
            a: f.blurend,
            ease: r.endo.ease
          },
          v = new punchgs.TweenLite(t, f.duration / 1e3, u);
        v.eventCallback("onUpdate", function (a) {
          punchgs.TweenLite.set(a, {
            filter: "blur(" + t.a + "px)",
            webkitFilter: "blur(" + t.a + "px)"
          });
        }, [q]), s.add(v, 0);
      }
      s.progress(e), s.play(), a.data("kbtl", s);
    }
  });
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./js/revolution/extensions/revolution.extension.layeranimation.min.js":
/*!*****************************************************************************!*\
  !*** ./js/revolution/extensions/revolution.extension.layeranimation.min.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/************************************************
 * REVOLUTION 5.3 EXTENSION - LAYER ANIMATION
 * @version: 3.5.4 (7.03.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
************************************************/
!function (a) {
  "use strict";

  function t(a, b, c, d, e, f, g) {
    var h = a.find(b);
    h.css("borderWidth", f + "px"), h.css(c, 0 - f + "px"), h.css(d, "0px solid transparent"), h.css(e, g);
  }
  var b = jQuery.fn.revolution,
    e = (b.is_mobile(), b.is_android(), {
      alias: "LayerAnimation Min JS",
      name: "revolution.extensions.layeranimation.min.js",
      min_core: "5.4.0",
      version: "3.5.3"
    });
  jQuery.extend(!0, b, {
    updateMarkup: function updateMarkup(a, b) {
      var c = jQuery(a).data();
      if (void 0 !== c.start && !c.frames_added && void 0 === c.frames) {
        var d = new Array(),
          e = q(j(), c.transform_in, void 0, !1),
          f = q(j(), c.transform_out, void 0, !1),
          g = q(j(), c.transform_hover, void 0, !1);
        jQuery.isNumeric(c.end) && jQuery.isNumeric(c.start) && jQuery.isNumeric(e.speed) && (c.end = parseInt(c.end, 0) - (parseInt(c.start, 0) + parseFloat(e.speed, 0))), d.push({
          frame: "0",
          delay: c.start,
          from: c.transform_in,
          to: c.transform_idle,
          split: c.splitin,
          speed: e.speed,
          ease: e.anim.ease,
          mask: c.mask_in,
          splitdelay: c.elementdelay
        }), d.push({
          frame: "5",
          delay: c.end,
          to: c.transform_out,
          split: c.splitout,
          speed: f.speed,
          ease: f.anim.ease,
          mask: c.mask_out,
          splitdelay: c.elementdelay
        }), c.transform_hover && d.push({
          frame: "hover",
          to: c.transform_hover,
          style: c.style_hover,
          speed: g.speed,
          ease: g.anim.ease,
          splitdelay: c.elementdelay
        }), c.frames = d;
      }
      if (!c.frames_added) {
        if (c.inframeindex = 0, c.outframeindex = -1, c.hoverframeindex = -1, void 0 !== c.frames) for (var h = 0; h < c.frames.length; h++) void 0 !== c.frames[h].sfx_effect && c.frames[h].sfx_effect.indexOf("block") >= 0 && (0 === h ? (c.frames[h].from = "o:0", c.frames[h].to = "o:1") : c.frames[h].to = "o:0", c._sfx = "block"), void 0 === c.frames[0].from && (c.frames[0].from = "o:inherit"), 0 === c.frames[0].delay && (c.frames[0].delay = 20), "hover" === c.frames[h].frame ? c.hoverframeindex = h : "frame_999" !== c.frames[h].frame && "frame_out" !== c.frames[h].frame && "last" !== c.frames[h].frame && "end" !== c.frames[h].frame || (c.outframeindex = h), void 0 !== c.frames[h].split && c.frames[h].split.match(/chars|words|lines/g) && (c.splittext = !0);
        c.outframeindex = c.outframeindex === -1 ? c.hoverframeindex === -1 ? c.frames.length - 1 : c.frames.length - 2 : c.outframeindex, c.frames_added = !0;
      }
    },
    animcompleted: function animcompleted(a, c) {
      var d = a.data(),
        e = d.videotype,
        f = d.autoplay,
        g = d.autoplayonlyfirsttime;
      void 0 != e && "none" != e && (1 == f || "true" == f || "on" == f || "1sttime" == f || g ? (("carousel" !== c.sliderType || "carousel" === c.sliderType && "on" === c.carousel.showLayersAllTime && a.closest("li").hasClass("active-revslide") || "carousel" === c.sliderType && "on" !== c.carousel.showLayersAllTime && a.closest("li").hasClass("active-revslide")) && b.playVideo(a, c), b.toggleState(a.data("videotoggledby")), (g || "1sttime" == f) && (d.autoplayonlyfirsttime = !1, d.autoplay = "off")) : ("no1sttime" == f && (d.datasetautoplay = "on"), b.unToggleState(a.data("videotoggledby"))));
    },
    handleStaticLayers: function handleStaticLayers(a, b) {
      var c = parseInt(a.data("startslide"), 0),
        d = parseInt(a.data("endslide"), 0);
      c < 0 && (c = 0), d < 0 && (d = b.realslideamount), 0 === c && d === b.realslideamount - 1 && (d = b.realslideamount + 1), a.data("startslide", c), a.data("endslide", d);
    },
    animateTheCaptions: function animateTheCaptions(a) {
      if ("stop" === b.compare_version(e).check) return !1;
      var c = a.opt,
        d = a.slide,
        f = a.recall,
        g = a.maintimeline,
        h = a.preset,
        i = a.startslideanimat,
        j = "carousel" === c.sliderType ? 0 : c.width / 2 - c.gridwidth[c.curWinRange] * c.bw / 2,
        k = 0,
        l = d.data("index");
      if (c.layers = c.layers || new Object(), c.layers[l] = c.layers[l] || d.find(".tp-caption"), c.layers["static"] = c.layers["static"] || c.c.find(".tp-static-layers").find(".tp-caption"), void 0 === c.timelines && b.createTimelineStructure(c), c.conh = c.c.height(), c.conw = c.c.width(), c.ulw = c.ul.width(), c.ulh = c.ul.height(), c.debugMode) {
        d.addClass("indebugmode"), d.find(".helpgrid").remove(), c.c.find(".hglayerinfo").remove(), d.append('<div class="helpgrid" style="width:' + c.gridwidth[c.curWinRange] * c.bw + "px;height:" + c.gridheight[c.curWinRange] * c.bw + 'px;"></div>');
        var m = d.find(".helpgrid");
        m.append('<div class="hginfo">Zoom:' + Math.round(100 * c.bw) + "% &nbsp;&nbsp;&nbsp; Device Level:" + c.curWinRange + "&nbsp;&nbsp;&nbsp; Grid Preset:" + c.gridwidth[c.curWinRange] + "x" + c.gridheight[c.curWinRange] + "</div>"), c.c.append('<div class="hglayerinfo"></div>'), m.append('<div class="tlhg"></div>');
      }
      void 0 !== l && c.layers[l] && jQuery.each(c.layers[l], function (a, d) {
        var e = jQuery(this);
        b.updateMarkup(this, c), b.prepareSingleCaption({
          caption: e,
          opt: c,
          offsetx: j,
          offsety: k,
          index: a,
          recall: f,
          preset: h
        }), h && 0 !== i || b.buildFullTimeLine({
          caption: e,
          opt: c,
          offsetx: j,
          offsety: k,
          index: a,
          recall: f,
          preset: h,
          regenerate: 0 === i
        }), f && "carousel" === c.sliderType && "on" === c.carousel.showLayersAllTime && b.animcompleted(e, c);
      }), c.layers["static"] && jQuery.each(c.layers["static"], function (a, d) {
        var e = jQuery(this),
          g = e.data();
        g.hoveredstatus !== !0 && g.inhoveroutanimation !== !0 ? (b.updateMarkup(this, c), b.prepareSingleCaption({
          caption: e,
          opt: c,
          offsetx: j,
          offsety: k,
          index: a,
          recall: f,
          preset: h
        }), h && 0 !== i || g.veryfirstststic === !0 || (b.buildFullTimeLine({
          caption: e,
          opt: c,
          offsetx: j,
          offsety: k,
          index: a,
          recall: f,
          preset: h,
          regenerate: 0 === i
        }), g.veryfirstststic = !0), f && "carousel" === c.sliderType && "on" === c.carousel.showLayersAllTime && b.animcompleted(e, c)) : b.prepareSingleCaption({
          caption: e,
          opt: c,
          offsetx: j,
          offsety: k,
          index: a,
          recall: f,
          preset: h
        });
      });
      var n = c.nextSlide === -1 || void 0 === c.nextSlide ? 0 : c.nextSlide;
      void 0 !== c.rowzones && (n = n > c.rowzones.length ? c.rowzones.length : n), void 0 != c.rowzones && c.rowzones.length > 0 && void 0 != c.rowzones[n] && n >= 0 && n <= c.rowzones.length && c.rowzones[n].length > 0 && b.setSize(c), h || void 0 !== i && (void 0 !== l && jQuery.each(c.timelines[l].layers, function (a, d) {
        var e = d.layer.data();
        "none" !== d.wrapper && void 0 !== d.wrapper || ("keep" == d.triggerstate && "on" === e.triggerstate ? b.playAnimationFrame({
          caption: d.layer,
          opt: c,
          frame: "frame_0",
          triggerdirection: "in",
          triggerframein: "frame_0",
          triggerframeout: "frame_999"
        }) : d.timeline.restart(0));
      }), c.timelines.staticlayers && jQuery.each(c.timelines.staticlayers.layers, function (a, d) {
        var e = d.layer.data(),
          f = n >= d.firstslide && n <= d.lastslide,
          g = n < d.firstslide || n > d.lastslide,
          h = d.timeline.getLabelTime("slide_" + d.firstslide),
          i = d.timeline.getLabelTime("slide_" + d.lastslide),
          j = e.static_layer_timeline_time,
          k = "in" === e.animdirection || "out" !== e.animdirection && void 0,
          l = "bytrigger" === e.frames[0].delay,
          o = ("bytrigger" === e.frames[e.frames.length - 1].delay, e.triggered_startstatus),
          p = e.lasttriggerstate;
        e.hoveredstatus !== !0 && 1 != e.inhoveroutanimation && (void 0 !== j && k && ("keep" == p ? (b.playAnimationFrame({
          caption: d.layer,
          opt: c,
          frame: "frame_0",
          triggerdirection: "in",
          triggerframein: "frame_0",
          triggerframeout: "frame_999"
        }), e.triggeredtimeline.time(j)) : e.hoveredstatus !== !0 && d.timeline.time(j)), "reset" === p && "hidden" === o && (d.timeline.time(0), e.animdirection = "out"), f ? k ? n === d.lastslide && (d.timeline.play(i), e.animdirection = "in") : (l || "in" === e.animdirection || d.timeline.play(h), ("visible" == o && "keep" !== p || "keep" === p && k === !0 || "visible" == o && void 0 === k) && (d.timeline.play(h + .01), e.animdirection = "in")) : g && k && d.timeline.play("frame_999"));
      })), void 0 != g && setTimeout(function () {
        g.resume();
      }, 30);
    },
    prepareSingleCaption: function prepareSingleCaption(a) {
      var c = a.caption,
        d = c.data(),
        e = a.opt,
        f = a.recall,
        g = a.recall,
        i = (a.preset, jQuery("body").hasClass("rtl"));
      if (d._pw = void 0 === d._pw ? c.closest(".tp-parallax-wrap") : d._pw, d._lw = void 0 === d._lw ? c.closest(".tp-loop-wrap") : d._lw, d._mw = void 0 === d._mw ? c.closest(".tp-mask-wrap") : d._mw, d._responsive = d.responsive || "on", d._respoffset = d.responsive_offset || "on", d._ba = d.basealign || "grid", d._gw = "grid" === d._ba ? e.width : e.ulw, d._gh = "grid" === d._ba ? e.height : e.ulh, d._lig = void 0 === d._lig ? c.hasClass("rev_layer_in_group") ? c.closest(".rev_group") : c.hasClass("rev_layer_in_column") ? c.closest(".rev_column_inner") : c.hasClass("rev_column_inner") ? c.closest(".rev_row") : "none" : d._lig, d._ingroup = void 0 === d._ingroup ? !(c.hasClass("rev_group") || !c.closest(".rev_group")) : d._ingroup, d._isgroup = void 0 === d._isgroup ? !!c.hasClass("rev_group") : d._isgroup, d._nctype = d.type || "none", d._cbgc_auto = void 0 === d._cbgc_auto ? "column" === d._nctype && d._pw.find(".rev_column_bg_auto_sized") : d._cbgc_auto, d._cbgc_man = void 0 === d._cbgc_man ? "column" === d._nctype && d._pw.find(".rev_column_bg_man_sized") : d._cbgc_man, d._slideid = d._slideid || c.closest(".tp-revslider-slidesli").data("index"), d._id = void 0 === d._id ? c.data("id") || c.attr("id") : d._id, d._slidelink = void 0 === d._slidelink ? void 0 !== c.hasClass("slidelink") && c.hasClass("slidelink") : d._slidelink, void 0 === d._li && (c.hasClass("tp-static-layer") ? (d._isstatic = !0, d._li = c.closest(".tp-static-layers"), d._slideid = "staticlayers") : d._li = c.closest(".tp-revslider-slidesli")), d._row = void 0 === d._row ? "column" === d._nctype && d._pw.closest(".rev_row") : d._row, void 0 === d._togglelisteners && c.find(".rs-toggled-content") ? (d._togglelisteners = !0, void 0 === d.actions && c.click(function () {
        b.swaptoggleState(c);
      })) : d._togglelisteners = !1, "fullscreen" == e.sliderLayout && (a.offsety = d._gh / 2 - e.gridheight[e.curWinRange] * e.bh / 2), ("on" == e.autoHeight || void 0 != e.minHeight && e.minHeight > 0) && (a.offsety = e.conh / 2 - e.gridheight[e.curWinRange] * e.bh / 2), a.offsety < 0 && (a.offsety = 0), e.debugMode) {
        c.closest("li").find(".helpgrid").css({
          top: a.offsety + "px",
          left: a.offsetx + "px"
        });
        var k = e.c.find(".hglayerinfo");
        c.on("hover, mouseenter", function () {
          var a = "";
          c.data() && jQuery.each(c.data(), function (b, c) {
            "object" != _typeof(c) && (a = a + '<span style="white-space:nowrap"><span style="color:#27ae60">' + b + ":</span>" + c + "</span>&nbsp; &nbsp; ");
          }), k.html(a);
        });
      }
      var m = void 0 === d.visibility ? "oon" : s(d.visibility, e)[e.forcedWinRange] || s(d.visibility, e) || "ooon";
      if ("off" === m || d._gw < e.hideCaptionAtLimit && "on" == d.captionhidden || d._gw < e.hideAllCaptionAtLimit ? d._pw.addClass("tp-hidden-caption") : d._pw.removeClass("tp-hidden-caption"), d.layertype = "html", a.offsetx < 0 && (a.offsetx = 0), void 0 != d.thumbimage && void 0 == d.videoposter && (d.videoposter = d.thumbimage), c.find("img").length > 0) {
        var n = c.find("img");
        d.layertype = "image", 0 == n.width() && n.css({
          width: "auto"
        }), 0 == n.height() && n.css({
          height: "auto"
        }), void 0 == n.data("ww") && n.width() > 0 && n.data("ww", n.width()), void 0 == n.data("hh") && n.height() > 0 && n.data("hh", n.height());
        var o = n.data("ww"),
          p = n.data("hh"),
          q = "slide" == d._ba ? e.ulw : e.gridwidth[e.curWinRange],
          r = "slide" == d._ba ? e.ulh : e.gridheight[e.curWinRange];
        o = s(n.data("ww"), e)[e.curWinRange] || s(n.data("ww"), e) || "auto", p = s(n.data("hh"), e)[e.curWinRange] || s(n.data("hh"), e) || "auto";
        var u = "full" === o || "full-proportional" === o,
          x = "full" === p || "full-proportional" === p;
        if ("full-proportional" === o) {
          var z = n.data("owidth"),
            A = n.data("oheight");
          z / q < A / r ? (o = q, p = A * (q / z)) : (p = r, o = z * (r / A));
        } else o = u ? q : !jQuery.isNumeric(o) && o.indexOf("%") > 0 ? o : parseFloat(o), p = x ? r : !jQuery.isNumeric(p) && p.indexOf("%") > 0 ? p : parseFloat(p);
        o = void 0 === o ? 0 : o, p = void 0 === p ? 0 : p, "off" !== d._responsive ? ("grid" != d._ba && u ? jQuery.isNumeric(o) ? n.css({
          width: o + "px"
        }) : n.css({
          width: o
        }) : jQuery.isNumeric(o) ? n.css({
          width: o * e.bw + "px"
        }) : n.css({
          width: o
        }), "grid" != d._ba && x ? jQuery.isNumeric(p) ? n.css({
          height: p + "px"
        }) : n.css({
          height: p
        }) : jQuery.isNumeric(p) ? n.css({
          height: p * e.bh + "px"
        }) : n.css({
          height: p
        })) : n.css({
          width: o,
          height: p
        }), d._ingroup && "row" !== d._nctype && (void 0 !== o && !jQuery.isNumeric(o) && "string" === jQuery.type(o) && o.indexOf("%") > 0 && punchgs.TweenLite.set([d._lw, d._pw, d._mw], {
          minWidth: o
        }), void 0 !== p && !jQuery.isNumeric(p) && "string" === jQuery.type(p) && p.indexOf("%") > 0 && punchgs.TweenLite.set([d._lw, d._pw, d._mw], {
          minHeight: p
        }));
      }
      if ("slide" === d._ba) a.offsetx = 0, a.offsety = 0;else if (d._isstatic && void 0 !== e.carousel && void 0 !== e.carousel.horizontal_align && "carousel" === e.sliderType) {
        switch (e.carousel.horizontal_align) {
          case "center":
            a.offsetx = 0 + (e.ulw - e.gridwidth[e.curWinRange] * e.bw) / 2;
            break;
          case "left":
            break;
          case "right":
            a.offsetx = e.ulw - e.gridwidth[e.curWinRange] * e.bw;
        }
        a.offsetx = a.offsetx < 0 ? 0 : a.offsetx;
      }
      var B = "html5" == d.audio ? "audio" : "video";
      if (c.hasClass("tp-videolayer") || c.hasClass("tp-audiolayer") || c.find("iframe").length > 0 || c.find(B).length > 0) {
        if (d.layertype = "video", b.manageVideoLayer && b.manageVideoLayer(c, e, f, g), !f && !g) {
          d.videotype;
          b.resetVideo && b.resetVideo(c, e, a.preset);
        }
        var D = d.aspectratio;
        void 0 != D && D.split(":").length > 1 && b.prepareCoveredVideo(D, e, c);
        var n = c.find("iframe") ? c.find("iframe") : n = c.find(B),
          E = !c.find("iframe"),
          F = c.hasClass("coverscreenvideo");
        n.css({
          display: "block"
        }), void 0 == c.data("videowidth") && (c.data("videowidth", n.width()), c.data("videoheight", n.height()));
        var o = s(c.data("videowidth"), e)[e.curWinRange] || s(c.data("videowidth"), e) || "auto",
          p = s(c.data("videoheight"), e)[e.curWinRange] || s(c.data("videoheight"), e) || "auto";
        !jQuery.isNumeric(o) && o.indexOf("%") > 0 ? p = parseFloat(p) * e.bh + "px" : (o = parseFloat(o) * e.bw + "px", p = parseFloat(p) * e.bh + "px"), d.cssobj = void 0 === d.cssobj ? v(c, 0) : d.cssobj;
        var G = w(d.cssobj, e);
        if ("auto" == G.lineHeight && (G.lineHeight = G.fontSize + 4), c.hasClass("fullscreenvideo") || F) {
          a.offsetx = 0, a.offsety = 0, c.data("x", 0), c.data("y", 0);
          var H = d._gh;
          "on" == e.autoHeight && (H = e.conh), c.css({
            width: d._gw,
            height: H
          });
        } else punchgs.TweenLite.set(c, {
          paddingTop: Math.round(G.paddingTop * e.bh) + "px",
          paddingBottom: Math.round(G.paddingBottom * e.bh) + "px",
          paddingLeft: Math.round(G.paddingLeft * e.bw) + "px",
          paddingRight: Math.round(G.paddingRight * e.bw) + "px",
          marginTop: G.marginTop * e.bh + "px",
          marginBottom: G.marginBottom * e.bh + "px",
          marginLeft: G.marginLeft * e.bw + "px",
          marginRight: G.marginRight * e.bw + "px",
          borderTopWidth: Math.round(G.borderTopWidth * e.bh) + "px",
          borderBottomWidth: Math.round(G.borderBottomWidth * e.bh) + "px",
          borderLeftWidth: Math.round(G.borderLeftWidth * e.bw) + "px",
          borderRightWidth: Math.round(G.borderRightWidth * e.bw) + "px",
          width: o,
          height: p
        });
        (0 == E && !F || 1 != d.forcecover && !c.hasClass("fullscreenvideo") && !F) && (n.width(o), n.height(p)), d._ingroup && null !== d.videowidth && void 0 !== d.videowidth && !jQuery.isNumeric(d.videowidth) && d.videowidth.indexOf("%") > 0 && punchgs.TweenLite.set([d._lw, d._pw, d._mw], {
          minWidth: d.videowidth
        });
      }
      y(c, e, 0, d._responsive), c.hasClass("tp-resizeme") && c.find("*").each(function () {
        y(jQuery(this), e, "rekursive", d._responsive);
      });
      var I = c.outerHeight(),
        J = c.css("backgroundColor");
      t(c, ".frontcorner", "left", "borderRight", "borderTopColor", I, J), t(c, ".frontcornertop", "left", "borderRight", "borderBottomColor", I, J), t(c, ".backcorner", "right", "borderLeft", "borderBottomColor", I, J), t(c, ".backcornertop", "right", "borderLeft", "borderTopColor", I, J), "on" == e.fullScreenAlignForce && (a.offsetx = 0, a.offsety = 0), "block" === d._sfx && void 0 === d._bmask && (d._bmask = jQuery('<div class="tp-blockmask"></div>'), d._mw.append(d._bmask)), d.arrobj = new Object(), d.arrobj.voa = s(d.voffset, e)[e.curWinRange] || s(d.voffset, e)[0], d.arrobj.hoa = s(d.hoffset, e)[e.curWinRange] || s(d.hoffset, e)[0], d.arrobj.elx = s(d.x, e)[e.curWinRange] || s(d.x, e)[0], d.arrobj.ely = s(d.y, e)[e.curWinRange] || s(d.y, e)[0];
      var K = 0 == d.arrobj.voa.length ? 0 : d.arrobj.voa,
        L = 0 == d.arrobj.hoa.length ? 0 : d.arrobj.hoa,
        M = 0 == d.arrobj.elx.length ? 0 : d.arrobj.elx,
        N = 0 == d.arrobj.ely.length ? 0 : d.arrobj.ely;
      d.eow = c.outerWidth(!0), d.eoh = c.outerHeight(!0), 0 == d.eow && 0 == d.eoh && (d.eow = e.ulw, d.eoh = e.ulh);
      var O = "off" !== d._respoffset ? parseInt(K, 0) * e.bw : parseInt(K, 0),
        P = "off" !== d._respoffset ? parseInt(L, 0) * e.bw : parseInt(L, 0),
        Q = "grid" === d._ba ? e.gridwidth[e.curWinRange] * e.bw : d._gw,
        R = "grid" === d._ba ? e.gridheight[e.curWinRange] * e.bw : d._gh;
      "on" == e.fullScreenAlignForce && (Q = e.ulw, R = e.ulh), "none" !== d._lig && void 0 != d._lig && (Q = d._lig.width(), R = d._lig.height(), a.offsetx = 0, a.offsety = 0), M = "center" === M || "middle" === M ? Q / 2 - d.eow / 2 + P : "left" === M ? P : "right" === M ? Q - d.eow - P : "off" !== d._respoffset ? M * e.bw : M, N = "center" == N || "middle" == N ? R / 2 - d.eoh / 2 + O : "top" == N ? O : "bottom" == N ? R - d.eoh - O : "off" !== d._respoffset ? N * e.bw : N, i && !d._slidelink && (M += d.eow), d._slidelink && (M = 0), d.calcx = parseInt(M, 0) + a.offsetx, d.calcy = parseInt(N, 0) + a.offsety;
      var S = c.css("z-Index");
      if ("row" !== d._nctype && "column" !== d._nctype) punchgs.TweenLite.set(d._pw, {
        zIndex: S,
        top: d.calcy,
        left: d.calcx,
        overwrite: "auto"
      });else if ("row" !== d._nctype) punchgs.TweenLite.set(d._pw, {
        zIndex: S,
        width: d.columnwidth,
        top: 0,
        left: 0,
        overwrite: "auto"
      });else if ("row" === d._nctype) {
        var T = "grid" === d._ba ? Q + "px" : "100%";
        punchgs.TweenLite.set(d._pw, {
          zIndex: S,
          width: T,
          top: 0,
          left: a.offsetx,
          overwrite: "auto"
        });
      }
      void 0 !== d.blendmode && punchgs.TweenLite.set(d._pw, {
        mixBlendMode: d.blendmode
      }), "row" === d._nctype && (d.columnbreak <= e.curWinRange ? c.addClass("rev_break_columns") : c.removeClass("rev_break_columns")), "on" == d.loopanimation && punchgs.TweenLite.set(d._lw, {
        minWidth: d.eow,
        minHeight: d.eoh
      }), d._ingroup && "row" !== d._nctype && (void 0 !== d._groupw && !jQuery.isNumeric(d._groupw) && d._groupw.indexOf("%") > 0 && punchgs.TweenLite.set([d._lw, d._pw, d._mw], {
        minWidth: d._groupw
      }), void 0 !== d._grouph && !jQuery.isNumeric(d._grouph) && d._grouph.indexOf("%") > 0 && punchgs.TweenLite.set([d._lw, d._pw, d._mw], {
        minHeight: d._grouph
      }));
    },
    createTimelineStructure: function createTimelineStructure(a) {
      function b(a, b, c, d) {
        var f,
          e = new punchgs.TimelineLite({
            paused: !0
          });
        c = c || new Object(), c[a.attr("id")] = c[a.attr("id")] || new Object(), "staticlayers" === d && (c[a.attr("id")].firstslide = a.data("startslide"), c[a.attr("id")].lastslide = a.data("endslide")), a.data("slideid", d), c[a.attr("id")].defclasses = f = a[0].className, c[a.attr("id")].wrapper = f.indexOf("rev_layer_in_column") >= 0 ? a.closest(".rev_column_inner") : f.indexOf("rev_column_inner") >= 0 ? a.closest(".rev_row") : f.indexOf("rev_layer_in_group") >= 0 ? a.closest(".rev_group") : "none", c[a.attr("id")].timeline = e, c[a.attr("id")].layer = a, c[a.attr("id")].triggerstate = a.data("lasttriggerstate"), c[a.attr("id")].dchildren = f.indexOf("rev_row") >= 0 ? a[0].getElementsByClassName("rev_column_inner") : f.indexOf("rev_column_inner") >= 0 ? a[0].getElementsByClassName("tp-caption") : f.indexOf("rev_group") >= 0 ? a[0].getElementsByClassName("rev_layer_in_group") : "none", a.data("timeline", e);
      }
      a.timelines = a.timelines || new Object(), a.c.find(".tp-revslider-slidesli, .tp-static-layers").each(function () {
        var c = jQuery(this),
          d = c.data("index");
        a.timelines[d] = a.timelines[d] || {}, a.timelines[d].layers = a.timelines[d].layers || new Object(), c.find(".tp-caption").each(function (c) {
          b(jQuery(this), a, a.timelines[d].layers, d);
        });
      });
    },
    buildFullTimeLine: function buildFullTimeLine(a) {
      var h,
        i,
        c = a.caption,
        d = c.data(),
        e = a.opt,
        g = {},
        j = n();
      if (h = e.timelines[d._slideid].layers[d._id], !h.generated || a.regenerate === !0) {
        if (i = h.timeline, h.generated = !0, void 0 !== d.current_timeline && a.regenerate !== !0 ? (d.current_timeline_pause = d.current_timeline.paused(), d.current_timeline_time = d.current_timeline.time(), d.current_is_nc_timeline = i === d.current_timeline, d.static_layer_timeline_time = d.current_timeline_time) : (d.static_layer_timeline_time = d.current_timeline_time, d.current_timeline_time = 0, d.current_timeline && d.current_timeline.clear()), i.clear(), g.svg = void 0 != d.svg_src && c.find("svg"), g.svg && (d.idlesvg = l(d.svg_idle, k()), punchgs.TweenLite.set(g.svg, d.idlesvg.anim)), d.hoverframeindex !== -1 && void 0 !== d.hoverframeindex && !c.hasClass("rs-hover-ready")) {
          if (c.addClass("rs-hover-ready"), d.hovertimelines = {}, d.hoveranim = q(j, d.frames[d.hoverframeindex].to), d.hoveranim = u(d.hoveranim, d.frames[d.hoverframeindex].style), g.svg) {
            var o = l(d.svg_hover, k());
            void 0 != d.hoveranim.anim.color && (o.anim.fill = d.hoveranim.anim.color, d.idlesvg.anim.css.fill = g.svg.css("fill")), d.hoversvg = o;
          }
          c.hover(function (a) {
            var b = {
                caption: jQuery(a.currentTarget),
                opt: e,
                firstframe: "frame_0",
                lastframe: "frame_999"
              },
              d = (f(b), b.caption),
              h = d.data(),
              i = h.frames[h.hoverframeindex],
              j = !0;
            h.forcehover = i.force, j && (h.hovertimelines.item = punchgs.TweenLite.to(d, i.speed / 1e3, h.hoveranim.anim), (h.hoverzIndex || h.hoveranim.anim && h.hoveranim.anim.zIndex) && (h.basiczindex = void 0 === h.basiczindex ? h.cssobj.zIndex : h.basiczindex, h.hoverzIndex = void 0 === h.hoverzIndex ? h.hoveranim.anim.zIndex : h.hoverzIndex, h.inhoverinanimation = !0, 0 === i.speed && (h.inhoverinanimation = !1), h.hovertimelines.pwhoveranim = punchgs.TweenLite.to(h._pw, i.speed / 1e3, {
              overwrite: "auto",
              zIndex: h.hoverzIndex
            }), h.hovertimelines.pwhoveranim.eventCallback("onComplete", function (a) {
              a.inhoverinanimation = !1;
            }, [h])), g.svg && (h.hovertimelines.svghoveranim = punchgs.TweenLite.to([g.svg, g.svg.find("path")], i.speed / 1e3, h.hoversvg.anim)), h.hoveredstatus = !0);
          }, function (a) {
            var b = {
                caption: jQuery(a.currentTarget),
                opt: e,
                firstframe: "frame_0",
                lastframe: "frame_999"
              },
              d = (f(b), b.caption),
              h = d.data(),
              i = h.frames[h.hoverframeindex],
              j = !0;
            j && (h.hoveredstatus = !1, h.inhoveroutanimation = !0, h.hovertimelines.item.pause(), h.hovertimelines.item = punchgs.TweenLite.to(d, i.speed / 1e3, jQuery.extend(!0, {}, h._gsTransformTo)), 0 == i.speed && (h.inhoveroutanimation = !1), h.hovertimelines.item.eventCallback("onComplete", function (a) {
              a.inhoveroutanimation = !1;
            }, [h]), void 0 !== h.hovertimelines.pwhoveranim && (h.hovertimelines.pwhoveranim = punchgs.TweenLite.to(h._pw, i.speed / 1e3, {
              overwrite: "auto",
              zIndex: h.basiczindex
            })), g.svg && punchgs.TweenLite.to([g.svg, g.svg.find("path")], i.speed / 1e3, h.idlesvg.anim));
          });
        }
        for (var p = 0; p < d.frames.length; p++) if (p !== d.hoverframeindex) {
          var r = p === d.inframeindex ? "frame_0" : p === d.outframeindex || "frame_999" === d.frames[p].frame ? "frame_999" : "frame_" + p;
          d.frames[p].framename = r, h[r] = {}, h[r].timeline = new punchgs.TimelineLite({
            align: "normal"
          });
          var s = d.frames[p].delay,
            v = (d.triggered_startstatus, void 0 !== s ? jQuery.inArray(s, ["slideenter", "bytrigger", "wait"]) >= 0 ? s : parseInt(s, 0) / 1e3 : "wait");
          void 0 !== h.firstslide && "frame_0" === r && (i.addLabel("slide_" + h.firstslide + "_pause", 0), i.addPause("slide_" + h.firstslide + "_pause"), i.addLabel("slide_" + h.firstslide, "+=0.005")), void 0 !== h.lastslide && "frame_999" === r && (i.addLabel("slide_" + h.lastslide + "_pause", "+=0.01"), i.addPause("slide_" + h.lastslide + "_pause"), i.addLabel("slide_" + h.lastslide, "+=0.005")), jQuery.isNumeric(v) ? i.addLabel(r, "+=" + v) : (i.addLabel("pause_" + p, "+=0.01"), i.addPause("pause_" + p), i.addLabel(r, "+=0.01")), i = b.createFrameOnTimeline({
            caption: a.caption,
            timeline: i,
            label: r,
            frameindex: p,
            opt: e
          });
        }
        a.regenerate || (d.current_is_nc_timeline && (d.current_timeline = i), d.current_timeline_pause ? i.pause(d.current_timeline_time) : i.time(d.current_timeline_time));
      }
    },
    createFrameOnTimeline: function createFrameOnTimeline(a) {
      var c = a.caption,
        d = c.data(),
        e = a.label,
        f = a.timeline,
        g = a.frameindex,
        k = a.opt,
        l = c,
        n = {},
        o = k.timelines[d._slideid].layers[d._id],
        s = d.frames.length - 1,
        t = d.frames[g].split,
        u = d.frames[g].split_direction,
        v = d.frames[g].sfx_effect,
        w = !1;
      if (u = void 0 === u ? "forward" : u, d.hoverframeindex !== -1 && d.hoverframeindex == s && (s -= 1), n.content = new punchgs.TimelineLite({
        align: "normal"
      }), n.mask = new punchgs.TimelineLite({
        align: "normal"
      }), void 0 === f.vars.id && (f.vars.id = Math.round(1e5 * Math.random())), "column" === d._nctype && (f.add(punchgs.TweenLite.set(d._cbgc_man, {
        display: "block"
      }), e), f.add(punchgs.TweenLite.set(d._cbgc_auto, {
        display: "none"
      }), e)), d.splittext && 0 === g) {
        void 0 !== d.mySplitText && d.mySplitText.revert();
        var x = c.find("a").length > 0 ? c.find("a") : c;
        d.mySplitText = new punchgs.SplitText(x, {
          type: "chars,words,lines",
          charsClass: "tp-splitted tp-charsplit",
          wordsClass: "tp-splitted tp-wordsplit",
          linesClass: "tp-splitted tp-linesplit"
        }), c.addClass("splitted");
      }
      void 0 !== d.mySplitText && t && t.match(/chars|words|lines/g) && (l = d.mySplitText[t], w = !0);
      var D,
        E,
        y = g !== d.outframeindex ? q(j(), d.frames[g].to, void 0, w, l.length - 1) : void 0 !== d.frames[g].to && null === d.frames[g].to.match(/auto:auto/g) ? q(m(), d.frames[g].to, 1 == k.sdir, w, l.length - 1) : q(m(), d.frames[d.inframeindex].from, 0 == k.sdir, w, l.length - 1),
        B = void 0 !== d.frames[g].from ? q(y, d.frames[d.inframeindex].from, 1 == k.sdir, w, l.length - 1) : void 0,
        C = d.frames[g].splitdelay;
      if (0 !== g || a.fromcurrentstate ? E = r(d.frames[g].mask) : D = r(d.frames[g].mask), y.anim.ease = void 0 === d.frames[g].ease ? punchgs.Power1.easeInOut : d.frames[g].ease, void 0 !== B && (B.anim.ease = void 0 === d.frames[g].ease ? punchgs.Power1.easeInOut : d.frames[g].ease, B.speed = void 0 === d.frames[g].speed ? B.speed : d.frames[g].speed, B.anim.x = B.anim.x * k.bw || p(B.anim.x, k, d.eow, d.eoh, d.calcy, d.calcx, "horizontal"), B.anim.y = B.anim.y * k.bw || p(B.anim.y, k, d.eow, d.eoh, d.calcy, d.calcx, "vertical")), void 0 !== y && (y.anim.ease = void 0 === d.frames[g].ease ? punchgs.Power1.easeInOut : d.frames[g].ease, y.speed = void 0 === d.frames[g].speed ? y.speed : d.frames[g].speed, y.anim.x = y.anim.x * k.bw || p(y.anim.x, k, d.eow, d.eoh, d.calcy, d.calcx, "horizontal"), y.anim.y = y.anim.y * k.bw || p(y.anim.y, k, d.eow, d.eoh, d.calcy, d.calcx, "vertical")), c.data("iframes") && f.add(punchgs.TweenLite.set(c.find("iframe"), {
        autoAlpha: 1
      }), e + "+=0.001"), g === d.outframeindex && (d.frames[g].to && d.frames[g].to.match(/auto:auto/g), y.speed = void 0 === d.frames[g].speed || "inherit" === d.frames[g].speed ? d.frames[d.inframeindex].speed : d.frames[g].speed, y.anim.ease = void 0 === d.frames[g].ease || "inherit" === d.frames[g].ease ? d.frames[d.inframeindex].ease : d.frames[g].ease, y.anim.overwrite = "auto"), 0 !== g || a.fromcurrentstate) 0 === g && a.fromcurrentstate && (y.speed = B.speed);else {
        if (l != c) {
          var F = jQuery.extend({}, y.anim, !0);
          f.add(punchgs.TweenLite.set(c, y.anim), e), y = j(), y.ease = F.ease, void 0 !== F.filter && (y.anim.filter = F.filter), void 0 !== F["-webkit-filter"] && (y.anim["-webkit-filter"] = F["-webkit-filter"]);
        }
        B.anim.visibility = "hidden", B.anim.immediateRender = !0, y.anim.visibility = "visible";
      }
      a.fromcurrentstate && (y.anim.immediateRender = !0);
      var G = -1;
      if (0 === g && !a.fromcurrentstate && void 0 !== d._bmask && void 0 !== v && v.indexOf("block") >= 0 || g === d.outframeindex && !a.fromcurrentstate && void 0 !== d._bmask && void 0 !== v && v.indexOf("block") >= 0) {
        var H = 0 === g ? B.speed / 1e3 / 2 : y.speed / 1e3 / 2,
          I = [{
            scaleY: 1,
            scaleX: 0,
            transformOrigin: "0% 50%"
          }, {
            scaleY: 1,
            scaleX: 1,
            ease: y.anim.ease
          }],
          J = {
            scaleY: 1,
            scaleX: 0,
            transformOrigin: "100% 50%",
            ease: y.anim.ease
          };
        switch (G = void 0 === C ? H : C + H, v) {
          case "blocktoleft":
          case "blockfromright":
            I[0].transformOrigin = "100% 50%", J.transformOrigin = "0% 50%";
            break;
          case "blockfromtop":
          case "blocktobottom":
            I = [{
              scaleX: 1,
              scaleY: 0,
              transformOrigin: "50% 0%"
            }, {
              scaleX: 1,
              scaleY: 1,
              ease: y.anim.ease
            }], J = {
              scaleX: 1,
              scaleY: 0,
              transformOrigin: "50% 100%",
              ease: y.anim.ease
            };
            break;
          case "blocktotop":
          case "blockfrombottom":
            I = [{
              scaleX: 1,
              scaleY: 0,
              transformOrigin: "50% 100%"
            }, {
              scaleX: 1,
              scaleY: 1,
              ease: y.anim.ease
            }], J = {
              scaleX: 1,
              scaleY: 0,
              transformOrigin: "50% 0%",
              ease: y.anim.ease
            };
        }
        I[0].background = d.frames[g].sfxcolor, f.add(n.mask.fromTo(d._bmask, H, I[0], I[1], C), e), f.add(n.mask.to(d._bmask, H, J, G), e);
      }
      if (w) var K = h(l.length - 1, u);
      if (0 !== g || a.fromcurrentstate) {
        if ("block" === d._sfx_out && g === d.outframeindex) f.add(n.content.staggerTo(l, .001, {
          autoAlpha: 0,
          delay: G
        }), e), f.add(n.content.staggerTo(l, y.speed / 1e3 / 2 - .001, {
          x: 0,
          delay: G
        }), e + "+=0.001");else if (w && void 0 !== K) {
          var L = {
            to: i(y.anim)
          };
          for (var M in l) {
            var O = jQuery.extend({}, y.anim);
            for (var P in L.to) O[P] = parseInt(L.to[P].values[L.to[P].index], 0), L.to[P].index = L.to[P].index < L.to[P].len ? L.to[P].index + 1 : 0;
            f.add(n.content.to(l[K[M]], y.speed / 1e3, O, C * M), e);
          }
        } else f.add(n.content.staggerTo(l, y.speed / 1e3, y.anim, C), e);
      } else if ("block" === d._sfx_in) f.add(n.content.staggerFromTo(l, .05, {
        x: 0,
        y: 0,
        autoAlpha: 0
      }, {
        x: 0,
        y: 0,
        autoAlpha: 1,
        delay: G
      }), e);else if (w && void 0 !== K) {
        var L = {
          from: i(B.anim),
          to: i(y.anim)
        };
        for (var M in l) {
          var N = jQuery.extend({}, B.anim),
            O = jQuery.extend({}, y.anim);
          for (var P in L.from) N[P] = parseInt(L.from[P].values[L.from[P].index], 0), L.from[P].index = L.from[P].index < L.from[P].len ? L.from[P].index + 1 : 0;
          O.ease = N.ease, f.add(n.content.fromTo(l[K[M]], B.speed / 1e3, N, O, C * M), e);
        }
      } else f.add(n.content.staggerFromTo(l, B.speed / 1e3, B.anim, y.anim, C), e);
      return void 0 === E || E === !1 || 0 === g && a.ignorefirstframe || (E.anim.ease = void 0 === E.anim.ease || "inherit" === E.anim.ease ? d.frames[0].ease : E.anim.ease, E.anim.overflow = "hidden", E.anim.x = E.anim.x * k.bw || p(E.anim.x, k, d.eow, d.eoh, d.calcy, d.calcx, "horizontal"), E.anim.y = E.anim.y * k.bw || p(E.anim.y, k, d.eow, d.eoh, d.calcy, d.calcx, "vertical")), 0 === g && D && D !== !1 && !a.fromcurrentstate || 0 === g && a.ignorefirstframe ? (E = new Object(), E.anim = new Object(), E.anim.overwrite = "auto", E.anim.ease = y.anim.ease, E.anim.x = E.anim.y = 0, D && D !== !1 && (D.anim.x = D.anim.x * k.bw || p(D.anim.x, k, d.eow, d.eoh, d.calcy, d.calcx, "horizontal"), D.anim.y = D.anim.y * k.bw || p(D.anim.y, k, d.eow, d.eoh, d.calcy, d.calcx, "vertical"), D.anim.overflow = "hidden")) : 0 === g && f.add(n.mask.set(d._mw, {
        overflow: "visible"
      }), e), void 0 !== D && void 0 !== E && D !== !1 && E !== !1 ? f.add(n.mask.fromTo(d._mw, B.speed / 1e3, D.anim, E.anim, C), e) : void 0 !== E && E !== !1 && f.add(n.mask.to(d._mw, y.speed / 1e3, E.anim, C), e), f.addLabel(e + "_end"), d._gsTransformTo && g === s && d.hoveredstatus && (d.hovertimelines.item = punchgs.TweenLite.to(c, 0, d._gsTransformTo)), d._gsTransformTo = !1, n.content.eventCallback("onStart", function (a, c, d, e, f, g, h, i) {
        var j = {};
        if (j.layer = h, j.eventtype = 0 === a ? "enterstage" : a === e.outframeindex ? "leavestage" : "framestarted", j.layertype = h.data("layertype"), e.active = !0, j.frame_index = a, j.layersettings = h.data(), k.c.trigger("revolution.layeraction", [j]), "on" == e.loopanimation && A(e._lw, k.bw), "enterstage" === j.eventtype && (e.animdirection = "in", e.visibleelement = !0, b.toggleState(e.layertoggledby)), "none" !== c.dchildren && void 0 !== c.dchildren && c.dchildren.length > 0) if (0 === a) for (var l = 0; l < c.dchildren.length; l++) jQuery(c.dchildren[l]).data("timeline").play(0);else if (a === e.outframeindex) for (var l = 0; l < c.dchildren.length; l++) b.endMoveCaption({
          caption: jQuery(c.dchildren[l]),
          opt: k,
          checkchildrens: !0
        });
        punchgs.TweenLite.set(d, {
          visibility: "visible"
        }), e.current_frame = a, e.current_timeline = f, e.current_timeline_time = f.time(), i && (e.static_layer_timeline_time = e.current_timeline_time), e.last_frame_started = a;
      }, [g, o, d._pw, d, f, y.anim, c, a.updateStaticTimeline]), n.content.eventCallback("onUpdate", function (a, b, d, e, f, g, h, i) {
        "column" === e._nctype && z(c, k), punchgs.TweenLite.set(d, {
          visibility: "visible"
        }), e.current_frame = g, e.current_timeline = f, e.current_timeline_time = f.time(), i && (e.static_layer_timeline_time = e.current_timeline_time), void 0 !== e.hoveranim && e._gsTransformTo === !1 && (e._gsTransformTo = h, e._gsTransformTo && e._gsTransformTo.startAt && delete e._gsTransformTo.startAt, void 0 === e.cssobj.styleProps.css ? e._gsTransformTo = jQuery.extend(!0, {}, e.cssobj.styleProps, e._gsTransformTo) : e._gsTransformTo = jQuery.extend(!0, {}, e.cssobj.styleProps.css, e._gsTransformTo)), e.visibleelement = !0;
      }, [e, d._id, d._pw, d, f, g, jQuery.extend(!0, {}, y.anim), a.updateStaticTimeline]), n.content.eventCallback("onComplete", function (a, d, e, f, g, h, i) {
        var j = {};
        j.layer = c, j.eventtype = 0 === a ? "enteredstage" : a === d - 1 || a === e ? "leftstage" : "frameended", j.layertype = c.data("layertype"), j.layersettings = c.data(), k.c.trigger("revolution.layeraction", [j]), "leftstage" !== j.eventtype && b.animcompleted(c, k), "leftstage" === j.eventtype && b.stopVideo && b.stopVideo(c, k), "column" === g._nctype && (punchgs.TweenLite.set(g._cbgc_man, {
          display: "none"
        }), punchgs.TweenLite.set(g._cbgc_auto, {
          display: "block"
        })), "leftstage" === j.eventtype && (g.active = !1, punchgs.TweenLite.set(f, {
          visibility: "hidden",
          overwrite: "auto"
        }), g.animdirection = "out", g.visibleelement = !1, b.unToggleState(g.layertoggledby)), g.current_frame = a, g.current_timeline = h, g.current_timeline_time = h.time(), i && (g.static_layer_timeline_time = g.current_timeline_time);
      }, [g, d.frames.length, s, d._pw, d, f, a.updateStaticTimeline]), f;
    },
    endMoveCaption: function endMoveCaption(a) {
      a.firstframe = "frame_0", a.lastframe = "frame_999";
      var c = f(a),
        d = a.caption.data();
      if (void 0 !== a.frame ? c.timeline.play(a.frame) : (!c["static"] || a.currentslide >= c.removeonslide || a.currentslide < c.showonslide) && (c.outnow = new punchgs.TimelineLite(), c.timeline.pause(), d.visibleelement === !0 && b.createFrameOnTimeline({
        caption: a.caption,
        timeline: c.outnow,
        label: "outnow",
        frameindex: a.caption.data("outframeindex"),
        opt: a.opt,
        fromcurrentstate: !0
      }).play()), a.checkchildrens && c.timeline_obj && c.timeline_obj.dchildren && "none" !== c.timeline_obj.dchildren && c.timeline_obj.dchildren.length > 0) for (var e = 0; e < c.timeline_obj.dchildren.length; e++) b.endMoveCaption({
        caption: jQuery(c.timeline_obj.dchildren[e]),
        opt: a.opt
      });
    },
    playAnimationFrame: function playAnimationFrame(a) {
      a.firstframe = a.triggerframein, a.lastframe = a.triggerframeout;
      var e,
        c = f(a),
        d = a.caption.data(),
        g = 0;
      for (var h in d.frames) d.frames[h].framename === a.frame && (e = g), g++;
      void 0 !== d.triggeredtimeline && d.triggeredtimeline.pause(), d.triggeredtimeline = new punchgs.TimelineLite(), c.timeline.pause();
      var i = d.visibleelement === !0;
      d.triggeredtimeline = b.createFrameOnTimeline({
        caption: a.caption,
        timeline: d.triggeredtimeline,
        label: "triggered",
        frameindex: e,
        updateStaticTimeline: !0,
        opt: a.opt,
        ignorefirstframe: !0,
        fromcurrentstate: i
      }).play();
    },
    removeTheCaptions: function removeTheCaptions(a, c) {
      if ("stop" === b.compare_version(e).check) return !1;
      var f = a.data("index"),
        g = new Array();
      c.layers[f] && jQuery.each(c.layers[f], function (a, b) {
        g.push(b);
      });
      var h = b.currentSlideIndex(c);
      g && jQuery.each(g, function (a) {
        var d = jQuery(this);
        "carousel" === c.sliderType && "on" === c.carousel.showLayersAllTime ? (clearTimeout(d.data("videoplaywait")), b.stopVideo && b.stopVideo(d, c), b.removeMediaFromList && b.removeMediaFromList(d, c), c.lastplayedvideos = []) : (B(d), clearTimeout(d.data("videoplaywait")), b.endMoveCaption({
          caption: d,
          opt: c,
          currentslide: h
        }), b.removeMediaFromList && b.removeMediaFromList(d, c), c.lastplayedvideos = []);
      });
    }
  });
  var f = function f(a) {
      var b = {};
      return a.firstframe = void 0 === a.firstframe ? "frame_0" : a.firstframe, a.lastframe = void 0 === a.lastframe ? "frame_999" : a.lastframe, b.id = a.caption.data("id") || a.caption.attr("id"), b.slideid = a.caption.data("slideid") || a.caption.closest(".tp-revslider-slidesli").data("index"), b.timeline_obj = a.opt.timelines[b.slideid].layers[b.id], b.timeline = b.timeline_obj.timeline, b.ffs = b.timeline.getLabelTime(a.firstframe), b.ffe = b.timeline.getLabelTime(a.firstframe + "_end"), b.lfs = b.timeline.getLabelTime(a.lastframe), b.lfe = b.timeline.getLabelTime(a.lastframe + "_end"), b.ct = b.timeline.time(), b["static"] = void 0 != b.timeline_obj.firstslide || void 0 != b.timeline_obj.lastslide, b["static"] && (b.showonslide = b.timeline_obj.firstslide, b.removeonslide = b.timeline_obj.lastslide), b;
    },
    g = function g(a) {
      for (var c, d, b = a.length; 0 !== b;) d = Math.floor(Math.random() * b), b -= 1, c = a[b], a[b] = a[d], a[d] = c;
      return a;
    },
    h = function h(a, b) {
      var c = new Array();
      switch (b) {
        case "forward":
        case "random":
          for (var d = 0; d <= a; d++) c.push(d);
          "random" === b && (c = g(c));
          break;
        case "backward":
          for (var d = 0; d <= a; d++) c.push(a - d);
          break;
        case "middletoedge":
          var e = Math.ceil(a / 2),
            f = e - 1,
            h = e + 1;
          c.push(e);
          for (var d = 0; d < e; d++) f >= 0 && c.push(f), h <= a && c.push(h), f--, h++;
          break;
        case "edgetomiddle":
          for (var f = a, h = 0, d = 0; d <= Math.floor(a / 2); d++) c.push(f), h < f && c.push(h), f--, h++;
      }
      return c;
    },
    i = function i(a) {
      var b = {};
      for (var c in a) "string" == typeof a[c] && a[c].indexOf("|") >= 0 && (void 0 === b[c] && (b[c] = {
        index: 0
      }), b[c].values = a[c].replace("[", "").replace("]", "").split("|"), b[c].len = b[c].values.length - 1);
      return b;
    },
    j = function j(a) {
      return a = void 0 === a ? new Object() : a, a.anim = void 0 === a.anim ? new Object() : a.anim, a.anim.x = void 0 === a.anim.x ? 0 : a.anim.x, a.anim.y = void 0 === a.anim.y ? 0 : a.anim.y, a.anim.z = void 0 === a.anim.z ? 0 : a.anim.z, a.anim.rotationX = void 0 === a.anim.rotationX ? 0 : a.anim.rotationX, a.anim.rotationY = void 0 === a.anim.rotationY ? 0 : a.anim.rotationY, a.anim.rotationZ = void 0 === a.anim.rotationZ ? 0 : a.anim.rotationZ, a.anim.scaleX = void 0 === a.anim.scaleX ? 1 : a.anim.scaleX, a.anim.scaleY = void 0 === a.anim.scaleY ? 1 : a.anim.scaleY, a.anim.skewX = void 0 === a.anim.skewX ? 0 : a.anim.skewX, a.anim.skewY = void 0 === a.anim.skewY ? 0 : a.anim.skewY, a.anim.opacity = void 0 === a.anim.opacity ? 1 : a.anim.opacity, a.anim.transformOrigin = void 0 === a.anim.transformOrigin ? "50% 50%" : a.anim.transformOrigin, a.anim.transformPerspective = void 0 === a.anim.transformPerspective ? 600 : a.anim.transformPerspective, a.anim.rotation = void 0 === a.anim.rotation ? 0 : a.anim.rotation, a.anim.force3D = void 0 === a.anim.force3D ? "auto" : a.anim.force3D, a.anim.autoAlpha = void 0 === a.anim.autoAlpha ? 1 : a.anim.autoAlpha, a.anim.visibility = void 0 === a.anim.visibility ? "visible" : a.anim.visibility, a.anim.overwrite = void 0 === a.anim.overwrite ? "auto" : a.anim.overwrite, a.speed = void 0 === a.speed ? .3 : a.speed, a.filter = void 0 === a.filter ? "blur(0px) grayscale(0px)" : a.filter, a["-webkit-filter"] = void 0 === a["-webkit-filter"] ? "blur(0px) grayscale(0px)" : a["-webkit-filter"], a;
    },
    k = function k() {
      var a = new Object();
      return a.anim = new Object(), a.anim.stroke = "none", a.anim.strokeWidth = 0, a.anim.strokeDasharray = "none", a.anim.strokeDashoffset = "0", a;
    },
    l = function l(a, b) {
      var c = a.split(";");
      return c && jQuery.each(c, function (a, c) {
        var d = c.split(":"),
          e = d[0],
          f = d[1];
        "sc" == e && (b.anim.stroke = f), "sw" == e && (b.anim.strokeWidth = f), "sda" == e && (b.anim.strokeDasharray = f), "sdo" == e && (b.anim.strokeDashoffset = f);
      }), b;
    },
    m = function m() {
      var a = new Object();
      return a.anim = new Object(), a.anim.x = 0, a.anim.y = 0, a.anim.z = 0, a;
    },
    n = function n() {
      var a = new Object();
      return a.anim = new Object(), a.speed = .2, a;
    },
    o = function o(a, b, c, d, e) {
      if (e = void 0 === e ? "" : e, jQuery.isNumeric(parseFloat(a))) return parseFloat(a) + e;
      if (void 0 === a || "inherit" === a) return b + "ext";
      if (a.split("{").length > 1) {
        var f = a.split(","),
          g = parseFloat(f[1].split("}")[0]);
        if (f = parseFloat(f[0].split("{")[1]), void 0 !== c && void 0 !== d) {
          a == "[" + (parseInt(Math.random() * (g - f), 0) + parseInt(f, 0)) + "ext";
          for (var h = 0; h < d; h++) a = a + "|" + (parseInt(Math.random() * (g - f), 0) + parseInt(f, 0)) + e;
          a += "]";
        } else a = Math.random() * (g - f) + f;
      }
      return a;
    },
    p = function p(a, b, c, d, e, f, g) {
      return !jQuery.isNumeric(a) && a.match(/%]/g) ? (a = a.split("[")[1].split("]")[0], "horizontal" == g ? a = (c + 2) * parseInt(a, 0) / 100 : "vertical" == g && (a = (d + 2) * parseInt(a, 0) / 100)) : (a = "layer_left" === a ? 0 - c : "layer_right" === a ? c : a, a = "layer_top" === a ? 0 - d : "layer_bottom" === a ? d : a, a = "left" === a || "stage_left" === a ? 0 - c - f : "right" === a || "stage_right" === a ? b.conw - f : "center" === a || "stage_center" === a ? b.conw / 2 - c / 2 - f : a, a = "top" === a || "stage_top" === a ? 0 - d - e : "bottom" === a || "stage_bottom" === a ? b.conh - e : "middle" === a || "stage_middle" === a ? b.conh / 2 - d / 2 - e : a), a;
    },
    q = function q(a, b, c, d, e) {
      var f = new Object();
      if (f = jQuery.extend(!0, {}, f, a), void 0 === b) return f;
      var g = b.split(";"),
        h = "";
      return g && jQuery.each(g, function (a, b) {
        var g = b.split(":"),
          i = g[0],
          j = g[1];
        c && "none" !== c && void 0 != j && j.length > 0 && j.match(/\(R\)/) && (j = j.replace("(R)", ""), j = "right" === j ? "left" : "left" === j ? "right" : "top" === j ? "bottom" : "bottom" === j ? "top" : j, "[" === j[0] && "-" === j[1] ? j = j.replace("[-", "[") : "[" === j[0] && "-" !== j[1] ? j = j.replace("[", "[-") : "-" === j[0] ? j = j.replace("-", "") : j[0].match(/[1-9]/) && (j = "-" + j)), void 0 != j && (j = j.replace(/\(R\)/, ""), "rotationX" != i && "rX" != i || (f.anim.rotationX = o(j, f.anim.rotationX, d, e, "deg")), "rotationY" != i && "rY" != i || (f.anim.rotationY = o(j, f.anim.rotationY, d, e, "deg")), "rotationZ" != i && "rZ" != i || (f.anim.rotation = o(j, f.anim.rotationZ, d, e, "deg")), "scaleX" != i && "sX" != i || (f.anim.scaleX = o(j, f.anim.scaleX, d, e)), "scaleY" != i && "sY" != i || (f.anim.scaleY = o(j, f.anim.scaleY, d, e)), "opacity" != i && "o" != i || (f.anim.opacity = o(j, f.anim.opacity, d, e)), "fb" == i && (h = "" === h ? "blur(" + parseInt(j, 0) + "px)" : h + " blur(" + parseInt(j, 0) + "px)"), "fg" == i && (h = "" === h ? "grayscale(" + parseInt(j, 0) + "%)" : h + " grayscale(" + parseInt(j, 0) + "%)"), 0 === f.anim.opacity && (f.anim.autoAlpha = 0), f.anim.opacity = 0 == f.anim.opacity ? 1e-4 : f.anim.opacity, "skewX" != i && "skX" != i || (f.anim.skewX = o(j, f.anim.skewX, d, e)), "skewY" != i && "skY" != i || (f.anim.skewY = o(j, f.anim.skewY, d, e)), "x" == i && (f.anim.x = o(j, f.anim.x, d, e)), "y" == i && (f.anim.y = o(j, f.anim.y, d, e)), "z" == i && (f.anim.z = o(j, f.anim.z, d, e)), "transformOrigin" != i && "tO" != i || (f.anim.transformOrigin = j.toString()), "transformPerspective" != i && "tP" != i || (f.anim.transformPerspective = parseInt(j, 0)), "speed" != i && "s" != i || (f.speed = parseFloat(j)));
      }), "" !== h && (f.anim["-webkit-filter"] = h, f.anim.filter = h), f;
    },
    r = function r(a) {
      if (void 0 === a) return !1;
      var b = new Object();
      b.anim = new Object();
      var c = a.split(";");
      return c && jQuery.each(c, function (a, c) {
        c = c.split(":");
        var d = c[0],
          e = c[1];
        "x" == d && (b.anim.x = e), "y" == d && (b.anim.y = e), "s" == d && (b.speed = parseFloat(e)), "e" != d && "ease" != d || (b.anim.ease = e);
      }), b;
    },
    s = function s(a, b, c) {
      if (void 0 == a && (a = 0), !jQuery.isArray(a) && "string" === jQuery.type(a) && (a.split(",").length > 1 || a.split("[").length > 1)) {
        a = a.replace("[", ""), a = a.replace("]", "");
        var d = a.match(/'/g) ? a.split("',") : a.split(",");
        a = new Array(), d && jQuery.each(d, function (b, c) {
          c = c.replace("'", ""), c = c.replace("'", ""), a.push(c);
        });
      } else {
        var e = a;
        jQuery.isArray(a) || (a = new Array(), a.push(e));
      }
      var e = a[a.length - 1];
      if (a.length < b.rle) for (var f = 1; f <= b.curWinRange; f++) a.push(e);
      return a;
    },
    u = function u(a, b) {
      if (void 0 === b) return a;
      b = b.replace("c:", "color:"), b = b.replace("bg:", "background-color:"), b = b.replace("bw:", "border-width:"), b = b.replace("bc:", "border-color:"), b = b.replace("br:", "borderRadius:"), b = b.replace("bs:", "border-style:"), b = b.replace("td:", "text-decoration:"), b = b.replace("zi:", "zIndex:");
      var c = b.split(";");
      return c && jQuery.each(c, function (b, c) {
        var d = c.split(":");
        d[0].length > 0 && ("background-color" === d[0] && d[1].indexOf("gradient") >= 0 && (d[0] = "background"), a.anim[d[0]] = d[1]);
      }), a;
    },
    v = function v(a, b) {
      var e,
        c = new Object(),
        d = !1;
      if ("rekursive" == b && (e = a.closest(".tp-caption"), e && a.css("fontSize") === e.css("fontSize") && a.css("fontWeight") === e.css("fontWeight") && a.css("lineHeight") === e.css("lineHeight") && (d = !0)), c.basealign = a.data("basealign") || "grid", c.fontSize = d ? void 0 === e.data("fontsize") ? parseInt(e.css("fontSize"), 0) || 0 : e.data("fontsize") : void 0 === a.data("fontsize") ? parseInt(a.css("fontSize"), 0) || 0 : a.data("fontsize"), c.fontWeight = d ? void 0 === e.data("fontweight") ? parseInt(e.css("fontWeight"), 0) || 0 : e.data("fontweight") : void 0 === a.data("fontweight") ? parseInt(a.css("fontWeight"), 0) || 0 : a.data("fontweight"), c.whiteSpace = d ? void 0 === e.data("whitespace") ? e.css("whitespace") || "normal" : e.data("whitespace") : void 0 === a.data("whitespace") ? a.css("whitespace") || "normal" : a.data("whitespace"), c.textAlign = d ? void 0 === e.data("textalign") ? e.css("textalign") || "inherit" : e.data("textalign") : void 0 === a.data("textalign") ? a.css("textalign") || "inherit" : a.data("textalign"), c.zIndex = d ? void 0 === e.data("zIndex") ? e.css("zIndex") || "inherit" : e.data("zIndex") : void 0 === a.data("zIndex") ? a.css("zIndex") || "inherit" : a.data("zIndex"), jQuery.inArray(a.data("layertype"), ["video", "image", "audio"]) !== -1 || a.is("img") ? c.lineHeight = 0 : c.lineHeight = d ? void 0 === e.data("lineheight") ? parseInt(e.css("lineHeight"), 0) || 0 : e.data("lineheight") : void 0 === a.data("lineheight") ? parseInt(a.css("lineHeight"), 0) || 0 : a.data("lineheight"), c.letterSpacing = d ? void 0 === e.data("letterspacing") ? parseFloat(e.css("letterSpacing"), 0) || 0 : e.data("letterspacing") : void 0 === a.data("letterspacing") ? parseFloat(a.css("letterSpacing")) || 0 : a.data("letterspacing"), c.paddingTop = void 0 === a.data("paddingtop") ? parseInt(a.css("paddingTop"), 0) || 0 : a.data("paddingtop"), c.paddingBottom = void 0 === a.data("paddingbottom") ? parseInt(a.css("paddingBottom"), 0) || 0 : a.data("paddingbottom"), c.paddingLeft = void 0 === a.data("paddingleft") ? parseInt(a.css("paddingLeft"), 0) || 0 : a.data("paddingleft"), c.paddingRight = void 0 === a.data("paddingright") ? parseInt(a.css("paddingRight"), 0) || 0 : a.data("paddingright"), c.marginTop = void 0 === a.data("margintop") ? parseInt(a.css("marginTop"), 0) || 0 : a.data("margintop"), c.marginBottom = void 0 === a.data("marginbottom") ? parseInt(a.css("marginBottom"), 0) || 0 : a.data("marginbottom"), c.marginLeft = void 0 === a.data("marginleft") ? parseInt(a.css("marginLeft"), 0) || 0 : a.data("marginleft"), c.marginRight = void 0 === a.data("marginright") ? parseInt(a.css("marginRight"), 0) || 0 : a.data("marginright"), c.borderTopWidth = void 0 === a.data("bordertopwidth") ? parseInt(a.css("borderTopWidth"), 0) || 0 : a.data("bordertopwidth"), c.borderBottomWidth = void 0 === a.data("borderbottomwidth") ? parseInt(a.css("borderBottomWidth"), 0) || 0 : a.data("borderbottomwidth"), c.borderLeftWidth = void 0 === a.data("borderleftwidth") ? parseInt(a.css("borderLeftWidth"), 0) || 0 : a.data("borderleftwidth"), c.borderRightWidth = void 0 === a.data("borderrightwidth") ? parseInt(a.css("borderRightWidth"), 0) || 0 : a.data("borderrightwidth"), "rekursive" != b) {
        if (c.color = void 0 === a.data("color") ? "nopredefinedcolor" : a.data("color"), c.whiteSpace = d ? void 0 === e.data("whitespace") ? e.css("whiteSpace") || "nowrap" : e.data("whitespace") : void 0 === a.data("whitespace") ? a.css("whiteSpace") || "nowrap" : a.data("whitespace"), c.textAlign = d ? void 0 === e.data("textalign") ? e.css("textalign") || "inherit" : e.data("textalign") : void 0 === a.data("textalign") ? a.css("textalign") || "inherit" : a.data("textalign"), c.fontWeight = d ? void 0 === e.data("fontweight") ? parseInt(e.css("fontWeight"), 0) || 0 : e.data("fontweight") : void 0 === a.data("fontweight") ? parseInt(a.css("fontWeight"), 0) || 0 : a.data("fontweight"), c.minWidth = void 0 === a.data("width") ? parseInt(a.css("minWidth"), 0) || 0 : a.data("width"), c.minHeight = void 0 === a.data("height") ? parseInt(a.css("minHeight"), 0) || 0 : a.data("height"), void 0 != a.data("videowidth") && void 0 != a.data("videoheight")) {
          var f = a.data("videowidth"),
            g = a.data("videoheight");
          f = "100%" === f ? "none" : f, g = "100%" === g ? "none" : g, a.data("width", f), a.data("height", g);
        }
        c.maxWidth = void 0 === a.data("width") ? parseInt(a.css("maxWidth"), 0) || "none" : a.data("width"), c.maxHeight = void 0 === a.data("height") ? parseInt(a.css("maxHeight"), 0) || "none" : a.data("height"), c.wan = void 0 === a.data("wan") ? parseInt(a.css("-webkit-transition"), 0) || "none" : a.data("wan"), c.moan = void 0 === a.data("moan") ? parseInt(a.css("-moz-animation-transition"), 0) || "none" : a.data("moan"), c.man = void 0 === a.data("man") ? parseInt(a.css("-ms-animation-transition"), 0) || "none" : a.data("man"), c.ani = void 0 === a.data("ani") ? parseInt(a.css("transition"), 0) || "none" : a.data("ani");
      }
      return c.styleProps = {
        borderTopLeftRadius: a[0].style.borderTopLeftRadius,
        borderTopRightRadius: a[0].style.borderTopRightRadius,
        borderBottomRightRadius: a[0].style.borderBottomRightRadius,
        borderBottomLeftRadius: a[0].style.borderBottomLeftRadius,
        background: a[0].style.background,
        boxShadow: a[0].style.boxShadow,
        "background-color": a[0].style["background-color"],
        "border-top-color": a[0].style["border-top-color"],
        "border-bottom-color": a[0].style["border-bottom-color"],
        "border-right-color": a[0].style["border-right-color"],
        "border-left-color": a[0].style["border-left-color"],
        "border-top-style": a[0].style["border-top-style"],
        "border-bottom-style": a[0].style["border-bottom-style"],
        "border-left-style": a[0].style["border-left-style"],
        "border-right-style": a[0].style["border-right-style"],
        "border-left-width": a[0].style["border-left-width"],
        "border-right-width": a[0].style["border-right-width"],
        "border-bottom-width": a[0].style["border-bottom-width"],
        "border-top-width": a[0].style["border-top-width"],
        color: a[0].style.color,
        "text-decoration": a[0].style["text-decoration"],
        "font-style": a[0].style["font-style"]
      }, "" !== c.styleProps.background && void 0 !== c.styleProps.background && c.styleProps.background !== c.styleProps["background-color"] || delete c.styleProps.background, "" == c.styleProps.color && (c.styleProps.color = a.css("color")), c;
    },
    w = function w(a, b) {
      var c = new Object();
      return a && jQuery.each(a, function (d, e) {
        var f = s(e, b)[b.curWinRange];
        c[d] = void 0 !== f ? f : a[d];
      }), c;
    },
    x = function x(a, b, c, d) {
      return a = jQuery.isNumeric(a) ? a * b + "px" : a, a = "full" === a ? d : "auto" === a || "none" === a ? c : a;
    },
    y = function y(a, b, c, d) {
      var e = a.data();
      e = void 0 === e ? {} : e;
      try {
        if ("BR" == a[0].nodeName || "br" == a[0].tagName) return !1;
      } catch (a) {}
      e.cssobj = void 0 === e.cssobj ? v(a, c) : e.cssobj;
      var f = w(e.cssobj, b),
        g = b.bw,
        h = b.bh;
      if ("off" === d && (g = 1, h = 1), "auto" == f.lineHeight && (f.lineHeight = f.fontSize + 4), !a.hasClass("tp-splitted")) {
        a.css("-webkit-transition", "none"), a.css("-moz-transition", "none"), a.css("-ms-transition", "none"), a.css("transition", "none");
        var i = void 0 !== a.data("transform_hover") || void 0 !== a.data("style_hover");
        if (i && punchgs.TweenLite.set(a, f.styleProps), punchgs.TweenLite.set(a, {
          fontSize: Math.round(f.fontSize * g) + "px",
          fontWeight: f.fontWeight,
          letterSpacing: Math.floor(f.letterSpacing * g) + "px",
          paddingTop: Math.round(f.paddingTop * h) + "px",
          paddingBottom: Math.round(f.paddingBottom * h) + "px",
          paddingLeft: Math.round(f.paddingLeft * g) + "px",
          paddingRight: Math.round(f.paddingRight * g) + "px",
          marginTop: f.marginTop * h + "px",
          marginBottom: f.marginBottom * h + "px",
          marginLeft: f.marginLeft * g + "px",
          marginRight: f.marginRight * g + "px",
          borderTopWidth: Math.round(f.borderTopWidth * h) + "px",
          borderBottomWidth: Math.round(f.borderBottomWidth * h) + "px",
          borderLeftWidth: Math.round(f.borderLeftWidth * g) + "px",
          borderRightWidth: Math.round(f.borderRightWidth * g) + "px",
          lineHeight: Math.round(f.lineHeight * h) + "px",
          textAlign: f.textAlign,
          overwrite: "auto"
        }), "rekursive" != c) {
          var j = "slide" == f.basealign ? b.ulw : b.gridwidth[b.curWinRange],
            k = "slide" == f.basealign ? b.ulh : b.gridheight[b.curWinRange],
            l = x(f.maxWidth, g, "none", j),
            m = x(f.maxHeight, h, "none", k),
            n = x(f.minWidth, g, "0px", j),
            o = x(f.minHeight, h, "0px", k);
          if (n = void 0 === n ? 0 : n, o = void 0 === o ? 0 : o, l = void 0 === l ? "none" : l, m = void 0 === m ? "none" : m, e._isgroup && ("#1/1#" === n && (n = l = j), "#1/2#" === n && (n = l = j / 2), "#1/3#" === n && (n = l = j / 3), "#1/4#" === n && (n = l = j / 4), "#1/5#" === n && (n = l = j / 5), "#1/6#" === n && (n = l = j / 6), "#2/3#" === n && (n = l = j / 3 * 2), "#3/4#" === n && (n = l = j / 4 * 3), "#2/5#" === n && (n = l = j / 5 * 2), "#3/5#" === n && (n = l = j / 5 * 3), "#4/5#" === n && (n = l = j / 5 * 4), "#3/6#" === n && (n = l = j / 6 * 3), "#4/6#" === n && (n = l = j / 6 * 4), "#5/6#" === n && (n = l = j / 6 * 5)), e._ingroup && (e._groupw = n, e._grouph = o), punchgs.TweenLite.set(a, {
            maxWidth: l,
            maxHeight: m,
            minWidth: n,
            minHeight: o,
            whiteSpace: f.whiteSpace,
            textAlign: f.textAlign,
            overwrite: "auto"
          }), "nopredefinedcolor" != f.color && punchgs.TweenLite.set(a, {
            color: f.color,
            overwrite: "auto"
          }), void 0 != e.svg_src) {
            var p = "nopredefinedcolor" != f.color && void 0 != f.color ? f.color : void 0 != f.css && "nopredefinedcolor" != f.css.color && void 0 != f.css.color ? f.css.color : void 0 != f.styleProps.color ? f.styleProps.color : void 0 != f.styleProps.css && void 0 != f.styleProps.css.color && f.styleProps.css.color;
            0 != p && (punchgs.TweenLite.set(a.find("svg"), {
              fill: p,
              overwrite: "auto"
            }), punchgs.TweenLite.set(a.find("svg path"), {
              fill: p,
              overwrite: "auto"
            }));
          }
        }
        "column" === e._nctype && (void 0 === e._column_bg_set && (e._column_bg_set = a.css("backgroundColor"), e._column_bg_image = a.css("backgroundImage"), e._column_bg_image_repeat = a.css("backgroundRepeat"), e._column_bg_image_position = a.css("backgroundPosition"), e._column_bg_image_size = a.css("backgroundSize"), e._column_bg_opacity = a.data("bgopacity"), e._column_bg_opacity = void 0 === e._column_bg_opacity ? 1 : e._column_bg_opacity, punchgs.TweenLite.set(a, {
          backgroundColor: "transparent",
          backgroundImage: ""
        })), setTimeout(function () {
          z(a, b);
        }, 1), e._cbgc_auto && (e._cbgc_auto[0].style.backgroundSize = e._column_bg_image_size, jQuery.isArray(f.marginLeft) ? punchgs.TweenLite.set(e._cbgc_auto, {
          borderTopWidth: f.marginTop[b.curWinRange] * h + "px",
          borderLeftWidth: f.marginLeft[b.curWinRange] * g + "px",
          borderRightWidth: f.marginRight[b.curWinRange] * g + "px",
          borderBottomWidth: f.marginBottom[b.curWinRange] * h + "px",
          backgroundColor: e._column_bg_set,
          backgroundImage: e._column_bg_image,
          backgroundRepeat: e._column_bg_image_repeat,
          backgroundPosition: e._column_bg_image_position,
          opacity: e._column_bg_opacity
        }) : punchgs.TweenLite.set(e._cbgc_auto, {
          borderTopWidth: f.marginTop * h + "px",
          borderLeftWidth: f.marginLeft * g + "px",
          borderRightWidth: f.marginRight * g + "px",
          borderBottomWidth: f.marginBottom * h + "px",
          backgroundColor: e._column_bg_set,
          backgroundImage: e._column_bg_image,
          backgroundRepeat: e._column_bg_image_repeat,
          backgroundPosition: e._column_bg_image_position,
          opacity: e._column_bg_opacity
        }))), setTimeout(function () {
          a.css("-webkit-transition", a.data("wan")), a.css("-moz-transition", a.data("moan")), a.css("-ms-transition", a.data("man")), a.css("transition", a.data("ani"));
        }, 30);
      }
    },
    z = function z(a, b) {
      var c = a.data();
      if (c._cbgc_man) {
        var d, e, f, g, h;
        jQuery.isArray(c.cssobj.marginLeft) ? (d = c.cssobj.marginLeft[b.curWinRange] * b.bw, e = c.cssobj.marginTop[b.curWinRange] * b.bh, f = c.cssobj.marginBottom[b.curWinRange] * b.bh, g = c.cssobj.marginRight[b.curWinRange] * b.bw) : (d = c.cssobj.marginLeft * b.bw, e = c.cssobj.marginTop * b.bh, f = c.cssobj.marginBottom * b.bh, g = c.cssobj.marginRight * b.bw), h = c._row.hasClass("rev_break_columns") ? "100%" : c._row.outerHeight() - (e + f) + "px", c._cbgc_man[0].style.backgroundSize = c._column_bg_image_size, punchgs.TweenLite.set(c._cbgc_man, {
          width: "100%",
          height: h,
          backgroundColor: c._column_bg_set,
          backgroundImage: c._column_bg_image,
          backgroundRepeat: c._column_bg_image_repeat,
          backgroundPosition: c._column_bg_image_position,
          overwrite: "auto",
          opacity: c._column_bg_opacity
        });
      }
    },
    A = function A(a, b) {
      var c = a.data();
      if (a.hasClass("rs-pendulum") && void 0 == c._loop_timeline) {
        c._loop_timeline = new punchgs.TimelineLite();
        var d = void 0 == a.data("startdeg") ? -20 : a.data("startdeg"),
          e = void 0 == a.data("enddeg") ? 20 : a.data("enddeg"),
          f = void 0 == a.data("speed") ? 2 : a.data("speed"),
          g = void 0 == a.data("origin") ? "50% 50%" : a.data("origin"),
          h = void 0 == a.data("easing") ? punchgs.Power2.easeInOut : a.data("easing");
        d *= b, e *= b, c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
          force3D: "auto",
          rotation: d,
          transformOrigin: g
        }, {
          rotation: e,
          ease: h
        })), c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
          force3D: "auto",
          rotation: e,
          transformOrigin: g
        }, {
          rotation: d,
          ease: h,
          onComplete: function onComplete() {
            c._loop_timeline.restart();
          }
        }));
      }
      if (a.hasClass("rs-rotate") && void 0 == c._loop_timeline) {
        c._loop_timeline = new punchgs.TimelineLite();
        var d = void 0 == a.data("startdeg") ? 0 : a.data("startdeg"),
          e = void 0 == a.data("enddeg") ? 360 : a.data("enddeg"),
          f = void 0 == a.data("speed") ? 2 : a.data("speed"),
          g = void 0 == a.data("origin") ? "50% 50%" : a.data("origin"),
          h = void 0 == a.data("easing") ? punchgs.Power2.easeInOut : a.data("easing");
        d *= b, e *= b, c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
          force3D: "auto",
          rotation: d,
          transformOrigin: g
        }, {
          rotation: e,
          ease: h,
          onComplete: function onComplete() {
            c._loop_timeline.restart();
          }
        }));
      }
      if (a.hasClass("rs-slideloop") && void 0 == c._loop_timeline) {
        c._loop_timeline = new punchgs.TimelineLite();
        var i = void 0 == a.data("xs") ? 0 : a.data("xs"),
          j = void 0 == a.data("ys") ? 0 : a.data("ys"),
          k = void 0 == a.data("xe") ? 0 : a.data("xe"),
          l = void 0 == a.data("ye") ? 0 : a.data("ye"),
          f = void 0 == a.data("speed") ? 2 : a.data("speed"),
          h = void 0 == a.data("easing") ? punchgs.Power2.easeInOut : a.data("easing");
        i *= b, j *= b, k *= b, l *= b, c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
          force3D: "auto",
          x: i,
          y: j
        }, {
          x: k,
          y: l,
          ease: h
        })), c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
          force3D: "auto",
          x: k,
          y: l
        }, {
          x: i,
          y: j,
          onComplete: function onComplete() {
            c._loop_timeline.restart();
          }
        }));
      }
      if (a.hasClass("rs-pulse") && void 0 == c._loop_timeline) {
        c._loop_timeline = new punchgs.TimelineLite();
        var m = void 0 == a.data("zoomstart") ? 0 : a.data("zoomstart"),
          n = void 0 == a.data("zoomend") ? 0 : a.data("zoomend"),
          f = void 0 == a.data("speed") ? 2 : a.data("speed"),
          h = void 0 == a.data("easing") ? punchgs.Power2.easeInOut : a.data("easing");
        c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
          force3D: "auto",
          scale: m
        }, {
          scale: n,
          ease: h
        })), c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
          force3D: "auto",
          scale: n
        }, {
          scale: m,
          onComplete: function onComplete() {
            c._loop_timeline.restart();
          }
        }));
      }
      if (a.hasClass("rs-wave") && void 0 == c._loop_timeline) {
        c._loop_timeline = new punchgs.TimelineLite();
        var o = void 0 == a.data("angle") ? 10 : parseInt(a.data("angle"), 0),
          p = void 0 == a.data("radius") ? 10 : parseInt(a.data("radius"), 0),
          f = void 0 == a.data("speed") ? -20 : a.data("speed"),
          g = void 0 == a.data("origin") ? "50% 50%" : a.data("origin"),
          q = g.split(" "),
          r = new Object();
        q.length >= 1 ? (r.x = q[0], r.y = q[1]) : (r.x = "50%", r.y = "50%"), p *= b;
        var s = (parseInt(r.x, 0) / 100 - .5) * a.width(),
          t = (parseInt(r.y, 0) / 100 - .5) * a.height(),
          u = -1 * p + t,
          v = 0 + s,
          w = {
            a: 0,
            ang: o,
            element: a,
            unit: p,
            xoffset: v,
            yoffset: u
          },
          x = parseInt(o, 0),
          y = new punchgs.TweenLite.fromTo(w, f, {
            a: 0 + x
          }, {
            a: 360 + x,
            force3D: "auto",
            ease: punchgs.Linear.easeNone
          });
        y.eventCallback("onUpdate", function (a) {
          var b = a.a * (Math.PI / 180),
            c = a.yoffset + a.unit * (1 - Math.sin(b)),
            d = a.xoffset + Math.cos(b) * a.unit;
          punchgs.TweenLite.to(a.element, .1, {
            force3D: "auto",
            x: d,
            y: c
          });
        }, [w]), y.eventCallback("onComplete", function (a) {
          a._loop_timeline.restart();
        }, [c]), c._loop_timeline.append(y);
      }
    },
    B = function B(a) {
      a.closest(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function () {
        var a = this;
        void 0 != a._loop_timeline && (a._loop_timeline.pause(), a._loop_timeline = null);
      });
    };
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./js/revolution/extensions/revolution.extension.navigation.min.js":
/*!*************************************************************************!*\
  !*** ./js/revolution/extensions/revolution.extension.navigation.min.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/********************************************
 * REVOLUTION 5.2 EXTENSION - NAVIGATION
 * @version: 1.3.3 (14.02.2017)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function (a) {
  "use strict";

  var b = jQuery.fn.revolution,
    c = b.is_mobile(),
    d = {
      alias: "Navigation Min JS",
      name: "revolution.extensions.navigation.min.js",
      min_core: "5.4.0",
      version: "1.3.3"
    };
  jQuery.extend(!0, b, {
    hideUnHideNav: function hideUnHideNav(a) {
      var b = a.c.width(),
        c = a.navigation.arrows,
        d = a.navigation.bullets,
        e = a.navigation.thumbnails,
        f = a.navigation.tabs;
      m(c) && y(a.c.find(".tparrows"), c.hide_under, b, c.hide_over), m(d) && y(a.c.find(".tp-bullets"), d.hide_under, b, d.hide_over), m(e) && y(a.c.parent().find(".tp-thumbs"), e.hide_under, b, e.hide_over), m(f) && y(a.c.parent().find(".tp-tabs"), f.hide_under, b, f.hide_over), x(a);
    },
    resizeThumbsTabs: function resizeThumbsTabs(a, b) {
      if (a.navigation && a.navigation.tabs.enable || a.navigation && a.navigation.thumbnails.enable) {
        var c = (jQuery(window).width() - 480) / 500,
          d = new punchgs.TimelineLite(),
          e = a.navigation.tabs,
          g = a.navigation.thumbnails,
          h = a.navigation.bullets;
        if (d.pause(), c = c > 1 ? 1 : c < 0 ? 0 : c, m(e) && (b || e.width > e.min_width) && f(c, d, a.c, e, a.slideamount, "tab"), m(g) && (b || g.width > g.min_width) && f(c, d, a.c, g, a.slideamount, "thumb"), m(h) && b) {
          var i = a.c.find(".tp-bullets");
          i.find(".tp-bullet").each(function (a) {
            var b = jQuery(this),
              c = a + 1,
              d = b.outerWidth() + parseInt(void 0 === h.space ? 0 : h.space, 0),
              e = b.outerHeight() + parseInt(void 0 === h.space ? 0 : h.space, 0);
            "vertical" === h.direction ? (b.css({
              top: (c - 1) * e + "px",
              left: "0px"
            }), i.css({
              height: (c - 1) * e + b.outerHeight(),
              width: b.outerWidth()
            })) : (b.css({
              left: (c - 1) * d + "px",
              top: "0px"
            }), i.css({
              width: (c - 1) * d + b.outerWidth(),
              height: b.outerHeight()
            }));
          });
        }
        d.play(), x(a);
      }
      return !0;
    },
    updateNavIndexes: function updateNavIndexes(a) {
      function d(a) {
        c.find(a).lenght > 0 && c.find(a).each(function (a) {
          jQuery(this).data("liindex", a);
        });
      }
      var c = a.c;
      d(".tp-tab"), d(".tp-bullet"), d(".tp-thumb"), b.resizeThumbsTabs(a, !0), b.manageNavigation(a);
    },
    manageNavigation: function manageNavigation(a) {
      var c = b.getHorizontalOffset(a.c.parent(), "left"),
        d = b.getHorizontalOffset(a.c.parent(), "right");
      m(a.navigation.bullets) && ("fullscreen" != a.sliderLayout && "fullwidth" != a.sliderLayout && (a.navigation.bullets.h_offset_old = void 0 === a.navigation.bullets.h_offset_old ? a.navigation.bullets.h_offset : a.navigation.bullets.h_offset_old, a.navigation.bullets.h_offset = "center" === a.navigation.bullets.h_align ? a.navigation.bullets.h_offset_old + c / 2 - d / 2 : a.navigation.bullets.h_offset_old + c - d), t(a.c.find(".tp-bullets"), a.navigation.bullets, a)), m(a.navigation.thumbnails) && t(a.c.parent().find(".tp-thumbs"), a.navigation.thumbnails, a), m(a.navigation.tabs) && t(a.c.parent().find(".tp-tabs"), a.navigation.tabs, a), m(a.navigation.arrows) && ("fullscreen" != a.sliderLayout && "fullwidth" != a.sliderLayout && (a.navigation.arrows.left.h_offset_old = void 0 === a.navigation.arrows.left.h_offset_old ? a.navigation.arrows.left.h_offset : a.navigation.arrows.left.h_offset_old, a.navigation.arrows.left.h_offset = "right" === a.navigation.arrows.left.h_align ? a.navigation.arrows.left.h_offset_old + d : a.navigation.arrows.left.h_offset_old + c, a.navigation.arrows.right.h_offset_old = void 0 === a.navigation.arrows.right.h_offset_old ? a.navigation.arrows.right.h_offset : a.navigation.arrows.right.h_offset_old, a.navigation.arrows.right.h_offset = "right" === a.navigation.arrows.right.h_align ? a.navigation.arrows.right.h_offset_old + d : a.navigation.arrows.right.h_offset_old + c), t(a.c.find(".tp-leftarrow.tparrows"), a.navigation.arrows.left, a), t(a.c.find(".tp-rightarrow.tparrows"), a.navigation.arrows.right, a)), m(a.navigation.thumbnails) && e(a.c.parent().find(".tp-thumbs"), a.navigation.thumbnails), m(a.navigation.tabs) && e(a.c.parent().find(".tp-tabs"), a.navigation.tabs);
    },
    createNavigation: function createNavigation(a, f) {
      if ("stop" === b.compare_version(d).check) return !1;
      var g = a.parent(),
        j = f.navigation.arrows,
        n = f.navigation.bullets,
        r = f.navigation.thumbnails,
        s = f.navigation.tabs,
        t = m(j),
        v = m(n),
        x = m(r),
        y = m(s);
      h(a, f), i(a, f), t && q(a, j, f), f.li.each(function (b) {
        var c = jQuery(f.li[f.li.length - 1 - b]),
          d = jQuery(this);
        v && (f.navigation.bullets.rtl ? u(a, n, c, f) : u(a, n, d, f)), x && (f.navigation.thumbnails.rtl ? w(a, r, c, "tp-thumb", f) : w(a, r, d, "tp-thumb", f)), y && (f.navigation.tabs.rtl ? w(a, s, c, "tp-tab", f) : w(a, s, d, "tp-tab", f));
      }), a.bind("revolution.slide.onafterswap revolution.nextslide.waiting", function () {
        var b = 0 == a.find(".next-revslide").length ? a.find(".active-revslide").data("index") : a.find(".next-revslide").data("index");
        a.find(".tp-bullet").each(function () {
          var a = jQuery(this);
          a.data("liref") === b ? a.addClass("selected") : a.removeClass("selected");
        }), g.find(".tp-thumb, .tp-tab").each(function () {
          var a = jQuery(this);
          a.data("liref") === b ? (a.addClass("selected"), a.hasClass("tp-tab") ? e(g.find(".tp-tabs"), s) : e(g.find(".tp-thumbs"), r)) : a.removeClass("selected");
        });
        var c = 0,
          d = !1;
        f.thumbs && jQuery.each(f.thumbs, function (a, e) {
          c = d === !1 ? a : c, d = e.id === b || a === b || d;
        });
        var h = c > 0 ? c - 1 : f.slideamount - 1,
          i = c + 1 == f.slideamount ? 0 : c + 1;
        if (j.enable === !0) {
          var k = j.tmp;
          if (void 0 != f.thumbs[h] && jQuery.each(f.thumbs[h].params, function (a, b) {
            k = k.replace(b.from, b.to);
          }), j.left.j.html(k), k = j.tmp, i > f.slideamount) return;
          jQuery.each(f.thumbs[i].params, function (a, b) {
            k = k.replace(b.from, b.to);
          }), j.right.j.html(k), punchgs.TweenLite.set(j.left.j.find(".tp-arr-imgholder"), {
            backgroundImage: "url(" + f.thumbs[h].src + ")"
          }), punchgs.TweenLite.set(j.right.j.find(".tp-arr-imgholder"), {
            backgroundImage: "url(" + f.thumbs[i].src + ")"
          });
        }
      }), l(j), l(n), l(r), l(s), g.on("mouseenter mousemove", function () {
        g.hasClass("tp-mouseover") || (g.addClass("tp-mouseover"), punchgs.TweenLite.killDelayedCallsTo(p), t && j.hide_onleave && p(g.find(".tparrows"), j, "show"), v && n.hide_onleave && p(g.find(".tp-bullets"), n, "show"), x && r.hide_onleave && p(g.find(".tp-thumbs"), r, "show"), y && s.hide_onleave && p(g.find(".tp-tabs"), s, "show"), c && (g.removeClass("tp-mouseover"), o(a, f)));
      }), g.on("mouseleave", function () {
        g.removeClass("tp-mouseover"), o(a, f);
      }), t && j.hide_onleave && p(g.find(".tparrows"), j, "hide", 0), v && n.hide_onleave && p(g.find(".tp-bullets"), n, "hide", 0), x && r.hide_onleave && p(g.find(".tp-thumbs"), r, "hide", 0), y && s.hide_onleave && p(g.find(".tp-tabs"), s, "hide", 0), x && k(g.find(".tp-thumbs"), f), y && k(g.find(".tp-tabs"), f), "carousel" === f.sliderType && k(a, f, !0), ("on" === f.navigation.touch.touchOnDesktop || "on" == f.navigation.touch.touchenabled && c) && k(a, f, "swipebased");
    }
  });
  var e = function e(a, b) {
      var d = (a.hasClass("tp-thumbs") ? ".tp-thumbs" : ".tp-tabs", a.hasClass("tp-thumbs") ? ".tp-thumb-mask" : ".tp-tab-mask"),
        e = a.hasClass("tp-thumbs") ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
        f = a.hasClass("tp-thumbs") ? ".tp-thumb" : ".tp-tab",
        g = a.find(d),
        h = g.find(e),
        i = b.direction,
        j = "vertical" === i ? g.find(f).first().outerHeight(!0) + b.space : g.find(f).first().outerWidth(!0) + b.space,
        k = "vertical" === i ? g.height() : g.width(),
        l = parseInt(g.find(f + ".selected").data("liindex"), 0),
        m = k / j,
        n = "vertical" === i ? g.height() : g.width(),
        o = 0 - l * j,
        p = "vertical" === i ? h.height() : h.width(),
        q = o < 0 - (p - n) ? 0 - (p - n) : q > 0 ? 0 : o,
        r = h.data("offset");
      m > 2 && (q = o - (r + j) <= 0 ? o - (r + j) < 0 - j ? r : q + j : q, q = o - j + r + k < j && o + (Math.round(m) - 2) * j < r ? o + (Math.round(m) - 2) * j : q), q = q < 0 - (p - n) ? 0 - (p - n) : q > 0 ? 0 : q, "vertical" !== i && g.width() >= h.width() && (q = 0), "vertical" === i && g.height() >= h.height() && (q = 0), a.hasClass("dragged") || ("vertical" === i ? h.data("tmmove", punchgs.TweenLite.to(h, .5, {
        top: q + "px",
        ease: punchgs.Power3.easeInOut
      })) : h.data("tmmove", punchgs.TweenLite.to(h, .5, {
        left: q + "px",
        ease: punchgs.Power3.easeInOut
      })), h.data("offset", q));
    },
    f = function f(a, b, c, d, e, _f) {
      var g = c.parent().find(".tp-" + _f + "s"),
        h = g.find(".tp-" + _f + "s-inner-wrapper"),
        i = g.find(".tp-" + _f + "-mask"),
        j = d.width * a < d.min_width ? d.min_width : Math.round(d.width * a),
        k = Math.round(j / d.width * d.height),
        l = "vertical" === d.direction ? j : j * e + d.space * (e - 1),
        m = "vertical" === d.direction ? k * e + d.space * (e - 1) : k,
        n = "vertical" === d.direction ? {
          width: j + "px"
        } : {
          height: k + "px"
        };
      b.add(punchgs.TweenLite.set(g, n)), b.add(punchgs.TweenLite.set(h, {
        width: l + "px",
        height: m + "px"
      })), b.add(punchgs.TweenLite.set(i, {
        width: l + "px",
        height: m + "px"
      }));
      var o = h.find(".tp-" + _f);
      return o && jQuery.each(o, function (a, c) {
        "vertical" === d.direction ? b.add(punchgs.TweenLite.set(c, {
          top: a * (k + parseInt(void 0 === d.space ? 0 : d.space, 0)),
          width: j + "px",
          height: k + "px"
        })) : "horizontal" === d.direction && b.add(punchgs.TweenLite.set(c, {
          left: a * (j + parseInt(void 0 === d.space ? 0 : d.space, 0)),
          width: j + "px",
          height: k + "px"
        }));
      }), b;
    },
    g = function g(a) {
      var b = 0,
        c = 0,
        d = 0,
        e = 0,
        f = 1,
        g = 1,
        h = 1;
      return "detail" in a && (c = a.detail), "wheelDelta" in a && (c = -a.wheelDelta / 120), "wheelDeltaY" in a && (c = -a.wheelDeltaY / 120), "wheelDeltaX" in a && (b = -a.wheelDeltaX / 120), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (b = c, c = 0), d = b * f, e = c * f, "deltaY" in a && (e = a.deltaY), "deltaX" in a && (d = a.deltaX), (d || e) && a.deltaMode && (1 == a.deltaMode ? (d *= g, e *= g) : (d *= h, e *= h)), d && !b && (b = d < 1 ? -1 : 1), e && !c && (c = e < 1 ? -1 : 1), e = navigator.userAgent.match(/mozilla/i) ? 10 * e : e, (e > 300 || e < -300) && (e /= 10), {
        spinX: b,
        spinY: c,
        pixelX: d,
        pixelY: e
      };
    },
    h = function h(a, c) {
      "on" === c.navigation.keyboardNavigation && jQuery(document).keydown(function (d) {
        ("horizontal" == c.navigation.keyboard_direction && 39 == d.keyCode || "vertical" == c.navigation.keyboard_direction && 40 == d.keyCode) && (c.sc_indicator = "arrow", c.sc_indicator_dir = 0, b.callingNewSlide(a, 1)), ("horizontal" == c.navigation.keyboard_direction && 37 == d.keyCode || "vertical" == c.navigation.keyboard_direction && 38 == d.keyCode) && (c.sc_indicator = "arrow", c.sc_indicator_dir = 1, b.callingNewSlide(a, -1));
      });
    },
    i = function i(a, c) {
      if ("on" === c.navigation.mouseScrollNavigation || "carousel" === c.navigation.mouseScrollNavigation) {
        c.isIEEleven = !!navigator.userAgent.match(/Trident.*rv\:11\./), c.isSafari = !!navigator.userAgent.match(/safari/i), c.ischrome = !!navigator.userAgent.match(/chrome/i);
        var d = c.ischrome ? -49 : c.isIEEleven || c.isSafari ? -9 : navigator.userAgent.match(/mozilla/i) ? -29 : -49,
          e = c.ischrome ? 49 : c.isIEEleven || c.isSafari ? 9 : navigator.userAgent.match(/mozilla/i) ? 29 : 49;
        a.on("mousewheel DOMMouseScroll", function (f) {
          var h = g(f.originalEvent),
            i = a.find(".tp-revslider-slidesli.active-revslide").index(),
            j = a.find(".tp-revslider-slidesli.processing-revslide").index(),
            k = i != -1 && 0 == i || j != -1 && 0 == j,
            l = i != -1 && i == c.slideamount - 1 || 1 != j && j == c.slideamount - 1,
            m = !0;
          "carousel" == c.navigation.mouseScrollNavigation && (k = l = !1), j == -1 ? h.pixelY < d ? (k || (c.sc_indicator = "arrow", "reverse" !== c.navigation.mouseScrollReverse && (c.sc_indicator_dir = 1, b.callingNewSlide(a, -1)), m = !1), l || (c.sc_indicator = "arrow", "reverse" === c.navigation.mouseScrollReverse && (c.sc_indicator_dir = 0, b.callingNewSlide(a, 1)), m = !1)) : h.pixelY > e && (l || (c.sc_indicator = "arrow", "reverse" !== c.navigation.mouseScrollReverse && (c.sc_indicator_dir = 0, b.callingNewSlide(a, 1)), m = !1), k || (c.sc_indicator = "arrow", "reverse" === c.navigation.mouseScrollReverse && (c.sc_indicator_dir = 1, b.callingNewSlide(a, -1)), m = !1)) : m = !1;
          var n = c.c.offset().top - jQuery("body").scrollTop(),
            o = n + c.c.height();
          return "carousel" != c.navigation.mouseScrollNavigation ? ("reverse" !== c.navigation.mouseScrollReverse && (n > 0 && h.pixelY > 0 || o < jQuery(window).height() && h.pixelY < 0) && (m = !0), "reverse" === c.navigation.mouseScrollReverse && (n < 0 && h.pixelY < 0 || o > jQuery(window).height() && h.pixelY > 0) && (m = !0)) : m = !1, 0 == m ? (f.preventDefault(f), !1) : void 0;
        });
      }
    },
    j = function j(a, b, d) {
      return a = c ? jQuery(d.target).closest("." + a).length || jQuery(d.srcElement).closest("." + a).length : jQuery(d.toElement).closest("." + a).length || jQuery(d.originalTarget).closest("." + a).length, a === !0 || 1 === a ? 1 : 0;
    },
    k = function k(a, d, e) {
      var f = d.carousel;
      jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"), f.Limit = "endless";
      var h = (c || "Firefox" === b.get_browser(), a),
        i = "vertical" === d.navigation.thumbnails.direction || "vertical" === d.navigation.tabs.direction ? "none" : "vertical",
        k = d.navigation.touch.swipe_direction || "horizontal";
      i = "swipebased" == e && "vertical" == k ? "none" : e ? "vertical" : i, jQuery.fn.swipetp || (jQuery.fn.swipetp = jQuery.fn.swipe), jQuery.fn.swipetp.defaults && jQuery.fn.swipetp.defaults.excludedElements || jQuery.fn.swipetp.defaults || (jQuery.fn.swipetp.defaults = new Object()), jQuery.fn.swipetp.defaults.excludedElements = "label, button, input, select, textarea, .noSwipe", h.swipetp({
        allowPageScroll: i,
        triggerOnTouchLeave: !0,
        treshold: d.navigation.touch.swipe_treshold,
        fingers: d.navigation.touch.swipe_min_touches,
        excludeElements: jQuery.fn.swipetp.defaults.excludedElements,
        swipeStatus: function swipeStatus(c, e, g, h, i, l, m) {
          var n = j("rev_slider_wrapper", a, c),
            o = j("tp-thumbs", a, c),
            p = j("tp-tabs", a, c),
            q = jQuery(this).attr("class"),
            r = !!q.match(/tp-tabs|tp-thumb/gi);
          if ("carousel" === d.sliderType && (("move" === e || "end" === e || "cancel" == e) && d.dragStartedOverSlider && !d.dragStartedOverThumbs && !d.dragStartedOverTabs || "start" === e && n > 0 && 0 === o && 0 === p)) switch (d.dragStartedOverSlider = !0, h = g && g.match(/left|up/g) ? Math.round(h * -1) : h = Math.round(1 * h), e) {
            case "start":
              void 0 !== f.positionanim && (f.positionanim.kill(), f.slide_globaloffset = "off" === f.infinity ? f.slide_offset : b.simp(f.slide_offset, f.maxwidth)), f.overpull = "none", f.wrap.addClass("dragged");
              break;
            case "move":
              if (d.c.find(".tp-withaction").addClass("tp-temporarydisabled"), f.slide_offset = "off" === f.infinity ? f.slide_globaloffset + h : b.simp(f.slide_globaloffset + h, f.maxwidth), "off" === f.infinity) {
                var s = "center" === f.horizontal_align ? (f.wrapwidth / 2 - f.slide_width / 2 - f.slide_offset) / f.slide_width : (0 - f.slide_offset) / f.slide_width;
                "none" !== f.overpull && 0 !== f.overpull || !(s < 0 || s > d.slideamount - 1) ? s >= 0 && s <= d.slideamount - 1 && (s >= 0 && h > f.overpull || s <= d.slideamount - 1 && h < f.overpull) && (f.overpull = 0) : f.overpull = h, f.slide_offset = s < 0 ? f.slide_offset + (f.overpull - h) / 1.1 + Math.sqrt(Math.abs((f.overpull - h) / 1.1)) : s > d.slideamount - 1 ? f.slide_offset + (f.overpull - h) / 1.1 - Math.sqrt(Math.abs((f.overpull - h) / 1.1)) : f.slide_offset;
              }
              b.organiseCarousel(d, g, !0, !0);
              break;
            case "end":
            case "cancel":
              f.slide_globaloffset = f.slide_offset, f.wrap.removeClass("dragged"), b.carouselToEvalPosition(d, g), d.dragStartedOverSlider = !1, d.dragStartedOverThumbs = !1, d.dragStartedOverTabs = !1, setTimeout(function () {
                d.c.find(".tp-withaction").removeClass("tp-temporarydisabled");
              }, 19);
          } else {
            if (("move" !== e && "end" !== e && "cancel" != e || d.dragStartedOverSlider || !d.dragStartedOverThumbs && !d.dragStartedOverTabs) && !("start" === e && n > 0 && (o > 0 || p > 0))) {
              if ("end" == e && !r) {
                if (d.sc_indicator = "arrow", "horizontal" == k && "left" == g || "vertical" == k && "up" == g) return d.sc_indicator_dir = 0, b.callingNewSlide(d.c, 1), !1;
                if ("horizontal" == k && "right" == g || "vertical" == k && "down" == g) return d.sc_indicator_dir = 1, b.callingNewSlide(d.c, -1), !1;
              }
              return d.dragStartedOverSlider = !1, d.dragStartedOverThumbs = !1, d.dragStartedOverTabs = !1, !0;
            }
            o > 0 && (d.dragStartedOverThumbs = !0), p > 0 && (d.dragStartedOverTabs = !0);
            var t = d.dragStartedOverThumbs ? ".tp-thumbs" : ".tp-tabs",
              u = d.dragStartedOverThumbs ? ".tp-thumb-mask" : ".tp-tab-mask",
              v = d.dragStartedOverThumbs ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
              w = d.dragStartedOverThumbs ? ".tp-thumb" : ".tp-tab",
              x = d.dragStartedOverThumbs ? d.navigation.thumbnails : d.navigation.tabs;
            h = g && g.match(/left|up/g) ? Math.round(h * -1) : h = Math.round(1 * h);
            var y = a.parent().find(u),
              z = y.find(v),
              A = x.direction,
              B = "vertical" === A ? z.height() : z.width(),
              C = "vertical" === A ? y.height() : y.width(),
              D = "vertical" === A ? y.find(w).first().outerHeight(!0) + x.space : y.find(w).first().outerWidth(!0) + x.space,
              E = void 0 === z.data("offset") ? 0 : parseInt(z.data("offset"), 0),
              F = 0;
            switch (e) {
              case "start":
                a.parent().find(t).addClass("dragged"), E = "vertical" === A ? z.position().top : z.position().left, z.data("offset", E), z.data("tmmove") && z.data("tmmove").pause();
                break;
              case "move":
                if (B <= C) return !1;
                F = E + h, F = F > 0 ? "horizontal" === A ? F - z.width() * (F / z.width() * F / z.width()) : F - z.height() * (F / z.height() * F / z.height()) : F;
                var G = "vertical" === A ? 0 - (z.height() - y.height()) : 0 - (z.width() - y.width());
                F = F < G ? "horizontal" === A ? F + z.width() * (F - G) / z.width() * (F - G) / z.width() : F + z.height() * (F - G) / z.height() * (F - G) / z.height() : F, "vertical" === A ? punchgs.TweenLite.set(z, {
                  top: F + "px"
                }) : punchgs.TweenLite.set(z, {
                  left: F + "px"
                });
                break;
              case "end":
              case "cancel":
                if (r) return F = E + h, F = "vertical" === A ? F < 0 - (z.height() - y.height()) ? 0 - (z.height() - y.height()) : F : F < 0 - (z.width() - y.width()) ? 0 - (z.width() - y.width()) : F, F = F > 0 ? 0 : F, F = Math.abs(h) > D / 10 ? h <= 0 ? Math.floor(F / D) * D : Math.ceil(F / D) * D : h < 0 ? Math.ceil(F / D) * D : Math.floor(F / D) * D, F = "vertical" === A ? F < 0 - (z.height() - y.height()) ? 0 - (z.height() - y.height()) : F : F < 0 - (z.width() - y.width()) ? 0 - (z.width() - y.width()) : F, F = F > 0 ? 0 : F, "vertical" === A ? punchgs.TweenLite.to(z, .5, {
                  top: F + "px",
                  ease: punchgs.Power3.easeOut
                }) : punchgs.TweenLite.to(z, .5, {
                  left: F + "px",
                  ease: punchgs.Power3.easeOut
                }), F = F ? F : "vertical" === A ? z.position().top : z.position().left, z.data("offset", F), z.data("distance", h), setTimeout(function () {
                  d.dragStartedOverSlider = !1, d.dragStartedOverThumbs = !1, d.dragStartedOverTabs = !1;
                }, 100), a.parent().find(t).removeClass("dragged"), !1;
            }
          }
        }
      });
    },
    l = function l(a) {
      a.hide_delay = jQuery.isNumeric(parseInt(a.hide_delay, 0)) ? a.hide_delay / 1e3 : .2, a.hide_delay_mobile = jQuery.isNumeric(parseInt(a.hide_delay_mobile, 0)) ? a.hide_delay_mobile / 1e3 : .2;
    },
    m = function m(a) {
      return a && a.enable;
    },
    n = function n(a) {
      return a && a.enable && a.hide_onleave === !0 && (void 0 === a.position || !a.position.match(/outer/g));
    },
    o = function o(a, b) {
      var d = a.parent();
      n(b.navigation.arrows) && punchgs.TweenLite.delayedCall(c ? b.navigation.arrows.hide_delay_mobile : b.navigation.arrows.hide_delay, p, [d.find(".tparrows"), b.navigation.arrows, "hide"]), n(b.navigation.bullets) && punchgs.TweenLite.delayedCall(c ? b.navigation.bullets.hide_delay_mobile : b.navigation.bullets.hide_delay, p, [d.find(".tp-bullets"), b.navigation.bullets, "hide"]), n(b.navigation.thumbnails) && punchgs.TweenLite.delayedCall(c ? b.navigation.thumbnails.hide_delay_mobile : b.navigation.thumbnails.hide_delay, p, [d.find(".tp-thumbs"), b.navigation.thumbnails, "hide"]), n(b.navigation.tabs) && punchgs.TweenLite.delayedCall(c ? b.navigation.tabs.hide_delay_mobile : b.navigation.tabs.hide_delay, p, [d.find(".tp-tabs"), b.navigation.tabs, "hide"]);
    },
    p = function p(a, b, c, d) {
      switch (d = void 0 === d ? .5 : d, c) {
        case "show":
          punchgs.TweenLite.to(a, d, {
            autoAlpha: 1,
            ease: punchgs.Power3.easeInOut,
            overwrite: "auto"
          });
          break;
        case "hide":
          punchgs.TweenLite.to(a, d, {
            autoAlpha: 0,
            ease: punchgs.Power3.easeInOu,
            overwrite: "auto"
          });
      }
    },
    q = function q(a, b, c) {
      b.style = void 0 === b.style ? "" : b.style, b.left.style = void 0 === b.left.style ? "" : b.left.style, b.right.style = void 0 === b.right.style ? "" : b.right.style, 0 === a.find(".tp-leftarrow.tparrows").length && a.append('<div class="tp-leftarrow tparrows ' + b.style + " " + b.left.style + '">' + b.tmp + "</div>"), 0 === a.find(".tp-rightarrow.tparrows").length && a.append('<div class="tp-rightarrow tparrows ' + b.style + " " + b.right.style + '">' + b.tmp + "</div>");
      var d = a.find(".tp-leftarrow.tparrows"),
        e = a.find(".tp-rightarrow.tparrows");
      b.rtl ? (d.click(function () {
        c.sc_indicator = "arrow", c.sc_indicator_dir = 0, a.revnext();
      }), e.click(function () {
        c.sc_indicator = "arrow", c.sc_indicator_dir = 1, a.revprev();
      })) : (e.click(function () {
        c.sc_indicator = "arrow", c.sc_indicator_dir = 0, a.revnext();
      }), d.click(function () {
        c.sc_indicator = "arrow", c.sc_indicator_dir = 1, a.revprev();
      })), b.right.j = a.find(".tp-rightarrow.tparrows"), b.left.j = a.find(".tp-leftarrow.tparrows"), b.padding_top = parseInt(c.carousel.padding_top || 0, 0), b.padding_bottom = parseInt(c.carousel.padding_bottom || 0, 0), t(d, b.left, c), t(e, b.right, c), b.left.opt = c, b.right.opt = c, "outer-left" != b.position && "outer-right" != b.position || (c.outernav = !0);
    },
    r = function r(a, b, c) {
      var d = a.outerHeight(!0),
        f = (a.outerWidth(!0), void 0 == b.opt ? 0 : 0 == c.conh ? c.height : c.conh),
        g = "layergrid" == b.container ? "fullscreen" == c.sliderLayout ? c.height / 2 - c.gridheight[c.curWinRange] * c.bh / 2 : "on" == c.autoHeight || void 0 != c.minHeight && c.minHeight > 0 ? f / 2 - c.gridheight[c.curWinRange] * c.bh / 2 : 0 : 0,
        h = "top" === b.v_align ? {
          top: "0px",
          y: Math.round(b.v_offset + g) + "px"
        } : "center" === b.v_align ? {
          top: "50%",
          y: Math.round(0 - d / 2 + b.v_offset) + "px"
        } : {
          top: "100%",
          y: Math.round(0 - (d + b.v_offset + g)) + "px"
        };
      a.hasClass("outer-bottom") || punchgs.TweenLite.set(a, h);
    },
    s = function s(a, b, c) {
      var e = (a.outerHeight(!0), a.outerWidth(!0)),
        f = "layergrid" == b.container ? "carousel" === c.sliderType ? 0 : c.width / 2 - c.gridwidth[c.curWinRange] * c.bw / 2 : 0,
        g = "left" === b.h_align ? {
          left: "0px",
          x: Math.round(b.h_offset + f) + "px"
        } : "center" === b.h_align ? {
          left: "50%",
          x: Math.round(0 - e / 2 + b.h_offset) + "px"
        } : {
          left: "100%",
          x: Math.round(0 - (e + b.h_offset + f)) + "px"
        };
      punchgs.TweenLite.set(a, g);
    },
    t = function t(a, b, c) {
      var d = a.closest(".tp-simpleresponsive").length > 0 ? a.closest(".tp-simpleresponsive") : a.closest(".tp-revslider-mainul").length > 0 ? a.closest(".tp-revslider-mainul") : a.closest(".rev_slider_wrapper").length > 0 ? a.closest(".rev_slider_wrapper") : a.parent().find(".tp-revslider-mainul"),
        e = d.width(),
        f = d.height();
      if (r(a, b, c), s(a, b, c), "outer-left" !== b.position || "fullwidth" != b.sliderLayout && "fullscreen" != b.sliderLayout ? "outer-right" !== b.position || "fullwidth" != b.sliderLayout && "fullscreen" != b.sliderLayout || punchgs.TweenLite.set(a, {
        right: 0 - a.outerWidth() + "px",
        x: b.h_offset + "px"
      }) : punchgs.TweenLite.set(a, {
        left: 0 - a.outerWidth() + "px",
        x: b.h_offset + "px"
      }), a.hasClass("tp-thumbs") || a.hasClass("tp-tabs")) {
        var g = a.data("wr_padding"),
          h = a.data("maxw"),
          i = a.data("maxh"),
          j = a.hasClass("tp-thumbs") ? a.find(".tp-thumb-mask") : a.find(".tp-tab-mask"),
          k = parseInt(b.padding_top || 0, 0),
          l = parseInt(b.padding_bottom || 0, 0);
        h > e && "outer-left" !== b.position && "outer-right" !== b.position ? (punchgs.TweenLite.set(a, {
          left: "0px",
          x: 0,
          maxWidth: e - 2 * g + "px"
        }), punchgs.TweenLite.set(j, {
          maxWidth: e - 2 * g + "px"
        })) : (punchgs.TweenLite.set(a, {
          maxWidth: h + "px"
        }), punchgs.TweenLite.set(j, {
          maxWidth: h + "px"
        })), i + 2 * g > f && "outer-bottom" !== b.position && "outer-top" !== b.position ? (punchgs.TweenLite.set(a, {
          top: "0px",
          y: 0,
          maxHeight: k + l + (f - 2 * g) + "px"
        }), punchgs.TweenLite.set(j, {
          maxHeight: k + l + (f - 2 * g) + "px"
        })) : (punchgs.TweenLite.set(a, {
          maxHeight: i + "px"
        }), punchgs.TweenLite.set(j, {
          maxHeight: i + "px"
        })), "outer-left" !== b.position && "outer-right" !== b.position && (k = 0, l = 0), b.span === !0 && "vertical" === b.direction ? (punchgs.TweenLite.set(a, {
          maxHeight: k + l + (f - 2 * g) + "px",
          height: k + l + (f - 2 * g) + "px",
          top: 0 - k,
          y: 0
        }), r(j, b, c)) : b.span === !0 && "horizontal" === b.direction && (punchgs.TweenLite.set(a, {
          maxWidth: "100%",
          width: e - 2 * g + "px",
          left: 0,
          x: 0
        }), s(j, b, c));
      }
    },
    u = function u(a, b, c, d) {
      0 === a.find(".tp-bullets").length && (b.style = void 0 === b.style ? "" : b.style, a.append('<div class="tp-bullets ' + b.style + " " + b.direction + '"></div>'));
      var e = a.find(".tp-bullets"),
        f = c.data("index"),
        g = b.tmp;
      jQuery.each(d.thumbs[c.index()].params, function (a, b) {
        g = g.replace(b.from, b.to);
      }), e.append('<div class="justaddedbullet tp-bullet">' + g + "</div>");
      var h = a.find(".justaddedbullet"),
        i = a.find(".tp-bullet").length,
        j = h.outerWidth() + parseInt(void 0 === b.space ? 0 : b.space, 0),
        k = h.outerHeight() + parseInt(void 0 === b.space ? 0 : b.space, 0);
      "vertical" === b.direction ? (h.css({
        top: (i - 1) * k + "px",
        left: "0px"
      }), e.css({
        height: (i - 1) * k + h.outerHeight(),
        width: h.outerWidth()
      })) : (h.css({
        left: (i - 1) * j + "px",
        top: "0px"
      }), e.css({
        width: (i - 1) * j + h.outerWidth(),
        height: h.outerHeight()
      })), h.find(".tp-bullet-image").css({
        backgroundImage: "url(" + d.thumbs[c.index()].src + ")"
      }), h.data("liref", f), h.click(function () {
        d.sc_indicator = "bullet", a.revcallslidewithid(f), a.find(".tp-bullet").removeClass("selected"), jQuery(this).addClass("selected");
      }), h.removeClass("justaddedbullet"), b.padding_top = parseInt(d.carousel.padding_top || 0, 0), b.padding_bottom = parseInt(d.carousel.padding_bottom || 0, 0), b.opt = d, "outer-left" != b.position && "outer-right" != b.position || (d.outernav = !0), e.addClass("nav-pos-hor-" + b.h_align), e.addClass("nav-pos-ver-" + b.v_align), e.addClass("nav-dir-" + b.direction), t(e, b, d);
    },
    w = function w(a, b, c, d, e) {
      var f = "tp-thumb" === d ? ".tp-thumbs" : ".tp-tabs",
        g = "tp-thumb" === d ? ".tp-thumb-mask" : ".tp-tab-mask",
        h = "tp-thumb" === d ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
        i = "tp-thumb" === d ? ".tp-thumb" : ".tp-tab",
        j = "tp-thumb" === d ? ".tp-thumb-image" : ".tp-tab-image";
      if (b.visibleAmount = b.visibleAmount > e.slideamount ? e.slideamount : b.visibleAmount, b.sliderLayout = e.sliderLayout, 0 === a.parent().find(f).length) {
        b.style = void 0 === b.style ? "" : b.style;
        var k = b.span === !0 ? "tp-span-wrapper" : "",
          l = '<div class="' + d + "s " + k + " " + b.position + " " + b.style + '"><div class="' + d + '-mask"><div class="' + d + 's-inner-wrapper" style="position:relative;"></div></div></div>';
        "outer-top" === b.position ? a.parent().prepend(l) : "outer-bottom" === b.position ? a.after(l) : a.append(l), b.padding_top = parseInt(e.carousel.padding_top || 0, 0), b.padding_bottom = parseInt(e.carousel.padding_bottom || 0, 0), "outer-left" != b.position && "outer-right" != b.position || (e.outernav = !0);
      }
      var m = c.data("index"),
        n = a.parent().find(f),
        o = n.find(g),
        p = o.find(h),
        q = "horizontal" === b.direction ? b.width * b.visibleAmount + b.space * (b.visibleAmount - 1) : b.width,
        r = "horizontal" === b.direction ? b.height : b.height * b.visibleAmount + b.space * (b.visibleAmount - 1),
        s = b.tmp;
      jQuery.each(e.thumbs[c.index()].params, function (a, b) {
        s = s.replace(b.from, b.to);
      }), p.append('<div data-liindex="' + c.index() + '" data-liref="' + m + '" class="justaddedthumb ' + d + '" style="width:' + b.width + "px;height:" + b.height + 'px;">' + s + "</div>");
      var u = n.find(".justaddedthumb"),
        v = n.find(i).length,
        w = u.outerWidth() + parseInt(void 0 === b.space ? 0 : b.space, 0),
        x = u.outerHeight() + parseInt(void 0 === b.space ? 0 : b.space, 0);
      u.find(j).css({
        backgroundImage: "url(" + e.thumbs[c.index()].src + ")"
      }), "vertical" === b.direction ? (u.css({
        top: (v - 1) * x + "px",
        left: "0px"
      }), p.css({
        height: (v - 1) * x + u.outerHeight(),
        width: u.outerWidth()
      })) : (u.css({
        left: (v - 1) * w + "px",
        top: "0px"
      }), p.css({
        width: (v - 1) * w + u.outerWidth(),
        height: u.outerHeight()
      })), n.data("maxw", q), n.data("maxh", r), n.data("wr_padding", b.wrapper_padding);
      var y = "outer-top" === b.position || "outer-bottom" === b.position ? "relative" : "absolute";
      "outer-top" !== b.position && "outer-bottom" !== b.position || "center" !== b.h_align ? "0" : "auto";
      o.css({
        maxWidth: q + "px",
        maxHeight: r + "px",
        overflow: "hidden",
        position: "relative"
      }), n.css({
        maxWidth: q + "px",
        maxHeight: r + "px",
        overflow: "visible",
        position: y,
        background: b.wrapper_color,
        padding: b.wrapper_padding + "px",
        boxSizing: "contet-box"
      }), u.click(function () {
        e.sc_indicator = "bullet";
        var b = a.parent().find(h).data("distance");
        b = void 0 === b ? 0 : b, Math.abs(b) < 10 && (a.revcallslidewithid(m), a.parent().find(f).removeClass("selected"), jQuery(this).addClass("selected"));
      }), u.removeClass("justaddedthumb"), b.opt = e, n.addClass("nav-pos-hor-" + b.h_align), n.addClass("nav-pos-ver-" + b.v_align), n.addClass("nav-dir-" + b.direction), t(n, b, e);
    },
    x = function x(a) {
      var b = a.c.parent().find(".outer-top"),
        c = a.c.parent().find(".outer-bottom");
      a.top_outer = b.hasClass("tp-forcenotvisible") ? 0 : b.outerHeight() || 0, a.bottom_outer = c.hasClass("tp-forcenotvisible") ? 0 : c.outerHeight() || 0;
    },
    y = function y(a, b, c, d) {
      b > c || c > d ? a.addClass("tp-forcenotvisible") : a.removeClass("tp-forcenotvisible");
    };
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./js/revolution/extensions/revolution.extension.parallax.min.js":
/*!***********************************************************************!*\
  !*** ./js/revolution/extensions/revolution.extension.parallax.min.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/********************************************
 * REVOLUTION 5.2.6 EXTENSION - PARALLAX
 * @version: 2.2.0 (16.11.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function (a) {
  "use strict";

  function e(a, b) {
    a.lastscrolltop = b;
  }
  var b = jQuery.fn.revolution,
    c = b.is_mobile(),
    d = {
      alias: "Parallax Min JS",
      name: "revolution.extensions.parallax.min.js",
      min_core: "5.3",
      version: "2.2.0"
    };
  jQuery.extend(!0, b, {
    checkForParallax: function checkForParallax(a, e) {
      function g(a) {
        if ("3D" == f.type || "3d" == f.type) {
          a.find(".slotholder").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>'), a.find(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layer" style="width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:5;overflow:' + f.ddd_layer_overflow + ';"></div>'), a.find(".rs-parallaxlevel-tobggroup").closest(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');
          var b = a.find(".dddwrapper"),
            c = a.find(".dddwrapper-layer"),
            d = a.find(".dddwrapper-layertobggroup");
          d.appendTo(b), "carousel" == e.sliderType && ("on" == f.ddd_shadow && b.addClass("dddwrappershadow"), punchgs.TweenLite.set(b, {
            borderRadius: e.carousel.border_radius
          })), punchgs.TweenLite.set(a, {
            overflow: "visible",
            transformStyle: "preserve-3d",
            perspective: 1600
          }), punchgs.TweenLite.set(b, {
            force3D: "auto",
            transformOrigin: "50% 50%"
          }), punchgs.TweenLite.set(c, {
            force3D: "auto",
            transformOrigin: "50% 50%",
            zIndex: 5
          }), punchgs.TweenLite.set(e.ul, {
            transformStyle: "preserve-3d",
            transformPerspective: 1600
          });
        }
      }
      if ("stop" === b.compare_version(d).check) return !1;
      var f = e.parallax;
      if (!f.done) {
        if (f.done = !0, c && "on" == f.disable_onmobile) return !1;
        "3D" != f.type && "3d" != f.type || (punchgs.TweenLite.set(e.c, {
          overflow: f.ddd_overflow
        }), punchgs.TweenLite.set(e.ul, {
          overflow: f.ddd_overflow
        }), "carousel" != e.sliderType && "on" == f.ddd_shadow && (e.c.prepend('<div class="dddwrappershadow"></div>'), punchgs.TweenLite.set(e.c.find(".dddwrappershadow"), {
          force3D: "auto",
          transformPerspective: 1600,
          transformOrigin: "50% 50%",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0
        }))), e.li.each(function () {
          g(jQuery(this));
        }), ("3D" == f.type || "3d" == f.type) && e.c.find(".tp-static-layers").length > 0 && (punchgs.TweenLite.set(e.c.find(".tp-static-layers"), {
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }), g(e.c.find(".tp-static-layers"))), f.pcontainers = new Array(), f.pcontainer_depths = new Array(), f.bgcontainers = new Array(), f.bgcontainer_depths = new Array(), e.c.find(".tp-revslider-slidesli .slotholder, .tp-revslider-slidesli .rs-background-video-layer").each(function () {
          var a = jQuery(this),
            b = a.data("bgparallax") || e.parallax.bgparallax;
          b = "on" == b ? 1 : b, void 0 !== b && "off" !== b && (f.bgcontainers.push(a), f.bgcontainer_depths.push(e.parallax.levels[parseInt(b, 0) - 1] / 100));
        });
        for (var h = 1; h <= f.levels.length; h++) e.c.find(".rs-parallaxlevel-" + h).each(function () {
          var a = jQuery(this),
            b = a.closest(".tp-parallax-wrap");
          b.data("parallaxlevel", f.levels[h - 1]), b.addClass("tp-parallax-container"), f.pcontainers.push(b), f.pcontainer_depths.push(f.levels[h - 1]);
        });
        "mouse" != f.type && "scroll+mouse" != f.type && "mouse+scroll" != f.type && "3D" != f.type && "3d" != f.type || (a.mouseenter(function (b) {
          var c = a.find(".active-revslide"),
            d = a.offset().top,
            e = a.offset().left,
            f = b.pageX - e,
            g = b.pageY - d;
          c.data("enterx", f), c.data("entery", g);
        }), a.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath", function (b, c) {
          var d = c && c.li ? c.li : a.find(".active-revslide");
          if ("enterpoint" == f.origo) {
            var g = a.offset().top,
              h = a.offset().left;
            void 0 == d.data("enterx") && d.data("enterx", b.pageX - h), void 0 == d.data("entery") && d.data("entery", b.pageY - g);
            var i = d.data("enterx") || b.pageX - h,
              j = d.data("entery") || b.pageY - g,
              k = i - (b.pageX - h),
              l = j - (b.pageY - g),
              m = f.speed / 1e3 || .4;
          } else var g = a.offset().top,
            h = a.offset().left,
            k = e.conw / 2 - (b.pageX - h),
            l = e.conh / 2 - (b.pageY - g),
            m = f.speed / 1e3 || 3;
          "mouseleave" == b.type && (k = f.ddd_lasth || 0, l = f.ddd_lastv || 0, m = 1.5);
          for (var n = 0; n < f.pcontainers.length; n++) {
            var o = f.pcontainers[n],
              p = f.pcontainer_depths[n],
              q = "3D" == f.type || "3d" == f.type ? p / 200 : p / 100,
              r = k * q,
              s = l * q;
            "scroll+mouse" == f.type || "mouse+scroll" == f.type ? punchgs.TweenLite.to(o, m, {
              force3D: "auto",
              x: r,
              ease: punchgs.Power3.easeOut,
              overwrite: "all"
            }) : punchgs.TweenLite.to(o, m, {
              force3D: "auto",
              x: r,
              y: s,
              ease: punchgs.Power3.easeOut,
              overwrite: "all"
            });
          }
          if ("3D" == f.type || "3d" == f.type) {
            var t = ".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer";
            "carousel" === e.sliderType && (t = ".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer"), e.c.find(t).each(function () {
              var a = jQuery(this),
                c = f.levels[f.levels.length - 1] / 200,
                d = k * c,
                g = l * c,
                h = 0 == e.conw ? 0 : Math.round(k / e.conw * c * 100) || 0,
                i = 0 == e.conh ? 0 : Math.round(l / e.conh * c * 100) || 0,
                j = a.closest("li"),
                n = 0,
                o = !1;
              a.hasClass("dddwrapper-layer") && (n = f.ddd_z_correction || 65, o = !0), a.hasClass("dddwrapper-layer") && (d = 0, g = 0), j.hasClass("active-revslide") || "carousel" != e.sliderType ? "on" != f.ddd_bgfreeze || o ? punchgs.TweenLite.to(a, m, {
                rotationX: i,
                rotationY: -h,
                x: d,
                z: n,
                y: g,
                ease: punchgs.Power3.easeOut,
                overwrite: "all"
              }) : punchgs.TweenLite.to(a, .5, {
                force3D: "auto",
                rotationY: 0,
                rotationX: 0,
                z: 0,
                ease: punchgs.Power3.easeOut,
                overwrite: "all"
              }) : punchgs.TweenLite.to(a, .5, {
                force3D: "auto",
                rotationY: 0,
                x: 0,
                y: 0,
                rotationX: 0,
                z: 0,
                ease: punchgs.Power3.easeOut,
                overwrite: "all"
              }), "mouseleave" == b.type && punchgs.TweenLite.to(jQuery(this), 3.8, {
                z: 0,
                ease: punchgs.Power3.easeOut
              });
            });
          }
        }), c && (window.ondeviceorientation = function (b) {
          var c = Math.round(b.beta || 0) - 70,
            d = Math.round(b.gamma || 0),
            g = a.find(".active-revslide");
          if (jQuery(window).width() > jQuery(window).height()) {
            var h = d;
            d = c, c = h;
          }
          var i = a.width(),
            j = a.height(),
            k = 360 / i * d,
            l = 180 / j * c,
            m = f.speed / 1e3 || 3,
            n = [];
          if (g.find(".tp-parallax-container").each(function (a) {
            n.push(jQuery(this));
          }), a.find(".tp-static-layers .tp-parallax-container").each(function () {
            n.push(jQuery(this));
          }), jQuery.each(n, function () {
            var a = jQuery(this),
              b = parseInt(a.data("parallaxlevel"), 0),
              c = b / 100,
              d = k * c * 2,
              e = l * c * 4;
            punchgs.TweenLite.to(a, m, {
              force3D: "auto",
              x: d,
              y: e,
              ease: punchgs.Power3.easeOut,
              overwrite: "all"
            });
          }), "3D" == f.type || "3d" == f.type) {
            var o = ".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer";
            "carousel" === e.sliderType && (o = ".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer, .tp-static-layers .dddwrapper-layer"), e.c.find(o).each(function () {
              var a = jQuery(this),
                c = f.levels[f.levels.length - 1] / 200,
                d = k * c,
                g = l * c * 3,
                h = 0 == e.conw ? 0 : Math.round(k / e.conw * c * 500) || 0,
                i = 0 == e.conh ? 0 : Math.round(l / e.conh * c * 700) || 0,
                j = a.closest("li"),
                n = 0,
                o = !1;
              a.hasClass("dddwrapper-layer") && (n = f.ddd_z_correction || 65, o = !0), a.hasClass("dddwrapper-layer") && (d = 0, g = 0), j.hasClass("active-revslide") || "carousel" != e.sliderType ? "on" != f.ddd_bgfreeze || o ? punchgs.TweenLite.to(a, m, {
                rotationX: i,
                rotationY: -h,
                x: d,
                z: n,
                y: g,
                ease: punchgs.Power3.easeOut,
                overwrite: "all"
              }) : punchgs.TweenLite.to(a, .5, {
                force3D: "auto",
                rotationY: 0,
                rotationX: 0,
                z: 0,
                ease: punchgs.Power3.easeOut,
                overwrite: "all"
              }) : punchgs.TweenLite.to(a, .5, {
                force3D: "auto",
                rotationY: 0,
                z: 0,
                x: 0,
                y: 0,
                rotationX: 0,
                ease: punchgs.Power3.easeOut,
                overwrite: "all"
              }), "mouseleave" == b.type && punchgs.TweenLite.to(jQuery(this), 3.8, {
                z: 0,
                ease: punchgs.Power3.easeOut
              });
            });
          }
        }));
        var i = e.scrolleffect;
        if (i.bgs = new Array(), i.on) {
          if ("on" === i.on_slidebg) for (var h = 0; h < e.allslotholder.length; h++) i.bgs.push(e.allslotholder[h]);
          i.multiplicator_layers = parseFloat(i.multiplicator_layers), i.multiplicator = parseFloat(i.multiplicator);
        }
        void 0 !== i.layers && 0 === i.layers.length && (i.layers = !1), void 0 !== i.bgs && 0 === i.bgs.length && (i.bgs = !1), b.scrollTicker(e, a);
      }
    },
    scrollTicker: function scrollTicker(a, d) {
      1 != a.scrollTicker && (a.scrollTicker = !0, c ? (punchgs.TweenLite.ticker.fps(150), punchgs.TweenLite.ticker.addEventListener("tick", function () {
        b.scrollHandling(a);
      }, d, !1, 1)) : document.addEventListener("scroll", function (c) {
        b.scrollHandling(a, !0);
      }, {
        passive: !0
      })), b.scrollHandling(a, !0);
    },
    scrollHandling: function scrollHandling(a, d) {
      if (a.lastwindowheight = a.lastwindowheight || window.innerHeight, a.conh = 0 === a.conh || void 0 === a.conh ? a.infullscreenmode ? a.minHeight : a.c.height() : a.conh, a.lastscrolltop == window.scrollY && !a.duringslidechange && !d) return !1;
      punchgs.TweenLite.delayedCall(.2, e, [a, window.scrollY]);
      var f = a.c[0].getBoundingClientRect(),
        g = a.viewPort,
        h = a.parallax,
        i = f.top < 0 || f.height > a.lastwindowheight ? f.top / f.height : f.bottom > a.lastwindowheight ? (f.bottom - a.lastwindowheight) / f.height : 0;
      if (a.scrollproc = i, b.callBackHandling && b.callBackHandling(a, "parallax", "start"), g.enable) {
        var j = 1 - Math.abs(i);
        j = j < 0 ? 0 : j, jQuery.isNumeric(g.visible_area) || g.visible_area.indexOf("%") !== -1 && (g.visible_area = parseInt(g.visible_area) / 100), 1 - g.visible_area <= j ? a.inviewport || (a.inviewport = !0, b.enterInViewPort(a)) : a.inviewport && (a.inviewport = !1, b.leaveViewPort(a));
      }
      if (c && "on" == h.disable_onmobile) return !1;
      if ("3d" != h.type && "3D" != h.type) {
        if (("scroll" == h.type || "scroll+mouse" == h.type || "mouse+scroll" == h.type) && h.pcontainers) for (var k = 0; k < h.pcontainers.length; k++) if (h.pcontainers[k].length > 0) {
          var l = h.pcontainers[k],
            m = h.pcontainer_depths[k] / 100,
            n = Math.round(i * -(m * a.conh) * 10) / 10 || 0;
          l.data("parallaxoffset", n), punchgs.TweenLite.set(l, {
            overwrite: "auto",
            force3D: "auto",
            y: n
          });
        }
        if (h.bgcontainers) for (var k = 0; k < h.bgcontainers.length; k++) {
          var o = h.bgcontainers[k],
            p = h.bgcontainer_depths[k],
            n = i * -(p * a.conh) || 0;
          punchgs.TweenLite.set(o, {
            position: "absolute",
            top: "0px",
            left: "0px",
            backfaceVisibility: "hidden",
            force3D: "true",
            y: n + "px"
          });
        }
      }
      var q = a.scrolleffect;
      if (q.on && ("on" !== q.disable_on_mobile || !c)) {
        var r = Math.abs(i) - q.tilt / 100;
        if (r = r < 0 ? 0 : r, q.layers !== !1) {
          var s = 1 - r * q.multiplicator_layers,
            t = {
              backfaceVisibility: "hidden",
              force3D: "true"
            };
          if ("top" == q.direction && i >= 0 && (s = 1), "bottom" == q.direction && i <= 0 && (s = 1), s = s > 1 ? 1 : s < 0 ? 0 : s, "on" === q.fade && (t.opacity = s), "on" === q.blur) {
            var u = (1 - s) * q.maxblur;
            t["-webkit-filter"] = "blur(" + u + "px)", t.filter = "blur(" + u + "px)";
          }
          if ("on" === q.grayscale) {
            var v = 100 * (1 - s),
              w = "grayscale(" + v + "%)";
            t["-webkit-filter"] = void 0 === t["-webkit-filter"] ? w : t["-webkit-filter"] + " " + w, t.filter = void 0 === t.filter ? w : t.filter + " " + w;
          }
          punchgs.TweenLite.set(q.layers, t);
        }
        if (q.bgs !== !1) {
          var s = 1 - r * q.multiplicator,
            t = {
              backfaceVisibility: "hidden",
              force3D: "true"
            };
          if ("top" == q.direction && i >= 0 && (s = 1), "bottom" == q.direction && i <= 0 && (s = 1), s = s > 1 ? 1 : s < 0 ? 0 : s, "on" === q.fade && (t.opacity = s), "on" === q.blur) {
            var u = (1 - s) * q.maxblur;
            t["-webkit-filter"] = "blur(" + u + "px)", t.filter = "blur(" + u + "px)";
          }
          if ("on" === q.grayscale) {
            var v = 100 * (1 - s),
              w = "grayscale(" + v + "%)";
            t["-webkit-filter"] = void 0 === t["-webkit-filter"] ? w : t["-webkit-filter"] + " " + w, t.filter = void 0 === t.filter ? w : t.filter + " " + w;
          }
          punchgs.TweenLite.set(q.bgs, t);
        }
      }
      b.callBackHandling && b.callBackHandling(a, "parallax", "end");
    }
  });
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./js/revolution/extensions/revolution.extension.slideanims.min.js":
/*!*************************************************************************!*\
  !*** ./js/revolution/extensions/revolution.extension.slideanims.min.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/************************************************
 * REVOLUTION 5.3 EXTENSION - SLIDE ANIMATIONS
 * @version: 1.6 (17.11.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
************************************************/
!function (a) {
  "use strict";

  var b = jQuery.fn.revolution,
    c = {
      alias: "SlideAnimations Min JS",
      name: "revolution.extensions.slideanims.min.js",
      min_core: "5.0",
      version: "1.6"
    };
  jQuery.extend(!0, b, {
    animateSlide: function animateSlide(a, d, e, f, h, i, j, k) {
      return "stop" === b.compare_version(c).check ? k : g(a, d, e, f, h, i, j, k);
    }
  });
  var d = function d(a, c, _d, e) {
      var f = a,
        g = f.find(".defaultimg"),
        h = g.data("mediafilter"),
        i = f.data("zoomstart"),
        j = f.data("rotationstart");
      void 0 != g.data("currotate") && (j = g.data("currotate")), void 0 != g.data("curscale") && "box" == e ? i = 100 * g.data("curscale") : void 0 != g.data("curscale") && (i = g.data("curscale")), b.slotSize(g, c);
      var k = g.attr("src"),
        l = g.data("bgcolor"),
        m = c.width,
        n = c.height,
        o = g.data("fxof"),
        p = 0;
      void 0 === l && (l = g.css("backgroundColor")), "on" == c.autoHeight && (n = c.c.height()), void 0 == o && (o = 0);
      var q = 0,
        r = g.data("bgfit"),
        s = g.data("bgrepeat"),
        t = g.data("bgposition");
      void 0 == r && (r = "cover"), void 0 == s && (s = "no-repeat"), void 0 == t && (t = "center center");
      var u = "";
      switch (u = void 0 !== l && l.indexOf("gradient") >= 0 ? "background:" + l : "background-color:" + l + ";background-image:url(" + k + ");background-repeat:" + s + ";background-size:" + r + ";background-position:" + t, e) {
        case "box":
          for (var v = 0, w = 0, x = 0; x < c.slots; x++) {
            w = 0;
            for (var y = 0; y < c.slots; y++) f.append('<div class="slot" style="position:absolute;top:' + (p + w) + "px;left:" + (o + v) + "px;width:" + c.slotw + "px;height:" + c.sloth + 'px;overflow:hidden;"><div class="slotslide ' + h + '" data-x="' + v + '" data-y="' + w + '" style="position:absolute;top:0px;left:0px;width:' + c.slotw + "px;height:" + c.sloth + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - w) + "px;left:" + (0 - v) + "px;width:" + m + "px;height:" + n + "px;" + u + ';"></div></div></div>'), w += c.sloth, void 0 != i && void 0 != j && punchgs.TweenLite.set(f.find(".slot").last(), {
              rotationZ: j
            });
            v += c.slotw;
          }
          break;
        case "vertical":
        case "horizontal":
          if ("horizontal" == e) {
            if (!_d) var q = 0 - c.slotw;
            for (var y = 0; y < c.slots; y++) f.append('<div class="slot" style="position:absolute;top:' + (0 + p) + "px;left:" + (o + y * c.slotw) + "px;overflow:hidden;width:" + (c.slotw + .3) + "px;height:" + n + 'px"><div class="slotslide ' + h + '" style="position:absolute;top:0px;left:' + q + "px;width:" + (c.slotw + .6) + "px;height:" + n + 'px;overflow:hidden;"><div style="position:absolute;top:0px;left:' + (0 - y * c.slotw) + "px;width:" + m + "px;height:" + n + "px;" + u + ';"></div></div></div>'), void 0 != i && void 0 != j && punchgs.TweenLite.set(f.find(".slot").last(), {
              rotationZ: j
            });
          } else {
            if (!_d) var q = 0 - c.sloth;
            for (var y = 0; y < c.slots + 2; y++) f.append('<div class="slot" style="position:absolute;top:' + (p + y * c.sloth) + "px;left:" + o + "px;overflow:hidden;width:" + m + "px;height:" + c.sloth + 'px"><div class="slotslide ' + h + '" style="position:absolute;top:' + q + "px;left:0px;width:" + m + "px;height:" + c.sloth + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - y * c.sloth) + "px;left:0px;width:" + m + "px;height:" + n + "px;" + u + ';"></div></div></div>'), void 0 != i && void 0 != j && punchgs.TweenLite.set(f.find(".slot").last(), {
              rotationZ: j
            });
          }
      }
    },
    e = function e(a, b, c, d) {
      function y() {
        jQuery.each(v, function (a, c) {
          c[0] != b && c[8] != b || (q = c[1], r = c[2], s = t), t += 1;
        });
      }
      var e = a[0].opt,
        f = punchgs.Power1.easeIn,
        g = punchgs.Power1.easeOut,
        h = punchgs.Power1.easeInOut,
        i = punchgs.Power2.easeIn,
        j = punchgs.Power2.easeOut,
        k = punchgs.Power2.easeInOut,
        m = (punchgs.Power3.easeIn, punchgs.Power3.easeOut),
        n = punchgs.Power3.easeInOut,
        o = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
        p = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27],
        q = 0,
        r = 1,
        s = 0,
        t = 0,
        v = (new Array(), [["boxslide", 0, 1, 10, 0, "box", !1, null, 0, g, g, 500, 6], ["boxfade", 1, 0, 10, 0, "box", !1, null, 1, h, h, 700, 5], ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", !0, !1, 2, k, k, 700, 3], ["slotslide-vertical", 3, 0, 0, 200, "vertical", !0, !1, 3, k, k, 700, 3], ["curtain-1", 4, 3, 0, 0, "horizontal", !0, !0, 4, g, g, 300, 5], ["curtain-2", 5, 3, 0, 0, "horizontal", !0, !0, 5, g, g, 300, 5], ["curtain-3", 6, 3, 25, 0, "horizontal", !0, !0, 6, g, g, 300, 5], ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", !0, !0, 7, g, g, 300, 7], ["slotzoom-vertical", 8, 0, 0, 0, "vertical", !0, !0, 8, j, j, 500, 8], ["slotfade-horizontal", 9, 0, 0, 1e3, "horizontal", !0, null, 9, j, j, 2e3, 10], ["slotfade-vertical", 10, 0, 0, 1e3, "vertical", !0, null, 10, j, j, 2e3, 10], ["fade", 11, 0, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1], ["crossfade", 11, 1, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1], ["fadethroughdark", 11, 2, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1], ["fadethroughlight", 11, 3, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1], ["fadethroughtransparent", 11, 4, 1, 300, "horizontal", !0, null, 11, k, k, 1e3, 1], ["slideleft", 12, 0, 1, 0, "horizontal", !0, !0, 12, n, n, 1e3, 1], ["slideup", 13, 0, 1, 0, "horizontal", !0, !0, 13, n, n, 1e3, 1], ["slidedown", 14, 0, 1, 0, "horizontal", !0, !0, 14, n, n, 1e3, 1], ["slideright", 15, 0, 1, 0, "horizontal", !0, !0, 15, n, n, 1e3, 1], ["slideoverleft", 12, 7, 1, 0, "horizontal", !0, !0, 12, n, n, 1e3, 1], ["slideoverup", 13, 7, 1, 0, "horizontal", !0, !0, 13, n, n, 1e3, 1], ["slideoverdown", 14, 7, 1, 0, "horizontal", !0, !0, 14, n, n, 1e3, 1], ["slideoverright", 15, 7, 1, 0, "horizontal", !0, !0, 15, n, n, 1e3, 1], ["slideremoveleft", 12, 8, 1, 0, "horizontal", !0, !0, 12, n, n, 1e3, 1], ["slideremoveup", 13, 8, 1, 0, "horizontal", !0, !0, 13, n, n, 1e3, 1], ["slideremovedown", 14, 8, 1, 0, "horizontal", !0, !0, 14, n, n, 1e3, 1], ["slideremoveright", 15, 8, 1, 0, "horizontal", !0, !0, 15, n, n, 1e3, 1], ["papercut", 16, 0, 0, 600, "", null, null, 16, n, n, 1e3, 2], ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", !1, !0, 17, h, h, 500, 7], ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", !1, !0, 18, h, h, 500, 5], ["cubic", 19, 0, 20, 600, "horizontal", !1, !0, 19, n, n, 500, 1], ["cube", 19, 0, 20, 600, "horizontal", !1, !0, 20, n, n, 500, 1], ["flyin", 20, 0, 4, 600, "vertical", !1, !0, 21, m, n, 500, 1], ["turnoff", 21, 0, 1, 500, "horizontal", !1, !0, 22, n, n, 500, 1], ["incube", 22, 0, 20, 200, "horizontal", !1, !0, 23, k, k, 500, 1], ["cubic-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 24, j, j, 500, 1], ["cube-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 25, j, j, 500, 1], ["incube-horizontal", 24, 0, 20, 500, "vertical", !1, !0, 26, k, k, 500, 1], ["turnoff-vertical", 25, 0, 1, 200, "horizontal", !1, !0, 27, k, k, 500, 1], ["fadefromright", 14, 1, 1, 0, "horizontal", !0, !0, 28, k, k, 1e3, 1], ["fadefromleft", 15, 1, 1, 0, "horizontal", !0, !0, 29, k, k, 1e3, 1], ["fadefromtop", 14, 1, 1, 0, "horizontal", !0, !0, 30, k, k, 1e3, 1], ["fadefrombottom", 13, 1, 1, 0, "horizontal", !0, !0, 31, k, k, 1e3, 1], ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", !0, !0, 32, k, k, 1e3, 1], ["fadetorightfadefromleft", 15, 2, 1, 0, "horizontal", !0, !0, 33, k, k, 1e3, 1], ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", !0, !0, 34, k, k, 1e3, 1], ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", !0, !0, 35, k, k, 1e3, 1], ["parallaxtoright", 15, 3, 1, 0, "horizontal", !0, !0, 36, k, i, 1500, 1], ["parallaxtoleft", 12, 3, 1, 0, "horizontal", !0, !0, 37, k, i, 1500, 1], ["parallaxtotop", 14, 3, 1, 0, "horizontal", !0, !0, 38, k, f, 1500, 1], ["parallaxtobottom", 13, 3, 1, 0, "horizontal", !0, !0, 39, k, f, 1500, 1], ["scaledownfromright", 12, 4, 1, 0, "horizontal", !0, !0, 40, k, i, 1e3, 1], ["scaledownfromleft", 15, 4, 1, 0, "horizontal", !0, !0, 41, k, i, 1e3, 1], ["scaledownfromtop", 14, 4, 1, 0, "horizontal", !0, !0, 42, k, i, 1e3, 1], ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", !0, !0, 43, k, i, 1e3, 1], ["zoomout", 13, 5, 1, 0, "horizontal", !0, !0, 44, k, i, 1e3, 1], ["zoomin", 13, 6, 1, 0, "horizontal", !0, !0, 45, k, i, 1e3, 1], ["slidingoverlayup", 27, 0, 1, 0, "horizontal", !0, !0, 47, h, g, 2e3, 1], ["slidingoverlaydown", 28, 0, 1, 0, "horizontal", !0, !0, 48, h, g, 2e3, 1], ["slidingoverlayright", 30, 0, 1, 0, "horizontal", !0, !0, 49, h, g, 2e3, 1], ["slidingoverlayleft", 29, 0, 1, 0, "horizontal", !0, !0, 50, h, g, 2e3, 1], ["parallaxcirclesup", 31, 0, 1, 0, "horizontal", !0, !0, 51, k, f, 1500, 1], ["parallaxcirclesdown", 32, 0, 1, 0, "horizontal", !0, !0, 52, k, f, 1500, 1], ["parallaxcirclesright", 33, 0, 1, 0, "horizontal", !0, !0, 53, k, f, 1500, 1], ["parallaxcirclesleft", 34, 0, 1, 0, "horizontal", !0, !0, 54, k, f, 1500, 1], ["notransition", 26, 0, 1, 0, "horizontal", !0, null, 46, k, i, 1e3, 1], ["parallaxright", 15, 3, 1, 0, "horizontal", !0, !0, 55, k, i, 1500, 1], ["parallaxleft", 12, 3, 1, 0, "horizontal", !0, !0, 56, k, i, 1500, 1], ["parallaxup", 14, 3, 1, 0, "horizontal", !0, !0, 57, k, f, 1500, 1], ["parallaxdown", 13, 3, 1, 0, "horizontal", !0, !0, 58, k, f, 1500, 1]]);
      e.duringslidechange = !0, e.testanims = !1, 1 == e.testanims && (e.nexttesttransform = void 0 === e.nexttesttransform ? 34 : e.nexttesttransform + 1, e.nexttesttransform = e.nexttesttransform > 70 ? 0 : e.nexttesttransform, b = v[e.nexttesttransform][0], console.log(b + "  " + e.nexttesttransform + "  " + v[e.nexttesttransform][1] + "  " + v[e.nexttesttransform][2])), jQuery.each(["parallaxcircles", "slidingoverlay", "slide", "slideover", "slideremove", "parallax", "parralaxto"], function (a, c) {
        b == c + "horizontal" && (b = 1 != d ? c + "left" : c + "right"), b == c + "vertical" && (b = 1 != d ? c + "up" : c + "down");
      }), "random" == b && (b = Math.round(Math.random() * v.length - 1), b > v.length - 1 && (b = v.length - 1)), "random-static" == b && (b = Math.round(Math.random() * o.length - 1), b > o.length - 1 && (b = o.length - 1), b = o[b]), "random-premium" == b && (b = Math.round(Math.random() * p.length - 1), b > p.length - 1 && (b = p.length - 1), b = p[b]);
      var w = [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
      if (1 == e.isJoomla && void 0 != window.MooTools && w.indexOf(b) != -1) {
        var x = Math.round(Math.random() * (p.length - 2)) + 1;
        x > p.length - 1 && (x = p.length - 1), 0 == x && (x = 1), b = p[x];
      }
      y(), q > 30 && (q = 30), q < 0 && (q = 0);
      var z = new Object();
      return z.nexttrans = q, z.STA = v[s], z.specials = r, z;
    },
    f = function f(a, b) {
      return void 0 == b || jQuery.isNumeric(a) ? a : void 0 == a ? a : a.split(",")[b];
    },
    g = function g(a, b, c, _g, h, i, j, k) {
      function V(a, b, c, d, e) {
        var f = a.find(".slot"),
          g = 6,
          h = [2, 1.2, .9, .7, .55, .42],
          j = a.width(),
          l = a.height();
        f.wrap('<div class="slot-circle-wrapper" style="overflow:hidden;position:absolute;border:1px solid #fff"></div>');
        for (var n = 0; n < g; n++) f.parent().clone(!1).appendTo(i);
        a.find(".slot-circle-wrapper").each(function (a) {
          if (a < g) {
            var d = jQuery(this),
              f = d.find(".slot"),
              i = j > l ? h[a] * j : h[a] * l,
              m = i,
              n = 0 + (m / 2 - j / 2),
              o = 0 + (i / 2 - l / 2),
              p = 0 != a ? "50%" : "0",
              q = 31 == c ? l / 2 - i / 2 : 32 == c ? l / 2 - i / 2 : l / 2 - i / 2,
              r = 33 == c ? j / 2 - m / 2 : 34 == c ? j - m : j / 2 - m / 2,
              s = {
                scale: 1,
                transformOrigo: "50% 50%",
                width: m + "px",
                height: i + "px",
                top: q + "px",
                left: r + "px",
                borderRadius: p
              },
              t = {
                scale: 1,
                top: l / 2 - i / 2,
                left: j / 2 - m / 2,
                ease: e
              },
              u = 31 == c ? o : 32 == c ? o : o,
              v = 33 == c ? n : 34 == c ? n + j / 2 : n,
              w = {
                width: j,
                height: l,
                autoAlpha: 1,
                top: u + "px",
                position: "absolute",
                left: v + "px"
              },
              x = {
                top: o + "px",
                left: n + "px",
                ease: e
              },
              y = b,
              z = 0;
            k.add(punchgs.TweenLite.fromTo(d, y, s, t), z), k.add(punchgs.TweenLite.fromTo(f, y, w, x), z), k.add(punchgs.TweenLite.fromTo(d, .001, {
              autoAlpha: 0
            }, {
              autoAlpha: 1
            }), 0);
          }
        });
      }
      var l = c[0].opt,
        m = h.index(),
        n = _g.index(),
        o = n < m ? 1 : 0;
      "arrow" == l.sc_indicator && (o = l.sc_indicator_dir);
      var p = e(c, b, i, o),
        q = p.STA,
        r = p.specials,
        a = p.nexttrans;
      "on" == i.data("kenburns") && (a = 11);
      var s = _g.data("nexttransid") || 0,
        t = f(_g.data("masterspeed"), s);
      t = "default" === t ? q[11] : "random" === t ? Math.round(1e3 * Math.random() + 300) : void 0 != t ? parseInt(t, 0) : q[11], t = t > l.delay ? l.delay : t, t += q[4], l.slots = f(_g.data("slotamount"), s), l.slots = void 0 == l.slots || "default" == l.slots ? q[12] : "random" == l.slots ? Math.round(12 * Math.random() + 4) : l.slots, l.slots = l.slots < 1 ? "boxslide" == b ? Math.round(6 * Math.random() + 3) : "flyin" == b ? Math.round(4 * Math.random() + 1) : l.slots : l.slots, l.slots = (4 == a || 5 == a || 6 == a) && l.slots < 3 ? 3 : l.slots, l.slots = 0 != q[3] ? Math.min(l.slots, q[3]) : l.slots, l.slots = 9 == a ? l.width / l.slots : 10 == a ? l.height / l.slots : l.slots, l.rotate = f(_g.data("rotate"), s), l.rotate = void 0 == l.rotate || "default" == l.rotate ? 0 : 999 == l.rotate || "random" == l.rotate ? Math.round(360 * Math.random()) : l.rotate, l.rotate = !jQuery.support.transition || l.ie || l.ie9 ? 0 : l.rotate, 11 != a && (null != q[7] && d(j, l, q[7], q[5]), null != q[6] && d(i, l, q[6], q[5])), k.add(punchgs.TweenLite.set(i.find(".defaultvid"), {
        y: 0,
        x: 0,
        top: 0,
        left: 0,
        scale: 1
      }), 0), k.add(punchgs.TweenLite.set(j.find(".defaultvid"), {
        y: 0,
        x: 0,
        top: 0,
        left: 0,
        scale: 1
      }), 0), k.add(punchgs.TweenLite.set(i.find(".defaultvid"), {
        y: "+0%",
        x: "+0%"
      }), 0), k.add(punchgs.TweenLite.set(j.find(".defaultvid"), {
        y: "+0%",
        x: "+0%"
      }), 0), k.add(punchgs.TweenLite.set(i, {
        autoAlpha: 1,
        y: "+0%",
        x: "+0%"
      }), 0), k.add(punchgs.TweenLite.set(j, {
        autoAlpha: 1,
        y: "+0%",
        x: "+0%"
      }), 0), k.add(punchgs.TweenLite.set(i.parent(), {
        backgroundColor: "transparent"
      }), 0), k.add(punchgs.TweenLite.set(j.parent(), {
        backgroundColor: "transparent"
      }), 0);
      var u = f(_g.data("easein"), s),
        v = f(_g.data("easeout"), s);
      if (u = "default" === u ? q[9] || punchgs.Power2.easeInOut : u || q[9] || punchgs.Power2.easeInOut, v = "default" === v ? q[10] || punchgs.Power2.easeInOut : v || q[10] || punchgs.Power2.easeInOut, 0 == a) {
        var w = Math.ceil(l.height / l.sloth),
          x = 0;
        i.find(".slotslide").each(function (a) {
          var b = jQuery(this);
          x += 1, x == w && (x = 0), k.add(punchgs.TweenLite.from(b, t / 600, {
            opacity: 0,
            top: 0 - l.sloth,
            left: 0 - l.slotw,
            rotation: l.rotate,
            force3D: "auto",
            ease: u
          }), (15 * a + 30 * x) / 1500);
        });
      }
      if (1 == a) {
        var y,
          z = 0;
        i.find(".slotslide").each(function (a) {
          var b = jQuery(this),
            c = Math.random() * t + 300,
            d = 500 * Math.random() + 200;
          c + d > y && (y = d + d, z = a), k.add(punchgs.TweenLite.from(b, c / 1e3, {
            autoAlpha: 0,
            force3D: "auto",
            rotation: l.rotate,
            ease: u
          }), d / 1e3);
        });
      }
      if (2 == a) {
        var A = new punchgs.TimelineLite();
        j.find(".slotslide").each(function () {
          var a = jQuery(this);
          A.add(punchgs.TweenLite.to(a, t / 1e3, {
            left: l.slotw,
            ease: u,
            force3D: "auto",
            rotation: 0 - l.rotate
          }), 0), k.add(A, 0);
        }), i.find(".slotslide").each(function () {
          var a = jQuery(this);
          A.add(punchgs.TweenLite.from(a, t / 1e3, {
            left: 0 - l.slotw,
            ease: u,
            force3D: "auto",
            rotation: l.rotate
          }), 0), k.add(A, 0);
        });
      }
      if (3 == a) {
        var A = new punchgs.TimelineLite();
        j.find(".slotslide").each(function () {
          var a = jQuery(this);
          A.add(punchgs.TweenLite.to(a, t / 1e3, {
            top: l.sloth,
            ease: u,
            rotation: l.rotate,
            force3D: "auto",
            transformPerspective: 600
          }), 0), k.add(A, 0);
        }), i.find(".slotslide").each(function () {
          var a = jQuery(this);
          A.add(punchgs.TweenLite.from(a, t / 1e3, {
            top: 0 - l.sloth,
            rotation: l.rotate,
            ease: v,
            force3D: "auto",
            transformPerspective: 600
          }), 0), k.add(A, 0);
        });
      }
      if (4 == a || 5 == a) {
        setTimeout(function () {
          j.find(".defaultimg").css({
            opacity: 0
          });
        }, 100);
        var B = t / 1e3,
          A = new punchgs.TimelineLite();
        j.find(".slotslide").each(function (b) {
          var c = jQuery(this),
            d = b * B / l.slots;
          5 == a && (d = (l.slots - b - 1) * B / l.slots / 1.5), A.add(punchgs.TweenLite.to(c, 3 * B, {
            transformPerspective: 600,
            force3D: "auto",
            top: 0 + l.height,
            opacity: .5,
            rotation: l.rotate,
            ease: u,
            delay: d
          }), 0), k.add(A, 0);
        }), i.find(".slotslide").each(function (b) {
          var c = jQuery(this),
            d = b * B / l.slots;
          5 == a && (d = (l.slots - b - 1) * B / l.slots / 1.5), A.add(punchgs.TweenLite.from(c, 3 * B, {
            top: 0 - l.height,
            opacity: .5,
            rotation: l.rotate,
            force3D: "auto",
            ease: punchgs.eo,
            delay: d
          }), 0), k.add(A, 0);
        });
      }
      if (6 == a) {
        l.slots < 2 && (l.slots = 2), l.slots % 2 && (l.slots = l.slots + 1);
        var A = new punchgs.TimelineLite();
        setTimeout(function () {
          j.find(".defaultimg").css({
            opacity: 0
          });
        }, 100), j.find(".slotslide").each(function (a) {
          var b = jQuery(this);
          if (a + 1 < l.slots / 2) var c = 90 * (a + 2);else var c = 90 * (2 + l.slots - a);
          A.add(punchgs.TweenLite.to(b, (t + c) / 1e3, {
            top: 0 + l.height,
            opacity: 1,
            force3D: "auto",
            rotation: l.rotate,
            ease: u
          }), 0), k.add(A, 0);
        }), i.find(".slotslide").each(function (a) {
          var b = jQuery(this);
          if (a + 1 < l.slots / 2) var c = 90 * (a + 2);else var c = 90 * (2 + l.slots - a);
          A.add(punchgs.TweenLite.from(b, (t + c) / 1e3, {
            top: 0 - l.height,
            opacity: 1,
            force3D: "auto",
            rotation: l.rotate,
            ease: v
          }), 0), k.add(A, 0);
        });
      }
      if (7 == a) {
        t *= 2, t > l.delay && (t = l.delay);
        var A = new punchgs.TimelineLite();
        setTimeout(function () {
          j.find(".defaultimg").css({
            opacity: 0
          });
        }, 100), j.find(".slotslide").each(function () {
          var a = jQuery(this).find("div");
          A.add(punchgs.TweenLite.to(a, t / 1e3, {
            left: 0 - l.slotw / 2 + "px",
            top: 0 - l.height / 2 + "px",
            width: 2 * l.slotw + "px",
            height: 2 * l.height + "px",
            opacity: 0,
            rotation: l.rotate,
            force3D: "auto",
            ease: u
          }), 0), k.add(A, 0);
        }), i.find(".slotslide").each(function (a) {
          var b = jQuery(this).find("div");
          A.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
            left: 0,
            top: 0,
            opacity: 0,
            transformPerspective: 600
          }, {
            left: 0 - a * l.slotw + "px",
            ease: v,
            force3D: "auto",
            top: "0px",
            width: l.width,
            height: l.height,
            opacity: 1,
            rotation: 0,
            delay: .1
          }), 0), k.add(A, 0);
        });
      }
      if (8 == a) {
        t *= 3, t > l.delay && (t = l.delay);
        var A = new punchgs.TimelineLite();
        j.find(".slotslide").each(function () {
          var a = jQuery(this).find("div");
          A.add(punchgs.TweenLite.to(a, t / 1e3, {
            left: 0 - l.width / 2 + "px",
            top: 0 - l.sloth / 2 + "px",
            width: 2 * l.width + "px",
            height: 2 * l.sloth + "px",
            force3D: "auto",
            ease: u,
            opacity: 0,
            rotation: l.rotate
          }), 0), k.add(A, 0);
        }), i.find(".slotslide").each(function (a) {
          var b = jQuery(this).find("div");
          A.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
            left: 0,
            top: 0,
            opacity: 0,
            force3D: "auto"
          }, {
            left: "0px",
            top: 0 - a * l.sloth + "px",
            width: i.find(".defaultimg").data("neww") + "px",
            height: i.find(".defaultimg").data("newh") + "px",
            opacity: 1,
            ease: v,
            rotation: 0
          }), 0), k.add(A, 0);
        });
      }
      if (9 == a || 10 == a) {
        var D = 0;
        i.find(".slotslide").each(function (a) {
          var b = jQuery(this);
          D++, k.add(punchgs.TweenLite.fromTo(b, t / 2e3, {
            autoAlpha: 0,
            force3D: "auto",
            transformPerspective: 600
          }, {
            autoAlpha: 1,
            ease: u,
            delay: a * l.slots / 100 / 2e3
          }), 0);
        });
      }
      if (27 == a || 28 == a || 29 == a || 30 == a) {
        var E = i.find(".slot"),
          F = 27 == a || 28 == a ? 1 : 2,
          G = 27 == a || 29 == a ? "-100%" : "+100%",
          H = 27 == a || 29 == a ? "+100%" : "-100%",
          I = 27 == a || 29 == a ? "-80%" : "80%",
          J = 27 == a || 29 == a ? "+80%" : "-80%",
          K = 27 == a || 29 == a ? "+10%" : "-10%",
          L = {
            overwrite: "all"
          },
          M = {
            autoAlpha: 0,
            zIndex: 1,
            force3D: "auto",
            ease: u
          },
          N = {
            position: "inherit",
            autoAlpha: 0,
            overwrite: "all",
            zIndex: 1
          },
          O = {
            autoAlpha: 1,
            force3D: "auto",
            ease: v
          },
          P = {
            overwrite: "all",
            zIndex: 2,
            opacity: 1,
            autoAlpha: 1
          },
          Q = {
            autoAlpha: 1,
            force3D: "auto",
            overwrite: "all",
            ease: u
          },
          R = {
            overwrite: "all",
            zIndex: 2,
            autoAlpha: 1
          },
          S = {
            autoAlpha: 1,
            force3D: "auto",
            ease: u
          },
          T = 1 == F ? "y" : "x";
        L[T] = "0px", M[T] = G, N[T] = K, O[T] = "0%", P[T] = H, Q[T] = G, R[T] = I, S[T] = J, E.append('<span style="background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;top:0px;left:0px;display:block;z-index:2"></span>'), k.add(punchgs.TweenLite.fromTo(j, t / 1e3, L, M), 0), k.add(punchgs.TweenLite.fromTo(i.find(".defaultimg"), t / 2e3, N, O), t / 2e3), k.add(punchgs.TweenLite.fromTo(E, t / 1e3, P, Q), 0), k.add(punchgs.TweenLite.fromTo(E.find(".slotslide div"), t / 1e3, R, S), 0);
      }
      if (31 == a || 32 == a || 33 == a || 34 == a) {
        t = 6e3, u = punchgs.Power3.easeInOut;
        var U = t / 1e3;
        mas = U - U / 5, _nt = a, fy = 31 == _nt ? "+100%" : 32 == _nt ? "-100%" : "0%", fx = 33 == _nt ? "+100%" : 34 == _nt ? "-100%" : "0%", ty = 31 == _nt ? "-100%" : 32 == _nt ? "+100%" : "0%", tx = 33 == _nt ? "-100%" : 34 == _nt ? "+100%" : "0%", k.add(punchgs.TweenLite.fromTo(j, U - .2 * U, {
          y: 0,
          x: 0
        }, {
          y: ty,
          x: tx,
          ease: v
        }), .2 * U), k.add(punchgs.TweenLite.fromTo(i, U, {
          y: fy,
          x: fx
        }, {
          y: "0%",
          x: "0%",
          ease: u
        }), 0), i.find(".slot").remove(), i.find(".defaultimg").clone().appendTo(i).addClass("slot"), V(i, U, _nt, "in", u);
      }
      if (11 == a) {
        r > 4 && (r = 0);
        var D = 0,
          W = 2 == r ? "#000000" : 3 == r ? "#ffffff" : "transparent";
        switch (r) {
          case 0:
            k.add(punchgs.TweenLite.fromTo(i, t / 1e3, {
              autoAlpha: 0
            }, {
              autoAlpha: 1,
              force3D: "auto",
              ease: u
            }), 0);
            break;
          case 1:
            k.add(punchgs.TweenLite.fromTo(i, t / 1e3, {
              autoAlpha: 0
            }, {
              autoAlpha: 1,
              force3D: "auto",
              ease: u
            }), 0), k.add(punchgs.TweenLite.fromTo(j, t / 1e3, {
              autoAlpha: 1
            }, {
              autoAlpha: 0,
              force3D: "auto",
              ease: u
            }), 0);
            break;
          case 2:
          case 3:
          case 4:
            k.add(punchgs.TweenLite.set(j.parent(), {
              backgroundColor: W,
              force3D: "auto"
            }), 0), k.add(punchgs.TweenLite.set(i.parent(), {
              backgroundColor: "transparent",
              force3D: "auto"
            }), 0), k.add(punchgs.TweenLite.to(j, t / 2e3, {
              autoAlpha: 0,
              force3D: "auto",
              ease: u
            }), 0), k.add(punchgs.TweenLite.fromTo(i, t / 2e3, {
              autoAlpha: 0
            }, {
              autoAlpha: 1,
              force3D: "auto",
              ease: u
            }), t / 2e3);
        }
        k.add(punchgs.TweenLite.set(i.find(".defaultimg"), {
          autoAlpha: 1
        }), 0), k.add(punchgs.TweenLite.set(j.find("defaultimg"), {
          autoAlpha: 1
        }), 0);
      }
      if (26 == a) {
        var D = 0;
        t = 0, k.add(punchgs.TweenLite.fromTo(i, t / 1e3, {
          autoAlpha: 0
        }, {
          autoAlpha: 1,
          force3D: "auto",
          ease: u
        }), 0), k.add(punchgs.TweenLite.to(j, t / 1e3, {
          autoAlpha: 0,
          force3D: "auto",
          ease: u
        }), 0), k.add(punchgs.TweenLite.set(i.find(".defaultimg"), {
          autoAlpha: 1
        }), 0), k.add(punchgs.TweenLite.set(j.find("defaultimg"), {
          autoAlpha: 1
        }), 0);
      }
      if (12 == a || 13 == a || 14 == a || 15 == a) {
        t = t, t > l.delay && (t = l.delay), setTimeout(function () {
          punchgs.TweenLite.set(j.find(".defaultimg"), {
            autoAlpha: 0
          });
        }, 100);
        var X = l.width,
          Y = l.height,
          Z = i.find(".slotslide, .defaultvid"),
          $ = 0,
          _ = 0,
          aa = 1,
          ba = 1,
          ca = 1,
          da = t / 1e3,
          ea = da;
        "fullwidth" != l.sliderLayout && "fullscreen" != l.sliderLayout || (X = Z.width(), Y = Z.height()), 12 == a ? $ = X : 15 == a ? $ = 0 - X : 13 == a ? _ = Y : 14 == a && (_ = 0 - Y), 1 == r && (aa = 0), 2 == r && (aa = 0), 3 == r && (da = t / 1300), 4 != r && 5 != r || (ba = .6), 6 == r && (ba = 1.4), 5 != r && 6 != r || (ca = 1.4, aa = 0, X = 0, Y = 0, $ = 0, _ = 0), 6 == r && (ca = .6);
        7 == r && (X = 0, Y = 0);
        var ga = i.find(".slotslide"),
          ha = j.find(".slotslide, .defaultvid");
        if (k.add(punchgs.TweenLite.set(h, {
          zIndex: 15
        }), 0), k.add(punchgs.TweenLite.set(_g, {
          zIndex: 20
        }), 0), 8 == r ? (k.add(punchgs.TweenLite.set(h, {
          zIndex: 20
        }), 0), k.add(punchgs.TweenLite.set(_g, {
          zIndex: 15
        }), 0), k.add(punchgs.TweenLite.set(ga, {
          left: 0,
          top: 0,
          scale: 1,
          opacity: 1,
          rotation: 0,
          ease: u,
          force3D: "auto"
        }), 0)) : k.add(punchgs.TweenLite.from(ga, da, {
          left: $,
          top: _,
          scale: ca,
          opacity: aa,
          rotation: l.rotate,
          ease: u,
          force3D: "auto"
        }), 0), 4 != r && 5 != r || (X = 0, Y = 0), 1 != r) switch (a) {
          case 12:
            k.add(punchgs.TweenLite.to(ha, ea, {
              left: 0 - X + "px",
              force3D: "auto",
              scale: ba,
              opacity: aa,
              rotation: l.rotate,
              ease: v
            }), 0);
            break;
          case 15:
            k.add(punchgs.TweenLite.to(ha, ea, {
              left: X + "px",
              force3D: "auto",
              scale: ba,
              opacity: aa,
              rotation: l.rotate,
              ease: v
            }), 0);
            break;
          case 13:
            k.add(punchgs.TweenLite.to(ha, ea, {
              top: 0 - Y + "px",
              force3D: "auto",
              scale: ba,
              opacity: aa,
              rotation: l.rotate,
              ease: v
            }), 0);
            break;
          case 14:
            k.add(punchgs.TweenLite.to(ha, ea, {
              top: Y + "px",
              force3D: "auto",
              scale: ba,
              opacity: aa,
              rotation: l.rotate,
              ease: v
            }), 0);
        }
      }
      if (16 == a) {
        var A = new punchgs.TimelineLite();
        k.add(punchgs.TweenLite.set(h, {
          position: "absolute",
          "z-index": 20
        }), 0), k.add(punchgs.TweenLite.set(_g, {
          position: "absolute",
          "z-index": 15
        }), 0), h.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'), h.find(".tp-half-one").clone(!0).appendTo(h).addClass("tp-half-two"), h.find(".tp-half-two").removeClass("tp-half-one");
        var X = l.width,
          Y = l.height;
        "on" == l.autoHeight && (Y = c.height()), h.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + X + "px;height:" + Y + 'px;"></div>'), h.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + X + "px;height:" + Y + 'px;"></div>'), h.find(".tp-half-two .defaultimg").css({
          position: "absolute",
          top: "-50%"
        }), h.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'), k.add(punchgs.TweenLite.set(h.find(".tp-half-two"), {
          width: X,
          height: Y,
          overflow: "hidden",
          zIndex: 15,
          position: "absolute",
          top: Y / 2,
          left: "0px",
          transformPerspective: 600,
          transformOrigin: "center bottom"
        }), 0), k.add(punchgs.TweenLite.set(h.find(".tp-half-one"), {
          width: X,
          height: Y / 2,
          overflow: "visible",
          zIndex: 10,
          position: "absolute",
          top: "0px",
          left: "0px",
          transformPerspective: 600,
          transformOrigin: "center top"
        }), 0);
        var ja = (h.find(".defaultimg"), Math.round(20 * Math.random() - 10)),
          ka = Math.round(20 * Math.random() - 10),
          la = Math.round(20 * Math.random() - 10),
          ma = .4 * Math.random() - .2,
          na = .4 * Math.random() - .2,
          oa = 1 * Math.random() + 1,
          pa = 1 * Math.random() + 1,
          qa = .3 * Math.random() + .3;
        k.add(punchgs.TweenLite.set(h.find(".tp-half-one"), {
          overflow: "hidden"
        }), 0), k.add(punchgs.TweenLite.fromTo(h.find(".tp-half-one"), t / 800, {
          width: X,
          height: Y / 2,
          position: "absolute",
          top: "0px",
          left: "0px",
          force3D: "auto",
          transformOrigin: "center top"
        }, {
          scale: oa,
          rotation: ja,
          y: 0 - Y - Y / 4,
          autoAlpha: 0,
          ease: u
        }), 0), k.add(punchgs.TweenLite.fromTo(h.find(".tp-half-two"), t / 800, {
          width: X,
          height: Y,
          overflow: "hidden",
          position: "absolute",
          top: Y / 2,
          left: "0px",
          force3D: "auto",
          transformOrigin: "center bottom"
        }, {
          scale: pa,
          rotation: ka,
          y: Y + Y / 4,
          ease: u,
          autoAlpha: 0,
          onComplete: function onComplete() {
            punchgs.TweenLite.set(h, {
              position: "absolute",
              "z-index": 15
            }), punchgs.TweenLite.set(_g, {
              position: "absolute",
              "z-index": 20
            }), h.find(".tp-half-one").length > 0 && (h.find(".tp-half-one .defaultimg").unwrap(), h.find(".tp-half-one .slotholder").unwrap()), h.find(".tp-half-two").remove();
          }
        }), 0), A.add(punchgs.TweenLite.set(i.find(".defaultimg"), {
          autoAlpha: 1
        }), 0), null != h.html() && k.add(punchgs.TweenLite.fromTo(_g, (t - 200) / 1e3, {
          scale: qa,
          x: l.width / 4 * ma,
          y: Y / 4 * na,
          rotation: la,
          force3D: "auto",
          transformOrigin: "center center",
          ease: v
        }, {
          autoAlpha: 1,
          scale: 1,
          x: 0,
          y: 0,
          rotation: 0
        }), 0), k.add(A, 0);
      }
      if (17 == a && i.find(".slotslide").each(function (a) {
        var b = jQuery(this);
        k.add(punchgs.TweenLite.fromTo(b, t / 800, {
          opacity: 0,
          rotationY: 0,
          scale: .9,
          rotationX: -110,
          force3D: "auto",
          transformPerspective: 600,
          transformOrigin: "center center"
        }, {
          opacity: 1,
          top: 0,
          left: 0,
          scale: 1,
          rotation: 0,
          rotationX: 0,
          force3D: "auto",
          rotationY: 0,
          ease: u,
          delay: .06 * a
        }), 0);
      }), 18 == a && i.find(".slotslide").each(function (a) {
        var b = jQuery(this);
        k.add(punchgs.TweenLite.fromTo(b, t / 500, {
          autoAlpha: 0,
          rotationY: 110,
          scale: .9,
          rotationX: 10,
          force3D: "auto",
          transformPerspective: 600,
          transformOrigin: "center center"
        }, {
          autoAlpha: 1,
          top: 0,
          left: 0,
          scale: 1,
          rotation: 0,
          rotationX: 0,
          force3D: "auto",
          rotationY: 0,
          ease: u,
          delay: .06 * a
        }), 0);
      }), 19 == a || 22 == a) {
        var A = new punchgs.TimelineLite();
        k.add(punchgs.TweenLite.set(h, {
          zIndex: 20
        }), 0), k.add(punchgs.TweenLite.set(_g, {
          zIndex: 20
        }), 0), setTimeout(function () {
          j.find(".defaultimg").css({
            opacity: 0
          });
        }, 100);
        var ra = 90,
          aa = 1,
          sa = "center center ";
        1 == o && (ra = -90), 19 == a ? (sa = sa + "-" + l.height / 2, aa = 0) : sa += l.height / 2, punchgs.TweenLite.set(c, {
          transformStyle: "flat",
          backfaceVisibility: "hidden",
          transformPerspective: 600
        }), i.find(".slotslide").each(function (a) {
          var b = jQuery(this);
          A.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
            transformStyle: "flat",
            backfaceVisibility: "hidden",
            left: 0,
            rotationY: l.rotate,
            z: 10,
            top: 0,
            scale: 1,
            force3D: "auto",
            transformPerspective: 600,
            transformOrigin: sa,
            rotationX: ra
          }, {
            left: 0,
            rotationY: 0,
            top: 0,
            z: 0,
            scale: 1,
            force3D: "auto",
            rotationX: 0,
            delay: 50 * a / 1e3,
            ease: u
          }), 0), A.add(punchgs.TweenLite.to(b, .1, {
            autoAlpha: 1,
            delay: 50 * a / 1e3
          }), 0), k.add(A);
        }), j.find(".slotslide").each(function (a) {
          var b = jQuery(this),
            c = -90;
          1 == o && (c = 90), A.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
            transformStyle: "flat",
            backfaceVisibility: "hidden",
            autoAlpha: 1,
            rotationY: 0,
            top: 0,
            z: 0,
            scale: 1,
            force3D: "auto",
            transformPerspective: 600,
            transformOrigin: sa,
            rotationX: 0
          }, {
            autoAlpha: 1,
            rotationY: l.rotate,
            top: 0,
            z: 10,
            scale: 1,
            rotationX: c,
            delay: 50 * a / 1e3,
            force3D: "auto",
            ease: v
          }), 0), k.add(A);
        }), k.add(punchgs.TweenLite.set(h, {
          zIndex: 18
        }), 0);
      }
      if (20 == a) {
        if (setTimeout(function () {
          j.find(".defaultimg").css({
            opacity: 0
          });
        }, 100), 1 == o) var ta = -l.width,
          ra = 80,
          sa = "20% 70% -" + l.height / 2;else var ta = l.width,
          ra = -80,
          sa = "80% 70% -" + l.height / 2;
        i.find(".slotslide").each(function (a) {
          var b = jQuery(this),
            c = 50 * a / 1e3;
          k.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
            left: ta,
            rotationX: 40,
            z: -600,
            opacity: aa,
            top: 0,
            scale: 1,
            force3D: "auto",
            transformPerspective: 600,
            transformOrigin: sa,
            transformStyle: "flat",
            rotationY: ra
          }, {
            left: 0,
            rotationX: 0,
            opacity: 1,
            top: 0,
            z: 0,
            scale: 1,
            rotationY: 0,
            delay: c,
            ease: u
          }), 0);
        }), j.find(".slotslide").each(function (a) {
          var b = jQuery(this),
            c = 50 * a / 1e3;
          if (c = a > 0 ? c + t / 9e3 : 0, 1 != o) var d = -l.width / 2,
            e = 30,
            f = "20% 70% -" + l.height / 2;else var d = l.width / 2,
            e = -30,
            f = "80% 70% -" + l.height / 2;
          v = punchgs.Power2.easeInOut, k.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
            opacity: 1,
            rotationX: 0,
            top: 0,
            z: 0,
            scale: 1,
            left: 0,
            force3D: "auto",
            transformPerspective: 600,
            transformOrigin: f,
            transformStyle: "flat",
            rotationY: 0
          }, {
            opacity: 1,
            rotationX: 20,
            top: 0,
            z: -600,
            left: d,
            force3D: "auto",
            rotationY: e,
            delay: c,
            ease: v
          }), 0);
        });
      }
      if (21 == a || 25 == a) {
        setTimeout(function () {
          j.find(".defaultimg").css({
            opacity: 0
          });
        }, 100);
        var ra = 90,
          ta = -l.width,
          ua = -ra;
        if (1 == o) {
          if (25 == a) {
            var sa = "center top 0";
            ra = l.rotate;
          } else {
            var sa = "left center 0";
            ua = l.rotate;
          }
        } else if (ta = l.width, ra = -90, 25 == a) {
          var sa = "center bottom 0";
          ua = -ra, ra = l.rotate;
        } else {
          var sa = "right center 0";
          ua = l.rotate;
        }
        i.find(".slotslide").each(function (a) {
          var b = jQuery(this),
            c = t / 1.5 / 3;
          k.add(punchgs.TweenLite.fromTo(b, 2 * c / 1e3, {
            left: 0,
            transformStyle: "flat",
            rotationX: ua,
            z: 0,
            autoAlpha: 0,
            top: 0,
            scale: 1,
            force3D: "auto",
            transformPerspective: 1200,
            transformOrigin: sa,
            rotationY: ra
          }, {
            left: 0,
            rotationX: 0,
            top: 0,
            z: 0,
            autoAlpha: 1,
            scale: 1,
            rotationY: 0,
            force3D: "auto",
            delay: c / 1e3,
            ease: u
          }), 0);
        }), 1 != o ? (ta = -l.width, ra = 90, 25 == a ? (sa = "center top 0", ua = -ra, ra = l.rotate) : (sa = "left center 0", ua = l.rotate)) : (ta = l.width, ra = -90, 25 == a ? (sa = "center bottom 0", ua = -ra, ra = l.rotate) : (sa = "right center 0", ua = l.rotate)), j.find(".slotslide").each(function (a) {
          var b = jQuery(this);
          k.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
            left: 0,
            transformStyle: "flat",
            rotationX: 0,
            z: 0,
            autoAlpha: 1,
            top: 0,
            scale: 1,
            force3D: "auto",
            transformPerspective: 1200,
            transformOrigin: sa,
            rotationY: 0
          }, {
            left: 0,
            rotationX: ua,
            top: 0,
            z: 0,
            autoAlpha: 1,
            force3D: "auto",
            scale: 1,
            rotationY: ra,
            ease: v
          }), 0);
        });
      }
      if (23 == a || 24 == a) {
        setTimeout(function () {
          j.find(".defaultimg").css({
            opacity: 0
          });
        }, 100);
        var ra = -90,
          aa = 1,
          va = 0;
        if (1 == o && (ra = 90), 23 == a) {
          var sa = "center center -" + l.width / 2;
          aa = 0;
        } else var sa = "center center " + l.width / 2;
        punchgs.TweenLite.set(c, {
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          perspective: 2500
        }), i.find(".slotslide").each(function (a) {
          var b = jQuery(this);
          k.add(punchgs.TweenLite.fromTo(b, t / 1e3, {
            left: va,
            rotationX: l.rotate,
            force3D: "auto",
            opacity: aa,
            top: 0,
            scale: 1,
            transformPerspective: 1200,
            transformOrigin: sa,
            rotationY: ra
          }, {
            left: 0,
            rotationX: 0,
            autoAlpha: 1,
            top: 0,
            z: 0,
            scale: 1,
            rotationY: 0,
            delay: 50 * a / 500,
            ease: u
          }), 0);
        }), ra = 90, 1 == o && (ra = -90), j.find(".slotslide").each(function (b) {
          var c = jQuery(this);
          k.add(punchgs.TweenLite.fromTo(c, t / 1e3, {
            left: 0,
            rotationX: 0,
            top: 0,
            z: 0,
            scale: 1,
            force3D: "auto",
            transformStyle: "flat",
            transformPerspective: 1200,
            transformOrigin: sa,
            rotationY: 0
          }, {
            left: va,
            rotationX: l.rotate,
            top: 0,
            scale: 1,
            rotationY: ra,
            delay: 50 * b / 500,
            ease: v
          }), 0), 23 == a && k.add(punchgs.TweenLite.fromTo(c, t / 2e3, {
            autoAlpha: 1
          }, {
            autoAlpha: 0,
            delay: 50 * b / 500 + t / 3e3,
            ease: v
          }), 0);
        });
      }
      return k;
    };
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./js/revolution/jquery.themepunch.enablelog.js":
/*!******************************************************!*\
  !*** ./js/revolution/jquery.themepunch.enablelog.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.tplogs = true;

/***/ }),

/***/ "./js/revolution/jquery.themepunch.revolution.min.js":
/*!***********************************************************!*\
  !*** ./js/revolution/jquery.themepunch.revolution.min.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 5.4.1 (28.02.2017)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/
(function (jQuery, undefined) {
  "use strict";

  var version = {
    core: "5.4.1",
    "revolution.extensions.actions.min.js": "2.0.4",
    "revolution.extensions.carousel.min.js": "1.2.1",
    "revolution.extensions.kenburn.min.js": "1.2.0",
    "revolution.extensions.layeranimation.min.js": "3.5.2",
    "revolution.extensions.navigation.min.js": "1.3.3",
    "revolution.extensions.parallax.min.js": "2.2.0",
    "revolution.extensions.slideanims.min.js": "1.6",
    "revolution.extensions.video.min.js": "2.0.3"
  };
  jQuery.fn.extend({
    revolution: function revolution(options) {
      // SET DEFAULT VALUES OF ITEM //
      var defaults = {
        delay: 9000,
        responsiveLevels: 4064,
        // Single or Array for Responsive Levels i.e.: 4064 or i.e. [2048, 1024, 768, 480]					
        visibilityLevels: [2048, 1024, 778, 480],
        // Single or Array for Responsive Visibility Levels i.e.: 4064 or i.e. [2048, 1024, 768, 480]					
        gridwidth: 960,
        // Single or Array i.e. 960 or [960, 840,760,460]
        gridheight: 500,
        // Single or Array i.e. 500 or [500, 450,400,350]
        minHeight: 0,
        autoHeight: "off",
        sliderType: "standard",
        // standard, carousel, hero					
        sliderLayout: "auto",
        // auto, fullwidth, fullscreen				

        fullScreenAutoWidth: "off",
        // Turns the FullScreen Slider to be a FullHeight but auto Width Slider
        fullScreenAlignForce: "off",
        fullScreenOffsetContainer: "",
        // Size for FullScreen Slider minimising Calculated on the Container sizes
        fullScreenOffset: "0",
        // Size for FullScreen Slider minimising					

        hideCaptionAtLimit: 0,
        // It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
        hideAllCaptionAtLimit: 0,
        // Hide all The Captions if Width of Browser is less then this value
        hideSliderAtLimit: 0,
        // Hide the whole slider, and stop also functions if Width of Browser is less than this value										
        disableProgressBar: "off",
        // Hides Progress Bar if is set to "on"
        stopAtSlide: -1,
        // Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
        stopAfterLoops: -1,
        // Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
        shadow: 0,
        //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
        dottedOverlay: "none",
        //twoxtwo, threexthree, twoxtwowhite, threexthreewhite
        startDelay: 0,
        // Delay before the first Animation starts.				
        lazyType: "smart",
        //full, smart, single
        spinner: "spinner0",
        shuffle: "off",
        // Random Order of Slides,

        viewPort: {
          enable: false,
          // if enabled, slider wait with start or wait at first slide.
          outof: "wait",
          // wait,pause						
          visible_area: "60%",
          // Start Animation when 60% of Slider is visible
          presize: false // Presize the Height of the Slider Container for Internal Link Positions
        },
        fallbacks: {
          isJoomla: false,
          panZoomDisableOnMobile: "off",
          simplifyAll: "on",
          nextSlideOnWindowFocus: "off",
          disableFocusListener: true,
          ignoreHeightChanges: "off",
          // off, mobile, always
          ignoreHeightChangesSize: 0,
          allowHTML5AutoPlayOnAndroid: true
        },
        parallax: {
          type: "off",
          // off, mouse, scroll, mouse+scroll
          levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
          origo: "enterpoint",
          // slidercenter or enterpoint
          speed: 400,
          bgparallax: "off",
          opacity: "on",
          disable_onmobile: "off",
          ddd_shadow: "on",
          ddd_bgfreeze: "off",
          ddd_overflow: "visible",
          ddd_layer_overflow: "visible",
          ddd_z_correction: 65,
          ddd_path: "mouse"
        },
        scrolleffect: {
          fade: "off",
          blur: "off",
          grayscale: "off",
          maxblur: 10,
          on_layers: "off",
          on_slidebg: "off",
          on_static_layers: "off",
          on_parallax_layers: "off",
          on_parallax_static_layers: "off",
          direction: "both",
          multiplicator: 1.35,
          multiplicator_layers: 0.5,
          tilt: 30,
          disable_on_mobile: "on"
        },
        carousel: {
          easing: punchgs.Power3.easeInOut,
          speed: 800,
          showLayersAllTime: "off",
          horizontal_align: "center",
          vertical_align: "center",
          infinity: "on",
          space: 0,
          maxVisibleItems: 3,
          stretch: "off",
          fadeout: "on",
          maxRotation: 0,
          minScale: 0,
          vary_fade: "off",
          vary_rotation: "on",
          vary_scale: "off",
          border_radius: "0px",
          padding_top: 0,
          padding_bottom: 0
        },
        navigation: {
          keyboardNavigation: "off",
          keyboard_direction: "horizontal",
          //	horizontal - left/right arrows,  vertical - top/bottom arrows
          mouseScrollNavigation: "off",
          // on, off, carousel					
          onHoverStop: "on",
          // Stop Banner Timet at Hover on Slide on/off

          touch: {
            touchenabled: "off",
            // Enable Swipe Function : on/off
            touchOnDesktop: "off",
            // Enable Tuoch on Desktop Systems also
            swipe_treshold: 75,
            // The number of pixels that the user must move their finger by before it is considered a swipe.
            swipe_min_touches: 1,
            // Min Finger (touch) used for swipe							
            drag_block_vertical: false,
            // Prevent Vertical Scroll during Swipe
            swipe_direction: "horizontal"
          },
          arrows: {
            style: "",
            enable: false,
            hide_onmobile: false,
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            hide_under: 0,
            hide_over: 9999,
            tmp: '',
            rtl: false,
            left: {
              h_align: "left",
              v_align: "center",
              h_offset: 20,
              v_offset: 0,
              container: "slider"
            },
            right: {
              h_align: "right",
              v_align: "center",
              h_offset: 20,
              v_offset: 0,
              container: "slider"
            }
          },
          bullets: {
            container: "slider",
            rtl: false,
            style: "",
            enable: false,
            hide_onmobile: false,
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            hide_under: 0,
            hide_over: 9999,
            direction: "horizontal",
            h_align: "left",
            v_align: "center",
            space: 0,
            h_offset: 20,
            v_offset: 0,
            tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
          },
          thumbnails: {
            container: "slider",
            rtl: false,
            style: "",
            enable: false,
            width: 100,
            height: 50,
            min_width: 100,
            wrapper_padding: 2,
            wrapper_color: "#f5f5f5",
            wrapper_opacity: 1,
            tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
            visibleAmount: 5,
            hide_onmobile: false,
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            hide_under: 0,
            hide_over: 9999,
            direction: "horizontal",
            span: false,
            position: "inner",
            space: 2,
            h_align: "left",
            v_align: "center",
            h_offset: 20,
            v_offset: 0
          },
          tabs: {
            container: "slider",
            rtl: false,
            style: "",
            enable: false,
            width: 100,
            min_width: 100,
            height: 50,
            wrapper_padding: 10,
            wrapper_color: "#f5f5f5",
            wrapper_opacity: 1,
            tmp: '<span class="tp-tab-image"></span>',
            visibleAmount: 5,
            hide_onmobile: false,
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            hide_under: 0,
            hide_over: 9999,
            direction: "horizontal",
            span: false,
            space: 0,
            position: "inner",
            h_align: "left",
            v_align: "center",
            h_offset: 20,
            v_offset: 0
          }
        },
        extensions: "extensions/",
        //example extensions/ or extensions/source/
        extensions_suffix: ".min.js",
        //addons:[{fileprefix:"revolution.addon.whiteboard",init:"initWhiteBoard",params:"opt",handel:"whiteboard"}],
        debugMode: false
      };

      // Merge of Defaults									
      options = jQuery.extend(true, {}, defaults, options);
      return this.each(function () {
        var c = jQuery(this);

        // Prepare maxHeight
        options.minHeight = options.minHeight != undefined ? parseInt(options.minHeight, 0) : options.minHeight;
        options.scrolleffect.on = options.scrolleffect.fade === "on" || options.scrolleffect.blur === "on" || options.scrolleffect.grayscale === "on";

        //REMOVE SLIDES IF SLIDER IS HERO
        if (options.sliderType == "hero") {
          c.find('>ul>li').each(function (i) {
            if (i > 0) jQuery(this).remove();
          });
        }
        options.jsFileLocation = options.jsFileLocation || getScriptLocation("themepunch.revolution.min.js");
        options.jsFileLocation = options.jsFileLocation + options.extensions;
        options.scriptsneeded = getNeededScripts(options, c);
        options.curWinRange = 0;
        options.rtl = true; //jQuery('body').hasClass("rtl"); 	

        if (options.navigation != undefined && options.navigation.touch != undefined) options.navigation.touch.swipe_min_touches = options.navigation.touch.swipe_min_touches > 5 ? 1 : options.navigation.touch.swipe_min_touches;
        jQuery(this).on("scriptsloaded", function () {
          if (options.modulesfailing) {
            c.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.' + options.errorm + '</div>').show();
            return false;
          }

          // CHECK FOR MIGRATION
          if (_R.migration != undefined) options = _R.migration(c, options);
          punchgs.force3D = true;
          if (options.simplifyAll !== "on") punchgs.TweenLite.lagSmoothing(1000, 16);
          prepareOptions(c, options);
          initSlider(c, options);
        });
        c[0].opt = options;
        waitForScripts(c, options);
      });
    },
    // Remove a Slide from the Slider
    revremoveslide: function revremoveslide(sindex) {
      return this.each(function () {
        var container = jQuery(this),
          opt = container[0].opt;
        if (sindex < 0 || sindex > opt.slideamount) return;
        if (container != undefined && container.length > 0 && jQuery('body').find('#' + container.attr('id')).length > 0) {
          if (opt && opt.li.length > 0) {
            if (sindex > 0 || sindex <= opt.li.length) {
              var li = jQuery(opt.li[sindex]),
                ref = li.data("index"),
                nextslideafter = false;
              opt.slideamount = opt.slideamount - 1;
              opt.realslideamount = opt.realslideamount - 1;
              removeNavWithLiref('.tp-bullet', ref, opt);
              removeNavWithLiref('.tp-tab', ref, opt);
              removeNavWithLiref('.tp-thumb', ref, opt);
              if (li.hasClass('active-revslide')) nextslideafter = true;
              li.remove();
              opt.li = removeArray(opt.li, sindex);
              if (opt.carousel && opt.carousel.slides) opt.carousel.slides = removeArray(opt.carousel.slides, sindex);
              opt.thumbs = removeArray(opt.thumbs, sindex);
              if (_R.updateNavIndexes) _R.updateNavIndexes(opt);
              if (nextslideafter) container.revnext();
              punchgs.TweenLite.set(opt.li, {
                minWidth: "99%"
              });
              punchgs.TweenLite.set(opt.li, {
                minWidth: "100%"
              });
            }
          }
        }
      });
    },
    // Add a New Call Back to some Module
    revaddcallback: function revaddcallback(callback) {
      return this.each(function () {
        if (this.opt) {
          if (this.opt.callBackArray === undefined) this.opt.callBackArray = new Array();
          this.opt.callBackArray.push(callback);
        }
      });
    },
    // Get Current Parallax Proc
    revgetparallaxproc: function revgetparallaxproc() {
      return jQuery(this)[0].opt.scrollproc;
    },
    // ENABLE DEBUG MODE
    revdebugmode: function revdebugmode() {
      return this.each(function () {
        var c = jQuery(this);
        c[0].opt.debugMode = true;
        containerResized(c, c[0].opt);
      });
    },
    // METHODE SCROLL
    revscroll: function revscroll(oy) {
      return this.each(function () {
        var c = jQuery(this);
        jQuery('body,html').animate({
          scrollTop: c.offset().top + c.height() - oy + "px"
        }, {
          duration: 400
        });
      });
    },
    // METHODE PAUSE
    revredraw: function revredraw(oy) {
      return this.each(function () {
        var c = jQuery(this);
        containerResized(c, c[0].opt);
      });
    },
    // METHODE PAUSE
    revkill: function revkill(oy) {
      var self = this,
        container = jQuery(this);
      punchgs.TweenLite.killDelayedCallsTo(_R.showHideNavElements);
      if (container != undefined && container.length > 0 && jQuery('body').find('#' + container.attr('id')).length > 0) {
        container.data('conthover', 1);
        container.data('conthover-changed', 1);
        container.trigger('revolution.slide.onpause');
        var bt = container.parent().find('.tp-bannertimer'),
          opt = container[0].opt;
        opt.tonpause = true;
        container.trigger('stoptimer');
        punchgs.TweenLite.killTweensOf(container.find('*'), false);
        punchgs.TweenLite.killTweensOf(container, false);
        container.unbind('hover, mouseover, mouseenter,mouseleave, resize');
        var resizid = "resize.revslider-" + container.attr('id');
        jQuery(window).off(resizid);
        container.find('*').each(function () {
          var el = jQuery(this);
          el.unbind('on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer');
          el.off('on, hover, mouseenter,mouseleave,mouseover, resize');
          el.data('mySplitText', null);
          el.data('ctl', null);
          if (el.data('tween') != undefined) el.data('tween').kill();
          if (el.data('kenburn') != undefined) el.data('kenburn').kill();
          if (el.data('timeline_out') != undefined) el.data('timeline_out').kill();
          if (el.data('timeline') != undefined) el.data('timeline').kill();
          el.remove();
          el.empty();
          el = null;
        });
        punchgs.TweenLite.killTweensOf(container.find('*'), false);
        punchgs.TweenLite.killTweensOf(container, false);
        bt.remove();
        try {
          container.closest('.forcefullwidth_wrapper_tp_banner').remove();
        } catch (e) {}
        try {
          container.closest('.rev_slider_wrapper').remove();
        } catch (e) {}
        try {
          container.remove();
        } catch (e) {}
        container.empty();
        container.html();
        container = null;
        opt = null;
        delete self.c;
        delete self.opt;
        return true;
      } else {
        return false;
      }
    },
    // METHODE PAUSE
    revpause: function revpause() {
      return this.each(function () {
        var c = jQuery(this);
        if (c != undefined && c.length > 0 && jQuery('body').find('#' + c.attr('id')).length > 0) {
          c.data('conthover', 1);
          c.data('conthover-changed', 1);
          c.trigger('revolution.slide.onpause');
          c[0].opt.tonpause = true;
          c.trigger('stoptimer');
        }
      });
    },
    // METHODE RESUME
    revresume: function revresume() {
      return this.each(function () {
        var c = jQuery(this);
        if (c != undefined && c.length > 0 && jQuery('body').find('#' + c.attr('id')).length > 0) {
          c.data('conthover', 0);
          c.data('conthover-changed', 1);
          c.trigger('revolution.slide.onresume');
          c[0].opt.tonpause = false;
          c.trigger('starttimer');
        }
      });
    },
    revstart: function revstart() {
      //return this.each(function() {
      var c = jQuery(this);
      if (c != undefined && c.length > 0 && jQuery('body').find('#' + c.attr('id')).length > 0 && c[0].opt !== undefined) {
        if (!c[0].opt.sliderisrunning) {
          runSlider(c, c[0].opt);
          return true;
        } else {
          console.log("Slider Is Running Already");
          return false;
        }
      }
      //})
    },
    // METHODE NEXT
    revnext: function revnext() {
      return this.each(function () {
        // CATCH THE CONTAINER
        var c = jQuery(this);
        if (c != undefined && c.length > 0 && jQuery('body').find('#' + c.attr('id')).length > 0) {
          _R.callingNewSlide(c, 1);
        }
      });
    },
    // METHODE RESUME
    revprev: function revprev() {
      return this.each(function () {
        // CATCH THE CONTAINER
        var c = jQuery(this);
        if (c != undefined && c.length > 0 && jQuery('body').find('#' + c.attr('id')).length > 0) {
          _R.callingNewSlide(c, -1);
        }
      });
    },
    // METHODE LENGTH
    revmaxslide: function revmaxslide() {
      // CATCH THE CONTAINER
      return jQuery(this).find('.tp-revslider-mainul >li').length;
    },
    // METHODE CURRENT
    revcurrentslide: function revcurrentslide() {
      // CATCH THE CONTAINER
      var c = jQuery(this);
      if (c != undefined && c.length > 0 && jQuery('body').find('#' + c.attr('id')).length > 0) {
        return parseInt(c[0].opt.act, 0) + 1;
      }
    },
    // METHODE CURRENT
    revlastslide: function revlastslide() {
      // CATCH THE CONTAINER
      return jQuery(this).find('.tp-revslider-mainul >li').length;
    },
    // METHODE JUMP TO SLIDE
    revshowslide: function revshowslide(slide) {
      return this.each(function () {
        // CATCH THE CONTAINER
        var c = jQuery(this);
        if (c != undefined && c.length > 0 && jQuery('body').find('#' + c.attr('id')).length > 0) {
          _R.callingNewSlide(c, "to" + (slide - 1));
        }
      });
    },
    revcallslidewithid: function revcallslidewithid(slide) {
      return this.each(function () {
        // CATCH THE CONTAINER
        var c = jQuery(this);
        if (c != undefined && c.length > 0 && jQuery('body').find('#' + c.attr('id')).length > 0) {
          _R.callingNewSlide(c, slide);
        }
      });
    }
  });

  //////////////////////////////////////////////////////////////
  // -	REVOLUTION FUNCTION EXTENSIONS FOR GLOBAL USAGE  -  //	
  //////////////////////////////////////////////////////////////
  var _R = jQuery.fn.revolution;
  jQuery.extend(true, _R, {
    getversion: function getversion() {
      return version;
    },
    compare_version: function compare_version(extension) {
      if (extension.check != "stop") {
        // CHECK FOR CORRECT CORE AND EXTENSION VERSION
        if (_R.getversion().core < extension.min_core) {
          if (extension.check === undefined) {
            console.log("%c" + "Slider Revolution Warning (Core:" + _R.getversion().core + ")", 'color:#c0392b;font-weight:bold;');
            console.log("%c" + "     Core is older than expected (" + extension.min_core + ") from " + extension.alias, 'color:#333');
            console.log("%c" + "     Please update Slider Revolution to the latest version.", 'color:#333');
            console.log("%c" + "     It might be required to purge and clear Server/Client side Caches.", 'color:#333');
          }
          extension.check = "stop";
        } else if (_R.getversion()[extension.name] != undefined && extension.version < _R.getversion()[extension.name]) {
          if (extension.check === undefined) {
            console.log("%c" + "Slider Revolution Warning (Core:" + _R.getversion().core + ")", 'color:#c0392b;font-weight:bold;');
            console.log("%c" + "     " + extension.alias + " (" + extension.version + ") is older than requiered (" + _R.getversion()[extension.name] + ")", 'color:#333');
            console.log("%c" + "     Please update Slider Revolution to the latest version.", 'color:#333');
            console.log("%c" + "     It might be required to purge and clear Server/Client side Caches.", 'color:#333');
          }
          extension.check = "stop";
        }
      }
      return extension;
    },
    currentSlideIndex: function currentSlideIndex(opt) {
      var ai = opt.c.find('.active-revslide').index();
      ai = ai == -1 ? 0 : ai;
      return ai;
    },
    simp: function simp(a, b, basic) {
      var c = Math.abs(a) - Math.floor(Math.abs(a / b)) * b;
      if (basic) return c;else return a < 0 ? -1 * c : c;
    },
    //	-	IS IOS VERSION OLDER THAN 5 ??	
    iOSVersion: function iOSVersion() {
      var oldios = false;
      if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) {
        if (navigator.userAgent.match(/OS 4_\d like Mac OS X/i)) {
          oldios = true;
        }
      } else {
        oldios = false;
      }
      return oldios;
    },
    //	-	CHECK IF BROWSER IS IE		-		
    isIE: function isIE(version, comparison) {
      var $div = jQuery('<div style="display:none;"/>').appendTo(jQuery('body'));
      $div.html('<!--[if ' + (comparison || '') + ' IE ' + (version || '') + ']><a>&nbsp;</a><![endif]-->');
      var ieTest = $div.find('a').length;
      $div.remove();
      return ieTest;
    },
    // 	-	IS MOBILE ?? 
    is_mobile: function is_mobile() {
      var agents = ['android', 'webos', 'iphone', 'ipad', 'blackberry', 'Android', 'webos',, 'iPod', 'iPhone', 'iPad', 'Blackberry', 'BlackBerry'];
      var ismobile = false;
      for (var i in agents) {
        if (navigator.userAgent.split(agents[i]).length > 1) {
          ismobile = true;
        }
      }
      return ismobile;
    },
    is_android: function is_android() {
      var agents = ['android', 'Android'];
      var isandroid = false;
      for (var i in agents) {
        if (navigator.userAgent.split(agents[i]).length > 1) {
          isandroid = true;
        }
      }
      return isandroid;
    },
    // -  CALL BACK HANDLINGS - //
    callBackHandling: function callBackHandling(opt, type, position) {
      try {
        if (opt.callBackArray) jQuery.each(opt.callBackArray, function (i, c) {
          if (c) {
            if (c.inmodule && c.inmodule === type) if (c.atposition && c.atposition === position) if (c.callback) c.callback.call();
          }
        });
      } catch (e) {
        console.log("Call Back Failed");
      }
    },
    get_browser: function get_browser() {
      var N = navigator.appName,
        ua = navigator.userAgent,
        tem;
      var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
      if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
      M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
      return M[0];
    },
    get_browser_version: function get_browser_version() {
      var N = navigator.appName,
        ua = navigator.userAgent,
        tem;
      var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
      if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
      M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
      return M[1];
    },
    // GET THE HORIZONTAL OFFSET OF SLIDER BASED ON THE THU`MBNAIL AND TABS LEFT AND RIGHT SIDE
    getHorizontalOffset: function getHorizontalOffset(container, side) {
      var thumbloff = gWiderOut(container, '.outer-left'),
        thumbroff = gWiderOut(container, '.outer-right');
      switch (side) {
        case "left":
          return thumbloff;
          break;
        case "right":
          return thumbroff;
          break;
        case "both":
          return thumbloff + thumbroff;
          break;
      }
    },
    // 	-	CALLING THE NEW SLIDE 	-	//		
    callingNewSlide: function callingNewSlide(container, direction) {
      var aindex = container.find('.next-revslide').length > 0 ? container.find('.next-revslide').index() : container.find('.processing-revslide').length > 0 ? container.find('.processing-revslide').index() : container.find('.active-revslide').index(),
        nindex = 0,
        opt = container[0].opt;
      container.find('.next-revslide').removeClass("next-revslide");

      // IF WE ARE ON AN INVISIBLE SLIDE CURRENTLY
      if (container.find('.active-revslide').hasClass("tp-invisible-slide")) aindex = opt.last_shown_slide;

      // SET NEXT DIRECTION
      if (direction && jQuery.isNumeric(direction) || direction.match(/to/g)) {
        if (direction === 1 || direction === -1) {
          nindex = aindex + direction;
          nindex = nindex < 0 ? opt.slideamount - 1 : nindex >= opt.slideamount ? 0 : nindex;
        } else {
          direction = jQuery.isNumeric(direction) ? direction : parseInt(direction.split("to")[1], 0);
          nindex = direction < 0 ? 0 : direction > opt.slideamount - 1 ? opt.slideamount - 1 : direction;
        }
        container.find('.tp-revslider-slidesli:eq(' + nindex + ')').addClass("next-revslide");
      } else if (direction) {
        container.find('.tp-revslider-slidesli').each(function () {
          var li = jQuery(this);
          if (li.data('index') === direction) li.addClass("next-revslide");
        });
      }
      nindex = container.find('.next-revslide').index();
      container.trigger("revolution.nextslide.waiting");
      if (aindex === nindex && aindex === opt.last_shown_slide || nindex !== aindex && nindex != -1) swapSlide(container);else container.find('.next-revslide').removeClass("next-revslide");
    },
    slotSize: function slotSize(img, opt) {
      opt.slotw = Math.ceil(opt.width / opt.slots);
      if (opt.sliderLayout == "fullscreen") opt.sloth = Math.ceil(jQuery(window).height() / opt.slots);else opt.sloth = Math.ceil(opt.height / opt.slots);
      if (opt.autoHeight == "on" && img !== undefined && img !== "") opt.sloth = Math.ceil(img.height() / opt.slots);
    },
    setSize: function setSize(opt) {
      var ofh = (opt.top_outer || 0) + (opt.bottom_outer || 0),
        cpt = parseInt(opt.carousel.padding_top || 0, 0),
        cpb = parseInt(opt.carousel.padding_bottom || 0, 0),
        maxhei = opt.gridheight[opt.curWinRange],
        __mh = 0,
        _actli = opt.nextSlide === -1 || opt.nextSlide === undefined ? 0 : opt.nextSlide;
      opt.paddings = opt.paddings === undefined ? {
        top: parseInt(opt.c.parent().css("paddingTop"), 0) || 0,
        bottom: parseInt(opt.c.parent().css("paddingBottom"), 0) || 0
      } : opt.paddings;
      if (opt.rowzones && opt.rowzones.length > 0) for (var a = 0; a < opt.rowzones[_actli].length; a++) {
        __mh = __mh + opt.rowzones[_actli][a][0].offsetHeight;
      }
      maxhei = maxhei < opt.minHeight ? opt.minHeight : maxhei;
      maxhei = maxhei < __mh ? __mh : maxhei;
      if (opt.sliderLayout == "fullwidth" && opt.autoHeight == "off") punchgs.TweenLite.set(opt.c, {
        maxHeight: maxhei + "px"
      });
      opt.c.css({
        marginTop: cpt,
        marginBottom: cpb
      });
      opt.width = opt.ul.width();
      opt.height = opt.ul.height();
      setScale(opt);
      opt.height = Math.round(opt.gridheight[opt.curWinRange] * (opt.width / opt.gridwidth[opt.curWinRange]));
      if (opt.height > opt.gridheight[opt.curWinRange] && opt.autoHeight != "on") opt.height = opt.gridheight[opt.curWinRange];
      if (opt.sliderLayout == "fullscreen" || opt.infullscreenmode) {
        opt.height = opt.bw * opt.gridheight[opt.curWinRange];
        var cow = opt.c.parent().width();
        var coh = jQuery(window).height();
        if (opt.fullScreenOffsetContainer != undefined) {
          try {
            var offcontainers = opt.fullScreenOffsetContainer.split(",");
            if (offcontainers) jQuery.each(offcontainers, function (index, searchedcont) {
              coh = jQuery(searchedcont).length > 0 ? coh - jQuery(searchedcont).outerHeight(true) : coh;
            });
          } catch (e) {}
          try {
            if (opt.fullScreenOffset.split("%").length > 1 && opt.fullScreenOffset != undefined && opt.fullScreenOffset.length > 0) coh = coh - jQuery(window).height() * parseInt(opt.fullScreenOffset, 0) / 100;else if (opt.fullScreenOffset != undefined && opt.fullScreenOffset.length > 0) coh = coh - parseInt(opt.fullScreenOffset, 0);
          } catch (e) {}
        }
        coh = coh < opt.minHeight ? opt.minHeight : coh;
        coh = coh - ofh;
        opt.c.parent().height(coh);
        opt.c.closest('.rev_slider_wrapper').height(coh);
        opt.c.css({
          'height': '100%'
        });
        opt.height = coh;
        if (opt.minHeight != undefined && opt.height < opt.minHeight) opt.height = opt.minHeight;
        opt.height = parseInt(__mh, 0) > parseInt(opt.height, 0) ? __mh : opt.height;
      } else {
        if (opt.minHeight != undefined && opt.height < opt.minHeight) opt.height = opt.minHeight;
        opt.height = parseInt(__mh, 0) > parseInt(opt.height, 0) ? __mh : opt.height;
        opt.c.height(opt.height);
      }
      var si = {
        height: cpt + cpb + ofh + opt.height + opt.paddings.top + opt.paddings.bottom
      };
      opt.c.closest('.forcefullwidth_wrapper_tp_banner').find('.tp-fullwidth-forcer').css(si);
      opt.c.closest('.rev_slider_wrapper').css(si);
      setScale(opt);
    },
    enterInViewPort: function enterInViewPort(opt) {
      // START COUNTER IF VP ENTERED, AND COUNTDOWN WAS NOT ON YET
      if (opt.waitForCountDown) {
        countDown(opt.c, opt);
        opt.waitForCountDown = false;
      }
      // START FIRST SLIDE IF NOT YET STARTED AND VP ENTERED
      if (opt.waitForFirstSlide) {
        swapSlide(opt.c);
        opt.waitForFirstSlide = false;
        setTimeout(function () {
          opt.c.removeClass("tp-waitforfirststart");
        }, 500);
      }
      if (opt.sliderlaststatus == "playing" || opt.sliderlaststatus == undefined) {
        opt.c.trigger("starttimer");
      }
      if (opt.lastplayedvideos != undefined && opt.lastplayedvideos.length > 0) {
        jQuery.each(opt.lastplayedvideos, function (i, _nc) {
          _R.playVideo(_nc, opt);
        });
      }
    },
    leaveViewPort: function leaveViewPort(opt) {
      opt.sliderlaststatus = opt.sliderstatus;
      opt.c.trigger("stoptimer");
      if (opt.playingvideos != undefined && opt.playingvideos.length > 0) {
        opt.lastplayedvideos = jQuery.extend(true, [], opt.playingvideos);
        if (opt.playingvideos) jQuery.each(opt.playingvideos, function (i, _nc) {
          opt.leaveViewPortBasedStop = true;
          if (_R.stopVideo) _R.stopVideo(_nc, opt);
        });
      }
    },
    unToggleState: function unToggleState(a) {
      if (a != undefined && a.length > 0) jQuery.each(a, function (i, layer) {
        layer.removeClass("rs-toggle-content-active");
      });
    },
    toggleState: function toggleState(a) {
      if (a != undefined && a.length > 0) jQuery.each(a, function (i, layer) {
        layer.addClass("rs-toggle-content-active");
      });
    },
    swaptoggleState: function swaptoggleState(a) {
      if (a != undefined && a.length > 0) jQuery.each(a, function (i, layer) {
        if (jQuery(layer).hasClass("rs-toggle-content-active")) jQuery(layer).removeClass("rs-toggle-content-active");else jQuery(layer).addClass("rs-toggle-content-active");
      });
    },
    lastToggleState: function lastToggleState(a) {
      var state = 0;
      if (a != undefined && a.length > 0) jQuery.each(a, function (i, layer) {
        state = layer.hasClass("rs-toggle-content-active");
      });
      return state;
    }
  });
  var _ISM = _R.is_mobile(),
    _ANDROID = _R.is_android();

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	

  var checkIDS = function checkIDS(opt, item) {
    opt.anyid = opt.anyid === undefined ? [] : opt.anyid;
    var ind = jQuery.inArray(item.attr('id'), opt.anyid);
    if (ind != -1) {
      var newid = item.attr('id') + "_" + Math.round(Math.random() * 9999);
      item.attr('id', newid);
    }
    opt.anyid.push(item.attr('id'));
  };
  var removeArray = function removeArray(arr, i) {
    var newarr = [];
    jQuery.each(arr, function (a, b) {
      if (a != i) newarr.push(b);
    });
    return newarr;
  };
  var removeNavWithLiref = function removeNavWithLiref(a, ref, opt) {
    opt.c.find(a).each(function () {
      var a = jQuery(this);
      if (a.data('liref') === ref) a.remove();
    });
  };
  var lAjax = function lAjax(s, o) {
    if (jQuery('body').data(s)) return false;
    if (o.filesystem) {
      if (o.errorm === undefined) o.errorm = "<br>Local Filesystem Detected !<br>Put this to your header:";
      console.warn('Local Filesystem detected !');
      o.errorm = o.errorm + '<br>&lt;script type="text/javascript" src="' + o.jsFileLocation + s + o.extensions_suffix + '"&gt;&lt;/script&gt;';
      console.warn(o.jsFileLocation + s + o.extensions_suffix + ' could not be loaded !');
      console.warn('Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document.');
      console.log(" ");
      o.modulesfailing = true;
      return false;
    }
    jQuery.ajax({
      url: o.jsFileLocation + s + o.extensions_suffix + '?version=' + version.core,
      'dataType': 'script',
      'cache': true,
      "error": function error(e) {
        console.warn("Slider Revolution 5.0 Error !");
        console.error("Failure at Loading:" + s + o.extensions_suffix + " on Path:" + o.jsFileLocation);
        console.info(e);
      }
    });
    jQuery('body').data(s, true);
  };
  var getNeededScripts = function getNeededScripts(o, c) {
    var n = new Object(),
      _n = o.navigation;
    n.kenburns = false;
    n.parallax = false;
    n.carousel = false;
    n.navigation = false;
    n.videos = false;
    n.actions = false;
    n.layeranim = false;
    n.migration = false;

    // MIGRATION EXTENSION
    if (!c.data('version') || !c.data('version').toString().match(/5./gi)) {
      n.kenburns = true;
      n.parallax = true;
      n.carousel = false;
      n.navigation = true;
      n.videos = true;
      n.actions = true;
      n.layeranim = true;
      n.migration = true;
    } else {
      // KEN BURN MODUL
      c.find('img').each(function () {
        if (jQuery(this).data('kenburns') == "on") n.kenburns = true;
      });

      // NAVIGATION EXTENSTION
      if (o.sliderType == "carousel" || _n.keyboardNavigation == "on" || _n.mouseScrollNavigation == "on" || _n.touch.touchenabled == "on" || _n.arrows.enable || _n.bullets.enable || _n.thumbnails.enable || _n.tabs.enable) n.navigation = true;

      // LAYERANIM, VIDEOS, ACTIONS EXTENSIONS
      c.find('.tp-caption, .tp-static-layer, .rs-background-video-layer').each(function () {
        var _nc = jQuery(this);
        if (_nc.data('ytid') != undefined || _nc.find('iframe').length > 0 && _nc.find('iframe').attr('src').toLowerCase().indexOf('youtube') > 0) n.videos = true;
        if (_nc.data('vimeoid') != undefined || _nc.find('iframe').length > 0 && _nc.find('iframe').attr('src').toLowerCase().indexOf('vimeo') > 0) n.videos = true;
        if (_nc.data('actions') !== undefined) n.actions = true;
        n.layeranim = true;
      });
      c.find('li').each(function () {
        if (jQuery(this).data('link') && jQuery(this).data('link') != undefined) {
          n.layeranim = true;
          n.actions = true;
        }
      });

      // VIDEO EXTENSION
      if (!n.videos && (c.find('.rs-background-video-layer').length > 0 || c.find(".tp-videolayer").length > 0 || c.find(".tp-audiolayer").length > 0 || c.find('iframe').length > 0 || c.find('video').length > 0)) n.videos = true;

      // VIDEO EXTENSION
      if (o.sliderType == "carousel") n.carousel = true;
      if (o.parallax.type !== "off" || o.viewPort.enable || o.viewPort.enable == "true" || o.scrolleffect.on === "true" || o.scrolleffect.on) n.parallax = true;
    }
    if (o.sliderType == "hero") {
      n.carousel = false;
      n.navigation = false;
    }
    if (window.location.href.match(/file:/gi)) {
      n.filesystem = true;
      o.filesystem = true;
    }

    // LOAD THE NEEDED LIBRARIES
    if (n.videos && typeof _R.isVideoPlaying == 'undefined') lAjax('revolution.extension.video', o);
    if (n.carousel && typeof _R.prepareCarousel == 'undefined') lAjax('revolution.extension.carousel', o);
    if (!n.carousel && typeof _R.animateSlide == 'undefined') lAjax('revolution.extension.slideanims', o);
    if (n.actions && typeof _R.checkActions == 'undefined') lAjax('revolution.extension.actions', o);
    if (n.layeranim && typeof _R.handleStaticLayers == 'undefined') lAjax('revolution.extension.layeranimation', o);
    if (n.kenburns && typeof _R.stopKenBurn == 'undefined') lAjax('revolution.extension.kenburn', o);
    if (n.navigation && typeof _R.createNavigation == 'undefined') lAjax('revolution.extension.navigation', o);
    if (n.migration && typeof _R.migration == 'undefined') lAjax('revolution.extension.migration', o);
    if (n.parallax && typeof _R.checkForParallax == 'undefined') lAjax('revolution.extension.parallax', o);
    if (o.addons != undefined && o.addons.length > 0) {
      jQuery.each(o.addons, function (i, obj) {
        if (_typeof(obj) === "object" && obj.fileprefix != undefined) lAjax(obj.fileprefix, o);
      });
    }
    return n;
  };

  ///////////////////////////////////
  //   -  WAIT FOR SCRIPT LOADS  - //
  ///////////////////////////////////	
  var waitForScripts = function waitForScripts(c, o) {
    // CHECK KEN BURN DEPENDENCIES
    var addonsloaded = true,
      n = o.scriptsneeded;

    // CHECK FOR ADDONS
    if (o.addons != undefined && o.addons.length > 0) {
      jQuery.each(o.addons, function (i, obj) {
        if (_typeof(obj) === "object" && obj.init != undefined) {
          if (_R[obj.init] === undefined) addonsloaded = false;
        }
      });
    }
    if (n.filesystem || typeof punchgs !== 'undefined' && addonsloaded && (!n.kenburns || n.kenburns && typeof _R.stopKenBurn !== 'undefined') && (!n.navigation || n.navigation && typeof _R.createNavigation !== 'undefined') && (!n.carousel || n.carousel && typeof _R.prepareCarousel !== 'undefined') && (!n.videos || n.videos && typeof _R.resetVideo !== 'undefined') && (!n.actions || n.actions && typeof _R.checkActions !== 'undefined') && (!n.layeranim || n.layeranim && typeof _R.handleStaticLayers !== 'undefined') && (!n.migration || n.migration && typeof _R.migration !== 'undefined') && (!n.parallax || n.parallax && typeof _R.checkForParallax !== 'undefined') && (n.carousel || !n.carousel && typeof _R.animateSlide !== 'undefined')) c.trigger("scriptsloaded");else setTimeout(function () {
      waitForScripts(c, o);
    }, 50);
  };

  //////////////////////////////////
  //	-	GET SCRIPT LOCATION	-	//
  //////////////////////////////////
  var getScriptLocation = function getScriptLocation(a) {
    var srcexp = new RegExp("themepunch.revolution.min.js", "gi"),
      ret = "";
    jQuery("script").each(function () {
      var src = jQuery(this).attr("src");
      if (src && src.match(srcexp)) ret = src;
    });
    ret = ret.replace('jquery.themepunch.revolution.min.js', '');
    ret = ret.replace('jquery.themepunch.revolution.js', '');
    ret = ret.split("?")[0];
    return ret;
  };

  //////////////////////////////////////////
  //	-	ADVANCED RESPONSIVE LEVELS	-	//
  //////////////////////////////////////////
  var setCurWinRange = function setCurWinRange(opt, vis) {
    var curlevel = 0,
      curwidth = 9999,
      lastmaxlevel = 0,
      lastmaxid = 0,
      curid = 0,
      winw = jQuery(window).width(),
      l = vis && opt.responsiveLevels == 9999 ? opt.visibilityLevels : opt.responsiveLevels;
    if (l && l.length) jQuery.each(l, function (index, level) {
      if (winw < level) {
        if (lastmaxlevel == 0 || lastmaxlevel > level) {
          curwidth = level;
          curid = index;
          lastmaxlevel = level;
        }
      }
      if (winw > level && lastmaxlevel < level) {
        lastmaxlevel = level;
        lastmaxid = index;
      }
    });
    if (lastmaxlevel < curwidth) curid = lastmaxid;
    if (!vis) opt.curWinRange = curid;else opt.forcedWinRange = curid;
  };

  //////////////////////////////////////////
  //	-	INITIALISATION OF OPTIONS 	-	//
  //////////////////////////////////////////
  var prepareOptions = function prepareOptions(container, opt) {
    opt.carousel.maxVisibleItems = opt.carousel.maxVisibleItems < 1 ? 999 : opt.carousel.maxVisibleItems; // === 1 ? 2 : opt.carousel.maxVisibleItems;
    opt.carousel.vertical_align = opt.carousel.vertical_align === "top" ? "0%" : opt.carousel.vertical_align === "bottom" ? "100%" : "50%";
  };
  var gWiderOut = function gWiderOut(c, cl) {
    var r = 0;
    c.find(cl).each(function () {
      var a = jQuery(this);
      if (!a.hasClass("tp-forcenotvisible") && r < a.outerWidth()) r = a.outerWidth();
    });
    return r;
  };

  //////////////////////////////////////////
  //	-	INITIALISATION OF SLIDER	-	//
  //////////////////////////////////////////
  var initSlider = function initSlider(container, opt) {
    if (container == undefined) return false;

    // CHECK FOR ALTERNATIVE IMAGE, AND IFRAM EXIST, AND WE ARE IN IE8, MOBILE, DRAW IT SIMPLE
    if (container.data('aimg') != undefined) if (container.data('aie8') == "enabled" && _R.isIE(8) || container.data('amobile') == "enabled" && _ISM) container.html('<img class="tp-slider-alternative-image" src="' + container.data("aimg") + '">');

    // PREPRARE SOME CLASSES AND VARIABLES
    container.find('>ul').addClass("tp-revslider-mainul");

    // CREATE SOME DEFAULT OPTIONS FOR LATER			
    opt.c = container;
    opt.ul = container.find('.tp-revslider-mainul');

    // Remove Not Needed Slides for Mobile Devices
    opt.ul.find('>li').each(function (i) {
      var li = jQuery(this);
      if (li.data('hideslideonmobile') == "on" && _ISM) li.remove();
      if (li.data('invisible') || li.data('invisible') === true) {
        li.addClass("tp-invisible-slide");
        li.appendTo(opt.ul);
      }
    });
    if (opt.addons != undefined && opt.addons.length > 0) {
      jQuery.each(opt.addons, function (i, obj) {
        if (_typeof(obj) === "object" && obj.init != undefined) {
          _R[obj.init](eval(obj.params));
        }
      });
    }
    opt.cid = container.attr('id');
    opt.ul.css({
      visibility: "visible"
    });
    opt.slideamount = opt.ul.find('>li').not('.tp-invisible-slide').length;
    opt.realslideamount = opt.ul.find('>li').length;
    opt.slayers = container.find('.tp-static-layers');
    opt.slayers.data('index', 'staticlayers');
    if (opt.waitForInit == true) return;else {
      container[0].opt = opt;
      runSlider(container, opt);
    }
  };
  var onFullScreenChange = function onFullScreenChange() {
    jQuery("body").data('rs-fullScreenMode', !jQuery("body").data('rs-fullScreenMode'));
    if (jQuery("body").data('rs-fullScreenMode')) {
      setTimeout(function () {
        jQuery(window).trigger("resize");
      }, 200);
    }
  };
  var runSlider = function runSlider(container, opt) {
    opt.sliderisrunning = true;
    // Save Original Index of Slides
    opt.ul.find('>li').each(function (i) {
      jQuery(this).data('originalindex', i);
    });
    opt.allli = opt.ul.find('>li');

    // RECORD THUMBS AND SET INDEXES
    jQuery.each(opt.allli, function (index, li) {
      var li = jQuery(li);
      li.data('origindex', li.index());
    });
    opt.li = opt.ul.find('>li').not('.tp-invisible-slide');

    // RANDOMIZE THE SLIDER SHUFFLE MODE
    if (opt.shuffle == "on") {
      var fsa = new Object(),
        fli = opt.ul.find('>li:first-child');
      fsa.fstransition = fli.data('fstransition');
      fsa.fsmasterspeed = fli.data('fsmasterspeed');
      fsa.fsslotamount = fli.data('fsslotamount');
      for (var u = 0; u < opt.slideamount; u++) {
        var it = Math.round(Math.random() * opt.slideamount);
        opt.ul.find('>li:eq(' + it + ')').prependTo(opt.ul);
      }
      var newfli = opt.ul.find('>li:first-child');
      newfli.data('fstransition', fsa.fstransition);
      newfli.data('fsmasterspeed', fsa.fsmasterspeed);
      newfli.data('fsslotamount', fsa.fsslotamount);

      // RECOLLECT ALL LI INTO AN ARRAY
      opt.allli = opt.ul.find('>li');
      opt.li = opt.ul.find('>li').not('.tp-invisible-slide');
    }
    opt.inli = opt.ul.find('>li.tp-invisible-slide');
    opt.thumbs = new Array();
    opt.slots = 4;
    opt.act = -1;
    opt.firststart = 1;
    opt.loadqueue = new Array();
    opt.syncload = 0;
    opt.conw = container.width();
    opt.conh = container.height();
    if (opt.responsiveLevels.length > 1) opt.responsiveLevels[0] = 9999;else opt.responsiveLevels = 9999;
    jQuery.each(opt.allli, function (index, li) {
      var li = jQuery(li),
        img = li.find('.rev-slidebg') || li.find('img').first(),
        i = 0;
      li.addClass("tp-revslider-slidesli");
      if (li.data('index') === undefined) li.data('index', 'rs-' + Math.round(Math.random() * 999999));
      var obj = new Object();
      obj.params = new Array();
      obj.id = li.data('index');
      obj.src = li.data('thumb') !== undefined ? li.data('thumb') : img.data('lazyload') !== undefined ? img.data('lazyload') : img.attr('src');
      if (li.data('title') !== undefined) obj.params.push({
        from: RegExp("\\{\\{title\\}\\}", "g"),
        to: li.data("title")
      });
      if (li.data('description') !== undefined) obj.params.push({
        from: RegExp("\\{\\{description\\}\\}", "g"),
        to: li.data("description")
      });
      for (var i = 1; i <= 10; i++) {
        if (li.data("param" + i) !== undefined) obj.params.push({
          from: RegExp("\\{\\{param" + i + "\\}\\}", "g"),
          to: li.data("param" + i)
        });
      }
      opt.thumbs.push(obj);

      // IF LINK ON SLIDE EXISTS, NEED TO CREATE A PROPER LAYER FOR IT.
      if (li.data('link') != undefined) {
        var link = li.data('link'),
          target = li.data('target') || "_self",
          zindex = li.data('slideindex') === "back" ? 0 : 60,
          linktoslide = li.data('linktoslide'),
          checksl = linktoslide;
        if (linktoslide != undefined) if (linktoslide != "next" && linktoslide != "prev") opt.allli.each(function () {
          var t = jQuery(this);
          if (t.data('origindex') + 1 == checksl) linktoslide = t.data('index');
        });
        if (link != "slide") linktoslide = "no";
        var apptxt = '<div class="tp-caption slidelink" style="cursor:pointer;width:100%;height:100%;z-index:' + zindex + ';" data-x="center" data-y="center" data-basealign="slide" ',
          jts = linktoslide === "scroll_under" ? '[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]' : linktoslide === "prev" ? '[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]' : linktoslide === "next" ? '[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]' : '[{"event":"click","action":"jumptoslide","slide":"' + linktoslide + '","delay":"0.2"}]',
          frame = ' data-frames=' + "'" + '[{"delay":0,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' + "'";
        apptxt = linktoslide == "no" ? apptxt + frame + ' >' : apptxt + 'data-actions=' + "'" + jts + "'" + frame + ' >';
        apptxt = apptxt + '<a style="width:100%;height:100%;display:block"';
        apptxt = link != "slide" ? apptxt + ' target="' + target + '" href="' + link + '"' : apptxt;
        apptxt = apptxt + '><span style="width:100%;height:100%;display:block"></span></a></div>';
        li.append(apptxt);
      }
    });

    // CREATE GRID WIDTH AND HEIGHT ARRAYS		
    opt.rle = opt.responsiveLevels.length || 1;
    opt.gridwidth = cArray(opt.gridwidth, opt.rle);
    opt.gridheight = cArray(opt.gridheight, opt.rle);
    // END OF VERSION 5.0 INIT MODIFICATION

    // SIMPLIFY ANIMATIONS ON OLD IOS AND IE8 IF NEEDED
    if (opt.simplifyAll == "on" && (_R.isIE(8) || _R.iOSVersion())) {
      container.find('.tp-caption').each(function () {
        var tc = jQuery(this);
        tc.removeClass("customin customout").addClass("fadein fadeout");
        tc.data('splitin', "");
        tc.data('speed', 400);
      });
      opt.allli.each(function () {
        var li = jQuery(this);
        li.data('transition', "fade");
        li.data('masterspeed', 500);
        li.data('slotamount', 1);
        var img = li.find('.rev-slidebg') || li.find('>img').first();
        img.data('kenburns', "off");
      });
    }
    opt.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);

    // SOME OPTIONS WHICH SHOULD CLOSE OUT SOME OTHER SETTINGS		
    opt.autoHeight = opt.sliderLayout == "fullscreen" ? "on" : opt.autoHeight;
    if (opt.sliderLayout == "fullwidth" && opt.autoHeight == "off") container.css({
      maxHeight: opt.gridheight[opt.curWinRange] + "px"
    });

    // BUILD A FORCE FULLWIDTH CONTAINER, TO SPAN THE FULL SLIDER TO THE FULL WIDTH OF BROWSER
    if (opt.sliderLayout != "auto" && container.closest('.forcefullwidth_wrapper_tp_banner').length == 0) {
      if (opt.sliderLayout !== "fullscreen" || opt.fullScreenAutoWidth != "on") {
        var cp = container.parent(),
          mb = cp.css('marginBottom'),
          mt = cp.css('marginTop'),
          cid = container.attr('id') + "_forcefullwidth";
        mb = mb === undefined ? 0 : mb;
        mt = mt === undefined ? 0 : mt;
        cp.wrap('<div class="forcefullwidth_wrapper_tp_banner" id="' + cid + '" style="position:relative;width:100%;height:auto;margin-top:' + mt + ';margin-bottom:' + mb + '"></div>');
        container.closest('.forcefullwidth_wrapper_tp_banner').append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + container.height() + 'px"></div>');
        container.parent().css({
          marginTop: "0px",
          marginBottom: "0px"
        });
        //container.css({'backgroundColor':container.parent().css('backgroundColor'),'backgroundImage':container.parent().css('backgroundImage')});
        container.parent().css({
          position: 'absolute'
        });
      }
    }

    // SHADOW ADD ONS
    if (opt.shadow !== undefined && opt.shadow > 0) {
      container.parent().addClass('tp-shadow' + opt.shadow);
      container.parent().append('<div class="tp-shadowcover"></div>');
      container.parent().find('.tp-shadowcover').css({
        'backgroundColor': container.parent().css('backgroundColor'),
        'backgroundImage': container.parent().css('backgroundImage')
      });
    }

    // ESTIMATE THE CURRENT WINDOWS RANGE INDEX
    setCurWinRange(opt);
    setCurWinRange(opt, true);

    // IF THE CONTAINER IS NOT YET INITIALISED, LETS GO FOR IT
    if (!container.hasClass("revslider-initialised")) {
      // MARK THAT THE CONTAINER IS INITIALISED WITH SLIDER REVOLUTION ALREADY
      container.addClass("revslider-initialised");

      // FOR BETTER SELECTION, ADD SOME BASIC CLASS
      container.addClass("tp-simpleresponsive");
      // WE DONT HAVE ANY ID YET ? WE NEED ONE ! LETS GIVE ONE RANDOMLY FOR RUNTIME
      if (container.attr('id') == undefined) {
        container.attr('id', "revslider-" + Math.round(Math.random() * 1000 + 5));
      }
      checkIDS(opt, container);

      // CHECK IF FIREFOX 13 IS ON WAY.. IT HAS A STRANGE BUG, CSS ANIMATE SHOULD NOT BE USED
      opt.firefox13 = false;
      opt.ie = !jQuery.support.opacity;
      opt.ie9 = document.documentMode == 9;
      opt.origcd = opt.delay;

      // CHECK THE jQUERY VERSION
      var version = jQuery.fn.jquery.split('.'),
        versionTop = parseFloat(version[0]),
        versionMinor = parseFloat(version[1]),
        versionIncrement = parseFloat(version[2] || '0');
      if (versionTop == 1 && versionMinor < 7) container.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + version + ' <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>');
      if (versionTop > 1) opt.ie = false;

      // PREPARE VIDEO PLAYERS
      var addedApis = new Object();
      addedApis.addedyt = 0;
      addedApis.addedvim = 0;
      addedApis.addedvid = 0;

      //PREPARING FADE IN/OUT PARALLAX 
      if (opt.scrolleffect.on) opt.scrolleffect.layers = new Array();
      container.find('.tp-caption, .rs-background-video-layer').each(function (i) {
        var _nc = jQuery(this),
          _ = _nc.data(),
          an = _.autoplayonlyfirsttime,
          ap = _.autoplay,
          htmlvideo = _.videomp4 !== undefined || _.videowebm !== undefined || _.videoogv !== undefined,
          al = _nc.hasClass("tp-audiolayer"),
          loop = _.videoloop,
          addtofadeout = true,
          addToStaticFadeout = false;
        _.startclasses = _nc.attr('class');
        _.isparallaxlayer = _.startclasses.indexOf("rs-parallax") >= 0;
        if (_nc.hasClass("tp-static-layer") && _R.handleStaticLayers) {
          _R.handleStaticLayers(_nc, opt);
          if (opt.scrolleffect.on) if (opt.scrolleffect.on_parallax_static_layers === "on" && _.isparallaxlayer || opt.scrolleffect.on_static_layers === "on" && !_.isparallaxlayer) addToStaticFadeout = true;
          addtofadeout = false;
        }
        var pom = _nc.data('noposteronmobile') || _nc.data('noPosterOnMobile') || _nc.data('posteronmobile') || _nc.data('posterOnMobile') || _nc.data('posterOnMObile');
        _nc.data('noposteronmobile', pom);

        // FIX VISIBLE IFRAME BUG IN SAFARI
        var iff = 0;
        _nc.find('iframe').each(function () {
          punchgs.TweenLite.set(jQuery(this), {
            autoAlpha: 0
          });
          iff++;
        });
        if (iff > 0) _nc.data('iframes', true);
        if (_nc.hasClass("tp-caption")) {
          // PREPARE LAYERS AND WRAP THEM WITH PARALLAX, LOOP, MASK HELP CONTAINERS
          var ec = _nc.hasClass("slidelink") ? "width:100% !important;height:100% !important;" : "",
            _ndata = _nc.data(),
            nctype = _ndata.type,
            _pos = nctype === "row" || nctype === "column" ? "relative" : "absolute",
            preclas = "";
          if (nctype === "row") {
            _nc.addClass("rev_row").removeClass("tp-resizeme");
            preclas = "rev_row_wrap";
          } else if (nctype === "column") {
            preclas = "rev_column";
            _nc.addClass("rev_column_inner").removeClass("tp-resizeme");
            ;
            _nc.data('width', 'auto');
            punchgs.TweenLite.set(_nc, {
              width: 'auto'
            });
          } else if (nctype === "group") {
            _nc.removeClass("tp-resizeme");
          }
          var dmode = "",
            preid = "";
          if (nctype !== "row" && nctype !== "group" && nctype !== "column") {
            dmode = "display:" + _nc.css('display') + ";";
            if (_nc.closest('.rev_column').length > 0) {
              _nc.addClass("rev_layer_in_column");
              addtofadeout = false;
            } else if (_nc.closest('.rev_group').length > 0) {
              _nc.addClass("rev_layer_in_group");
              addtofadeout = false;
            }
          } else if (nctype === "column") addtofadeout = false;
          if (_ndata.wrapper_class !== undefined) preclas = preclas + " " + _ndata.wrapper_class;
          if (_ndata.wrapper_id !== undefined) preid = 'id="' + _ndata.wrapper_id + '"';
          _nc.wrap('<div ' + preid + ' class="tp-parallax-wrap ' + preclas + '" style="' + ec + 'position:' + _pos + ';' + dmode + ';visibility:hidden"><div class="tp-loop-wrap" style="' + ec + 'position:' + _pos + ';' + dmode + ';"><div class="tp-mask-wrap" style="' + ec + 'position:' + _pos + ';' + dmode + ';" ></div></div></div>');

          // ONLY ADD LAYERS TO FADEOUT DYNAMIC LIST WHC
          if (addtofadeout && opt.scrolleffect.on) if (opt.scrolleffect.on_parallax_layers === "on" && _.isparallaxlayer || opt.scrolleffect.on_layers === "on" && !_.isparallaxlayer) opt.scrolleffect.layers.push(_nc.parent());
          if (addToStaticFadeout) opt.scrolleffect.layers.push(_nc.parent());

          // Add BG for Columns
          if (nctype === "column") {
            _nc.append('<div class="rev_column_bg rev_column_bg_man_sized" style="display:none"></div>');
            _nc.closest('.tp-parallax-wrap').append('<div class="rev_column_bg rev_column_bg_auto_sized"></div>');
          }
          var lar = ['pendulum', 'rotate', 'slideloop', 'pulse', 'wave'],
            _lc = _nc.closest('.tp-loop-wrap');
          jQuery.each(lar, function (i, k) {
            var lw = _nc.find('.rs-' + k),
              f = lw.data() || "";
            if (f != "") {
              _lc.data(f);
              _lc.addClass("rs-" + k);
              lw.children(0).unwrap();
              _nc.data('loopanimation', "on");
            }
          });
          if (_nc.attr('id') === undefined) _nc.attr('id', 'layer-' + Math.round(Math.random() * 999999999));
          checkIDS(opt, _nc);
          punchgs.TweenLite.set(_nc, {
            visibility: "hidden"
          });
        }
        var as = _nc.data('actions');
        if (as !== undefined) _R.checkActions(_nc, opt, as);
        checkHoverDependencies(_nc, opt);
        if (_R.checkVideoApis) addedApis = _R.checkVideoApis(_nc, opt, addedApis);

        // REMOVE VIDEO AUTOPLAYS FOR MOBILE DEVICES 

        if (_ISM && (!_ANDROID || !opt.fallbacks.allowHTML5AutoPlayOnAndroid || !htmlvideo)) {
          if (an == true || an == "true") {
            _.autoplayonlyfirsttime = false;
            an = false;
          }
          if (ap == true || ap == "true" || ap == "on" || ap == "1sttime") {
            _.autoplay = "off";
            ap = "off";
          }
        }

        //loop =  loop=="none" && _nc.hasClass('rs-background-video-layer') ?  "loopandnoslidestop" : loop;

        // PREPARE TIMER BEHAVIOUR BASED ON AUTO PLAYED VIDEOS IN SLIDES
        if (!al && (an == true || an == "true" || ap == "1sttime") && loop != "loopandnoslidestop") _nc.closest('li.tp-revslider-slidesli').addClass("rs-pause-timer-once");
        if (!al && (ap == true || ap == "true" || ap == "on" || ap == "no1sttime") && loop != "loopandnoslidestop") _nc.closest('li.tp-revslider-slidesli').addClass("rs-pause-timer-always");
      });
      container[0].addEventListener('mouseenter', function () {
        container.trigger('tp-mouseenter');
        opt.overcontainer = true;
      }, {
        passive: true
      });
      container[0].addEventListener('mouseover', function () {
        container.trigger('tp-mouseover');
        opt.overcontainer = true;
      }, {
        passive: true
      });
      container[0].addEventListener('mouseleave', function () {
        container.trigger('tp-mouseleft');
        opt.overcontainer = false;
      }, {
        passive: true
      });

      // REMOVE ANY VIDEO JS SETTINGS OF THE VIDEO  IF NEEDED  (OLD FALL BACK, AND HELP FOR 3THD PARTY PLUGIN CONFLICTS)
      container.find('.tp-caption video').each(function (i) {
        var v = jQuery(this);
        v.removeClass("video-js vjs-default-skin");
        v.attr("preload", "");
        v.css({
          display: "none"
        });
      });

      //PREPARE LOADINGS ALL IN SEQUENCE
      if (opt.sliderType !== "standard") opt.lazyType = "all";

      // PRELOAD STATIC LAYERS			
      loadImages(container.find('.tp-static-layers'), opt, 0, true);
      waitForCurrentImages(container.find('.tp-static-layers'), opt, function () {
        container.find('.tp-static-layers img').each(function () {
          var e = jQuery(this),
            src = e.data('lazyload') != undefined ? e.data('lazyload') : e.attr('src'),
            loadobj = getLoadObj(opt, src);
          e.attr('src', loadobj.src);
        });
      });
      opt.rowzones = [];

      // SET ALL LI AN INDEX AND INIT LAZY LOADING
      opt.allli.each(function (i) {
        var li = jQuery(this);
        opt.rowzones[i] = [];
        li.find('.rev_row_zone').each(function () {
          opt.rowzones[i].push(jQuery(this));
        });
        if (opt.lazyType == "all" || opt.lazyType == "smart" && (i == 0 || i == 1 || i == opt.slideamount || i == opt.slideamount - 1)) {
          loadImages(li, opt, i);
          waitForCurrentImages(li, opt, function () {
            //if (opt.sliderType=="carousel") 
            //punchgs.TweenLite.to(li,1,{autoAlpha:1,ease:punchgs.Power3.easeInOut});
          });
        }
      });

      // IF DEEPLINK HAS BEEN SET
      var deeplink = getUrlVars("#")[0];
      if (deeplink.length < 9) {
        if (deeplink.split('slide').length > 1) {
          var dslide = parseInt(deeplink.split('slide')[1], 0);
          if (dslide < 1) dslide = 1;
          if (dslide > opt.slideamount) dslide = opt.slideamount;
          opt.startWithSlide = dslide - 1;
        }
      }

      // PREPARE THE SPINNER
      container.append('<div class="tp-loader ' + opt.spinner + '">' + '<div class="dot1"></div>' + '<div class="dot2"></div>' + '<div class="bounce1"></div>' + '<div class="bounce2"></div>' + '<div class="bounce3"></div>' + '</div>');
      opt.loader = container.find('.tp-loader');

      // RESET THE TIMER
      if (container.find('.tp-bannertimer').length === 0) container.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
      container.find('.tp-bannertimer').css({
        'width': '0%'
      });

      // PREPARE THE SLIDES
      opt.ul.css({
        'display': 'block'
      });
      prepareSlides(container, opt);
      if ((opt.parallax.type !== "off" || opt.scrolleffect.on) && _R.checkForParallax) _R.checkForParallax(container, opt);

      // PREPARE SLIDER SIZE			
      _R.setSize(opt);

      // Call the Navigation Builder
      if (opt.sliderType !== "hero" && _R.createNavigation) _R.createNavigation(container, opt);
      if (_R.resizeThumbsTabs && _R.resizeThumbsTabs) _R.resizeThumbsTabs(opt);
      contWidthManager(opt);
      var _v = opt.viewPort;
      opt.inviewport = false;
      if (_v != undefined && _v.enable) {
        if (!jQuery.isNumeric(_v.visible_area)) if (_v.visible_area.indexOf('%') !== -1) _v.visible_area = parseInt(_v.visible_area) / 100;
        if (_R.scrollTicker) _R.scrollTicker(opt, container);
      }
      // MAKE SURE CAROUSEL IS NOT YET VISIBE BEFORE IT COMES INTO GAME
      if (opt.sliderType === "carousel" && _R.prepareCarousel) {
        punchgs.TweenLite.set(opt.ul, {
          opacity: 0
        });
        _R.prepareCarousel(opt, new punchgs.TimelineLite(), undefined, 0);
        opt.onlyPreparedSlide = true;
      }

      // START THE SLIDER
      setTimeout(function () {
        if (!_v.enable || _v.enable && opt.inviewport || _v.enable && !opt.inviewport && !_v.outof == "wait") swapSlide(container);else {
          opt.c.addClass("tp-waitforfirststart");
          opt.waitForFirstSlide = true;
          if (_v.presize) {
            var nextli = jQuery(opt.li[0]);
            // PRELOAD STATIC LAYERS			
            loadImages(nextli, opt, 0, true);
            waitForCurrentImages(nextli.find('.tp-layers'), opt, function () {
              _R.animateTheCaptions({
                slide: nextli,
                opt: opt,
                preset: true
              });
            });
          }
        }
        if (_R.manageNavigation) _R.manageNavigation(opt);

        // START COUNTDOWN
        if (opt.slideamount > 1) {
          if (!_v.enable || _v.enable && opt.inviewport) countDown(container, opt);else opt.waitForCountDown = true;
        }
        setTimeout(function () {
          container.trigger('revolution.slide.onloaded');
        }, 100);
      }, opt.startDelay);
      opt.startDelay = 0;

      /******************************
      	-	FULLSCREEN CHANGE	-
      ********************************/
      // FULLSCREEN MODE TESTING
      jQuery("body").data('rs-fullScreenMode', false);
      window.addEventListener('fullscreenchange', onFullScreenChange, {
        passive: true
      });
      window.addEventListener('mozfullscreenchange', onFullScreenChange, {
        passive: true
      });
      window.addEventListener('webkitfullscreenchange', onFullScreenChange, {
        passive: true
      });
      var resizid = "resize.revslider-" + container.attr('id');

      // IF RESIZED, NEED TO STOP ACTUAL TRANSITION AND RESIZE ACTUAL IMAGES
      jQuery(window).on(resizid, function () {
        if (container == undefined) return false;
        if (jQuery('body').find(container) != 0) contWidthManager(opt);
        var hchange = false;
        if (opt.sliderLayout == "fullscreen") {
          var jwh = jQuery(window).height();
          if (opt.fallbacks.ignoreHeightChanges == "mobile" && _ISM || opt.fallbacks.ignoreHeightChanges == "always") {
            opt.fallbacks.ignoreHeightChangesSize = opt.fallbacks.ignoreHeightChangesSize == undefined ? 0 : opt.fallbacks.ignoreHeightChangesSize;
            hchange = jwh != opt.lastwindowheight && Math.abs(jwh - opt.lastwindowheight) > opt.fallbacks.ignoreHeightChangesSize;
          } else {
            hchange = jwh != opt.lastwindowheight;
          }
        }
        if (container.outerWidth(true) != opt.width || container.is(":hidden") || hchange) {
          opt.lastwindowheight = jQuery(window).height();
          containerResized(container, opt);
        }
      });
      hideSliderUnder(container, opt);
      contWidthManager(opt);
      if (!opt.fallbacks.disableFocusListener && opt.fallbacks.disableFocusListener != "true" && opt.fallbacks.disableFocusListener !== true) tabBlurringCheck(container, opt);
    }
  };

  /*************************************
  	-	 CREATE SIMPLE ARRAYS	-
  **************************************/
  var cArray = function cArray(b, l) {
    if (!jQuery.isArray(b)) {
      var t = b;
      b = new Array();
      b.push(t);
    }
    if (b.length < l) {
      var t = b[b.length - 1];
      for (var i = 0; i < l - b.length + 2; i++) b.push(t);
    }
    return b;
  };
  var checkHoverDependencies = function checkHoverDependencies(_nc, opt) {
    var _ = _nc.data(),
      senter = _.start === "sliderenter" || _.frames !== undefined && _.frames[0] != undefined && _.frames[0].delay === "sliderenter" ? true : false;
    if (senter) {
      if (opt.layersonhover === undefined) {
        opt.c.on('tp-mouseenter', function () {
          if (opt.layersonhover) jQuery.each(opt.layersonhover, function (i, tnc) {
            var cli = tnc.data('closestli') || tnc.closest('.tp-revslider-slidesli'),
              stl = tnc.data('staticli') || tnc.closest('.tp-static-layers');
            if (tnc.data('closestli') === undefined) {
              tnc.data('closestli', cli);
              tnc.data('staticli', stl);
            }
            if (cli.length > 0 && cli.hasClass("active-revslide") || cli.hasClass("processing-revslide") || stl.length > 0) {
              tnc.data('animdirection', "in");
              if (_R.playAnimationFrame) _R.playAnimationFrame({
                caption: tnc,
                opt: opt,
                frame: "frame_0",
                triggerdirection: "in",
                triggerframein: "frame_0",
                triggerframeout: "frame_999"
              });
              tnc.data('triggerstate', "on");
            }
          });
        });
        opt.c.on('tp-mouseleft', function () {
          if (opt.layersonhover) jQuery.each(opt.layersonhover, function (i, tnc) {
            tnc.data('animdirection', "out");
            tnc.data('triggered', true);
            tnc.data('triggerstate', "off");
            if (_R.stopVideo) _R.stopVideo(tnc, opt);
            if (_R.playAnimationFrame) _R.playAnimationFrame({
              caption: tnc,
              opt: opt,
              frame: "frame_999",
              triggerdirection: "out",
              triggerframein: "frame_0",
              triggerframeout: "frame_999"
            });
          });
        });
        opt.layersonhover = new Array();
      }
      opt.layersonhover.push(_nc);
    }
  };
  var contWidthManager = function contWidthManager(opt) {
    var rl = _R.getHorizontalOffset(opt.c, "left");
    if (opt.sliderLayout != "auto" && (opt.sliderLayout !== "fullscreen" || opt.fullScreenAutoWidth != "on")) {
      var loff = Math.ceil(opt.c.closest('.forcefullwidth_wrapper_tp_banner').offset().left - rl);
      punchgs.TweenLite.set(opt.c.parent(), {
        'left': 0 - loff + "px",
        'width': jQuery(window).width() - _R.getHorizontalOffset(opt.c, "both")
      });
    } else {
      if (opt.sliderLayout == "fullscreen" && opt.fullScreenAutoWidth == "on") punchgs.TweenLite.set(opt.ul, {
        left: 0,
        width: opt.c.width()
      });else punchgs.TweenLite.set(opt.ul, {
        left: rl,
        width: opt.c.width() - _R.getHorizontalOffset(opt.c, "both")
      });
    }

    // put Static Layer Wrapper in Position	
    if (opt.slayers && opt.sliderLayout != "fullwidth" && opt.sliderLayout != "fullscreen") punchgs.TweenLite.set(opt.slayers, {
      left: rl
    });
  };
  var cv = function cv(a, d) {
    return a === undefined ? d : a;
  };
  var hideSliderUnder = function hideSliderUnder(container, opt, resized) {
    // FIRST TIME STOP/START HIDE / SHOW SLIDER
    //REMOVE AND SHOW SLIDER ON DEMAND
    var contpar = container.parent();
    if (jQuery(window).width() < opt.hideSliderAtLimit) {
      container.trigger('stoptimer');
      if (contpar.css('display') != "none") contpar.data('olddisplay', contpar.css('display'));
      contpar.css({
        display: "none"
      });
    } else {
      if (container.is(":hidden") && resized) {
        if (contpar.data('olddisplay') != undefined && contpar.data('olddisplay') != "undefined" && contpar.data('olddisplay') != "none") contpar.css({
          display: contpar.data('olddisplay')
        });else contpar.css({
          display: "block"
        });
        container.trigger('restarttimer');
        setTimeout(function () {
          containerResized(container, opt);
        }, 150);
      }
    }
    if (_R.hideUnHideNav) _R.hideUnHideNav(opt);
  };

  //////////////////////////
  //	CONTAINER RESIZED	//
  /////////////////////////
  var containerResized = function containerResized(c, opt) {
    c.trigger('revolution.slide.beforeredraw');
    if (opt.infullscreenmode == true) opt.minHeight = jQuery(window).height();
    setCurWinRange(opt);
    setCurWinRange(opt, true);
    if (!_R.resizeThumbsTabs || _R.resizeThumbsTabs(opt) === true) {
      hideSliderUnder(c, opt, true);
      contWidthManager(opt);
      if (opt.sliderType == "carousel") _R.prepareCarousel(opt, true);
      if (c === undefined) return false;
      _R.setSize(opt);
      opt.conw = opt.c.width();
      opt.conh = opt.infullscreenmode ? opt.minHeight : opt.c.height();
      var actsh = c.find('.active-revslide .slotholder'),
        nextsh = c.find('.processing-revslide .slotholder');
      removeSlots(c, opt, c, 2);
      if (opt.sliderType === "standard") {
        punchgs.TweenLite.set(nextsh.find('.defaultimg'), {
          opacity: 0
        });
        actsh.find('.defaultimg').css({
          'opacity': 1
        });
      }
      if (opt.sliderType === "carousel" && opt.lastconw != opt.conw) {
        clearTimeout(opt.pcartimer);
        opt.pcartimer = setTimeout(function () {
          _R.prepareCarousel(opt, true);
          // SHOW ALL LAYERS IN ALL SLIDES FOR CAROUSEL
          if (opt.sliderType == "carousel" && opt.carousel.showLayersAllTime === "on") jQuery.each(opt.li, function (i) {
            _R.animateTheCaptions({
              slide: jQuery(opt.li[i]),
              opt: opt,
              recall: true
            });
          });
        }, 100);
        opt.lastconw = opt.conw;
      }
      if (_R.manageNavigation) _R.manageNavigation(opt);
      if (_R.animateTheCaptions && c.find('.active-revslide').length > 0) _R.animateTheCaptions({
        slide: c.find('.active-revslide'),
        opt: opt,
        recall: true
      });
      if (nextsh.data('kenburns') == "on") _R.startKenBurn(nextsh, opt, nextsh.data('kbtl').progress());
      if (actsh.data('kenburns') == "on") _R.startKenBurn(actsh, opt, actsh.data('kbtl').progress());

      // DOUBLE CALL FOR SOME FUNCTION TO AVOID PORTRAIT/LANDSCAPE ISSUES, AND TO AVOID FULLSCREEN/NORMAL SWAP ISSUES
      if (_R.animateTheCaptions && c.find('.processing-revslide').length > 0) _R.animateTheCaptions({
        slide: c.find('.processing-revslide'),
        opt: opt,
        recall: true
      });
      if (_R.manageNavigation) _R.manageNavigation(opt);
    }
    c.trigger('revolution.slide.afterdraw');
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////       PREPARING / REMOVING		////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
  var setScale = function setScale(opt) {
    opt.bw = opt.width / opt.gridwidth[opt.curWinRange];
    opt.bh = opt.height / opt.gridheight[opt.curWinRange];
    if (opt.bh > opt.bw) opt.bh = opt.bw;else opt.bw = opt.bh;
    if (opt.bh > 1 || opt.bw > 1) {
      opt.bw = 1;
      opt.bh = 1;
    }
  };

  /////////////////////////////////////////
  //	-	PREPARE THE SLIDES / SLOTS -  //
  ///////////////////////////////////////
  var prepareSlides = function prepareSlides(container, opt) {
    container.find('.tp-caption').each(function () {
      var c = jQuery(this);
      if (c.data('transition') !== undefined) c.addClass(c.data('transition'));
    });

    // PREPARE THE UL CONTAINER TO HAVEING MAX HEIGHT AND HEIGHT FOR ANY SITUATION
    opt.ul.css({
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      maxHeight: container.parent().css('maxHeight')
    });
    if (opt.autoHeight == "on") {
      opt.ul.css({
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        maxHeight: "none"
      });
      container.css({
        'maxHeight': 'none'
      });
      container.parent().css({
        'maxHeight': 'none'
      });
    }
    //_R.setSize("",opt);
    opt.allli.each(function (j) {
      var li = jQuery(this),
        originalIndex = li.data('originalindex');

      //START WITH CORRECT SLIDE
      if (opt.startWithSlide != undefined && originalIndex == opt.startWithSlide || opt.startWithSlide === undefined && j == 0) li.addClass("next-revslide");

      // MAKE LI OVERFLOW HIDDEN FOR FURTHER ISSUES
      li.css({
        'width': '100%',
        'height': '100%',
        'overflow': 'hidden'
      });
    });
    if (opt.sliderType === "carousel") {
      //SET CAROUSEL				
      opt.ul.css({
        overflow: "visible"
      }).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');
      var apt = '<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';
      opt.c.parent().prepend(apt);
      opt.c.parent().append(apt);
      _R.prepareCarousel(opt);
    }

    // RESOLVE OVERFLOW HIDDEN OF MAIN CONTAINER
    container.parent().css({
      'overflow': 'visible'
    });
    opt.allli.find('>img').each(function (j) {
      var img = jQuery(this),
        cli = img.closest('li'),
        bgvid = cli.find('.rs-background-video-layer');
      bgvid.addClass("defaultvid").css({
        zIndex: 30
      });
      img.addClass('defaultimg');

      // TURN OF KEN BURNS IF WE ARE ON MOBILE AND IT IS WISHED SO
      if (opt.fallbacks.panZoomDisableOnMobile == "on" && _ISM) {
        img.data('kenburns', "off");
        img.data('bgfit', "cover");
      }
      var mediafilter = cli.data('mediafilter');
      mediafilter = mediafilter === "none" || mediafilter === undefined ? "" : mediafilter;
      img.wrap('<div class="slotholder" style="position:absolute; top:0px; left:0px; z-index:0;width:100%;height:100%;"></div>');
      bgvid.appendTo(cli.find('.slotholder'));
      var dts = img.data();
      img.closest('.slotholder').data(dts);
      if (bgvid.length > 0 && dts.bgparallax != undefined) bgvid.data('bgparallax', dts.bgparallax);
      if (opt.dottedOverlay != "none" && opt.dottedOverlay != undefined) img.closest('.slotholder').append('<div class="tp-dottedoverlay ' + opt.dottedOverlay + '"></div>');
      var src = img.attr('src');
      dts.src = src;
      dts.bgfit = dts.bgfit || "cover";
      dts.bgrepeat = dts.bgrepeat || "no-repeat", dts.bgposition = dts.bgposition || "center center";
      var pari = img.closest('.slotholder'),
        bgcolor = img.data('bgcolor'),
        bgstyle = "";
      if (bgcolor !== undefined && bgcolor.indexOf('gradient') >= 0) bgstyle = '"background:' + bgcolor + ';width:100%;height:100%;"';else bgstyle = '"background-color:' + bgcolor + ';background-repeat:' + dts.bgrepeat + ';background-image:url(' + src + ');background-size:' + dts.bgfit + ';background-position:' + dts.bgposition + ';width:100%;height:100%;"';
      var newimg = jQuery('<div class="tp-bgimg defaultimg ' + mediafilter + '" data-bgcolor="' + bgcolor + '" style=' + bgstyle + '></div>');
      img.parent().append(newimg);
      img.data('mediafilter', mediafilter);
      var comment = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + img.get(0).outerHTML);
      img.replaceWith(comment);
      newimg.data(dts);
      newimg.attr("src", src);
      if (opt.sliderType === "standard" || opt.sliderType === "undefined") newimg.css({
        'opacity': 0
      });
    });
    if (opt.scrolleffect.on && opt.scrolleffect.on_slidebg === "on") {
      opt.allslotholder = new Array();
      opt.allli.find('.slotholder').each(function () {
        jQuery(this).wrap('<div style="display:block;position:absolute;top:0px;left:0px;width:100%;height:100%" class="slotholder_fadeoutwrap"></div>');
      });
      opt.allslotholder = opt.c.find('.slotholder_fadeoutwrap');
    }
  };

  //	REMOVE SLOTS	//
  var removeSlots = function removeSlots(container, opt, where, addon) {
    opt.removePrepare = opt.removePrepare + addon;
    where.find('.slot, .slot-circle-wrapper').each(function () {
      jQuery(this).remove();
    });
    opt.transition = 0;
    opt.removePrepare = 0;
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////       SLIDE SWAPS			////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	

  // THE IMAGE IS LOADED, WIDTH, HEIGHT CAN BE SAVED
  var cutParams = function cutParams(a) {
    var b = a;
    if (a != undefined && a.length > 0) b = a.split("?")[0];
    return b;
  };
  var relativeRedir = function relativeRedir(redir) {
    return location.pathname.replace(/(.*)\/[^/]*/, "$1/" + redir);
  };
  var abstorel = function abstorel(base, relative) {
    var stack = base.split("/"),
      parts = relative.split("/");
    stack.pop(); // remove current file name (or empty string)
    // (omit if "base" is the current folder without trailing slash)
    for (var i = 0; i < parts.length; i++) {
      if (parts[i] == ".") continue;
      if (parts[i] == "..") stack.pop();else stack.push(parts[i]);
    }
    return stack.join("/");
  };
  var imgLoaded = function imgLoaded(img, opt, progress) {
    opt.syncload--;
    if (opt.loadqueue) jQuery.each(opt.loadqueue, function (index, queue) {
      var mqsrc = queue.src.replace(/\.\.\/\.\.\//gi, ""),
        fullsrc = self.location.href,
        origin = document.location.origin,
        fullsrc_b = fullsrc.substring(0, fullsrc.length - 1) + "/" + mqsrc,
        origin_b = origin + "/" + mqsrc,
        absolute = abstorel(self.location.href, queue.src);
      fullsrc = fullsrc.substring(0, fullsrc.length - 1) + mqsrc;
      origin = origin + mqsrc;
      if (cutParams(origin) === cutParams(decodeURIComponent(img.src)) || cutParams(fullsrc) === cutParams(decodeURIComponent(img.src)) || cutParams(absolute) === cutParams(decodeURIComponent(img.src)) || cutParams(origin_b) === cutParams(decodeURIComponent(img.src)) || cutParams(fullsrc_b) === cutParams(decodeURIComponent(img.src)) || cutParams(queue.src) === cutParams(decodeURIComponent(img.src)) || cutParams(queue.src).replace(/^.*\/\/[^\/]+/, '') === cutParams(decodeURIComponent(img.src)).replace(/^.*\/\/[^\/]+/, '') || window.location.origin === "file://" && cutParams(img.src).match(new RegExp(mqsrc))) {
        queue.progress = progress;
        queue.width = img.width;
        queue.height = img.height;
      }
    });
    progressImageLoad(opt);
  };

  // PRELOAD IMAGES 3 PIECES ON ONE GO, CHECK LOAD PRIORITY
  var progressImageLoad = function progressImageLoad(opt) {
    if (opt.syncload == 3) return;
    if (opt.loadqueue) jQuery.each(opt.loadqueue, function (index, queue) {
      if (queue.progress.match(/prepared/g)) {
        if (opt.syncload <= 3) {
          opt.syncload++;
          if (queue.type == "img") {
            var img = new Image();
            img.onload = function () {
              imgLoaded(this, opt, "loaded");
              queue.error = false;
            };
            img.onerror = function () {
              imgLoaded(this, opt, "failed");
              queue.error = true;
            };
            img.src = queue.src;
          } else {
            jQuery.get(queue.src, function (data) {
              queue.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
              queue.progress = "loaded";
              opt.syncload--;
              progressImageLoad(opt);
            }).fail(function () {
              queue.progress = "failed";
              opt.syncload--;
              progressImageLoad(opt);
            });
          }
          queue.progress = "inload";
        }
      }
    });
  };

  // ADD TO QUEUE THE NOT LOADED IMAGES YES
  var addToLoadQueue = function addToLoadQueue(src, opt, prio, type, staticlayer) {
    var alreadyexist = false;
    if (opt.loadqueue) jQuery.each(opt.loadqueue, function (index, queue) {
      if (queue.src === src) alreadyexist = true;
    });
    if (!alreadyexist) {
      var loadobj = new Object();
      loadobj.src = src;
      loadobj.starttoload = jQuery.now();
      loadobj.type = type || "img";
      loadobj.prio = prio;
      loadobj.progress = "prepared";
      loadobj["static"] = staticlayer;
      opt.loadqueue.push(loadobj);
    }
  };

  // LOAD THE IMAGES OF THE PREDEFINED CONTAINER
  var loadImages = function loadImages(container, opt, prio, staticlayer) {
    container.find('img,.defaultimg, .tp-svg-layer').each(function () {
      var element = jQuery(this),
        src = element.data('lazyload') !== undefined && element.data('lazyload') !== "undefined" ? element.data('lazyload') : element.data('svg_src') != undefined ? element.data('svg_src') : element.attr('src'),
        type = element.data('svg_src') != undefined ? "svg" : "img";
      element.data('start-to-load', jQuery.now());
      addToLoadQueue(src, opt, prio, type, staticlayer);
    });
    progressImageLoad(opt);
  };

  // FIND SEARCHED IMAGE/SRC IN THE LOAD QUEUE
  var getLoadObj = function getLoadObj(opt, src) {
    var obj = new Object();
    if (opt.loadqueue) jQuery.each(opt.loadqueue, function (index, queue) {
      if (queue.src == src) obj = queue;
    });
    return obj;
  };

  // WAIT PROGRESS TILL THE PREDEFINED CONTAINER HAS ALL IMAGES LOADED INSIDE
  var waitForCurrentImages = function waitForCurrentImages(nextli, opt, callback) {
    var waitforload = false;

    // PRELOAD ALL IMAGES
    nextli.find('img,.defaultimg, .tp-svg-layer').each(function () {
      var element = jQuery(this),
        src = element.data('lazyload') != undefined ? element.data('lazyload') : element.data('svg_src') != undefined ? element.data('svg_src') : element.attr('src'),
        loadobj = getLoadObj(opt, src);

      // IF ELEMENTS IS NOT LOADED YET, AND IT IS NOW LOADED
      if (element.data('loaded') === undefined && loadobj !== undefined && loadobj.progress && loadobj.progress.match(/loaded/g)) {
        element.attr('src', loadobj.src);

        // IF IT IS A DEFAULT IMG, WE NEED TO ASSIGN SOME SPECIAL VALUES TO IT
        if (loadobj.type == "img") {
          if (element.hasClass("defaultimg")) {
            if (!_R.isIE(8)) {
              if (loadobj.src.indexOf('images/transparent.png') == -1 || element.data('bgcolor') === undefined) {
                element.css({
                  backgroundImage: 'url("' + loadobj.src + '")'
                });
              } else {
                if (element.data('bgcolor') !== undefined) element.css({
                  background: element.data('bgcolor')
                });
              }
            } else {
              defimg.attr('src', loadobj.src);
            }
            nextli.data('owidth', loadobj.width);
            nextli.data('oheight', loadobj.height);
            nextli.find('.slotholder').data('owidth', loadobj.width);
            nextli.find('.slotholder').data('oheight', loadobj.height);
          } else {
            var w = element.data('ww'),
              h = element.data('hh');
            element.data('owidth', loadobj.width);
            element.data('oheight', loadobj.height);
            w = w == undefined || w == "auto" || w == "" ? loadobj.width : w;
            h = h == undefined || h == "auto" || h == "" ? loadobj.height : h;
            if (!jQuery.isNumeric(w) && w.indexOf("%") > 0) h = w;
            element.data('ww', w);
            element.data('hh', h);
          }
        } else if (loadobj.type == "svg" && loadobj.progress == "loaded") {
          element.append('<div class="tp-svg-innercontainer"></div>');
          element.find('.tp-svg-innercontainer').append(loadobj.innerHTML);
        }
        // ELEMENT IS NOW FULLY LOADED
        element.data('loaded', true);
      }
      if (loadobj && loadobj.progress && loadobj.progress.match(/inprogress|inload|prepared/g)) if (!loadobj.error && jQuery.now() - element.data('start-to-load') < 5000) waitforload = true;else {
        loadobj.progress = "failed";
        if (!loadobj.reported_img) {
          loadobj.reported_img = true;
          console.warn(src + "  Could not be loaded !");
        }
      }

      // WAIT FOR VIDEO API'S					
      if (opt.youtubeapineeded == true && (!window['YT'] || YT.Player == undefined)) {
        waitforload = true;
        if (jQuery.now() - opt.youtubestarttime > 5000 && opt.youtubewarning != true) {
          opt.youtubewarning = true;
          var txt = "YouTube Api Could not be loaded !";
          if (location.protocol === 'https:') txt = txt + " Please Check and Renew SSL Certificate !";
          console.error(txt);
          opt.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + txt + '</strong></div>');
        }
      }
      if (opt.vimeoapineeded == true && !window['Froogaloop']) {
        waitforload = true;
        if (jQuery.now() - opt.vimeostarttime > 5000 && opt.vimeowarning != true) {
          opt.vimeowarning = true;
          var txt = "Vimeo Froogaloop Api Could not be loaded !";
          if (location.protocol === 'https:') txt = txt + " Please Check and Renew SSL Certificate !";
          console.error(txt);
          opt.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + txt + '</strong></div>');
        }
      }
    });
    if (!_ISM && opt.audioqueue && opt.audioqueue.length > 0) {
      jQuery.each(opt.audioqueue, function (i, obj) {
        if (obj.status && obj.status === "prepared") if (jQuery.now() - obj.start < obj.waittime) waitforload = true;
      });
    }
    jQuery.each(opt.loadqueue, function (i, o) {
      if (o["static"] === true && (o.progress != "loaded" || o.progress === "failed")) {
        if (o.progress == "failed") {
          if (!o.reported) {
            o.reported = true;
            console.warn("Static Image " + o.src + "  Could not be loaded in time. Error Exists:" + o.error);
          }
        } else if (!o.error && jQuery.now() - o.starttoload < 5000) {
          waitforload = true;
        } else {
          if (!o.reported) {
            o.reported = true;
            console.warn("Static Image " + o.src + "  Could not be loaded within 5s! Error Exists:" + o.error);
          }
        }
      }
    });
    if (waitforload) punchgs.TweenLite.delayedCall(0.18, waitForCurrentImages, [nextli, opt, callback]);else punchgs.TweenLite.delayedCall(0.18, callback);
  };

  //////////////////////////////////////
  //	-	CALL TO SWAP THE SLIDES -  //
  /////////////////////////////////////
  var swapSlide = function swapSlide(container) {
    var opt = container[0].opt;
    clearTimeout(opt.waitWithSwapSlide);
    if (container.find('.processing-revslide').length > 0) {
      opt.waitWithSwapSlide = setTimeout(function () {
        swapSlide(container);
      }, 150);
      return false;
    }
    var actli = container.find('.active-revslide'),
      nextli = container.find('.next-revslide'),
      defimg = nextli.find('.defaultimg');
    if (opt.sliderType === "carousel" && !opt.carousel.fadein) {
      punchgs.TweenLite.to(opt.ul, 1, {
        opacity: 1
      });
      opt.carousel.fadein = true;
    }
    if (nextli.index() === actli.index() && opt.onlyPreparedSlide !== true) {
      nextli.removeClass("next-revslide");
      return false;
    }
    if (opt.onlyPreparedSlide === true) {
      opt.onlyPreparedSlide = false;
      jQuery(opt.li[0]).addClass("processing-revslide");
    }
    nextli.removeClass("next-revslide").addClass("processing-revslide");
    if (nextli.index() === -1 && opt.sliderType === "carousel") nextli = jQuery(opt.li[0]);
    nextli.data('slide_on_focus_amount', nextli.data('slide_on_focus_amount') + 1 || 1);
    // CHECK IF WE ARE ALREADY AT LAST ITEM TO PLAY IN REAL LOOP SESSION
    if (opt.stopLoop == "on" && nextli.index() == opt.lastslidetoshow - 1) {
      container.find('.tp-bannertimer').css({
        'visibility': 'hidden'
      });
      container.trigger('revolution.slide.onstop');
      opt.noloopanymore = 1;
    }

    // INCREASE LOOP AMOUNTS
    if (nextli.index() === opt.slideamount - 1) {
      opt.looptogo = opt.looptogo - 1;
      if (opt.looptogo <= 0) opt.stopLoop = "on";
    }
    opt.tonpause = true;
    container.trigger('stoptimer');
    opt.cd = 0;
    if (opt.spinner === "off") if (opt.loader !== undefined) opt.loader.css({
      display: "none"
    });else opt.loadertimer = setTimeout(function () {
      if (opt.loader !== undefined) opt.loader.css({
        display: "block"
      });
    }, 50);
    loadImages(nextli, opt, 1);
    if (_R.preLoadAudio) _R.preLoadAudio(nextli, opt, 1);

    // WAIT FOR SWAP SLIDE PROGRESS

    waitForCurrentImages(nextli, opt, function () {
      // MANAGE BG VIDEOS
      nextli.find('.rs-background-video-layer').each(function () {
        var _nc = jQuery(this);
        if (!_nc.hasClass("HasListener")) {
          _nc.data('bgvideo', 1);
          if (_R.manageVideoLayer) _R.manageVideoLayer(_nc, opt);
        }
        if (_nc.find('.rs-fullvideo-cover').length == 0) _nc.append('<div class="rs-fullvideo-cover"></div>');
      });
      swapSlideProgress(defimg, container);
    });
  };

  //////////////////////////////////////
  //	-	PROGRESS SWAP THE SLIDES -  //
  /////////////////////////////////////
  var swapSlideProgress = function swapSlideProgress(defimg, container) {
    var actli = container.find('.active-revslide'),
      nextli = container.find('.processing-revslide'),
      actsh = actli.find('.slotholder'),
      nextsh = nextli.find('.slotholder'),
      opt = container[0].opt;
    opt.tonpause = false;
    opt.cd = 0;
    clearTimeout(opt.loadertimer);
    if (opt.loader !== undefined) opt.loader.css({
      display: "none"
    });
    // if ( opt.sliderType =="carousel") _R.prepareCarousel(opt);
    _R.setSize(opt);
    _R.slotSize(defimg, opt);
    if (_R.manageNavigation) _R.manageNavigation(opt);
    var data = {};
    data.nextslide = nextli;
    data.currentslide = actli;
    container.trigger('revolution.slide.onbeforeswap', data);
    opt.transition = 1;
    opt.videoplaying = false;

    // IF DELAY HAS BEEN SET VIA THE SLIDE, WE TAKE THE NEW VALUE, OTHER WAY THE OLD ONE...
    if (nextli.data('delay') != undefined) {
      opt.cd = 0;
      opt.delay = nextli.data('delay');
    } else opt.delay = opt.origcd;
    if (nextli.data('ssop') == "true" || nextli.data('ssop') === true) opt.ssop = true;else opt.ssop = false;
    container.trigger('nulltimer');
    var ai = actli.index(),
      ni = nextli.index();
    opt.sdir = ni < ai ? 1 : 0;
    if (opt.sc_indicator == "arrow") {
      if (ai == 0 && ni == opt.slideamount - 1) opt.sdir = 1;
      if (ai == opt.slideamount - 1 && ni == 0) opt.sdir = 0;
    }
    opt.lsdir = opt.lsdir === undefined ? opt.sdir : opt.lsdir;
    opt.dirc = opt.lsdir != opt.sdir;
    opt.lsdir = opt.sdir;

    ///////////////////////////
    //	REMOVE THE CAPTIONS //
    ///////////////////////////

    if (actli.index() != nextli.index() && opt.firststart != 1) if (_R.removeTheCaptions) _R.removeTheCaptions(actli, opt);
    if (!nextli.hasClass('rs-pause-timer-once') && !nextli.hasClass("rs-pause-timer-always")) container.trigger('restarttimer');else opt.videoplaying = true;
    nextli.removeClass("rs-pause-timer-once");
    var nexttrans,
      direction = -1,
      mtl;
    opt.currentSlide = actli.index();
    opt.nextSlide = nextli.index();

    // SELECT SLIDER TYPE
    if (opt.sliderType == "carousel") {
      mtl = new punchgs.TimelineLite();
      _R.prepareCarousel(opt, mtl);
      letItFree(container, nextsh, actsh, nextli, actli, mtl);
      opt.transition = 0;
      opt.firststart = 0;
    } else {
      mtl = new punchgs.TimelineLite({
        onComplete: function onComplete() {
          letItFree(container, nextsh, actsh, nextli, actli, mtl);
        }
      });
      mtl.add(punchgs.TweenLite.set(nextsh.find('.defaultimg'), {
        opacity: 0
      }));
      mtl.pause();
      if (_R.animateTheCaptions) _R.animateTheCaptions({
        slide: nextli,
        opt: opt,
        preset: true
      });
      if (opt.firststart == 1) {
        punchgs.TweenLite.set(actli, {
          autoAlpha: 0
        });
        opt.firststart = 0;
      }
      punchgs.TweenLite.set(actli, {
        zIndex: 18
      });
      punchgs.TweenLite.set(nextli, {
        autoAlpha: 0,
        zIndex: 20
      });

      // IF THERE IS AN OTHER FIRST SLIDE START HAS BEED SELECTED
      if (nextli.data('differentissplayed') == 'prepared') {
        nextli.data('differentissplayed', 'done');
        nextli.data('transition', nextli.data('savedtransition'));
        nextli.data('slotamount', nextli.data('savedslotamount'));
        nextli.data('masterspeed', nextli.data('savedmasterspeed'));
      }
      if (nextli.data('fstransition') != undefined && nextli.data('differentissplayed') != "done") {
        nextli.data('savedtransition', nextli.data('transition'));
        nextli.data('savedslotamount', nextli.data('slotamount'));
        nextli.data('savedmasterspeed', nextli.data('masterspeed'));
        nextli.data('transition', nextli.data('fstransition'));
        nextli.data('slotamount', nextli.data('fsslotamount'));
        nextli.data('masterspeed', nextli.data('fsmasterspeed'));
        nextli.data('differentissplayed', 'prepared');
      }
      if (nextli.data('transition') == undefined) nextli.data('transition', "random");
      nexttrans = 0;
      var transtext = nextli.data('transition') !== undefined ? nextli.data('transition').split(",") : "fade",
        curtransid = nextli.data('nexttransid') == undefined ? -1 : nextli.data('nexttransid');
      if (nextli.data('randomtransition') == "on") curtransid = Math.round(Math.random() * transtext.length);else curtransid = curtransid + 1;
      if (curtransid == transtext.length) curtransid = 0;
      nextli.data('nexttransid', curtransid);
      var comingtransition = transtext[curtransid];
      if (opt.ie) {
        if (comingtransition == "boxfade") comingtransition = "boxslide";
        if (comingtransition == "slotfade-vertical") comingtransition = "slotzoom-vertical";
        if (comingtransition == "slotfade-horizontal") comingtransition = "slotzoom-horizontal";
      }
      if (_R.isIE(8)) comingtransition = 11;
      mtl = _R.animateSlide(nexttrans, comingtransition, container, nextli, actli, nextsh, actsh, mtl);
      if (nextsh.data('kenburns') == "on") {
        _R.startKenBurn(nextsh, opt);
        mtl.add(punchgs.TweenLite.set(nextsh, {
          autoAlpha: 0
        }));
      }

      // SHOW FIRST LI && ANIMATE THE CAPTIONS
      mtl.pause();
    }
    if (_R.scrollHandling) {
      _R.scrollHandling(opt, true);
      mtl.eventCallback("onUpdate", function () {
        _R.scrollHandling(opt, true);
      });
    }

    // START PARALLAX IF NEEDED		
    if (opt.parallax.type != "off" && opt.parallax.firstgo == undefined && _R.scrollHandling) {
      opt.parallax.firstgo = true;
      opt.lastscrolltop = -999;
      _R.scrollHandling(opt, true);
      setTimeout(function () {
        opt.lastscrolltop = -999;
        _R.scrollHandling(opt, true);
      }, 210);
      setTimeout(function () {
        opt.lastscrolltop = -999;
        _R.scrollHandling(opt, true);
      }, 420);
    }
    if (_R.animateTheCaptions) {
      if (opt.sliderType === "carousel" && opt.carousel.showLayersAllTime === "on") {
        // SHOW ALL LAYERS IN ALL SLIDES FOR CAROUSEL				
        jQuery.each(opt.li, function (i) {
          if (!opt.carousel.allLayersStarted) {
            if (opt.li[i] === nextli) _R.animateTheCaptions({
              slide: jQuery(opt.li[i]),
              maintimeline: mtl,
              opt: opt,
              startslideanimat: 0
            });else _R.animateTheCaptions({
              slide: jQuery(opt.li[i]),
              opt: opt,
              startslideanimat: 0
            });
          } else _R.animateTheCaptions({
            slide: jQuery(opt.li[i]),
            opt: opt,
            recall: true
          });
        });
        opt.carousel.allLayersStarted = true;
      } else {
        _R.animateTheCaptions({
          slide: nextli,
          opt: opt,
          maintimeline: mtl,
          startslideanimat: 0
        });
      }
    } else {
      if (mtl != undefined) setTimeout(function () {
        mtl.resume();
      }, 30);
    }
    punchgs.TweenLite.to(nextli, 0.001, {
      autoAlpha: 1
    });

    //if (_R.callStaticDDDParallax) _R.callStaticDDDParallax(container,opt,nextli);	
  };

  //////////////////////////////////////////
  //	GIVE FREE THE TRANSITIOSN			//
  //////////////////////////////////////////
  var letItFree = function letItFree(container, nextsh, actsh, nextli, actli, mtl) {
    var opt = container[0].opt;
    if (opt.sliderType === "carousel") {
      // CAROUSEL SLIDER
    } else {
      opt.removePrepare = 0;
      punchgs.TweenLite.to(nextsh.find('.defaultimg'), 0.001, {
        zIndex: 20,
        autoAlpha: 1,
        onComplete: function onComplete() {
          removeSlots(container, opt, nextli, 1);
        }
      });
      if (nextli.index() != actli.index()) {
        punchgs.TweenLite.to(actli, 0.2, {
          zIndex: 18,
          autoAlpha: 0,
          onComplete: function onComplete() {
            removeSlots(container, opt, actli, 1);
          }
        });
      }
    }
    container.find('.active-revslide').removeClass("active-revslide");
    container.find('.processing-revslide').removeClass("processing-revslide").addClass("active-revslide");
    opt.act = nextli.index();
    opt.c.attr('data-slideactive', container.find('.active-revslide').data('index'));
    if (opt.parallax.type == "scroll" || opt.parallax.type == "scroll+mouse" || opt.parallax.type == "mouse+scroll") {
      opt.lastscrolltop = -999;
      _R.scrollHandling(opt);
    }
    mtl.clear();
    if (actsh.data('kbtl') != undefined) {
      actsh.data('kbtl').reverse();
      actsh.data('kbtl').timeScale(25);
    }
    if (nextsh.data('kenburns') == "on") {
      if (nextsh.data('kbtl') != undefined) {
        nextsh.data('kbtl').timeScale(1);
        nextsh.data('kbtl').play();
      } else _R.startKenBurn(nextsh, opt);
    }
    nextli.find('.rs-background-video-layer').each(function (i) {
      if (_ISM && (!_ANDROID || !opt.fallbacks.allowHTML5AutoPlayOnAndroid)) return false;
      var _nc = jQuery(this);
      _R.resetVideo(_nc, opt);
      punchgs.TweenLite.fromTo(_nc, 1, {
        autoAlpha: 0
      }, {
        autoAlpha: 1,
        ease: punchgs.Power3.easeInOut,
        delay: 0.2,
        onComplete: function onComplete() {
          if (_R.animcompleted) _R.animcompleted(_nc, opt);
        }
      });
    });
    actli.find('.rs-background-video-layer').each(function (i) {
      if (_ISM) return false;
      var _nc = jQuery(this);
      if (_R.stopVideo) {
        _R.resetVideo(_nc, opt);
        _R.stopVideo(_nc, opt);
      }
      punchgs.TweenLite.to(_nc, 1, {
        autoAlpha: 0,
        ease: punchgs.Power3.easeInOut,
        delay: 0.2
      });
    });
    // TIRGGER THE ON CHANGE EVENTS
    var data = {};
    data.slideIndex = nextli.index() + 1;
    data.slideLIIndex = nextli.index();
    data.slide = nextli;
    data.currentslide = nextli;
    data.prevslide = actli;
    opt.last_shown_slide = actli.index();
    container.trigger('revolution.slide.onchange', data);
    container.trigger('revolution.slide.onafterswap', data);
    opt.duringslidechange = false;
    var lastSlideLoop = actli.data('slide_on_focus_amount'),
      lastSlideMaxLoop = actli.data('hideafterloop');
    if (lastSlideMaxLoop != 0 && lastSlideMaxLoop <= lastSlideLoop) opt.c.revremoveslide(actli.index());
    var _actli = opt.nextSlide === -1 || opt.nextSlide === undefined ? 0 : opt.nextSlide;
    if (opt.rowzones != undefined) _actli = _actli > opt.rowzones.length ? opt.rowzones.length : _actli;
    if (opt.rowzones != undefined && opt.rowzones.length > 0 && opt.rowzones[_actli] != undefined && _actli >= 0 && _actli <= opt.rowzones.length && opt.rowzones[_actli].length > 0) _R.setSize(opt);
    //if (_R.callStaticDDDParallax) _R.callStaticDDDParallax(container,opt,nextli);		
  };

  ///////////////////////////
  //	REMOVE THE LISTENERS //
  ///////////////////////////
  var removeAllListeners = function removeAllListeners(container, opt) {
    container.children().each(function () {
      try {
        jQuery(this).die('click');
      } catch (e) {}
      try {
        jQuery(this).die('mouseenter');
      } catch (e) {}
      try {
        jQuery(this).die('mouseleave');
      } catch (e) {}
      try {
        jQuery(this).unbind('hover');
      } catch (e) {}
    });
    try {
      container.die('click', 'mouseenter', 'mouseleave');
    } catch (e) {}
    clearInterval(opt.cdint);
    container = null;
  };

  ///////////////////////////
  //	-	countDown	-	//
  /////////////////////////
  var countDown = function countDown(container, opt) {
    opt.cd = 0;
    opt.loop = 0;
    if (opt.stopAfterLoops != undefined && opt.stopAfterLoops > -1) opt.looptogo = opt.stopAfterLoops;else opt.looptogo = 9999999;
    if (opt.stopAtSlide != undefined && opt.stopAtSlide > -1) opt.lastslidetoshow = opt.stopAtSlide;else opt.lastslidetoshow = 999;
    opt.stopLoop = "off";
    if (opt.looptogo == 0) opt.stopLoop = "on";
    var bt = container.find('.tp-bannertimer');

    // LISTENERS  //container.trigger('stoptimer');
    container.on('stoptimer', function () {
      var bt = jQuery(this).find('.tp-bannertimer');
      bt[0].tween.pause();
      if (opt.disableProgressBar == "on") bt.css({
        visibility: "hidden"
      });
      opt.sliderstatus = "paused";
      _R.unToggleState(opt.slidertoggledby);
    });
    container.on('starttimer', function () {
      if (opt.forcepause_viatoggle) return;
      if (opt.conthover != 1 && opt.videoplaying != true && opt.width > opt.hideSliderAtLimit && opt.tonpause != true && opt.overnav != true && opt.ssop != true) if (opt.noloopanymore !== 1 && (!opt.viewPort.enable || opt.inviewport)) {
        bt.css({
          visibility: "visible"
        });
        bt[0].tween.resume();
        opt.sliderstatus = "playing";
      }
      if (opt.disableProgressBar == "on") bt.css({
        visibility: "hidden"
      });
      _R.toggleState(opt.slidertoggledby);
    });
    container.on('restarttimer', function () {
      if (opt.forcepause_viatoggle) return;
      var bt = jQuery(this).find('.tp-bannertimer');
      if (opt.mouseoncontainer && opt.navigation.onHoverStop == "on" && !_ISM) return false;
      if (opt.noloopanymore !== 1 && (!opt.viewPort.enable || opt.inviewport) && opt.ssop != true) {
        bt.css({
          visibility: "visible"
        });
        bt[0].tween.kill();
        bt[0].tween = punchgs.TweenLite.fromTo(bt, opt.delay / 1000, {
          width: "0%"
        }, {
          force3D: "auto",
          width: "100%",
          ease: punchgs.Linear.easeNone,
          onComplete: countDownNext,
          delay: 1
        });
        opt.sliderstatus = "playing";
      }
      if (opt.disableProgressBar == "on") bt.css({
        visibility: "hidden"
      });
      _R.toggleState(opt.slidertoggledby);
    });
    container.on('nulltimer', function () {
      bt[0].tween.kill();
      bt[0].tween = punchgs.TweenLite.fromTo(bt, opt.delay / 1000, {
        width: "0%"
      }, {
        force3D: "auto",
        width: "100%",
        ease: punchgs.Linear.easeNone,
        onComplete: countDownNext,
        delay: 1
      });
      bt[0].tween.pause(0);
      if (opt.disableProgressBar == "on") bt.css({
        visibility: "hidden"
      });
      opt.sliderstatus = "paused";
    });
    var countDownNext = function countDownNext() {
      if (jQuery('body').find(container).length == 0) {
        removeAllListeners(container, opt);
        clearInterval(opt.cdint);
      }
      container.trigger("revolution.slide.slideatend");

      //STATE OF API CHANGED -> MOVE TO AIP BETTER
      if (container.data('conthover-changed') == 1) {
        opt.conthover = container.data('conthover');
        container.data('conthover-changed', 0);
      }
      _R.callingNewSlide(container, 1);
    };
    bt[0].tween = punchgs.TweenLite.fromTo(bt, opt.delay / 1000, {
      width: "0%"
    }, {
      force3D: "auto",
      width: "100%",
      ease: punchgs.Linear.easeNone,
      onComplete: countDownNext,
      delay: 1
    });
    if (opt.slideamount > 1 && !(opt.stopAfterLoops == 0 && opt.stopAtSlide == 1)) {
      container.trigger("starttimer");
    } else {
      opt.noloopanymore = 1;
      container.trigger("nulltimer");
    }
    container.on('tp-mouseenter', function () {
      opt.mouseoncontainer = true;
      if (opt.navigation.onHoverStop == "on" && !_ISM) {
        container.trigger('stoptimer');
        container.trigger('revolution.slide.onpause');
      }
    });
    container.on('tp-mouseleft', function () {
      opt.mouseoncontainer = false;
      if (container.data('conthover') != 1 && opt.navigation.onHoverStop == "on" && (opt.viewPort.enable == true && opt.inviewport || opt.viewPort.enable == false)) {
        container.trigger('revolution.slide.onresume');
        container.trigger('starttimer');
      }
    });
  };

  //////////////////////////////////////////////////////
  // * Revolution Slider - NEEDFULL FUNCTIONS
  // * @version: 1.0 (30.10.2014)
  // * @author ThemePunch
  //////////////////////////////////////////////////////

  // 	-	BLUR / FOXUS FUNCTIONS ON BROWSER 

  var vis = function () {
    var stateKey,
      eventKey,
      keys = {
        hidden: "visibilitychange",
        webkitHidden: "webkitvisibilitychange",
        mozHidden: "mozvisibilitychange",
        msHidden: "msvisibilitychange"
      };
    for (stateKey in keys) {
      if (stateKey in document) {
        eventKey = keys[stateKey];
        break;
      }
    }
    return function (c) {
      if (c) document.addEventListener(eventKey, c, {
        pasive: true
      });
      return !document[stateKey];
    };
  }();
  var restartOnFocus = function restartOnFocus(opt) {
    if (opt == undefined || opt.c == undefined) return false;
    if (opt.windowfocused != true) {
      opt.windowfocused = true;
      punchgs.TweenLite.delayedCall(0.3, function () {
        // TAB IS ACTIVE, WE CAN START ANY PART OF THE SLIDER        
        if (opt.fallbacks.nextSlideOnWindowFocus == "on") opt.c.revnext();
        opt.c.revredraw();
        if (opt.lastsliderstatus == "playing") opt.c.revresume();
      });
    }
  };
  var lastStatBlur = function lastStatBlur(opt) {
    opt.windowfocused = false;
    opt.lastsliderstatus = opt.sliderstatus;
    opt.c.revpause();
    var actsh = opt.c.find('.active-revslide .slotholder'),
      nextsh = opt.c.find('.processing-revslide .slotholder');
    if (nextsh.data('kenburns') == "on") _R.stopKenBurn(nextsh, opt);
    if (actsh.data('kenburns') == "on") _R.stopKenBurn(actsh, opt);
  };
  var tabBlurringCheck = function tabBlurringCheck(container, opt) {
    var notIE = document.documentMode === undefined,
      isChromium = window.chrome;
    if (notIE && !isChromium) {
      // checks for Firefox and other  NON IE Chrome versions
      jQuery(window).on("focusin", function () {
        restartOnFocus(opt);
      }).on("focusout", function () {
        lastStatBlur(opt);
      });
    } else {
      // checks for IE and Chromium versions
      if (window.addEventListener) {
        // bind focus event
        window.addEventListener("focus", function (event) {
          restartOnFocus(opt);
        }, {
          capture: false,
          passive: true
        });
        // bind blur event
        window.addEventListener("blur", function (event) {
          lastStatBlur(opt);
        }, {
          capture: false,
          passive: true
        });
      } else {
        // bind focus event
        window.attachEvent("focus", function (event) {
          restartOnFocus(opt);
        });
        // bind focus event
        window.attachEvent("blur", function (event) {
          lastStatBlur(opt);
        });
      }
    }
  };

  // 	-	GET THE URL PARAMETER //

  var getUrlVars = function getUrlVars(hashdivider) {
    var vars = [],
      hash;
    var hashes = window.location.href.slice(window.location.href.indexOf(hashdivider) + 1).split('_');
    for (var i = 0; i < hashes.length; i++) {
      hashes[i] = hashes[i].replace('%3D', "=");
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  };
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v1.11.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:19Z
 */

(function( global, factory ) {

	if (  true && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper window is present,
		// execute the factory and get jQuery
		// For environments that do not inherently posses a window with a document
		// (such as Node.js), expose a jQuery-making factory as module.exports
		// This accentuates the need for the creation of a real window
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//

var deletedIds = [];

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "1.11.3",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: deletedIds.sort,
	splice: deletedIds.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call(obj, "constructor") &&
				!hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( support.ownLast ) {
			for ( key in obj ) {
				return hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1, IE<9
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( indexOf ) {
				return indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {
				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		while ( j < len ) {
			first[ i++ ] = second[ j++ ];
		}

		// Support: IE<9
		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
		if ( len !== len ) {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: function() {
		return +( new Date() );
	},

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];
	nodeType = context.nodeType;

	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	if ( !seed && documentIsHTML ) {

		// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
		if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType !== 1 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;
	parent = doc.defaultView;

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Support tests
	---------------------------------------------------------------------- */
	documentIsHTML = !isXML( doc );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\f]' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter(function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.unique( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );

					} else if ( !(--remaining) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( !document.body ) {
			return setTimeout( jQuery.ready );
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * Clean-up method for dom ready events
 */
function detach() {
	if ( document.addEventListener ) {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );

	} else {
		document.detachEvent( "onreadystatechange", completed );
		window.detachEvent( "onload", completed );
	}
}

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	// readyState === "complete" is good enough for us to call the dom ready in oldIE
	if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
		detach();
		jQuery.ready();
	}
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );

		// If IE event model is used
		} else {
			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch(e) {}

			if ( top && top.doScroll ) {
				(function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {
							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll("left");
						} catch(e) {
							return setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				})();
			}
		}
	}
	return readyList.promise( obj );
};


var strundefined = typeof undefined;



// Support: IE<9
// Iteration over object's inherited properties before its own
var i;
for ( i in jQuery( support ) ) {
	break;
}
support.ownLast = i !== "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
jQuery(function() {
	// Minified: var a,b,c,d
	var val, div, body, container;

	body = document.getElementsByTagName( "body" )[ 0 ];
	if ( !body || !body.style ) {
		// Return for frameset docs that don't have a body
		return;
	}

	// Setup
	div = document.createElement( "div" );
	container = document.createElement( "div" );
	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== strundefined ) {
		// Support: IE<8
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if ( val ) {
			// Prevent IE 6 from affecting layout for positioned elements #11048
			// Prevent IE from shrinking the body in IE 7 mode #12869
			// Support: IE<8
			body.style.zoom = 1;
		}
	}

	body.removeChild( container );
});




(function() {
	var div = document.createElement( "div" );

	// Execute the test only if not already executed in another module.
	if (support.deleteExpando == null) {
		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch( e ) {
			support.deleteExpando = false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
})();


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( elem ) {
	var noData = jQuery.noData[ (elem.nodeName + " ").toLowerCase() ],
		nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9 ?
		false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute("classid") === noData;
};


var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}

function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {
		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {
		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split(" ");
					}
				}
			} else {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[i] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, null
	} else {
		cache[ id ] = null;
	}
}

jQuery.extend({
	cache: {},

	// The following elements (space-suffixed to avoid Object.prototype collisions)
	// throw uncatchable exceptions if you attempt to set expando properties
	noData: {
		"applet ": true,
		"embed ": true,
		// ...but Flash objects (which have this classid) *can* handle expandos
		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[0],
			attrs = elem && elem.attributes;

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each(function() {
				jQuery.data( this, key, value );
			}) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray(data) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};



// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		length = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < length; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			length ? fn( elems[0], key ) : emptyGet;
};
var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	// Minified: var a,b,c
	var input = document.createElement( "input" ),
		div = document.createElement( "div" ),
		fragment = document.createDocumentFragment();

	// Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone =
		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";
	input.checked = true;
	fragment.appendChild( input );
	support.appendChecked = input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild( div );
	div.innerHTML = "<input type='radio' checked='checked' name='t'/>";

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Opera does not clone events (and typeof div.attachEvent === undefined).
	// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
	support.noCloneEvent = true;
	if ( div.attachEvent ) {
		div.attachEvent( "onclick", function() {
			support.noCloneEvent = false;
		});

		div.cloneNode( true ).click();
	}

	// Execute the test only if not already executed in another module.
	if (support.deleteExpando == null) {
		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch( e ) {
			support.deleteExpando = false;
		}
	}
})();


(function() {
	var i, eventName,
		div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event)
	for ( i in { submit: true, change: true, focusin: true }) {
		eventName = "on" + i;

		if ( !(support[ i + "Bubbles" ] = eventName in window) ) {
			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute( eventName, "t" );
			support[ i + "Bubbles" ] = div.attributes[ eventName ].expando === false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
})();


var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {
						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, ret, handleObj, matched, j,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var sel, handleObj, matches, i,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Chrome 23+, Safari?
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {
						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event, to properly expose it to GC
			if ( typeof elem[ name ] === strundefined ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;
		if ( !e ) {
			return;
		}
		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// IE submit delegation
if ( !support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
				if ( form && !jQuery._data( form, "submitBubbles" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submit_bubble = true;
					});
					jQuery._data( form, "submitBubbles", true );
				}
			});
			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {
			// If form was submitted by the user, bubble the event up the tree
			if ( event._submit_bubble ) {
				delete event._submit_bubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event, true );
				}
			}
		},

		teardown: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._just_changed = true;
						}
					});
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._just_changed && !event.isTrigger ) {
							this._just_changed = false;
						}
						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event, true );
					});
				}
				return false;
			}
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event, true );
						}
					});
					jQuery._data( elem, "changeBubbles", true );
				}
			});
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					jQuery._removeData( doc, fix );
				} else {
					jQuery._data( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var type, origFn;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
	},
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== strundefined ? context.querySelectorAll( tag || "*" ) :
			undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}

// Used in buildFragment, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (jQuery.find.attr( elem, "type" ) !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[1];
	} else {
		elem.removeAttribute("type");
	}
	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; (elem = elems[i]) != null; i++ ) {
		jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
	}
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( (!support.noCloneEvent || !support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; (node = srcElements[i]) != null; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					fixCloneNodeIssues( node, destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; (node = srcElements[i]) != null; i++ ) {
					cloneCopyEvent( node, destElements[i] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,

			// Ensure a safe fragment
			safe = createSafeFragment( context ),

			nodes = [],
			i = 0;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = (rtagName.exec( elem ) || [ "", "" ])[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;

					tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Manually add leading whitespace removed by IE
					if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;

						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
								elem.removeChild( tbody );
							}
						}
					}

					jQuery.merge( nodes, tmp.childNodes );

					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";

					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}

					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}

		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		tmp = null;

		return safe;
	},

	cleanData: function( elems, /* internal */ acceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			deleteExpando = support.deleteExpando,
			special = jQuery.event.special;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( acceptData || jQuery.acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// IE does not allow us to delete expando properties from nodes,
						// nor does it have a removeAttribute function on Document nodes;
						// we must handle all of these cases
						if ( deleteExpando ) {
							delete elem[ internalKey ];

						} else if ( typeof elem.removeAttribute !== strundefined ) {
							elem.removeAttribute( internalKey );

						} else {
							elem[ internalKey ] = null;
						}

						deletedIds.push( id );
					}
				}
			}
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {

			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ (rtagName.exec( value ) || [ "", "" ])[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for (; i < l; i++ ) {
						// Remove element nodes and prevent memory leaks
						elem = this[i] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch(e) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[0],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[0] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[i], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
							}
						}
					}
				}

				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone(true);
			jQuery( insert[i] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optmization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}


(function() {
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function() {
		if ( shrinkWrapBlocksVal != null ) {
			return shrinkWrapBlocksVal;
		}

		// Will be changed later if needed.
		shrinkWrapBlocksVal = false;

		// Minified: var b,c,d
		var div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {
			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		// Support: IE6
		// Check if elements with layout shrink-wrap their children
		if ( typeof div.style.zoom !== strundefined ) {
			// Reset CSS: box-sizing; display; margin; border
			div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;" +
				"padding:1px;width:1px;zoom:1";
			div.appendChild( document.createElement( "div" ) ).style.width = "5px";
			shrinkWrapBlocksVal = div.offsetWidth !== 3;
		}

		body.removeChild( container );

		return shrinkWrapBlocksVal;
	};

})();
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );



var getStyles, curCSS,
	rposition = /^(top|right|bottom|left)$/;

if ( window.getComputedStyle ) {
	getStyles = function( elem ) {
		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		if ( elem.ownerDocument.defaultView.opener ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		}

		return window.getComputedStyle( elem, null );
	};

	curCSS = function( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "";
	};
} else if ( document.documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, computed ) {
		var left, rs, rsLeft, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed[ name ] : undefined;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are proportional to the parent element instead
		// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "" || "auto";
	};
}




function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			var condition = conditionFn();

			if ( condition == null ) {
				// The test was not ready at this point; screw the hook this time
				// but check again when needed next time.
				return;
			}

			if ( condition ) {
				// Hook not needed (or it's not possible to use it due to missing dependency),
				// remove it.
				// Since there are no other hooks for marginRight, remove the whole object.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.

			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	// Minified: var b,c,d,e,f,g, h,i
	var div, style, a, pixelPositionVal, boxSizingReliableVal,
		reliableHiddenOffsetsVal, reliableMarginRightVal;

	// Setup
	div = document.createElement( "div" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName( "a" )[ 0 ];
	style = a && a.style;

	// Finish early in limited (non-browser) environments
	if ( !style ) {
		return;
	}

	style.cssText = "float:left;opacity:.5";

	// Support: IE<9
	// Make sure that element opacity exists (as opposed to filter)
	support.opacity = style.opacity === "0.5";

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!style.cssFloat;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" ||
		style.WebkitBoxSizing === "";

	jQuery.extend(support, {
		reliableHiddenOffsets: function() {
			if ( reliableHiddenOffsetsVal == null ) {
				computeStyleTests();
			}
			return reliableHiddenOffsetsVal;
		},

		boxSizingReliable: function() {
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},

		pixelPosition: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelPositionVal;
		},

		// Support: Android 2.3
		reliableMarginRight: function() {
			if ( reliableMarginRightVal == null ) {
				computeStyleTests();
			}
			return reliableMarginRightVal;
		}
	});

	function computeStyleTests() {
		// Minified: var b,c,d,j
		var div, body, container, contents;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {
			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";

		// Support: IE<9
		// Assume reasonable values in the absence of getComputedStyle
		pixelPositionVal = boxSizingReliableVal = false;
		reliableMarginRightVal = true;

		// Check for getComputedStyle so that this code is not run in IE<9.
		if ( window.getComputedStyle ) {
			pixelPositionVal = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
			boxSizingReliableVal =
				( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

			// Support: Android 2.3
			// Div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			contents = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			contents.style.cssText = div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			reliableMarginRightVal =
				!parseFloat( ( window.getComputedStyle( contents, null ) || {} ).marginRight );

			div.removeChild( contents );
		}

		// Support: IE8
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
		contents = div.getElementsByTagName( "td" );
		contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
		reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
		if ( reliableHiddenOffsetsVal ) {
			contents[ 0 ].style.display = "";
			contents[ 1 ].style.display = "none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
		}

		body.removeChild( container );
	}

})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
		ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/,

	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];


// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt(0).toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = jQuery._data( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display && display !== "none" || !hidden ) {
				jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && ( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

				// Support: IE
				// Swallow errors from 'invalid' CSS values (#5509)
				try {
					style[ name ] = value;
				} catch(e) {}
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

if ( !support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
				computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// Work around by temporarily setting element display to inline-block
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*
					// Use a string for doubling factor so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur()
				// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";
			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !support.shrinkWrapBlocks() ) {
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {
	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	// Minified: var a,b,c,d,e
	var input, div, select, a, opt;

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName("a")[ 0 ];

	// First batch of tests.
	select = document.createElement("select");
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName("input")[ 0 ];

	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute("style") );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute("href") === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement("form").enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
})();


var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) >= 0 ) {

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try {
							option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6
							option.scrollHeight;
						}

					} else {
						option.selected = false;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}

				return options;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			// Support: Webkit
			// "" is returned instead of "on" if a value isn't specified
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;
					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hook for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		// Use defaultChecked and defaultSelected for oldIE
		} else {
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}

		return name;
	}
};

// Retrieve booleans specially
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {

	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = getSetInput && getSetAttribute || !ruseDefault.test( name ) ?
		function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		} :
		function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			}
		};
});

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {
				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {
				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					(ret = elem.ownerDocument.createAttribute( name ))
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) {
				return value;
			}
		}
	};

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) {
			var ret;
			if ( !isXML ) {
				return (ret = elem.getAttributeNode( name )) && ret.value !== "" ?
					ret.value :
					null;
			}
		};

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) {
				return ret.value;
			}
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	});
}

if ( !support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case senstitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						-1;
			}
		}
	}
});

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) {
	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each([ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	});
}

// Support: Safari, IE9+
// mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});

// IE6/7 call enctype encoding
if ( !support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			i = 0,
			len = this.length,
			proceed = typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			i = 0,
			len = this.length,
			proceed = arguments.length === 0 || typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) {
	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) {
		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	}

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) {
			depth = 0;
		}

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) {
			return token;
		}

		// Commas must not follow "[", "{", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "{"): depth += true - false (increment)
		// array/object close ("]" or "}"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	}) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		if ( window.DOMParser ) { // Standard
			tmp = new DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} else { // IE
			xml = new ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}
	} catch( e ) {
		xml = undefined;
	}
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	// Document location
	ajaxLocParts,
	ajaxLocation,

	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Cross-domain detection vars
			parts,
			// Loop variable
			i,
			// URL without anti-cache param
			cacheURL,
			// Response headers as string
			responseHeadersString,
			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,
			// Response headers
			responseHeaders,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
		(!support.reliableHiddenOffsets() &&
			((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
};

jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;
			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
	// Support: IE6+
	function() {

		// XHR cannot access local files, always use ActiveX for that case
		return !this.isLocal &&

			// Support: IE7-8
			// oldIE XHR does not support non-RFC2616 methods (#13240)
			// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
			// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
			// Although this check for six methods instead of eight
			// since IE also does not support "trace" and "connect"
			/^(get|post|head|put|delete|options)$/i.test( this.type ) &&

			createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	});
}

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport(function( options ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open( options.type, options.url, options.async, options.username, options.password );

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) {
							xhr.setRequestHeader( i, headers[ i ] + "" );
						}
					}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) {
								if ( xhr.readyState !== 4 ) {
									xhr.abort();
								}
							} else {
								responses = {};
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) {
									responses.text = xhr.responseText;
								}

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try {
									statusText = xhr.statusText;
								} catch( e ) {
									// We normalize with Webkit giving an empty statusText
									statusText = "";
								}

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) {
									status = responses.text ? 200 : 404;
								// IE - #1450: sometimes returns 1223 when it should be 204
								} else if ( status === 1223 ) {
									status = 204;
								}
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						}
					};

					if ( !options.async ) {
						// if we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {
						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						setTimeout( callback );
					} else {
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	});
}

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch( e ) {}
}




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery("head")[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement("script");

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, response, type,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};





var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			jQuery.inArray("auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? (prop in win) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));


/***/ }),

/***/ "./rev.js":
/*!****************!*\
  !*** ./rev.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_revolution_jquery_themepunch_enablelog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/revolution/jquery.themepunch.enablelog.js */ "./js/revolution/jquery.themepunch.enablelog.js");
/* harmony import */ var _js_revolution_jquery_themepunch_enablelog_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_revolution_jquery_themepunch_enablelog_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_revolution_jquery_themepunch_revolution_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/revolution/jquery.themepunch.revolution.min.js */ "./js/revolution/jquery.themepunch.revolution.min.js");
/* harmony import */ var _js_revolution_jquery_themepunch_revolution_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_revolution_jquery_themepunch_revolution_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_revolution_extensions_revolution_extension_actions_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/revolution/extensions/revolution.extension.actions.min.js */ "./js/revolution/extensions/revolution.extension.actions.min.js");
/* harmony import */ var _js_revolution_extensions_revolution_extension_actions_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_revolution_extensions_revolution_extension_actions_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_revolution_extensions_revolution_extension_kenburn_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/revolution/extensions/revolution.extension.kenburn.min.js */ "./js/revolution/extensions/revolution.extension.kenburn.min.js");
/* harmony import */ var _js_revolution_extensions_revolution_extension_kenburn_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_revolution_extensions_revolution_extension_kenburn_min_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_revolution_extensions_revolution_extension_layeranimation_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/revolution/extensions/revolution.extension.layeranimation.min.js */ "./js/revolution/extensions/revolution.extension.layeranimation.min.js");
/* harmony import */ var _js_revolution_extensions_revolution_extension_layeranimation_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_revolution_extensions_revolution_extension_layeranimation_min_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_revolution_extensions_revolution_extension_parallax_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/revolution/extensions/revolution.extension.parallax.min.js */ "./js/revolution/extensions/revolution.extension.parallax.min.js");
/* harmony import */ var _js_revolution_extensions_revolution_extension_parallax_min_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_revolution_extensions_revolution_extension_parallax_min_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_revolution_extensions_revolution_extension_slideanims_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/revolution/extensions/revolution.extension.slideanims.min.js */ "./js/revolution/extensions/revolution.extension.slideanims.min.js");
/* harmony import */ var _js_revolution_extensions_revolution_extension_slideanims_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_revolution_extensions_revolution_extension_slideanims_min_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _js_revolution_extensions_revolution_extension_navigation_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/revolution/extensions/revolution.extension.navigation.min.js */ "./js/revolution/extensions/revolution.extension.navigation.min.js");
/* harmony import */ var _js_revolution_extensions_revolution_extension_navigation_min_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_revolution_extensions_revolution_extension_navigation_min_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_revolution_layers_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./css/revolution/layers.css */ "./css/revolution/layers.css");
/* harmony import */ var _css_revolution_layers_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_revolution_layers_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_revolution_navigation_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./css/revolution/navigation.css */ "./css/revolution/navigation.css");
/* harmony import */ var _css_revolution_navigation_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_revolution_navigation_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_revolution_settings_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./css/revolution/settings.css */ "./css/revolution/settings.css");
/* harmony import */ var _css_revolution_settings_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_revolution_settings_css__WEBPACK_IMPORTED_MODULE_11__);

window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;

// js









// css




/***/ })

/******/ });
//# sourceMappingURL=main.js.map