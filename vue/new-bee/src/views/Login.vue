<template>
  <div class="login">
    <s-header :name="type === 'login' ? '登录' : '注册'"></s-header>
    <img
      class="logo"
      src="//s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png"
    />
    <div class="login-body login" v-if="type === 'login'">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username1"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password1"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-field
            v-model="verify"
            label="验证码"
            placeholder="请输入验证码"
            :rules="[{ required: true, message: '请填写验证码' }]"
          >
            <template #button>
              <!-- 验证码 -->
              <vue-img-verify ref="verifyRef"></vue-img-verify>
            </template>
          </van-field>
        </van-cell-group>
        <div style="margin: 16px">
          <div class="link-register" @click="toggle('register')">立即注册</div>
          <van-button
            round
            block
            color="#1baeae"
            type="primary"
            native-type="submit"
          >
            登录
          </van-button>
        </div>
      </van-form>
    </div>
    <div class="login-body register" v-else>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username1"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password1"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-field
            v-model="verify"
            label="验证码"
            placeholder="请输入验证码"
            :rules="[{ required: true, message: '请填写验证码' }]"
          >
            <template #button>
              <!-- 验证码 -->
              <vue-img-verify ref="verifyRef"></vue-img-verify>
            </template>
          </van-field>
        </van-cell-group>
        <div style="margin: 16px">
          <div class="link-login" @click="toggle('login')">已有登录账号</div>
          <van-button
            round
            block
            color="#1baeae"
            type="primary"
            native-type="submit"
          >
            注册
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import vueImgVerify from "@/components/VueImgVerify.vue";
import sHeader from "@/components/SimpleHeader";
import { reactive, toRefs, ref } from "@vue/reactivity";
import { Toast } from "vant";
import { login, register } from "../api/service/user";
import Md5 from "js-md5";
import { setLocal } from "../common/js/utils";
// import { useRouter } from "vue-router";
export default {
  components: {
    sHeader,
    vueImgVerify,
  },
  setup() {
    // const router = useRouter();
    const verifyRef = ref(null);
    const state = reactive({
      type: "login",
      username1: "",
      password1: "",
      verify: "",
    });
    const onSubmit = async (values) => {
      console.log(verifyRef.value.imgCode);
      console.log("submit", values);
      if (!verifyCode(verifyRef.value.imgCode, state.verify)) {
        Toast("验证码输入有误");
        return;
      }
      if (state.type === "login") {
        const { data } = await login({
          loginName: values.username,
          passwordMd5: Md5(values.password),
        });
        console.log(data);
        setLocal("token", data);
        // 跳去首页
        // router.push({ path: "/" });
        // 刷新页面，让axios.js里面的token重置
        window.location.href = '/'
      } else {
        await register({
          loginName: values.username,
          password: values.password,
        });
        Toast.success("注册成功");
        state.type = "login";
        state.verify = "";
      }
    };
    const verifyCode = function (verify, inverify) {
      if (verify === inverify.toUpperCase()) {
        return true;
      } else {
        return false;
      }
    };
    const toggle = function (type) {
      state.type = type;
      state.verify = "";
    };
    return {
      ...toRefs(state),
      onSubmit,
      verifyRef,
      toggle,
    };
  },
};
</script>

<style lang="less">
.login {
  .logo {
    width: 120px;
    height: 120px;
    display: block;
    margin: 80px auto 20px;
  }
  .login-body {
    padding: 0 20px;
  }
  .login {
    .link-register {
      font-size: 14px;
      margin-bottom: 20px;
      color: #1989fa;
      display: inline-block;
    }
  }
  .register {
    .link-login {
      font-size: 14px;
      margin-bottom: 20px;
      color: #1989fa;
      display: inline-block;
    }
  }
  .verify-bar-area {
    margin-top: 24px;
    .verify-left-bar {
      border-color: #1baeae;
    }
    .verify-move-block {
      background-color: #1baeae;
      color: #fff;
    }
  }
  .verify {
    > div {
      width: 100%;
    }
    display: flex;
    justify-content: center;
    .cerify-code-panel {
      margin-top: 16px;
    }
    .verify-code {
      width: 40% !important;
      float: left !important;
    }
    .verify-code-area {
      float: left !important;
      width: 54% !important;
      margin-left: 14px !important;
      .varify-input-code {
        width: 90px;
        height: 38px !important;
        border: 1px solid #e9e9e9;
        padding-left: 10px;
        font-size: 16px;
      }
      .verify-change-area {
        line-height: 44px;
      }
    }
  }
}
</style>