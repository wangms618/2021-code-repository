const Koa = require('koa')
const app = new Koa()
// 控制404页面样式
const main = ctx => {
  ctx.throw(500)
}
// 注册监听错误事件
app.on('error', (error, ctx) => {
  console.error('server error', error)
})
app.use(main)
app.listen(3000, () => {
  console.log('项目启动中');
})