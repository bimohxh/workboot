/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	module.exports = __webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * 比赛模块
	 * @class
	 */

	var Game = function () {
	  /**
	   * 构建函数
	   * @param  {string} x [description]
	   * @param  {string} y [description]
	   * @return {void}   [description]
	   */

	  function Game(x, y) {
	    _classCallCheck(this, Game);

	    this.x = x;
	    this.y = y;
	  }
	  /**
	   * * 转换字符串
	   * @return {string} 组合语句
	   */


	  _createClass(Game, [{
	    key: 'toString',
	    value: function toString() {
	      return '(' + this.x + ', ' + this.y + ')';
	    }

	    /**
	     * 开始比赛
	     * @return {string} 提示比赛开始了
	     */

	  }, {
	    key: 'play',
	    value: function play() {
	      return "start";
	    }

	    /**
	     * 计算两个数字的乘积
	     * @param  {number} num1 第一个数字
	     * @param  {number} num2 第二个数字
	     * @return {number}      计算结果
	     */

	  }, {
	    key: 'study',
	    value: function study(num1, num2) {
	      return num1 * num2;
	    }
	  }]);

	  return Game;
	}();

	exports.Game = Game;

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Game = __webpack_require__(2);

	var game = new _Game.Game();
	var hello = function hello(a, b) {
	  return a + b;
	};
	console.log(game.play());

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Game = __webpack_require__(2);

	var game = new _Game.Game();
	var hello = function hello(a, b) {
	  return a + b;
	};
	console.log("I am here");

/***/ }
/******/ ]);