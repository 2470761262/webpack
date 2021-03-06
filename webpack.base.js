const { resolve } = require('path');
// html模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 删除打包文件
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 提取css为单独的文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        main: './src/js/index.js',
        xx: './src/js/index.js',
        // sorry: ['./src/js/good', './src/js/hello']
    },
    output: {
        filename: 'js/[name].[hash].js',
        path: resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    './loaderDemo/demo.js',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [require('postcss-preset-env')()]
                        }
                    }
                ]
            },
            {
                test: /\.ts[x]?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: [
                    // 'babel-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            fix: true
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [require('postcss-preset-env')()]
                        }
                    },
                    'less-loader'
                ]
            },
            {
                // 处理样式文件里的图片引用
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    // 图片大小小于8kb 转换为base64
                    limit: 8 * 1024,
                    esModule: false,
                    name: 'img/[hash:10].[ext]'
                }
            },
            {
                // 处理html文件里直接引用的url文件
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'view/1ndex.html', // 指定生成的HTML文件名
            template: './src/view/index.html', // 指定模板路径
            minifyCss: true, // 压缩页面内的css
            minifyJS: true, // 压缩页面内的js
            removeAttrbuteQuotes: true // 删除注释
        }),
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'view/2ndex.html', // 指定生成的HTML文件名
            template: './src/view/index.html', // 指定模板路径
            minifyCss: true, // 压缩页面内的css
            minifyJS: true, // 压缩页面内的js
            removeAttrbuteQuotes: true // 删除注释
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: "css/[id].css"
        }),
        new OptimizeCssAssetsWebpackPlugin()
    ]
};
