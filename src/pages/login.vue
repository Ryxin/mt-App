<template>
<!-- 登录页面 -->
  <div class="page-login">
    <div class="login-header">
      <router-link :to="{name:'index'}" class="logo"></router-link>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="http://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        />
      </div>
      <div class="form">
   <h4 v-if="error"  class="tips">{{ error }}</h4>
        <p>
          <span>账号登录</span>
        </p>
        <el-input
          :class="{error : error && !userName}"
          v-model="userName"
          placeholder="请输入手机号"
          prefix-icon="el-icon-s-custom"
        ></el-input>
        <el-input
          :class="{error : error && !password}"
          v-model="password"
          type="password"
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
        ></el-input>
        <p class="foot">
          <a href="#">忘记密码？</a>
        </p>
        <el-button type="primary" class="btn-login" @click="submit">登录</el-button>
        <p class="reg">
          <span>还没有账号？</span>
          <router-link :to="{name:'register'}">免费注册</router-link>
        </p>
        <div class="oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="oauth cf">
            <span class="oauth__link oauth__link--qq" target="_blank"></span>
            <span class="oauth__link oauth__link--weibo" target="_blank"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="site-info-nav cf">
        <ul>
          <li class="first">
            <a rel="nofollow" href="https://about.meituan.com/about.html">关于美团</a>
          </li>
          <li>
            <a rel="nofollow" href="https://zhaopin.meituan.com/">加入我们</a>
          </li>
          <li>
            <a rel="nofollow" href="https://emis.meishi.meituan.com/merchantsSettled">商家入驻</a>
          </li>
          <li>
            <a rel="nofollow" href="https://www.meituan.com/help/faq">帮助中心</a>
          </li>
          <li class="last">
            <a href="https://meituan.com/mobile">美团手机版</a>
          </li>
        </ul>
      </div>
      <p>
        ©
        <span>2020</span>
        <a href="https://www.meituan.com">美团网团购</a>
        meituan.com
        <a href="http://www.miibeian.gov.cn/" target="_blank">京ICP证070791号</a>
        京公网安备11010502025545号
      </p>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      userName: "",   // 用户名
      password: "",   // 密码
      error: "",      // 错误信息
    };
  },
  methods: {
    submit() {
        // 判断当前输入框是否有内容
      if (!this.userName) {
        this.error = "请输入账号";
        return false;
      }
      // 判断当前密码框是否有内容
      if (!this.password) {
        this.error = "请输入密码";
        return false;
      }
    //   发送请求
      api.getLogin({
         // 请求参数   
          params: {
            userName: this.userName,
            password: this.password,
          },
        })
        .then((res) => {
            console.log(res);
         if(res.data.status == 'success'){
             this.$router.push({name:'index'})  //  成功后跳转页面到index
             this.$store.commit("setUserName",this.userName)
         }else{
             this.error = res.data.msg;   //把错误信息赋值给error
         }
        });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>