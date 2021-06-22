// components/calendar/calendar.js
import {formatTime} from'../../utils/util'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    lastMonth: {
      type: String,
      value: '<'
    },
    nextMonth: {
      type: String,
      value: '>'
    },
    weekText:{
      type:Array,
      value:['周日','周一','周二','周三','周四','周五','周六']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    title:'2021年06月',
    emptyGridsBefore:[], // 上个月
    thisMonthDays:[], // 这个月
    emptyGridAfter:[], // 下个月
  },
  ready:function(){
    this.today()
    // this.createEmptyGrids()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    today() { //默认选中当天，并初始化组件
      // 获取当前日期
      var date = new Date();
      var year = date.getFullYear()
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var nowDate = year + '-' + this.zero(month) + '-' + this.zero(day);
      console.log(nowDate);
      // 初始化日历组件
      this.display(year, month)
      this.setData({
        today:day
      })
    },
    display(year, month) {
      this.setData({
        title: year + '年' + this.zero(month) + '月',
      })
      this.createDays(year, month)
      this.createEmptyGrids(year, month)
    },
    createDays(year, month) {
      let thisMonthDays = [],
        days = this.getThisMonthDays(year, month)
      for (let i = 1; i <= days; i++) {
        thisMonthDays.push(i)
      }
      this.setData({
        thisMonthDays
      })
    },
    createEmptyGrids(year, month) {
      let week = new Date(year, month - 1, 1).getDay(),
        days1 = this.getThisMonthDays(year, month),
        emptyGridsBefore = [];
      let emptyGridsAfter = [];

      // 上个月的天数
      let days = month - 1 < 0 ? this.getThisMonthDays(year - 1, 11) : this.getThisMonthDays(year, month - 1)
      // 当月前面空几天
      for (let i = 0; i < week; i++) {
        emptyGridsBefore.unshift(days - i)
      }
      let after = (42 - days1 - week) - 7 >= 0 ? (42 - days1 - week) - 7 : (42 - days1 - week)
      console.log(after);
      for (let i = 1; i <= after; i++) {
        emptyGridsAfter.push(i)
      }
      this.setData({
        emptyGridsBefore,
        emptyGridsAfter:emptyGridsAfter
      })
    },
    zero(i) {
      return i >= 10 ? i : '0' + i
    },
    getThisMonthDays(year, month) {
      return new Date(year, month, 0).getDate()
    }
  }

})