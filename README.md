# uba-boilerplate-repo

### Dev-开发环境

| Tool    | 安装说明 | 备注                       |
| ------- | ---- | ------------------------ |
| node    | 全局安装 | 建议6.0LTS                 |
| npm     | 全局安装 | 不低于v3.0                  |
| git     | 全局安装 |                          |
| babel   | 全局安装 | npm install -g babel-cli |
| webpack | 全局安装 | npm install -g web pack  |
| gulp    | 全局安装 | npm install -g gulp      |
| eslint  | 全局安装 | npm install -g eslint    |



### Dir-文件目录





#### Babel编译配置

初始化配置，见`.babelrc`





### Test测试

* #### ESLint代码检测


```
eslint src/*.js
```






* #### 浏览器非编译测试(*Alpha*)

> 目前仅提供基本测试，待完善

通过引入`system.js`，可直接使用`commonjs`标准，`require`其他依赖包。

demo见`test/browser`



*参考*

* [babel-RYF](http://www.ruanyifeng.com/blog/2016/01/babel.html)
* [Env preset](https://babeljs.io/docs/plugins/preset-env/#how-it-works-determine-the-lowest-common-denominator-of-plugins-to-be-included-in-the-preset)
* [eslint官网](http://eslint.org/docs/user-guide/getting-started)
* [详解 ESLint 规则，规范你的代码](http://www.tuicool.com/articles/rIFBfey)