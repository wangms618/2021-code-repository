// miniprogram/pages/mine/myLetter/myLetter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    letterInfo:'',
    userName:'',
    userPicUrl:'',
  },
  toDetail(e){
    console.log(e);
    wx.navigateTo({ // 将文章id和时间传到详情页
      url: `/pages/letterDetail/letterDetail?id=${e.currentTarget.dataset.id}&createTime=${e.currentTarget.dataset.ctime}`,
    })
  },
  toDelete(e){
    // console.log(e.currentTarget.dataset.id);
    wx.showLoading({
      title: '删除中',
    })
    wx.cloud.callFunction({
      name:'deleteLetter',
      data:{
        delete_id:e.currentTarget.dataset.id
      },
      success(res){
        wx.hideLoading()
        wx.showToast({
          title: '删除成功',
          icon:'success',
          duration:2000
        })
        // 自动触发下拉刷新
        wx.startPullDownRefresh()
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name:'getMyWrite'
    }).then(res=>{
      // console.log(res.result.data[0].writeTitle);
      let Info = res.result.data
      console.log(Info);
      Info.reverse()
      this.setData({
        letterInfo:Info,
        userName:res.result.data[0].localUserInfo.nickName,
        userPicUrl:res.result.data[0].localUserInfo.avatarUrl,
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
    wx.cloud.callFunction({
      name:'getMyWrite'
    }).then(res=>{
      // console.log(res.result.data[0].writeTitle);
      let Info = res.result.data
      console.log(Info);
      Info.reverse()
      this.setData({
        letterInfo:Info
      })
      wx.stopPullDownRefresh()
    })
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