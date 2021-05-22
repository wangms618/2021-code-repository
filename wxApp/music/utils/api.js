const app = getApp() // 获取小程序全局的变量
const GET = 'GET'
const POST = "POST"

const baseUrl = 'http://localhost:3000'

function request(method, url, data) {
  return new Promise((reslove, reject) => {
    let header = {
      'content-type': 'application/json',
      'cookie': app.globalData.login_token
    }
    wx.request({
      url: baseUrl + url,
      method: method,
      data: method === POST ? JSON.stringify(data) : data,
      header: header,
      success(res) {
        if (res.data.code == 200) {
          reslove(res)
        } else {
          let msg = res.data.msg
          wx.showToast({
            title: msg,
            icon: 'none',
            mask: true,
            duration: 2000
          })
        }
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

const API = {
  login: (data) => request(GET, '/login/cellphone', data), // 手机登录
  getUserDetail:(data)=>request(GET,'/user/detail',data) //登录之后获取用户信息
}

module.exports = {
  API: API
}