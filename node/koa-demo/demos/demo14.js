const Koa = require('koa')
const app = new Koa()
// 控制404页面样式
const main = ctx => {
  ctx.response.body = 'Page Not Found'
  ctx.response.status = 404
}

app.use(main)
app.listen(3000, () => {
  console.log('项目启动中');
})