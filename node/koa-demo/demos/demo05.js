const Koa = require('koa')
const app = new Koa()

const main = ctx => {
  // console.log(ctx.request.path);
  if (ctx.request.path == '/') {
    ctx.response.body = '首页'
  } else if (ctx.request.path == '/a') {
    ctx.response.body = 'a页面'
  } else if (ctx.request.path == '/b') {
    ctx.response.body = 'b页面'
  } else {
    ctx.response.body = 'c页面'
  }
}

app.use(main)
app.listen(3000)