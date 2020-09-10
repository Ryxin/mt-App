<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="iStyle.class">
      <dt>{{ iStyle.title}}</dt>
      <dd
        v-for="item in iStyle.list"
        :class="{active: kind == item.tab }"
        :key="item.tab"
        :data-type="item.tab"
      >{{ item.text }}</dd>
      <span class="dd-right">全部 ></span>
    </dl>
    <ul class="products imove" v-if="iStyle.title =='猫眼电影'">
      <li v-for="item in moveList" :key="item" class="slider-item-film">
        <a :href="item.a" class="link" target="_blank">
          <img :src="item.img1" class="image film-img" />
          <img :src="item.img2" class="film-mark" style="display: inline-block;" />
          <div class="film-info">
            <p class="film-score">
              <b v-if="item.number">
                <span>{{ item.number }}</span> 人想看
              </b>
              <b v-if="item.score">
                观众评  <span>{{ item.score }}</span> 
              </b>
            </p>
            <p class="film-name">{{ item.film_name }}</p>
            <span class="buy-ticket">{{ item.buy_ticket }}</span>
          </div>
        </a>
      </li>
    </ul>
    <ul class="products ibody" v-if="iStyle.title =='推荐民宿'">
      <li class="minsu-item" v-for="item in minsuList" :key="item.id">
        <a :href="item.a" target="_blank">
          <div class="product-card-header">
            <img :src="item.img" class="product-img" />
            <img
              src="https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png"
              alt
              class="head-img"
            />
          </div>
          <div class="product-info">
            <p class="product-title">{{ item.productTitle }}</p>
            <p class="sub-title">
              <span>{{ item.subTitle_span1 }}</span>
              <span>{{ item.subTitle_span2 }}</span>
              <span>{{ item.subTitle_span3 }}</span>
            </p>
            <p class="price-number numfont price">
              <span class="price-icon">￥</span>
              {{ item.price_number }}
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //  用于存储判断是否添加class:active
      kind: "Beijing_Zhengzai",
      minsuList: [
        {
          id: 123321,
          a: "https://minsu.meituan.com/housing/11044257/",
          img:
            "https://img.meituan.net/phoenix/5fe28cd8e09e8737e8cb85ee7374904a2389731.jpg@740w_416h_1e_1c",
          productTitle:
            "【北巷小院&四号】南锣鼓巷地铁站 钟鼓楼 景山 北海 王府井 天安门 故宫",
          subTitle_span1: "整套1居室",
          subTitle_span2: "可住2人 |",
          subTitle_span3: "南锣鼓巷",
          price_number: "378",
        },
        {
          id: 234432,
          a: "https://minsu.meituan.com/housing/8174504/",
          img:
            "https://img.meituan.net/iphoenix/b80b2321cbe0e5a9a4cd04d7fa46cf6693704.jpg@740w_416h_1e_1c",
          productTitle:
            "「野孩子の家」学府 金可儿床垫 沙河高教园 超过性价比 高端配置 独门独户 24小时卫浴 阳光大床房 野孩子 家",
          subTitle_span1: "整套1居室",
          subTitle_span2: "可住2人 |",
          subTitle_span3: "小汤山温泉度假区",
          price_number: "108",
        },
        {
          id: 345543,
          a: "https://minsu.meituan.com/housing/7380093/",
          img:
            "https://img.meituan.net/phoenix/1761a16ac8a5bf6810b2dbc7040e4cb55565780.jpg@740w_416h_1e_1c",
          productTitle: "消毒安心住，首都机场附近，60平整套房源，超大观景阳台",
          subTitle_span1: "整套1居室",
          subTitle_span2: "可住2人 |",
          subTitle_span3: "首都机场/新国展",
          price_number: "350",
        },
        {
          id: 456654,
          a: "https://minsu.meituan.com/housing/10490877/",
          img:
            "https://img.meituan.net/phoenix/d66eac7ae336dc3a612905e291cfa6d787832.jpg@740w_416h_1e_1c",
          productTitle:
            "『风和日丽』  中日友好医院|对外经贸大学|奥林匹克公园|鸟巢|亚运村|安贞医院|温馨两居|舒适睡眠",
          subTitle_span1: "整套2居室",
          subTitle_span2: "可住4人 |",
          subTitle_span3: "亚运村/奥体中心",
          price_number: "508",
        },
        {
          id: 567765,
          a: "https://minsu.meituan.com/housing/11077947/",
          img:
            "https://img.meituan.net/phoenix/bb5022e04d6758084001d8c3e72620de1434941.jpg@740w_416h_1e_1c",
          productTitle: "【古北水镇】兔子的亲子星空小窝/帐篷床滑梯山景阳台",
          subTitle_span1: "整套1居室",
          subTitle_span2: "可住3人 |",
          subTitle_span3: "古北水镇周边",
          price_number: "199",
        },
        {
          id: 678876,
          a: "https://minsu.meituan.com/housing/8343010/",
          img:
            "https://img.meituan.net/phoenix/c54cb7110c6f9689e0fca35d0912f173444759.jpg@740w_416h_1e_1c",
          productTitle:
            "「野孩子の家」学府 金可儿床垫 北欧风 地铁附近 沙河高教园  空调 暖气 超弹大床房 阳光房",
          subTitle_span1: "整套1居室",
          subTitle_span2: "可住2人 |",
          subTitle_span3: "小汤山温泉度假区",
          price_number: "108",
        },
      ],
      moveList: [
        {
          a: "https://maoyan.com/films/1210778",
          img1: "http://p0.meituan.net/moviemachine/ca9d0c0268a940d73d62c004d57b957a5241814.jpg@267w_371h_1e_1c",
          img2: "http://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png",
          number: "213788",
          score: '',
          film_name: "花木兰",
          buy_ticket: "预售",
        },
        {
          a: "https://maoyan.com/films/346210",
          img1: "http://p0.meituan.net/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg@267w_371h_1e_1c",
          img2: "http://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png",
          number: "",
          score: '9.2',
          film_name: "八佰",
          buy_ticket: "购票",
        },
        {
          a: "https://maoyan.com/films/1297973",
          img1: "https://p1.meituan.net/moviemachine/40d1e5ac176f1e9258da10a3222dbff7952117.png@267w_371h_1e_1c",
          img2: "https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png",
          number: "",
          score: '8.3',
          film_name: "信条",
          buy_ticket: "购票",
        },
        {
          a: "https://maoyan.com/films/1297911",
          img1: "https://p0.meituan.net/moviemachine/94700ee3718b3c8eff9dd69676bdbaa31034312.jpg@267w_371h_1e_1c",
          img2: "",
          number: "39783",
          score: '',
          film_name: "我的女友是机器人",
          buy_ticket: "预售",
        },
        {
          a: "https://maoyan.com/films/489894",
          img1: "http://p1.meituan.net/moviemachine/7e6118993dbf0f304ac1dad4667fddda207318.jpg@267w_371h_1e_1c",
          img2: "",
          number: "",
          score: '7.9',
          film_name: "我在时间尽头等你",
          buy_ticket: "购票",
        },
      ],
    };
  },
  props: ["iStyle"],
  methods: {
    over(e) {
      let dom = e.target;
      // 事件冒泡 判断当前鼠标移入的是否是dd元素
      if (dom.tagName != "DD") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");

      // 发送请求获取数据 根据移入的元素进行渲染不同的页面模块
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>