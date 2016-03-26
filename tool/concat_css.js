"use strict";

const exec = require('child_process').exec,
      Helper = require('./helper'),
      path = require('path'),
      PC = require("../project.config"),
      DistFolder = PC.css.dist + '/controller/';



let cmds = Helper.walkDirectory(DistFolder).reduce((last, item)=> {
  // './dist/css/controller/mem'
  let _controller = path.basename(item)
  let cmd = 'cat ' + DistFolder + _controller + '/*.css >> ' + DistFolder + _controller + '.min.css'
  last.push(cmd)
  return last
},[]).join( '&& ')

exec(cmds, ()=> {
})
