<template>
  <!-- 全部城市展示区域 -->
  <div class="categroy">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="item in letter" :key="item">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl
      v-for="(item,index) in cityGroup"
      :key="index"
      class="m-categroy-section"
      :id="'city-'+ index"
    >
      <dt>{{ index }}</dt>
      <dd>
        <a v-for="city in item" :key="city.id" @click="changeCity(city)">{{ city.name }}</a>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      letter: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      msg: "",
      // 区分好的数据
      cityGroup: {},
    };
  },
  created() {
    api.getcityData().then((res) => {
      this.msg = res.data.data;  
      var msgObj = {};
      // 循环数据
      this.msg.forEach((item) => {
        //  查看是否有当前项(数据中的firstChar字段)，没有就新建空数组
        if (!msgObj[item.firstChar.toUpperCase()]) {
          msgObj[item.firstChar.toUpperCase()] = [];
        }
        // 存在的话就往进里边继续添加
        msgObj[item.firstChar.toUpperCase()].push(item);
      });
      // console.log(msgObj);
      this.cityGroup = msgObj;
    });
  },

  methods: {
    changeCity(city) {
      console.log(city);
      this.$store.dispatch("setPosition", city);
      this.$router.push({ name: "index" });
      document.body.scrollTop = document.documentElement.scrollTop = 0;   // 让页面回到顶部
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>