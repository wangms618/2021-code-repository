<template>
  <div class="login">
    <div class="login-container">
      <h2>旅梦后台管理系统</h2>

      <div class="wrap">
        <el-input v-model="userName" placeholder="请输入账号"></el-input>
        <el-input
          placeholder="请输入密码"
          v-model="password"
          show-password
        ></el-input>
        <el-button type="primary" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.userName == "admin" && this.password == "123456"){
        // this.$router.push("/Home");
        // query传参
        this.$router.push({path:'home',query:{user:this.userName}});
        // this.$router.push({name:'home',params:{user:this.userName}})
      }else{
        this.$message.error('账号或密码错误')
      }
    },
  },
};
</script>

<style>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-container {
  width: 400px;
  height: 360px;
  box-shadow: 0 0 5px #999;
  border-radius: 5px;
  text-align: center;
}
.wrap {
  padding: 10px 50px;
}
.el-input {
  margin: 10px 0;
}
.el-button {
  width: 100%;
  margin-top: 40px;
}
</style>