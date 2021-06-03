const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')

router.prefix('/users') // 前缀 后面 get 其实在/前面加了这个前缀 例 '/' --> '/users/'

// 定义登录的接口
router.post('/userLogin', async (ctx, next) => {
  // 拿到前端给我的参数 // 去到数据库里面匹配
  let _username = ctx.request.body.username
  let _userpwd = ctx.request.body.userpwd
  // console.log(_username, _userpwd);
  // 去数据库里面匹配
  await userService.userLogin(_username, _userpwd).then(res => {
    if (res.length) {
      r = 'ok'
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username
      }
      ctx.body = {
        code: 200,
        data: result,
        mess: '登录成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '账户或密码错误'
      }
    }
  })
    .catch(err => {
      ctx.body = {
        code: '80002',
        data: err
      }
    })
})


// 定义注册的接口
router.post('/userRegister', async (ctx, next) => {
  let _username = ctx.request.body.username
  let _userpwd = ctx.request.body.userpwd
  let _nickname = ctx.request.body.nickname
  console.log(_username, _userpwd, _nickname);
  if (!_username || !_userpwd || !_nickname) {
    ctx.body = {
      code: '80001',
      mess: '输入为空'
    }
    return
  }
  // 判断当前前段传过来的username是否已经注册过
  await userService.finduser(_username).then(async res => {
    console.log(res);
    if (res.length) {
      ctx.body = {
        code: '80003',
        mess: '账号已存在'
      }
    } else {
      await userService.insertUser(_username, _userpwd, _nickname).then(res => {
        console.log(res);
        if (res.affectedRows !== 0) {
          r = 'ok'
          ctx.body = {
            code: 200,
            data: r,
            mess: '注册成功'
          }
        } else {
          r = 'error'
          ctx.body = {
            code: '80001',
            data: r,
            mess: '注册失败'
          }
        }
      })
    }
  })
})


// 根据类型查找对应文章列表
router.post('/findNoteListByType', async (ctx, next) => {
  let note_type = ctx.request.body.note_type
  console.log(note_type);
  await userService.findNoteListByType(note_type).then(res => {
    console.log(res.length);
    let r = ''
    if (res.length) {
      r = 'ok'
      ctx.body = {
        code: 200,
        data: res,
        mess: '成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80001',
        data: r,
        mess: '失败'
      }
    }
  })
})

// 根据id查找对象的文章详情
router.post('/findNoteDetailById', async (ctx, next) => {
  let id = ctx.request.body.id
  // console.log(id);
  await userService.findNoteDetailById(id).then(res => {
    // console.log(res);
    let r = ''
    if (res.length) {
      r = 'ok'
      ctx.body = {
        code: 200,
        data: res,
        mess: '成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80001',
        data: r,
        mess: '失败'
      }
    }
  })
})


// 发布笔记
router.post('/publishNote', async (ctx, next) => {
  let options = {}
  options.noteContent = ctx.request.body.noteContent
  options.noteTitle = ctx.request.body.noteTitle
  options.noteImg = ctx.request.body.noteImg
  options.note_type = ctx.request.body.note_type
  let timestamp = Date.parse(new Date());
  let n = timestamp;
  let date = new Date(n);
  options.c_time = date.toLocaleDateString()
  options.m_time = date.toLocaleDateString()
  options.useId = ctx.request.body.useId
  options.nickname = ctx.request.body.nickname
  await userService.insertNote(options).then(res => {
    // console.log(res.length)
    if (res.affectedRows) {
      r = 'ok'
      ctx.body = {
        code: 200,
        data: res,
        mess: '成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80001',
        data: r,
        mess: '失败'
      }
    }
  })
})

module.exports = router
