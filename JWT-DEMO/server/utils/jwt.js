// 靠jsonwebtoken生成token
const jwt = require('jsonwebtoken')

function sign(option) {
  return jwt.sign(option, '618', {
    exp: 60
  })
}

let verify = (isAdmin) => (ctx, next) => {
  let jwtToken = ctx.req.headers.authorization
  if (jwtToken) {
    jwt.verify(jwtToken, '618', function (err, decoded) {
      if (err) {
        ctx.body = {
          status: 401,
          message: 'token失效'
        }
      } else {
        if (isAdmin) {
          let {
            admin
          } = decoded
          if (admin) {
            next()
          } else {
            ctx.body = {
              status: 401,
              message: '你不是管理员，权限不够！'
            }
          }
        } else {
          ctx.body = {
            status: 401,
            message: '请提供token'
          }
        }
      }
    })
  }
}

module.exports = {
  sign,
  verify
}