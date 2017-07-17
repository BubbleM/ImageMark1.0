/**
 * Created by bubble on 17-7-17.
 */
var path = require('path');
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
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(js|jsx)$/, loader: "eslint-loader", exclude: /node_modules/ }
        ]
    }
};