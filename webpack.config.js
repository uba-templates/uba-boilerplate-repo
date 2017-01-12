var path = require('path');
var webpack = require('webpack');
// var yaml = require('js-yaml');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCss = new ExtractTextPlugin("css/[name].css");

module.exports = {
    entry: {
        jsname:'./src/js/index.js',
        cssname:'./src/scss/index.js'
    },
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'js/[name].js'
    },
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
    // 此处增加会报错
    sassLoader:{
        includePaths: [path.resolve(__dirname, "./src/scss/core.scss")]
    },
    resolve:{
        extensions: ['', '.js']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
        // new ExtractTextPlugin("css/[name].css")
        extractCss
    ]
}
