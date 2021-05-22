// component/nav-bar/nav-bar.js
const app =  getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navBarColor: {
      type: String,
      value: '#fff'
    },
    titleColor: {
      type: String,
      value: '#000'
    },
    statusBarColor: {
      type: String,
      value: '#fff'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    topHeight: 50,
    stuatusBarStyle: '',
    navBarStyle: '',
    navId: 1
  },

  lifetimes: {
    attached: function () {
      this.setData({
        navId:app.globalData.navId
      })
      let navBarStyle = `
        background-color:${this.data.navBarColor};
        height:${wx.db.navBarHeight}px;
        color:${this.data.titleColor}
      `
      let stuatusBarStyle = `
        background-color:${this.data.statusBarColor};
        height:${wx.db.statusBarHeight}px;
      `
      let topHeight = wx.db.navBarHeight + wx.db.statusBarHeight
      this.setData({
        navBarStyle,
        stuatusBarStyle,
        topHeight
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeTab(e) {
      console.log(e);
      app.globalData.navId = e.currentTarget.dataset.id
    }
  }
})
