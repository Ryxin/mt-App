<template>
  <div>
    <span class="name">按省份选择：</span>

    <!-- 省份下拉菜单 -->
    <my-select
      :list="provincelist"
      title="省份"
      :value="povince"
      :showWrapperActive="povinceActive"
      @change_active="changepovinceActive"
      :disabled="false"
      @change_value="changePovinceValue"
      className="province"
    />
    <!-- 城市下拉菜单 -->
    <my-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changecityActive"
      @change_value="changeCityValue"
      :disabled="cityDisabled"
      className="cityClass"
    />

    <span class="name">直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入城市中文或英文"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import mySelect from "./select.vue";
import api from "@/api/index.js";
export default {
  components: {
    mySelect,
  },
  data() {
    return {
      povinceActive: false,
      cityActive: false,
      inputSelect: "",
      povince: "省份",
      city: "城市",
      // 省份列表
      provincelist: [],
      // 城市列表
      cityList: [],
      //搜索框展示的下拉列表数据 searchList
      searchList: [],
      // 搜索框输入的value值（双向数据绑定）
      searchWord: "",
      loading: false,
      // 城市的状态切换
      cityDisabled: true,
    };
  },
  created() {
    api.getProvinceList().then((res) => {
      // 循环数据把数据中的provinceName(省份列表)添加到provincelist数据中进行渲染
      this.provincelist = res.data.data.map((item) => {
        item.name = item.provinceName;
        return item;
      });
    });
  },
  methods: {
    changepovinceActive(flag) {
      this.povinceActive = flag;

      if (flag) {
        this.cityActive = false;
      }
    },
    changecityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.povinceActive = false;
      }
    },
    changePovinceValue(item) {
      this.povince = item.name;
      this.cityDisabled = false;
      this.cityList = item.cityInfoList;
    },
    // 点击城市
    changeCityValue(item) {
      this.city = item.name;
      this.$store.dispatch('setPosition',item);
      this.$router.push({name:'index'});
      document.body.scrollTop = document.documentElement.scrollTop = 0;   // 让页面回到顶部
    },

    // 搜索框远程搜索
    remoteMethod() {
      // 请求后端接口
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>