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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_main_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__faqListToggle1_js__ = __webpack_require__(2);




/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_vendor_polyfill_nextElementSibling_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_vendor_polyfill_nextElementSibling_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__js_vendor_polyfill_nextElementSibling_js__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var FaqList1_01 = function () {
  function FaqList1_01(opts) {
    _classCallCheck(this, FaqList1_01);

    this.listSelector = opts.listSelector;
    this.iconSelector = opts.iconSelector;
    this.hiddenFaqClass = opts.hiddenFaqClass;
    this.visibleFaqClass = opts.visibleFaqClass;
    this.iconHide = opts.iconHide;
    this.iconReveal = opts.iconReveal;
  }

  // prototypes


  _createClass(FaqList1_01, [{
    key: "init",
    value: function init() {
      var list = document.querySelectorAll("." + this.listSelector);
      var listArr = Array.prototype.slice.call(list);

      var icons = document.querySelectorAll("." + this.iconSelector);
      var iconArr = Array.prototype.slice.call(icons);

      var self = this;
      listArr.forEach(function (i, index, array) {
        i.addEventListener("click", function () {
          self.toggleContent(index, array, iconArr);
        });
      });

      this.toggleAllContents(list, "none", iconArr);
    }
  }, {
    key: "toggleContent",
    value: function toggleContent(index, array, iconArr) {
      var faqContent = array[index].nextElementSibling;

      if (faqContent.style.display === "none") {
        array[index].className += this.hiddenFaqClass;
        faqContent.style.display = "block";
        iconArr[index].textContent = this.iconHide;
      } else {
        array[index].className = this.visibleFaqClass;
        faqContent.style.display = "none";
        iconArr[index].textContent = this.iconReveal;
      }
    }
  }, {
    key: "toggleAllContents",
    value: function toggleAllContents(list, display, iconArr) {
      for (var i in iconArr) {
        iconArr[i].textContent = this.iconReveal;
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _i = _step.value;

          _i.nextElementSibling.style.display = display;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return FaqList1_01;
}();

var FL1_01 = new FaqList1_01({
  listSelector: "faqList1-01_title",
  iconSelector: "faqList1-01_icon",
  visibleFaqClass: "faqList1-01_title",
  hiddenFaqClass: " fq",
  iconReveal: "+",
  iconHide: "-"
});

FL1_01.init();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// Polyfill for Internet Explorer 9+ and Safari

// Source: https://github.com/jserz/js_piece/blob/master/DOM/NonDocumentTypeChildNode/nextElementSibling/nextElementSibling.md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('nextElementSibling')) {
      return;
    }
    Object.defineProperty(item, 'nextElementSibling', {
      configurable: true,
      enumerable: true,
      get: function get() {
        var el = this;
        while (el = el.nextSibling) {
          if (el.nodeType === 1) {
            return el;
          }
        }
        return null;
      },
      set: undefined
    });
  });
})([Element.prototype, CharacterData.prototype]);

/***/ })
/******/ ]);