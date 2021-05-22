// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    list: [],
    content: [
      {
        title: '小程序答题01',
      },
      {
        title: '小程序答题02',
      },
      {
        title: '小程序答题03',
      },
      {
        title: '小程序答题04',
      },
      {
        title: '小程序答题05',
      },
      {
        title: '小程序答题06',
      },
      {
        title: '员工活动羽毛球赛实施07',
      },
      {
        title: '员工活动羽毛球赛实施08',
      },
      {
        title: '员工活动羽毛球赛实施09',
      },
      {
        title: '员工活动羽毛球赛实施10',
      },
    ],
  },


  /**
     * 生命周期函数--监听页面显示
     */
  onShow: function () {
    var that = this;
    this.isShow = true;
    wx.onAccelerometerChange(function (e) {
      if (!that.isShow) {
        return
      }

      if (e.x > 1 && e.y > 1) {
        wx.showToast({
          title: '摇成功啦',
          icon: 'success',
          duration: 1000
        })
        let bianlian = that.data.content
        let contentlengths = bianlian.length
        let list = [];
        let random = bianlian[Math.floor(Math.random() * contentlengths)];
        list.push(random);
        that.setData({
          list: list
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.isShow = false;
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