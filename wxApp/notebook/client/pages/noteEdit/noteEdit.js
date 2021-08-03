// pages/noteEdit/noteEdit.js
import request from '../../utils/request'
import { $toast } from '../../utils/util'
wx.cloud.init()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    actions: [
      { name: '美食' },
      { name: '旅行' },
      { name: '汽车' },
      { name: '时尚' },
      { name: '科技' }
    ],
    noteContent: '',
    noteTitle: '',
    fileList: [],
    noteImg: '',
    note_type: ''
  },
  noteContent(e) {
    // console.log(e.detail.html);
    this.setData({
      noteContent: e.detail.html
    })
  },
  noteTitle(e) {
    // console.log(e.detail);
    this.setData({
      noteTitle: e.detail
    })
  },
  noteImg(e) {
    const { file } = e.detail
    console.log(file);
    wx.cloud.uploadFile({
      cloudPath: `${new Date().getTime()}.png`,
      filePath: file.url, //文件路径
    }).then(res => {
      // console.log(res.fileID);
      console.log(this.data.fileList);
      let fileList = this.data.fileList
      fileList.push({ url: res.fileID })
      this.setData({
        fileList: fileList,
        noteImg: res.fileID
      })
    }).catch(error => {
      console.log(error);
    })
  },
  showAction() {
    this.setData({
      show: true
    })
  },
  onClose() {
    this.setData({
      show: false
    })
  },
  onSelect(e) {
    // console.log(e);
    this.setData({
      show: false,
      note_type: e.detail.name
    })
  },
  publish() {
    let { id, nickname } = wx.getStorageSync('userInfo')
    request('post', '/users/publishNote', {
      noteContent: this.data.noteContent,
      noteTitle: this.data.noteTitle,
      noteImg: this.data.noteImg,
      note_type: this.data.note_type,
      useId: id,
      nickname: nickname
    }).then(res => {
      // console.log(res.data.code);
      if (res.data.code == 200) {
        $toast('文章已发表', 'success')
        setTimeout(() => {
          wx.navigateTo({
            url: '/pages/noteClass/noteClass',
          })
        }, 2000)
      } else {
        $toast('发生错误', 'error')
      }
    })
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