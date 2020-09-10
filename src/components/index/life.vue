<template>
  <div class="m-life">
    <!--  home——header -->
    <el-row>
      <ul class="nav">
        <li>
          <router-link to="/" class="takeout">美团外卖</router-link>
        </li>
        <li>
          <router-link to="/" class>猫眼电影</router-link>
        </li>
        <li>
          <router-link to="/" class>美团酒店</router-link>
        </li>
        <li>
          <router-link to="/" class="apartment">民宿 / 公寓</router-link>
        </li>
        <li>
          <router-link to="/" class="takeout">商家入驻</router-link>
        </li>
        <li>
          <router-link to="/" class>美团公益</router-link>
        </li>
      </ul>
    </el-row>
    <!-- banner -->
    <el-row>
      <!-- 轮播图区域 -->
      <el-col :span="14" class="el-banner">
        <my-slider />
      </el-col>
      <!-- 休闲生活 -->
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <!-- 登录/注册 -->
      <el-col :span="6">
        <div class="m-life-login">
          <div class="head-img-row">
            <h4>
              <img src="http://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt />
            </h4>
          </div>
          <p class="m-life-login-name">Hi！{{ this.$store.state.userName ? this.$store.state.userName : '你好'}}</p>
          <p class="el-btn" v-if="!this.$store.state.userName">
            <router-link :to="{name:'register'}">
              <el-button round>注册</el-button>
            </router-link>
            <router-link :to="{name:'login'}">
              <el-button round>立即登录</el-button>
            </router-link>
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7" class="m-life-hotel"></el-col>
      <el-col :span="7" class="m-life-music"></el-col>
      <el-col :span="4" class="m-life-coop"></el-col>
      <el-col :span="6" class="m-life-downapp">
        <img src="http://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP" />
        <p >美团APP手机版</p>
        <p class="last-p">
          <span>1元起</span>
          <em>吃喝玩乐</em>
        </p>
      </el-col>
    </el-row>
  </div>
</template> 

<script>
import mySlider from "@/components/index/slider";
export default {
  data() {
    return {};
  },
  components: {
    mySlider,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/life.scss";
</style>>

