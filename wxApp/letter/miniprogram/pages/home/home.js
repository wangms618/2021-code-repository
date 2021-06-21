// pages/home/home.js
let collect = false
let thumbs = false
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
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
    writeInfo:[],
    reply:'',
    userInfo:'',
    id:''
  },
  // 回复框弹出
  onClosePopup(e){
    console.log(e.currentTarget.dataset.id);
    this.setData({
      show:true,
      id:e.currentTarget.dataset.id
    })
  },
  // 发布评论
  addComment(e){
    let self = this
    // console.log(e.currentTarget.dataset.id);
    wx.cloud.callFunction({
      name:'addComment',
      data:{
        id:self.data.id,
        newReply:self.data.reply,
        user:self.data.userInfo,
      }
    })  
    .then(res=>{
      console.log(res);
      self.setData({
        reply:'',
        show:false
      })
      wx.showToast({
        title: '评论成功',
        icon:'success',
        duration:2000
      })
    })
  },
  // 点击虚化层收回回复框
  onClose(){
    this.setData({
      show:false
    })
  },
  // 内容框提取
  toReply(e){
    console.log(e);
    this.setData({
      reply:e.detail.value
    })
  },
  // 图片预览
  toPreview(e){
    // console.log(e.currentTarget.dataset.index);
    let index = e.currentTarget.dataset.index
    wx.previewImage({
      current: this.data.writeInfo[index].writeImg, // 当前显示图片的http链接
      urls: [this.data.writeInfo[index].writeImg] // 需要预览的图片http链接列表
    })
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
  collectClick(e){
    this.setData({
      collectImg:collect ? "../../images/collect-down.png" : "../../images/collect-up.png"
    })
    collect = !collect
  },
  // 显示详情
  showDetail(e){
    console.log(e.currentTarget.dataset);
    wx.navigateTo({ // 将文章id和时间传到详情页
      url: `/pages/letterDetail/letterDetail?id=${e.currentTarget.dataset.id}&createTime=${e.currentTarget.dataset.ctime}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 从数据库取数据
    let self = this
    wx.cloud.database().collection('note-group').get({
      success:function(res){
        // console.log(res.data.length);
        for(let i = 0;i<res.data.length;i++){
          let oldTime = res.data[i].createTime
          let newTime = new Date().getTime()
          // 时间差
          let timeGap = newTime-oldTime
          let secondGap= Math.floor(timeGap / 1000);//计算出相差秒数
          // 如果秒数小于60秒
          function timemethod(res,secondGap){
            if(secondGap<60){ // 赋值
              res.data[i].createTime = secondGap+'秒前'
            }else if(secondGap<3600){
              res.data[i].createTime = Math.floor(secondGap/60) + '分前'
            }else if(secondGap<86400){
              res.data[i].createTime = Math.floor(secondGap/3600) + '小时前'
            }else if(secondGap<172800){
              res.data[i].createTime = '昨天'
            }else{
              res.data[i].createTime = Math.floor(secondGap/86400) +'天前'
            }
            return res
          }
          res = timemethod(res,secondGap)
        }
        // console.log(res.data[1].createTime); // 秒数
        let writeInfo = self.data.writeInfo
        writeInfo = res.data
        self.setData({
          writeInfo:writeInfo
        })
      }
    })
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