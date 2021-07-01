// miniprogram/pages/noteClass/noteClass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    id:'',
    reply:'',
    backgroundImg:'',
    columnImg:'',
    noteClass:'',
    writeInfo:[],
    thumbsImg:'../../images/thumbs-down.png',
    collectImg:'../../images/collect-down.png',
    comment:'../../images/comment.png',
    userInfo:[]
  },
  columnName (name) {
    // if(name=='美食'){
    //   this.setData({columnImg:'../../images/foodHeader.jpeg'})
    // }
    switch(name){
      case '美食': this.setData({columnImg:'../../images/foodHeader.jpeg',backgroundImg:'../../images/foodClass.jpeg'});break;
      case '创意': this.setData({columnImg:'../../images/originalityHead.jpeg',backgroundImg:'../../images/originality.jpeg'});break;
      case '时尚': this.setData({columnImg:'../../images/fashionhead.jpeg',backgroundImg:'../../images/fashion.jpeg'});break;
      case '旅行': this.setData({columnImg:'../../images/travelHead.jpeg',backgroundImg:'../../images/travel.jpeg'});break;
      case '心情': this.setData({columnImg:'../../images/moodHead.jpeg',backgroundImg:'../../images/mood.jpeg'});break;
      case '体育': this.setData({columnImg:'../../images/sportHead.png',backgroundImg:'../../images/sport.jpeg'});break;
      case '其他': this.setData({columnImg:'../../images/foodHeader.jpeg',backgroundImg:'../../images/foodClass.jpeg'});
    }
  },
  onClose(){
    this.setData({
      show:false
    })
  },
  onClosePopup(e){
    this.setData({
      show:true,
      id:e.currentTarget.dataset.id
    })
  },
  toReply(e){
    console.log(e.detail.value);
    this.setData({
      reply:e.detail.value
    })
  },
  addComment(e){
    let self = this
    wx.showLoading({
      title: '发表中',
    })
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
      // console.log(res);
      self.setData({
        reply:'',
        show:false
      })
      wx.hideLoading()
      wx.showToast({
        title: '评论成功',
        icon:'success',
        duration:2000
      })
    })
  },
  showDetail(e){
    console.log(e.currentTarget.dataset);
    wx.navigateTo({ // 将文章id和时间传到详情页
      url: `/pages/letterDetail/letterDetail?id=${e.currentTarget.dataset.id}&createTime=${e.currentTarget.dataset.ctime}`,
    })
  },
  // 图片预览
  toPreview(e){
    console.log(e.currentTarget.dataset);
    if(e.currentTarget.dataset.flag){
      let index = e.currentTarget.dataset.index
      wx.previewImage({
        current: this.data.writeInfo[index].writeImg, // 当前显示图片的http链接
        urls: [this.data.writeInfo[index].writeImg[0].url] // 需要预览的图片http链接列表
      })
    }else{
      let index=e.currentTarget.dataset.parent
      let imgindex = e.currentTarget.dataset.imgindex
      console.log(this.data.writeInfo[index].writeImg.length);
      let len = this.data.writeInfo[index].writeImg.length
      let url = []
      for(let i =0;i<len;i++){
        url.push(this.data.writeInfo[index].writeImg[i].url)
      }
      console.log(url);
      wx.previewImage({
        current: this.data.writeInfo[index].writeImg[imgindex].url, // 当前显示图片的http链接
        urls: url // 需要预览的图片http链接列表
      })
    }
  },
  onLoad: function (options) {
    this.columnName(options.id);
    this.setData({
      noteClass:options.id
    })
    wx.cloud.database().collection('note-group').where({
      write_type:options.id
    }).get().then(res=>{
      console.log(res.data);
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
      this.setData({
        writeInfo:res.data
      })
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