const Koa = require('koa')
const app = new Koa()
const path = require('path')
const serve = require('koa-static')

// 通过path模块得到绝对路径
const main = serve(path.join(__dirname))
console.log(path.join(__dirname));  // E:\lesson_sanse\node\koa-demo\demos

app.use(main)
app.listen(3000, () => {
  console.log('项目启动中');
})