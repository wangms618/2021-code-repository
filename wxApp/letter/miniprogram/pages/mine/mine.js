// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:'',
  },
  gotoPage(){
    wx.navigateTo({
      url: '/pages/collection/collection',
    })
  },
  onAuthorize(e){
    // 判断用户信息
    if (e.detail.userInfo) { 
      // console.log(e.detail.userInfo);
      this.setData({
        userInfo: e.detail.userInfo  // 存储
      })
      // 本地保存首次授权得到的用户信息
      wx.setStorageSync('userInfo', e.detail.userInfo);
      let self = this
      // 查询数据库是否有对应的用户
      wx.cloud.callFunction({
        name:'getUserInfo',
        data:{
          user: self.data.userInfo
        },
        // 返回函数
        success(res){
          // 如果没有则创建
          console.log(res);
          // if(res.result===null){
          //   console.log('无此用户');
          //   wx.cloud.callFunction({
          //     name:'getUserInfo',
          //     data:{
          //       create:'500',
          //       user: self.data.userInfo
          //     }
          //   })
          // }else{
          //   console.log('有此用户');
          // }
        }
    })
  }
  },
  // 取本地信息
  initUserInfo() {
    wx.getStorage({
      key: 'userInfo',
      success: (res) => {
        // console.log(res);
        // 回调函数返回本地信息，将本地信息放入data
        this.setData({
          userInfo: res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面加载时调用函数，如果本地有信息则调用成功
    this.initUserInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})