<template>
    <div class="page-changeCity">
       <el-row>
          <!-- 按省份选择 -->
          <prov-ince/>
       </el-row>
       <el-row>
           <!-- 热门城市 -->
           <hot-city title='热门城市：' :list="cityList"/>
       </el-row>
       <el-row>
           <!-- 最近访问 -->
            <hot-city title='最近访问：' :list="hitList"/>
       </el-row>
       <el-row>
           <!-- 城市列表 -->
            <cate-gory/>
       </el-row>
    </div>
</template>

<script>
import provInce from '@/components/changecity/province.vue'
import hotCity from '@/components/changecity/hotcity.vue';
import cateGory from '@/components/changecity/category.vue';
import api from '@/api/index.js'
export default {
    components:{
        provInce,
        hotCity,
        cateGory,
    },
    data(){
        return{
            cityList:[],  // 热门城市
            hitList:[],   // 最近访问城市
        }
    },
    created(){
        api.getCityList().then(res =>{
            this.cityList = res.data.data.map(item => item.name)
        });
        api.getHitList().then( res =>{        
            this.hitList = res.data.data.map(item => item.name)
        })
    }   
}
</script>

