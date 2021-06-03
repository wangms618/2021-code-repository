const Koa = require('koa')
const app = new Koa()

// 异步中间键
const main = async function (ctx){
  ctx.response.type = 'html'
  
}

app.listen(3000)