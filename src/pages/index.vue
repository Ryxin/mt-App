<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <my-menu />
      </el-col>
      <el-col :span="19">
        <my-life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <my-container :iStyle="MoveList" />
      </el-col>
      <el-col :span="24">
        <my-container :iStyle="iStyleList" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import myMenu from "@/components/index/menu.vue";
import myLife from "@/components/index/life.vue";
import myContainer from "@/components/index/container.vue";
export default {
  components: {
    myMenu,
    myLife,
    myContainer,
  },
  data() {
    return {
      iStyleList: {
        title: "推荐民宿",
        class: "Istyle",
        list: [
          {
            text: "北京",
            tab: "Beijing_Zhengzai",
          },
          {
            text: "青岛",
            tab: "Qindao",
          },
          {
            text: "济南",
            tab: "Jinan",
          },
          {
            text: "大连",
            tab: "Dalian",
          },
          {
            text: "太原",
            tab: "Taiyuan",
          },
          {
            text: "石家庄",
            tab: "Shijiazhuang",
          },
          {
            text: "秦皇岛",
            tab: "Qinhuangdao",
          },
          {
            text: "烟台",
            tab: "Yantai",
          },
          {
            text: "潍坊",
            tab: "Weifang",
          },
          {
            text: "威海",
            tab: "Weihai",
          },
        ],
      },
      MoveList: {
        title: "猫眼电影",
        class: "Imove",
        list: [
          { text: "正在热映", tab: "Beijing_Zhengzai" },
          { text: "即将上映", tab: "JIjiang" },
        ],
      },
    };
  },
};
</script>
<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
