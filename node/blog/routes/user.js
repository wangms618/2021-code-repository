const UserModel = require('../models/user')
const bcrypt = require('bcryptjs')

module.exports = {
  //   注册
  async signup(ctx, next) {
    if (ctx.method === 'GET') {
      await ctx.render('signup', {
        title: '用户注册'
      })
      return
    }

    //生成加密规则
    const salt = bcrypt.genSaltSync(10); //加密十次
    let {
      name,
      email,
      password
    } = ctx.request.body //把前端传给后端的数据都拿到
    password = await bcrypt.hash(password, salt) //通过hash方法对password重复加密十次

    const user = {
      name,
      email,
      password,
    }
    //存储到数据库
    const result = await UserModel.create(user) //将数据填充到 model/user.js里面
    ctx.body = result
  },
  // 登录
  async signin(ctx, next) {
    if (ctx.method === 'GET') {
      await ctx.render('signin', {
        title: '登录'
      })
      return
    } else {
      const {
        name,
        password
      } = ctx.request.body
      const user = await UserModel.findOne({
        name
      })
      if (user && await bcrypt.compare(password, user.password)) {
        ctx.session.user = {
          _id: user._id,
          name: user.name,
          isAdmin: user.isAdmin,
          email: user.email
        }
        ctx.redirect('/')
      } else {
        ctx.body = '账户或密码错误'
      }
    }
  }
}
