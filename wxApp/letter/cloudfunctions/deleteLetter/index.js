// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const delete_id = event.delete_id
  return await cloud.database().collection('note-group').doc(delete_id).remove()
}