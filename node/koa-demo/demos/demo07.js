const Koa = require('koa')
const app = new Koa()
const logger = (ctx, next) => {  // 中间键
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next()
}
const main = (ctx) => {
  ctx.response.body = 'Hello World'
}

app.use(logger)
app.use(main)

app.listen(3000, () => {
  console.log('服务器已启动');
})
