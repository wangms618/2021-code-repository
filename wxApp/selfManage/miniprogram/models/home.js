// 默认抛出一个模块 创建了一个类
export default class HomeModel {
  static getUserInfo() {
    return new Promise((reslove, reject) => {
      wx.getSetting({
        fail: (err) => {
          reject(err)
        },
        success: (res) => {
          // 判断是否授权
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: result => {
                reslove(result)
              }
            })
          } else {
            reject(result)
          }
        },
      })
    })
  }
}