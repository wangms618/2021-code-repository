let http = require('http')  
let EventEmitter = require('events')
let context = require('./context')
let request = require('./request')
let response = require('./response')
class Koa extends EventEmitter {
  constructor() {
    super()
    this.fn
    this.context = context
    this.request = request
    this.response = response
  }
  use(fn) {
    this.fn = fn
  }

  createContext(req,res) { // 核心，创建ctx
    const ctx = Object.create(this.context)
    const request = ctx.request = Object.create(this.request)
    const response = ctx.response = Object.create(this.response)
    // 交叉赋值
    ctx.req = request.req = response.req = req
    ctx.res = request.res = response.res = res
    request.response = response
    request.request = request
    return ctx
  }

  handleRequest(req,res) { // 创建一个处理请求的函数
    let ctx = this.createContext(req, res) // 创建ctx
    this.fn(ctx) // 调用用户给的回调，把ctx给到用户使用
    res.end(ctx.body) // ctx.body用来输出到页面
  }

  listen(...args) {
    let server = http.createServer(this.handleRequest.bind(this))
    server.listen(...args)
  }
}
module.exports = Koa