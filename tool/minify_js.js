"use strict";

const exec = require('child_process').exec,
      Helper = require('./helper'),
      path = require('path'),
      DistFolder = "./dist/js/controller",
      colors = require('colors');

console.log("开始压缩JS文件...")

let cmds = Helper.walk(DistFolder, 1).map((item)=> {
  let _distname = path.dirname(DistFolder) + '/' + path.basename(item,'.js') + '.min.js'
  return 'uglifyjs ' + item +' -o ' + _distname + ' --compress'
}).join(" && ")

exec(cmds, ()=> {
  console.log('[JS文件压缩完毕]'.green);
})
