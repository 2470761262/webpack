const Config = require('webpack-chain');
const fs = require('fs');

const config = new Config();


config.module
  .rule('sorry')
  .test(/\.js$/)
  .pre()
  .include
  .add('src')
  .end()
// // Even create named uses (loaders)
  .use('eslint')
  .loader('eslint-loader')
  .options({
    rules: {
      semi: 'off'
    }
  });
config.module.rule('sorry').use('jsx').loader('jsx-loader');

const writerStream = fs.createWriteStream('chain.js');
writerStream.write(`module.exports = ${config.toString()};\n`, 'UTF8');
writerStream.end();
