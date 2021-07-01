// miniprogram/pages/write/write.js
wx.cloud.init()
let  fileList = []
Page({
  data: {
    show:false,
    actions:[
      {name:'美食'},
      {name:'创意'},
      {name:'时尚'},
      {name:'旅行'},
      {name:'心情'},
      {name:'体育'},
      {name:'其他'}
    ],
    writeContent:'',
    writeTitle:'',
    fileList: [],
    writeImg:'',
    write_type:'',
    userInfo:''
  },
  writeContent(e){
    console.log(e.detail);
    this.setData({
      writeContent:e.detail
    })
  },
  writeTitle(e){
    // console.log(e.detail);
    this.setData({
      writeTitle:e.detail
    })
  },
  writeImg(event){
    console.log(event);
    const { file } = event.detail;
    wx.cloud.uploadFile({
      cloudPath:`${new Date().getTime()}.png`,
      filePath:file.url,
    }).then(res=>{
      // 传值类型为对象
      fileList.push({url:res.fileID})
      this.setData({
        fileList,
        // writeImg:res.fileID // 保存这个字符串，后面传给后端
      })
      // console.log(this.data.writeImg);
    }).catch(error=>{
      console.log(error);
    })
  },
  showAction(){
    this.setData({
      show:true
    })
  },
  onClose(){
    this.setData({
      show:false
    })
  },
  onSelect(e){
    // console.log(e.detail.name);
    this.setData({
      show:false,
      write_type: e.detail.name
    })
  },
  // 发布事件
  publish(){
    console.log(this.data.fileList);
    let self = this
    // console.log(this.data.userInfo);
    if(!self.data.writeTitle){
      wx.showToast({
        title: '请输入标题',
        icon:'error',
        duration:1000
      })
    }else if(self.data.writeContent.length<3){
      wx.showToast({
        title: '请至少写三个字',
        icon:'error',
        duration:1000
      })
    }else if(!self.data.userInfo){
      wx.showToast({
        title: '请先登录',
        icon:'error',
        duration:1000
      })
      wx.switchTab({
        url: '/pages/home/home',
      })
    }else if(!self.data.write_type){
      wx.showToast({
        title: '请选择分类',
        icon:'error',
        duration:1000
      })
    }else{
      wx.showLoading({
        title: '发布中',
      })
      wx.cloud.callFunction({
        name:'getWriteInfo',
        data:{
          localUserInfo: self.data.userInfo,
          write_type:self.data.write_type,
          writeImg:self.data.fileList,
          writeTitle:self.data.writeTitle,
          writeContent:self.data.writeContent
        },
        success(res){
          wx.hideLoading()
          wx.switchTab({
            url: '/pages/home/home',
            // 跳转刷新
            success: function (e) {
              var page = getCurrentPages().pop();
              if (page == undefined || page == null) return;
              page.onLoad();
            }
          })
          wx.showToast({
            title: '发布成功',
            icon:'success',
            duration:2000
          }).then()
          self.setData({
            writeContent:'',
            writeTitle:'',
            writeImg:'',
            write_type:''
          })
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