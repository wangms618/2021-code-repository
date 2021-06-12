// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  // event 包含前端传过来的参数和从微信获取到的用户信息
  const userInfo = event.userInfo
  // 连通数据库
  // const db = cloud.database()
  // 向表添加数据
  return await cloud.database().collection('userGroup').add({
    data:{
      name: event.abc,
      createBy:userInfo.openId,
      createTime:new Date(),
      updateTime:new Date()
    }
  })
}