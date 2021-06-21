// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:cloud.DYNAMIC_CURRENT_ENV
})
// 创建一个文章数据库，保存点赞数，收藏数，评论数和所有评论，每篇文章都有对应的作者openId和评论者的openId，还有文章自己的id
// 云函数入口函数
exports.main = async (event, context) => {
  // const localUserInfo = event.localUserInfo
  // console.log(event);
  const userInfo = event.userInfo
  // let thumbsUp_num = 0 // 点赞数
  // let collection_num = 0 // 收藏数
  // let comment_num = 0 // 评论数
  const nowTime = new Date().getTime()
  return await cloud.database().collection('note-group').add({
    data:{
      comment:[],
      thumbsUp_num: 0,
      collection_num:0,
      comment_num:0,
      createBy:userInfo.openId,
      localUserInfo:event.localUserInfo,
      write_type:event.write_type,
      writeImg:event.writeImg,
      writeTitle:event.writeTitle,
      writeContent:event.writeContent,
      createTime: nowTime
    }
  })
}