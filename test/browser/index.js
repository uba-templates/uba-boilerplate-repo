var foo = require('./foo.js');
// 测试模块化支持
foo('test');

// 浏览器需要原生支持
const getMessage = () => "Hello World";
document.getElementById('output').innerHTML = getMessage();
