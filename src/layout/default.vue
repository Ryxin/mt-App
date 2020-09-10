<template>
  <div class="layout-default">
    <el-container>
      <el-header height="" style="padding:0">
          <my-header/>

      </el-header>
      <el-main>
        <router-view> 中间内容展示</router-view>
      </el-main>
      <el-footer height="">
       <my-footer/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import myHeader from '@/components/header/header.vue'
import myFooter from '@/components/footer/footer.vue'

export default {
    components:{
        myHeader,
        myFooter,
    }

};
</script>

<style lang="scss">
    @import '@/assets/css/public/layout.scss'
</style>