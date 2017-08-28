var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const webpack = require('webpack'); // 访问内置的插件
const autoprefixer = require('autoprefixer');

module.exports = {
  entry : {
    index: './src/index.js',
    navAnimation: './src/components/index/navAnimation.js',
    app: './src/app.js',
    login: './src/login.js',
    register: './src/register.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename:'js/[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, './node_modules'),
        include: path.resolve(__dirname, './src'),
        query: {
          presets: ['latest']
        } // 在package.json中指定babel就不需要在这里在处理
      },{
        test: /\.html$/,
        loader: 'html-loader'
      },{
        test: /\.tpl$/,
        loader: 'ejs-loader'
      },{
        test: /\.css$/,
        loader: 'style-loader!css-loader?importLoaders=1!postcss-loader'
      },{
        test: /\.styl/,
        loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
      },{
        test: /\.(png|jpg|gif|mp4|JPG)$/i,
        loaders: [
          'file-loader?limit:20000&name=assets/[name]-[hash:5].[ext]',
          'image-webpack-loader'
        ]
      },{
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&name=src/[name].[ext]&mimetype=application/font-woff'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&name=src/[name].[ext]&mimetype=application/octet-stream'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=src/[name].[ext]'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&name=src/[name].[ext]&mimetype=image/svg+xml"
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new htmlWebpackPlugin({
      filename : 'index.html',
      template: 'index.html',
      inject: 'body',
      title: 'ImageMark首页面',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      chunks: ['index', 'navAnimation']
    }),
    new htmlWebpackPlugin({
      filename : 'app.html',
      template: 'index.html',
      inject: 'body',
      title: 'ImageMark首页面',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      chunks: ['app']
    }),
    new htmlWebpackPlugin({
      filename : 'login.html',
      template: 'index.html',
      inject: 'body',
      title: 'ImageMark登录',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      chunks: ['login']
    }),
    new htmlWebpackPlugin({
      filename : 'register.html',
      template: 'index.html',
      inject: 'body',
      title: 'ImageMark登录',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      chunks: ['register']
    })
  ]
}