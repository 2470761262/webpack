const merge = require('webpack-merge');
const { resolve } = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpack = require('./webpack.base.js');
// html模板
// entries函数
function entries() {
  const pageJs = resolve(__dirname, 'src/pagejs/');
  const jsAll = glob.sync(`${pageJs}/*.{js,jsx}`);
  const entryJson = {};
  jsAll.forEach((item) => {
    const filename = item.substring(item.lastIndexOf('/') + 1, item.lastIndexOf('.'));
    entryJson[filename] = item;
  });
  return entryJson;
}
const entriesMap = entries();
function addPagePlugins() {
  //
  const result = [];
  Object.keys(entriesMap).forEach((item) => {
    result.push(new HtmlWebpackPlugin({
      filename: `view/${item}.html`, // 指定生成的HTML文件名
      // template: './src/view/index.html', // 指定模板路径
      minifyCss: true, // 压缩页面内的css
      // minifyJS: true, // 压缩页面内的js
      removeAttrbuteQuotes: true, // 删除注释
      chunks: [item]
    }));
  });
  return result;
}
process.env.NODE_ENV = 'production';
const dev = {
  entry: entriesMap,
  mode: 'production',
  output: {
    filename: 'js/[name].js',
    path: resolve(__dirname, 'dist')
  },
  plugins: addPagePlugins(this)
};
module.exports = merge(baseWebpack, dev);
