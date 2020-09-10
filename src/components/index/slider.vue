<template>
  <div class="slider">
    <el-carousel height="240px">
      <el-carousel-item v-for="item in imgsLsit" :key="item.id" class="el-bannerImg">
        <a :href="item.url" target="_blank">
          <img :src="item.imgSrc" alt="" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgsLsit: [
        {
          id: 1,
          url: "https://hotel.meituan.com/",
          imgSrc:
            "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        },
        {
          id: 2,
          url: "https://www.meituan.com/meishi/",
          imgSrc:
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        },
        {
          id: 3,
          url: "https://waimai.meituan.com/",
          imgSrc:
            "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        },
        {
          id: 4,
          url: "https://maoyan.com/",
          imgSrc:
            "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        },
        {
          id: 5,
          url: "https://paidui.meituan.com/",
          imgSrc:
            "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" >
</style>