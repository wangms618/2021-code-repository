// miniprogram/pages/letterDetail/letterDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details:[],
    createTime:'',
    reply:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    wx.cloud.database().collection('note-group').doc(options.id).get().then(res=>{
      // console.log(res.data);
      this.setData({
        details:res.data,
        createTime:options.createTime
      })
    }).then(res=>{
      // console.log(res);
    })
    wx.cloud.database().collection('note-TCC').where({
      content_id:options.id
    })
    .get()
    .then(res=>{
      console.log(res.data);
      this.setData({
        reply:res.data,
      })
    })
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