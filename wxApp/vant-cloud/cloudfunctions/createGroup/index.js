// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'cloud1-1gi75vec59a0d51e'

cloud.init()
const db = cloud.database({ env })
// 云函数入口函数
// event 包含前端传过来的参数和从微信获取到的用户信息
exports.main = async (event, context) => {
  // 拿到用户信息
  const userInfo = event.userInfo
  // 连通数据库
  // add 往集合里添加数据的方法
  return await db.collection('group').add({
    data: {
      name: event.groupName,
      createBy: userInfo.openId,
      createTime: new Date(),
      delete: false,
      updataTime:new Date()
    }
  }).then(res => {
    return db.collection('user-group').add({
      data: {
        groupId: res._id,
        userId: userInfo.openId,
        invalid:false
      }
    })
  })
}