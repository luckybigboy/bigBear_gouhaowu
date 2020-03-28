<template>
  <div class="Home">
    <!-- 头部 -->
    <header-top class="header">
      <span slot="left"
            @click="$router.push('/Search')">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span slot="center">{{address.name}}</span>
      <span slot="right"
            @click="goToPage">
        <i class="el-icon-user-solid"
           v-if="userInfo._id"></i>
        <span v-else>登录|注册</span>
      </span>
    </header-top>
    <!-- 轮播选择单项 -->
    <div class="swiper-container"
         v-if="categorysArr.length > 0">
      <div class="swiper-wrapper">
        <div class="swiper-slide"
             v-for="(item, index) in categorysArr"
             :key="index">
          <div class="slide"
               v-for="(item, index) in item"
               :key="index">
            <div><img :src="logoBaseUrl+item.image_url"
                   alt=""></div>
            <span>{{item.title}}</span>
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="swiper-container"
         v-else>
      <img src="../../static/images/svg/swiperNav_back.svg"
           alt="">
    </div>
    <shop-list></shop-list>
  </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import { mapState } from 'vuex';
export default {
  name: 'Home',
  data () {
    return {
      logoBaseUrl: 'https://fuss10.elemecdn.com/'
    }
  },
  components: {
    "HeaderTop": () => import('@/components/headerTop/headerTop'),
    "shopList": () => import('@/components/shopList/shopList')
  },
  created () {
    this.$store.dispatch('getGoodsList');
    this.$store.dispatch('getShops');
  },
  computed: {
    ...mapState([
      "address",
      "categorys",
      "userInfo"
    ]),
    categorysArr () {
      const { categorys } = this;
      const arr = [];
      let minArr = [];
      categorys.forEach(item => {
        if (minArr.length === 8) {
          minArr = [];
        }
        if (minArr.length === 0) {
          arr.push(minArr);
        }
        minArr.push(item);
      })
      return arr;
    }
  },
  methods: {
    _initSwiper () {
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          loop: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      })
    },
    goToPage () {
      this.userInfo._id ? this.$router.push({ path: '/userInfo' }) : this.$router.replace({ 'path': '/loginOrRegister', query: { url: '/Profile' } });
    }
  },
  watch: {
    categorys (value) {
      // setTimeout(() => {
      //   new Swiper('.swiper-container', {
      //     loop: true,
      //     // 如果需要分页器
      //     pagination: {
      //       el: '.swiper-pagination',
      //     },
      //   })
      // }, 50);
      this._initSwiper();
    }
  }
}
</script>
<style lang="stylus">
@import '~@/commons/stylus/mixin.styl'
.swiper-container
  bottom-border-px(1px, #e4e4e4, 10)
  padding-bottom 15px
  background #fff
  .swiper-slide
    display flex
    flex-wrap wrap
    .slide
      padding 15px 0
      width 25%
      display flex
      flex-direction column
      text-align center
      div
        img
          width 50px
          height 50px
      span
        color $grey
        font-size 13px
</style>