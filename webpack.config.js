/**
 * Created by bubble on 17-7-17.
 */
var path = require('path'); // 导入路径包
var webpack = require('webpack');
module.exports = {
    entry: { // 打包入口文件
        index: './src/js/entry.js',
        login: './src/js/login.js'
        // path: path.join(__dirname, ['src/js/entry.js','src/js/login.js'])
    },
    output: {　// 打包过后的文件
        path: path.join(__dirname, "config"),
        filename: '[name].js'
        // filename: 'index.js'
    },
    watch: true, // 开启监察模式
    module: {
        rules: [{
          test: /\.css$/,
          use: [
            'style-loader', {
              loader: 'css-loader',
              options: {
                // modules: true // 设置css模块化,详情参考https://github.com/css-modules/css-modules
              }
            }, {
              loader: 'postcss-loader',
              // 在这里进行配置，也可以在postcss.config.js中进行配置，详情参考https://github.com/postcss/postcss-loader
              options: {
                plugins: function() {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }
          ]
        }, {
          test: /\.styl(us)?$/,
          use: [
            'style-loader', 'css-loader', {
              loader: "postcss-loader",
              options: {
                plugins: function() {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }, 'stylus-loader'
          ]
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
        }]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    ]
};