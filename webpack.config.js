var path = require('path');
var webpack = require('webpack');
// var yaml = require('js-yaml');

// scss独立编译需要
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCss = new ExtractTextPlugin("css/[name].css");

// 输出
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 第三方插件不打包


module.exports = {
    entry: {
        jsname:'./src/js/index.js',
        cssname:'./src/scss/index.js'
    },
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'js/[name].js'
    },
    devtool: "#source-map",
    module: {
		loaders: [
            // es6 - 编译
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel',
                exclude: /(bower_components)/
            },
            // eslint - 代码校验
            {
                test: /(\.jsx|\.js)$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            },
            // scss - 编译
            {
                test: /\.scss$/,
                // loader: new ExtractTextPlugin.extract("style", 'css!sass')
                loader: extractCss.extract("style", 'css!sass')
            }
        ]
	},
    // devServer: { inline: true },
    resolve:{
        extensions: ['', '.js']
    },
    plugins: [
        // 压缩代码
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),

        // new ExtractTextPlugin("css/[name].css")
        extractCss,

        // 全局入口
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest.json'),
        }),

        // 输出html
        new HtmlWebpackPlugin({
            title: 'uba-boilerplate-repo',
            filename: 'view/index.html',
            hash: true,
            // 排除默些入口文件
            excludeChunks: ['cssname'],


        }),
    ],
    // 定义为全局变量，入口文件不进行编译，但根据：https://zhuanlan.zhihu.com/p/21748318
    // 无法解决插件引入的变量问题,需要通过DllReferencePlugin彻底解决
    // externals: {
    //     'react': 'window.React'
    // }
}
