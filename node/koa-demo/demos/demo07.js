const Koa = require('koa')
const app = new Koa()
// const route = require('koa-route')
const logger = (ctx,next) => { // 中间件
  // ctx.response.body = 'hello world'
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  // next()使main函数生效，否则main函数执行失败
  next()
}

const main = (ctx) => {
  ctx.response.body = 'hello world'
}

app.use(logger)
app.use(main)






// const a = (ctx) => {
//   ctx.body = 'a页面'
// }
// app.use(route.get('/a', a))
// app.use((ctx) => {
//   ctx.body = '你好'
// })

app.listen(3000, () => {
  console.log('服务已启动');
})
