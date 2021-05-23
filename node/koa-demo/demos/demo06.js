const Koa = require('koa')
const app = new Koa()
// 前段向我发送请求体里面的 method 和 url 我要显示在前段页面上
const main = ctx => {
  console.log(ctx.request.method);
  console.log(ctx.request.url);
  ctx.response.body = `${ctx.request.method} -- ${ctx.request.url}`
}
app.use(main)
app.listen(3000)