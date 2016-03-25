"use strict";

const exec = require('child_process').execSync,
      Helper = require('./helper'),
      path = require('path'),
      DistFolder = "./dist/js/controller",
      colors = require('colors'),
      PC = require('../project.config');




const tasks = {
  'eslint': {
    cmd: 'eslint src/js/index.js',
    tip: '语法检测'
  },
  'test': {
    cmd: 'ava',
    tip: '单元测试'
  },
  'doc': {
    cmd:  'jsdoc src/js/ -c jsdoc.conf.json',
    tip: '文档生成'
  },
  'babel': {
    cmd: 'babel src/js -d dist/js',
    tip: 'bable ES6转换ES5'
  },
  'minify:js': {
    cmd: 'node tool/minify_js.js',
    tip: 'JS 压缩'
  },
  'webpack': {
    cmd: 'webpack',
    tip: 'webpack 打包JS'
  },
  'sass': {
    cmd: 'node-sass src/css/ -o  dist/css/',
    tip: 'Sass预处理'
  }
  
}



let buildg =  ()=> {
  var start = Date.now();
  for(let key in tasks){
    console.log(('开始 [' + tasks[key].tip.green + '] ...'))
    exec(tasks[key].cmd)
    console.log(('[' + tasks[key].tip.green + '] 完成'))
  }
  console.log('打包结束，耗时 ' + timeDiff(start)+ ' 秒'.green)
}

buildg = ()=> {
  console.log(arg)
}

/*let build = ()=> {
  let cmds = [
    //'console.log("打包开始...".green)'
  ]
  for(let key in tasks){
    cmds.push([
      //'console.log("开始 [' + tasks[key].tip + '] ...".green)',
      tasks[key].cmd,
      //'console.log("[' + tasks[key].tip + '] 完成".green)'
    ].join(' && '))
  } 
  cmds = cmds.join(' && ')

  var start = Date.now();
  var cs = 'echo 开始'
  exec('echo 开始', ()=> {
    //console.log('打包结束，耗时 ' + timeDiff(start)+ ' 秒'.green)
  })
}
*/


let timeDiff = (start)=> {
  return (Date.now() - start) / 1000 
}


buildg();
