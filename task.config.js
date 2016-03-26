const PC = require('./project.config');

/**
 * 任务配置 命令 + 提示信息
 */
const tasks = {
  'clear': {
    cmd: 'rm -rf ' + PC.assets.dist,
    tip: '清空目标文件夹'
  },
  'eslint': {
    cmd: 'eslint ' + PC.eslint.src,
    tip: '语法检测'
  },
  'test': {
    cmd: 'ava ' + PC.test.src,
    tip: '单元测试'
  },
  'doc': {
    cmd:  'jsdoc ' + PC.js.doc.src + ' -c ' + PC.js.doc.conf,
    tip: '文档生成'
  },
  'babel': {
    cmd: 'babel ' + PC.js.src + ' -d ' + PC.js.dist,
    tip: 'bable ES6转换ES5'
  },
  'webpack': {
    cmd: 'webpack',
    tip: 'webpack 打包JS'
  },
  'minify:js': {
    cmd: 'node tool/minify_js.js',
    tip: 'JS 压缩'
  },
  'common:js': {
    cmd: 'uglifyjs ' + PC.js.common.src + ' -o ' + PC.js.common.dist + ' --compress',
    tip: '公共 JS 打包压缩'
  },
  'sass': {
    cmd: 'node-sass  --output-style compressed ' + PC.css.src + ' -o ' + PC.css.dist,
    tip: 'Sass预处理'
  },
  'concat:css': {
    cmd: 'node tool/concat_css.js',
    tip: 'CSS 合并'
  },
  'common:css': {
    cmd: 'cat vendor/css/*  | cleancss -o  dist/css/common.css --s0',
    tip: '公共 CSS 打包压缩'
  }
  
}


/**
 * 任务组合
 */
const group = {
  "css": ['sass', 'concat:css'],
  "js": ['babel', 'webpack', 'minify:js'],
  "test": ['eslint', "test"]
}

module.exports = {
  tasks: tasks,
  group: group
}
