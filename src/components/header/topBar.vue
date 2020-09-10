<template>
    <el-row class="m-header-topbar m-header">
        <el-col :span="10" > 
           <my-geo/>
        </el-col>
        <el-col :span="14">
            <my-nav/>
        </el-col>


    </el-row>
</template>

<script>
import myGeo from './geo'
import myNav from './nav'
export default {
    
    components:{
        myGeo,
        myNav,
    }
}
</script>

<style lang="scss">
    @import "@/assets/css/public/header/topbar.scss"
</style>