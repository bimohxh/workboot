'use strict';

/**
 * 比赛模块
 * @class
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
      return "开始比赛了";
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