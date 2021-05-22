// app.js
App({
  onLaunch() {
    wx.db = {}
    // 异步获取当前设备信息
    let info = wx.getSystemInfoSync()
    wx.db.statusBarHeight = info.statusBarHeight
    if (info.platform === 'android') {
      wx.db.navBarHeight = 48
    } else {
      wx.db.navBarHeight = 44
    }
  },
  globalData: {
    userInfo: null,
    login_token: '',
    userId: 0,
    navId:1
  }
})
