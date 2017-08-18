var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const webpack = require('webpack'); // 访问内置的插件
const autoprefixer = require('autoprefixer');

module.exports = {
  entry : './src/app.js',
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
        test: /\.(png|jpg|gif|svg)$/i,
        loaders: [
          'url-loader?limit:20000&name=assets/[name]-[hash:5].[ext]',
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename : 'index.html',
      template: 'index.html',
      inject: 'body',
      title: 'this is layout.html'
    }),
    new htmlWebpackPlugin({
      filename : 'login.html',
      template: 'index.html',
      inject: 'body',
      title: 'this is layout.html'
    })
  ]
}