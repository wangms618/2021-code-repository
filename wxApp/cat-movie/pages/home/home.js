// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    left: 48
  },

  tapChange(e) {
    console.log(e)
    let index = e.currentTarget.dataset.index
    if (index == 1) {
      this.setData({
        left:48
      })
    } else if (index == 2) {
      this.setData({
        left:114
      })
    } else if (index == 3) {
      this.setData({
        left:180
      })
    } else {
      this.setData({
        left:246
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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