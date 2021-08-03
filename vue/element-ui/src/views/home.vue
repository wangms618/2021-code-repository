<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="title">旅梦管理系统</div>
        <div class="info">
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ userName }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="/home/UserInfo"
            class="el-menu-vertical-demo"
            background-color="#d3dce6"
            router
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>学生列表</span>
              </template>
              <el-menu-item index="/home/UserInfo">
                <i class="el-icon-menu"></i>
                <span slot="title">杨总</span>
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-menu"></i>
                <span slot="title">子贤</span>
              </el-menu-item>
              <el-menu-item index="/home/Form">
                <i class="el-icon-menu"></i>
                <span slot="title">永涛</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">作业情况</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
    };
  },
  created() {
    this.userName = this.$route.query.user;
    // this.userName = this.$route.params.user
  },
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
.is-vertical .el-container {
  height: calc(100vh - 60px);
}
.title {
  float: left;
}
.info {
  float: right;
}
.el-menu {
  height: 100%;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>