/**
 * 动物类
 * @class
 * @classdec 生产一个动物的类型
 */
var Animal = {
  /**
   * 吃东西
   * @param  {string} food 要吃的食物
   * @return {string}      组合成要说的话
   */
  eat: function (food) {
    return 'I want to eat the ' + food
  },
  
  /**
   * 动物要哭的
   * @return {void} 无返回
   */
  cry: function () {
    console.log('It is crying')
  }
}
