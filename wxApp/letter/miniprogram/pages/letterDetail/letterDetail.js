// miniprogram/pages/letterDetail/letterDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    show:false,
    details:[],
    createTime:'',
    reply:'',
    addReply:'',
    userInfo:'',
    updated:false
  },
  toPreview(e){
    // console.log(e.currentTarget.dataset.index);
    if(e.currentTarget.dataset.index||e.currentTarget.dataset.index==0){
      let index = e.currentTarget.dataset.index
      let len = this.data.details.writeImg.length
      let url =[]
      for(let i =0;i<len;i++){
        url.push(this.data.details.writeImg[i].url)
      }
      wx.previewImage({
        current:this.data.details.writeImg[index].url,
        urls: url,
      })
    }else{
      wx.previewImage({
        urls: [this.data.details.writeImg[0].url],
      })
    }
  },
  onClosePopup(){
    this.setData({
      show:true,
    })
  },
  onClose(){
    this.setData({
      show:false
    })
  },
  // 内容框提取
  toReply(e){
    this.setData({
      addReply:e.detail.value
    })
  },
  // 发布评论
  addComment(){
    if(!this.data.addReply){
      wx.showToast({
        title: '评论内容不能为空',
        icon:'none',
        duration:2000
      })
    }else{
      let self = this
      wx.showLoading({
        title: '发表中',
      })
      // console.log(self.data.id);
      wx.cloud.callFunction({
        name:'addComment',
        data:{
          id:self.data.id,
          newReply:self.data.addReply,
          user:self.data.userInfo,
        }
      })  
      .then(res=>{
        self.setData({
          addReply:'',
          show:false,
          updated:true
        })
        wx.hideLoading()
        wx.startPullDownRefresh()
        wx.showToast({
          title: '评论成功',
          icon:'success',
          duration:2000
        })
      })
    }
  },


  onLoad: function (options) {
    this.setData({
      id:options.id
    })
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
      // console.log(res.data);
      res.data.reverse()
      this.setData({
        reply:res.data,
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
    wx.cloud.database().collection('note-TCC').where({
      content_id:this.data.id
    })
    .get()
    .then(res=>{
      wx.stopPullDownRefresh()
      // console.log(res.data);
      res.data.reverse()
      this.setData({
        reply:res.data,
      })
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