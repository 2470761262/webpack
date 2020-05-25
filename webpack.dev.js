const merge = require('webpack-merge');
const { resolve } = require('path');
const webpack = require('webpack');
const baseWebpack = require('./webpack.base.js');

process.env.NODE_ENV = 'development';
const dev = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3000/'
  },
  devtool: '#source-map',
  plugins: [
    // 打印更新的模块路径
    new webpack.NamedModulesPlugin(),
    // 热更新插件
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.isNow': 'true'
    })
  ],
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    //  progress: true,
    port: 3000,
    compress: true,
    // ot: true,
    hotOnly: true // hot会刷新页面，hotOnly不会如果失败输出控制台
  //  quiet: true
  }
};
module.exports = merge(baseWebpack, dev);
