"use strict";

const exec = require('child_process').exec,
      Helper = require('./helper'),
      path = require('path'),
      PC = require("../project.config"),
      DistFolder = PC.js.webpack;

let cmds = Helper.walk(DistFolder, 1).map((item)=> {
  let _distname = path.dirname(DistFolder) + '/' + path.basename(item,'.js') + '.min.js'
  return 'uglifyjs ' + item +' -o ' + _distname + ' --compress'
}).join(" && ")

exec(cmds, ()=> {
})
