/*
  index.js : webpack入口文件
  1. 运行指令：
  开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
                    入口文件          出口文件          输出
  生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
  生产环境会压缩js代码
  2. 结论
  1. webpack能处理js/json，不能处理css/img等其他资源
  2. 生产环境比开发环境多一个压缩js代码
  3. 生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化
*/
import data from './data.json'
console.log(data);

function add(x, y) {
  return x + y
}
console.log(add(1, 2));