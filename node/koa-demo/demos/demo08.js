const Koa = require('koa')
const app = new Koa()
app.use((ctx, next) => {
  console.log(1);
})