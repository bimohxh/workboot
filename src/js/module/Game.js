/**
 * 比赛模块
 * @class
 */
class Game {  
  /**
   * 构建函数
   * @param  {string} x [description]
   * @param  {string} y [description]
   * @return {void}   [description]
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }  
  /**
   * * 转换字符串
   * @return {string} 组合语句
   */
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

  /**
   * 开始比赛
   * @return {string} 提示比赛开始了
   */
  play() {
    return "start"
  }
  
  /**
   * 计算两个数字的乘积
   * @param  {number} num1 第一个数字
   * @param  {number} num2 第二个数字
   * @return {number}      计算结果
   */
  study(num1, num2){
    return num1 * num2
  }

}


export {Game}
