<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <router-link :to="{name:'DefaultPage'}"><img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" /></router-link>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="input"
            placeholder="搜索商家或地点"
            @blur="changeBule"
            @focus="changeFocus"
            @input="inputVal(input)"
          ></el-input>
          <el-button type="warning" icon="el-icon-search" class="icon-button"></el-button>

          <!-- 最近搜索历史 -->
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>
              最近搜索
              <a href="#" style="float: right;" @click="deleteClick">删除搜索历史</a>
            </dt>
            <dd v-for="(item,index) in HotPlaceList" :key="item + '_'+ index">
              <!-- <router-link :to="{name :'goods', params:{name : item }}"></router-link> -->
              <a href="#">{{ item }}</a>
            </dd>
          </dl>
          <!-- 搜索列表区域 -->
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,index) in SearchList" :key="item + '-'+  index">
              <router-link to="/a">{{ item }}</router-link>
            </dd>
          </dl>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      input: "",
      isFocus: false,
      HotPlaceList: [],
      SearchList: [],
    };
  },
  computed: {
    isHotPlace: function () {
      return this.isFocus && !this.input;
    },
    isSearchList: function () {
      return this.isFocus && this.input;
    },
  },
  // DOM结构创建完成后获取数据
  created() {
    api.getHotPlaceList().then((res) => {
      this.HotPlaceList = res.data.data;
    });
  },
  methods: {
    //  聚焦
    changeFocus() {
      this.isFocus = true;
    },
    //  失焦
    changeBule() {
      setTimeout(() => {
        this.isFocus = false;
      }, 200);
    },
    deleteClick() {
      this.HotPlaceList = [];
    },
    inputVal(input) {
      api.getSearchList().then((res) => {
        //  通过获取到输入的val值过滤一下数据在进行赋值渲染
        this.SearchList = res.data.data.list.filter(
          (item) => item.indexOf(input) != -1
        );
      });
    },
  },
};
</script>


 <style lang="scss">
@import "@/assets/css/public/header/search.scss";
</style>