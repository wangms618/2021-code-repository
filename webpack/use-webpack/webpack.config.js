const path = require('path')
module.exports = {
  // 开发环境
  mode: 'development',
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    filename: '[name].[contenthash].js',
    // __dirname当前文件的绝对路径
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset'
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'], // import test from '@/index.js'
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
}