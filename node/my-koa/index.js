const koa = require('koa')
const app = new koa()
app.use((ctx, next) => {
  console.log(ctx.req.url);
})
app.listen(3000, () => {
  console.log('开启监听');
})

// let http = require('http')
// let server = http.createServer((req, res) => {
//   res.end('hello')
// })
// server.listen(3000)

// 去实现某个独立的功能，能被use，中间键