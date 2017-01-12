# uba-boilerplate-repo

### Dev-开发环境

| Tool    | 安装说明 | 备注                       |
| ------- | ---- | ------------------------ |
| node    | 全局安装 | 建议6.0LTS                 |
| npm     | 全局安装 | 不低于v3.0                  |
| git     | 全局安装 |                          |
| babel   | 全局安装 | npm install -g babel-cli |
| webpack | 全局安装 |                          |
| gulp    | 全局安装 |                          |
| eslint  | 全局安装 |                          |
| jsdoc   | 全局安装 |                          |



### Dir-文件目录

```
src //源码
dist //编译输出
test //测试文件
.gitignore //git仓库ignore文件
.babelrc //eslint默认配置
```



### Build

```
# 编译 + eslint测试
npm run build

# 生成api文档
jsdoc path/*.js

# eslint测试
eslint path/*.js
```




* #### 浏览器非编译测试(*Alpha*)

> 目前仅提供基本测试，待完善

通过引入`system.js`，可直接使用`commonjs`标准，`require`其他依赖包。

demo见`test/browser`



* webpack相关依赖

```
# babel - 代码编译
npm install --save-dev babel-loader babel-core babel-preset-env

# eslint - 代码校验
npm install --save-dev eslint-loader

# sass
npm install --save-dev extract-text-webpack-plugin sass-loader css-loader style-loader node-sass
```

> 吐槽：导出css文件大费周折
>
> 依赖：sass-loader依赖node-sass,需要单独下载css-loader,style-loader
>
> 需要插件extract-text-webpack-plugin不同导出机制
>
> 插件大驼峰小驼峰乱用
>
> 所有入口均需要js文件：不灵活，scss文件也需要在js文件中require
>
> loader一串，写法恶心
>
> 需要记忆点太多：outpath路径为输出base路径，其他路径均是在此路径下延展
>
> 优点：内置压缩



*参考*

* [babel-RYF](http://www.ruanyifeng.com/blog/2016/01/babel.html)
* [Env preset](https://babeljs.io/docs/plugins/preset-env/#how-it-works-determine-the-lowest-common-denominator-of-plugins-to-be-included-in-the-preset)
* [eslint官网](http://eslint.org/docs/user-guide/getting-started)
* [详解 ESLint 规则，规范你的代码](http://www.tuicool.com/articles/rIFBfey)