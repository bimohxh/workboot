/**
 * Create a new Man
 * @class 
 * @classdesc 一个描述人的类，用于创建后续的实例
 */
var Man =  {
  /**
   * 说话
   * @return {string} [返回]
   */
  say: function(){
    return ",hello"
  }
}

/**
 * 颜色常亮
 * @constant
 * @type {String}
 */
const RED = '#FFFFFF'


/**
 * Speak 说话
 * @param  {string} name [我的名字]
 * @return {string}      [组合成我的名字字符串]
 */
Man.speak =  function (name) {
  return 'My name is ' + name
}
  
/**
 * eat 吃法
 * @return {void} [无返回]
 */
Man.eat = function(){
  console.log("I can eat anything")
}
