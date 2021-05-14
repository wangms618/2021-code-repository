// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'cloud1-1gi75vec59a0d51e'

cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  const userInfo = event.userInfo
  const groupList = await db.collection('group').where({
    createBy: userInfo.openId
  }).get()
  return groupList
}