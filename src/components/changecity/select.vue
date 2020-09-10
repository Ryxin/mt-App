<template>
  <!-- 封装组件 （省份/城市下拉菜单） -->
  <div
    class="choose-wrap"
    @click="showWrapper"
    v-document-click="documentClick"
    :class="[disabled ? 'disabled' : ' ']"
  >
    <div class="choose">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <!-- 点击展示省份详情 -->
      <div :class="{'active':showWrapperActive}" class="mt-content">
        <p>{{ title }}</p>
        <div :class="['wrapper', className]" >
          <div class="col" v-for="(i,index) in readerList" :key="i + '_' + index">
            <span
              class="mt-item"
              :class="{'active':item.name ===value }"
              v-for="(item,index) in i"
              :key="item + '_'+ index"
              @click="changeValue(item)"
            >{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["list", "title", "value", "showWrapperActive", "disabled",'className'],
  computed: {
    readerList: function () {
      let col = Math.ceil(this.list.length / 12);
      let resultList = [];
      for (let i = 0; i < col; i++) {
        let data = this.list.slice(i * 12, i * 12 + 12);
        resultList.push(data);
      }
      return resultList;
    },
  },
  methods: {
    showWrapper(e) {
      e.stopPropagation();

      //   this.showWrapperActive = true;
      if (!this.disabled) {
        this.$emit("change_active", true);
      }
    },
    documentClick() {
      // this.showWrapperActive = false;
      this.$emit("change_active", false);
    },

    changeValue(item) {
      this.$emit("change_value", item);
    },
  },
};
</script>

<style lang="scss" >
@import "@/assets/css/changecity/select.scss";
</style>>
