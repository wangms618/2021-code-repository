// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],
    selectAllStatus: true,
    totalPrice: 0
  },


  selectAll() {
    let selectAllStatus = this.data.selectAllStatus
    selectAllStatus = !selectAllStatus
    let carts = this.data.carts
    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus
    }
    this.setData({
      selectAllStatus,
      carts: carts
    })
    this.getTotalPrice()
  },

  selectAdd(e) {
    console.log(e);
    let index = e.currentTarget.dataset.index
    let num = `carts[${index}].num`
    this.setData({
      [num]: this.data.carts[index].num + 1
    })
    this.getTotalPrice()
  },
  selectDown(e) {
    // 需要做一个防止数量为负数的功能
    console.log(e);
    let index = e.currentTarget.dataset.index
    let num = `carts[${index}].num`
    this.setData({
      [num]: this.data.carts[index].num - 1
    })
    this.getTotalPrice()
  },
  selectList(e) {
    console.log(e);
    let index = e.currentTarget.dataset.index
    let selected = `carts[${index}].selected` // "carts["+ index +"].selected"
    this.setData({
      [selected]: !this.data.carts[index].selected
    })
    this.getTotalPrice()
    this.changeAllSelectStatus()

  },

  changeAllSelectStatus() {
    let carts = this.data.carts
    for (let i = 0; i < carts.length; i++) {
      if (!carts[i].selected) {
        this.setData({
          selectAllStatus: false
        })
        break;
      } else {
        this.setData({
          selectAllStatus: true
        })
      }
    }
  },


  // 计算总价格
  getTotalPrice() {
    let totalPrice = this.data.totalPrice
    totalPrice = 0
    let carts = this.data.carts
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].selected == true) {
        totalPrice += carts[i].price * carts[i].num
      }
    }
    this.setData({
      totalPrice: totalPrice
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
    setTimeout(() => {
      this.setData({
        carts: [
          { id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 0.01, selected: true },
          { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 0.03, selected: false }
        ]
      })
      this.getTotalPrice()
      this.changeAllSelectStatus()
    }, 1000)
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