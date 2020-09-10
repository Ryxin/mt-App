<template>
  <div class="m-menu">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd
        v-for="item in menuList"
        :key="item.icon"
        @mousemove="changeMouseenter(item)"
        @mouseleave="changeMouseLeave"
      >
        <i :class="item.type"></i>
        {{ item.name }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="curDetail" @mouseenter="Mouseenter" @mouseleave="MouseLeave">
      <template v-for="(item,index) in curDetail.items">
        <h2 :key="item +'_'+ index">{{ item.title }}</h2>
        <a
          href="#"
          style="text-decoration: none;"
          v-for="(a,index) in item.items"
          :key="a +'_'+ index"
        >{{ a }}</a>
      </template>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      curDetail: null,
      timer: null,
      menuList: [],
    };
  },
  created() {
    api.getmenuList().then((res) => {
      this.menuList = res.data.data;
    });
  },
  methods: {
    changeMouseenter(item) {
      this.curDetail = item;
    },
    changeMouseLeave() {
      this.timer = setTimeout(() => {
        this.curDetail = null;
      }, 200);
    },
    Mouseenter() {
      clearTimeout(this.timer);
      this.timer = null;
    },
    MouseLeave() {
      this.curDetail = null;
    },
  },
};
</script>

