/**
 * 前端自动化任务配置项
 */
module.exports = {
  assets: {
    src: './src',
    dist: './dist'
  },
  js: {
    src: './src/js',
    dist: './dist/js',
    webpack: './dist/js/controller',
    doc: {
      src: './src/js/',
      conf: 'jsdoc.conf.json'
    },
    common: {
      src: 'vendor/js/*.js',
      dist: 'dist/js/common.js'
    }
  },
  css: {
    src: './src/css',
    dist: './dist/css'
  },
  test: {
    src: './test'
  },
  eslint: {
    src: './src/js'
  }
}
