var foo = require('./foo.js');
// 测试模块化支持
foo('test');

// eslint test
// not defined variable

// 测试第三方是否会打入最终文件
// var $ = require('jquery');
// console.log($);

// 浏览器需要原生支持
const getMessage = () => "Hello World";
document.getElementById('output').innerHTML = getMessage();
