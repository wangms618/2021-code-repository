// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  // event 包含前端传过来的参数和从微信获取到的用户信息
  const wxContext = cloud.getWXContext()
  // const userInfo = event.userInfo
  cloud.database().collection('userGroup').where({
    createBy:wxContext.OPENID
  }).get().then(res=>{
    if(res.data.length==0){
      cloud.database().collection('userGroup').add({
        data:{
          createBy:wxContext.OPENID,
          userInfo:event.user
        }
      }).then(res=>{
        console.log('已上传',res);
      })
    }else{
      console.log('已有此用户');
    }
  })


  // if(len!=0){
  //   console.log('已有用户');
  // }else{
  //   cloud.database().collection('userGroup').add({
  //     data:{
  //       userInfo:event.user,
  //       createBy:wxContext.OPENID,
  //       data: new Date()
  //     }
  //   })
  // }



  // return await cloud.database().collection('userGroup').add({
  //   data:{
  //     name: event.user,
  //     createBy:userInfo.openId,
  //     createTime:new Date(),
  //     updateTime:new Date()
  //   }
  // })
  // if(event.create=='200'){
  //   return await cloud.database().collection('userGroup')
  //   .where({
  //     createBy:openId,
  //   })
  //   // .doc('79550af260cace4920003cfa31d0e70a')
  //   .get()
  //   .then(res=>{
  //     console.log(res);
  //   })
  // }else{
  //     return await cloud.database().collection('userGroup').add({
  //   data:{
  //     name: event.user,
  //     createBy:openId,
  //     createTime:new Date(),
  //     updateTime:new Date()
  //   }
  // })
  // }
}