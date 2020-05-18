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
    new webpack.DefinePlugin({
      'process.env.isNow': 'true'
    })
  ],
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    progress: true,
    port: 3000,
    compress: true,
    hot: true,
    quiet: true
  }
};
module.exports = merge(baseWebpack, dev);
