const Koa = require('koa')
const path = require('path')
const router = require('./routes/index')
const views = require('koa-views') // 处理模板引擎
const serve = require('koa-static') // 处理静态资源
const mongoose = require('mongoose')
const CONFIG = require('./config/config')
const session = require('koa-session')
const bodyParser = require('koa-bodyparser')




mongoose.connect(CONFIG.mongodb) // 连接上mongodb


const app = new Koa()
// 使用模板引擎
app.use(views(path.join(__dirname, 'views'), {
  map: {
    html: 'nunjucks'
  }
}))
// 引入静态资源
app.use(serve(
  path.join(__dirname, 'public')
))
// 操作session会话
app.keys = ['somethings']
app.use(session({
  key: CONFIG.session.key,
  maxAge:CONFIG.session.maxAge
},app))

app.use(bodyParser())
router(app)

app.listen(3000, () => {
  console.log('服务在3000已启动');
})
