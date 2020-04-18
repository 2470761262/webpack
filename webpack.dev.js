const merge = require('webpack-merge')
const { resolve } = require('path')
const baseWebpack = require('./webpack.base.js')

process.env.NODE_ENV = 'development'
const dev = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3000/'
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    progress: true,
    port: 3000,
    compress: true,
    hot: true
  }
}
module.exports = merge(baseWebpack, dev)
