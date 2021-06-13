// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  // const localUserInfo = event.localUserInfo
  // console.log(event);
  // const userInfo = event.userInfo
  return await cloud.database().collection('write-group').add({
    data:{
      // createBy:userInfo.openId,
      localUserInfo:event.localUserInfo,
      write_type:event.write_type,
      writeImg:event.writeImg,
      writeTitle:event.writeTitle,
      writeContent:event.writeContent,
      createTime:new Date()
    }
  })
}