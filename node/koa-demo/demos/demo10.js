const Koa = require('koa')
const compose = require('koa-compose')
const app = new Koa()
const logger = (ctx, next) => { // 中间件
  // ctx.response.body = 'hello world'
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  // next()使main函数生效，否则main函数执行失败
  next()
}

const main = (ctx) => {
  ctx.response.body = 'hello world'
}
// koa-compose可以一次性引用多个中间件
const middlewares = compose([logger, main])
app.use(middlewares)
app.listen(3000, () => {
  console.log('服务已启动');
})
