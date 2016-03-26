## Workroot
A configurable web project package tool!

## Why?
I just want to use a tool to package my web project,and this tool must be freely configurable.

I don't want use grunt or Gulp,which just bring many extra npm packages.The npm script is very nice,and use in linux chanel,we can complete all things whithout any extra things.
All you need to do is just configure the task.

So,I write this tool for my work.This tool is for developing..

## How to use 
1、download tis repo
```bash
git clone git@github.com:awesomes-cn/workboot.git
```

2、run `npm install` to install all dependencies.

3、run following command to build the project:
```bash
npm run build
```

or you can add a argument to specify which task you want to execute separately,not all tasks. 

you can pass an argument behind `build` whith a space just like:
```bash
npm run build js
```
the `js` js the task argument.

## Project structure
This is for MVC project,so the files structure is like:
```markup
-src
  |-css
    |-controller
      |-mem
      |-home

  |-js
    |-controller
      |-mem
      |-home
    |-module
-dist
  |-css
    |-controller
      |-mem
      |-home
      |-mem.min.css
      |-home.min.css
    |-common.min.css

  |-js
    |-controller
      |-mem
      |-home
      |-mem.min.js
      |-home.min.js      
    |-module    
    common.min.js
-vendor
 |-css
 |-js
```


In every view,we can include the js and css file,for example,in `mem` controller master page:
```html
<!DOCTYPE html>
<html>
<head>
  <title></title>
  <script type="text/javascript" src= "/dist/js/common.min.js"></script>
  <script type="text/javascript" src= "/dist/js/controller/mem.js"></script>
  
  <link rel="stylesheet" type="text/css" href="/dist/css/common.min.css">
  <link rel="stylesheet" type="text/css" href="/dist/css/controller/mem.css">
</head>
<body>
   ....
</body>
</html>
```
Our intention is that,we write the css and js as our preference,and every view(page) include the controller js and css,along with the common js and css(in `vendor` folder) which will be cached in the browser.

So all pages just request the common js and css onece,and all views in same controller also request the js and css onece.


## Task configuration
#### All tasks
You can find the task configuration in `./task.config.js`,this looks like:
```js
const tasks = {
  ...
  'eslint': {
    cmd: 'eslint ' + PC.eslint.src,
    tip: '语法检测'
  },
  'test': {
    cmd: 'ava ' + PC.test.src,
    tip: '单元测试'
  }
  ...
}
```
- `eslint`: task name.
    - `cmd`: command what will be excuted.
    - `tip`: the tip message that will show before and after the command be excuted.

#### Task group
As mentioned above,we can specify a task argument in the command. For example,we just wan to package js, but in fact,we need excute maybe 3 tasks.

So we need combine some tasks which do the similar work into a gorup:
```js
const group = {
  "css": ['sass', 'concat:css'],
  "js": ['babel', 'webpack', 'minify:js'],
  "test": ['eslint', "test"]
}
```

Feel free to add your own task and task group.

## Package file path  config
You can specify your files path,both src and dist: 

```js
...
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
  }
...
```





## What npm package we use 
- [ava](https://github.com/sindresorhus/ava) for test.
- [eslint](https://github.com/eslint/eslint) for identify js code patterns 
- [jsdoc](https://github.com/jsdoc3/jsdoc) for generate API documentation
- [babel](https://github.com/babel/babel) for transform the ES6 code to ES5
- [webpack](https://github.com/webpack/webpack) for package the js
- [uglifyjs](https://github.com/mishoo/UglifyJS) for minify js files
- [node-sass](https://github.com/sass/node-sass) for compile sass files
- [clean-css](https://github.com/jakubpawlowicz/clean-css) for minify css files

For more details,just view the `devDependencies` config part in  `./package.json`.
