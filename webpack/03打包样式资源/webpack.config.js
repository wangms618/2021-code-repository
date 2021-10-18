const {
  resolve
} = require('path')

// commonjs
module.exports = {
  // webpack配置
  // 入口起点
  entry: './src/index.js',
  // 输出
  output: {
    // 输出文件名
    filename: 'built.js',
    // 输出路径
    // __dirname 是nodejs的变量，代表当前文件的目录的绝对路径
    path: resolve(__dirname, 'build')
  },
  // loader配置
  module: {
    rules: [
      // 详细的loader配置
      // 不同文件必须配置不同loader处理
      {
        // 匹配哪些文件
        test: /\.css$/,
        // 使用哪些loader进行处理
        use: [
          // use数组中loader执行顺序：从右到左，从下到上
          // 创建style标签，将js中的样式资源插入，添加到head中生效
          'style-loader',
          // 将css文件变成commonjs模块加载到js中，里面内容是样式字符串
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          // 从下到上
          'style-loader',
          'css-loader',
          // 将less文件编译成css文件 
          // 需要下两个 less-loader和less
          'less-loader'
        ]
      }
    ]
  },
  // plugins的配置
  plugins: [

  ],
  // 模式
  mode: 'development', // 开发模式
  // mode: 'production', // 生产模式

}