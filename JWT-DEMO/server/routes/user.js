const router = require('koa-router')()
import jwt from '../utils/jwt'
router.post('/user/signin', async (ctx) => {
  // 接收post请求
  let user = ctx.request.body
  console.log(user);
  // 模拟数据库检验
  if (1) {
    let jwtToken = jwt.sign({
      id: '1023',
      username: ctx.request.body.username,
      admin: true
    })
    ctx.success({
      jwtToken
    })
  } else {
    ctx.error('用户名或密码错误')
  }
  ctx.body = {
    data: 'hello'
  }
})

module.exports = router