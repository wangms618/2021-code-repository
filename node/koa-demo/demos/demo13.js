const Koa = require('koa')
const app = new Koa()
// 报错500
const main = ctx => {
  throw (500)
}

app.use(main)
app.listen(3000, () => {
  console.log('项目启动中');
})