// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return await cloud.database().collection('note-TCC').add({
    data:{
      creataBy:wxContext.OPENID,
      content_id:event.id,
      reply:event.newReply,
      user:event.user
    }
  })
  .then(res=>{
    console.log(res);
  })
  .catch(err=>{
    console.log(err);
  })
}