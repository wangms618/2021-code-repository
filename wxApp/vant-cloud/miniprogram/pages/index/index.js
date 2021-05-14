// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newGroupModel: false,
    groupName: ''
  },

  showNewGroupModel() {
    this.setData({
      newGroupModel: true
    })
  },
  closeDialog() {
    this.setData({
      newGroupModel: false
    })
  },

  onGroupNameChange(e) { // input - chang
    // console.log(e.detail);
    this.setData({
      groupName: e.detail
    })
  },

  createGroup() { // 确认创建
    // 把用户输入的群组名传给后端，由后端保存到服务器里面
    console.log(this.data.groupName);

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