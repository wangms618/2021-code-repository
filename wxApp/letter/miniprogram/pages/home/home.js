// pages/home/home.js
let collect = false
let thumbs = false
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      '../../images/lunbo1.png',
      '../../images/lunbo2.jpg',
      '../../images/lunbo3.png'
    ],
    imgSelect:[{
      imgUrl:'../../images/food.png',
      selectName:'美食'
    },
    {
      imgUrl:'../../images/idea.png',
      selectName:'创意',
    },
    {
      imgUrl:'../../images/fashion.png',
      selectName:'时尚',
    },
    {
      imgUrl:'../../images/travel.png',
      selectName:'旅行',
    },
    {
      imgUrl:'../../images/love.png',
      selectName:'心情'
    }
    ],
    thumbsImg:'../../images/thumbs-down.png',
    collectImg:'../../images/collect-down.png',
    comment:'../../images/comment.png',
    writeInfo:[]
  },
  // 点赞
  thumbsClick(){
    // 如果默认状态为false，则不满足条件，用第二张图片地址，点赞变亮
    this.setData({
      thumbsImg:thumbs ? "../../images/thumbs-down.png" : "../../images/thumbs-up.png"
    })
    thumbs = !thumbs
  },
  // 收藏
  collectClick(){
    this.setData({
      collectImg:collect ? "../../images/collect-down.png" : "../../images/collect-up.png"
    })
    collect = !collect
  },
  // 评论
  commentClick(){
    wx.navigateTo({
      url: '/pages/nowArticle/nowArticle',
    })
  },
  showDetail(e){
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '/pages/letterDetail/letterDetail?id='+e.currentTarget.dataset.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 从数据库取数据
    let self = this
    wx.cloud.database().collection('write-group').get({
      success:function(res){
        console.log(res.data);
        let writeInfo = self.data.writeInfo
        writeInfo = res.data
        self.setData({
          writeInfo:writeInfo
        })
      }
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