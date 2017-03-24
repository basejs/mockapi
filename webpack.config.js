var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'client');
var BUILD_PATH = path.resolve(ROOT_PATH, 'static');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: SRC_PATH,
  //输出的文件名 随机命名js文件
  output: {
    path: BUILD_PATH,
    filename: '[name].js',
    publicPath: "/",
  },
  module: {
    loaders: [{
      test: /\.(le|c)ss$/,
      loader: 'style!css!less'
    }, { //对大于6000字节 的图片采取base64处理
      test: /\.(png|jpg|gif)$/,
      loader: 'url?limit=6000'
    }, {
      test: /\.js$/, //js 加载器
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015'] //转换 es6编码为 es5
      }
    }, {
      test: /\.vue$/, //vue 模板加载器
      loader: 'vue-loader'
    }, ]
  },
  resolve: {},
  //添加我们的插件 会自动生成一个html文件
  plugins: [
    //根据模板插入css/js等生成最终HTML
    new HtmlWebpackPlugin({
      //favicon路径                     
      //favicon:'src/favicon.ico', 
      //需要修改入口js的文件地址
      filename: path.resolve(__dirname, 'views/index.ejs'),
      //修改的模板
      template: path.resolve(__dirname, 'views/index_tpl.ejs'),
      //允许插件修改哪些内容，包括head与body
      inject: true,
      //为静态资源生成hash值
      //hash:true,
      //压缩HTML文件
      minify: {
        //移除HTML中的注释
        removeComments: true,
        //删除空白符与换行符  
        collapseWhitespace: false
      }
    })
  ]
};