var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/index.jsx'),
    // 将 第三方依赖 单独打包
    vendor: [
      'react', 
      'react-dom', 
      'react-redux', 
      'react-router', 
      'redux', 
      'es6-promise', 
      'whatwg-fetch'
    ]
  },
  output: {
    path: __dirname + "/build",
    filename: "[name].[chunkhash:8].js",
    publicPath: '/'
  },

  resolve:{
      extensions:['.js','.jsx']
  },

  module: {
        rules: [
            {  
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/, 
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                } 
            },
            { 
                test: /\.(less|css)?$/, 
                exclude: /(node_modules|bower_components)/, 
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                ] 
            },
            { 
                test: /\.(jpeg|gif|png|jpg|bmp)$/i,
                exclude: /(node_modules|bower_components)/, 
                loader:'file-loader',
                options: {
                  name: 'img/[name].[ext]'
                }
            },  
            { 
                test: /\.(woff|woff2|svg|ttf|eot)($|\?)/i, 
                exclude: /(node_modules|bower_components)/, 
                loader:'file-loader',
                options: {
                  name: 'fonts/[name].[ext]'
                }
            } 
        ]
    },
    
  plugins: [
    // webpack 内置的 banner-plugin
    new webpack.BannerPlugin("Copyright by wangfupeng1988@github.com."),

    // html 模板插件
    new HtmlWebpackPlugin({
        template: __dirname + '/app/index.tmpl.html'
    }),

    // 定义为生产环境，编译 React 时压缩到最小
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),

    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurenceOrderPlugin(),
    
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          //supresses warnings, usually from module minification
          warnings: false
        }
    }),
    
    // 分离CSS和JS文件
    new ExtractTextPlugin('[name].[chunkhash:8].css'), 
    
    // 提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].[chunkhash:8].js'
    }),

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })
  ]
}