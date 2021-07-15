// const Koa = require('koa')
// const route = require('koa-route')
// const app = new Koa()

// function main(ctx) {
//   ctx.body = 'Hello World'
// }

// app.use(route.get('/hello',main))

// app.listen(3000, () => {
//   console.log('项目启动中');
// })


const express = require('express')
const app = express()

app.get('/hello', function (req, res) {
  res.send('你好')
})
app.listen(3000, () => {
  console.log('服务启动');
})