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
/******/ 	__webpack_require__.p = "http://localhost:3000/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/test.less":
/*!***************************!*\
  !*** ./src/css/test.less ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/test1.css":
/*!***************************!*\
  !*** ./src/css/test1.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _test = __webpack_require__(/*! ./test */ "./src/js/test.js");

var _test2 = _interopRequireDefault(_test);

var _tstest = __webpack_require__(/*! ./tstest.ts */ "./src/js/tstest.ts");

var _tstest2 = _interopRequireDefault(_tstest);

__webpack_require__(/*! ../css/test1.css */ "./src/css/test1.css");

__webpack_require__(/*! ../css/test.less */ "./src/css/test.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: your name
 * @Date: 2020-04-20 10:01:41
 * @LastEditTime: 2020-04-20 11:15:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack\src\js\index.js
 */
console.log(_test2.default, _test.age);

var av = function av() {
  var a = 55;
  a += 5;
  return a;
};
av();

var cc = {
  gs: [{
    a: 1,
    b1: 2,
    c: 5
  }]
};
_tstest2.default.typeHellow('hello wolrd');
console.log(cc, 3646434);
// test.say()

/***/ }),

/***/ "./src/js/test.js":
/*!************************!*\
  !*** ./src/js/test.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var age = '年年18';
exports.age = age;
exports.default = {
  say: function say() {
    console.log('hello,', this.name);
  },

  name: '郑然'
};

/***/ }),

/***/ "./src/js/tstest.ts":
/*!**************************!*\
  !*** ./src/js/tstest.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:24)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> function typeHellow(name:string){\n|     console.log(name);\n| }");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map