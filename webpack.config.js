/**
 * Created by bubble on 17-7-17.
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: { // 打包入口文件
        path: path.join(__dirname, 'src/js/entry.js')
    },
    output: {　// 打包过后的文件
        path: path.join(__dirname, "config"),
        filename: 'index.js'
    },
    watch: true, // 开启监察模式
    module: {
        loaders: [
            { test: /\.css$/,
              loader: "style-loader!css-loader"
            },{
              test: /\.(js|jsx)$/,
              loader: "eslint-loader",
              exclude: /node_modules/
            },{
              test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            }, {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            }, {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'file-loader'
            }, {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    ]
};