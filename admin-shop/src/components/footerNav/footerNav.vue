<template>
  <div class="footerNav">
    <div class="item"
         :class="chooseHome"
         @click="choose('/Home')">
      <p>
        <i class="iconfont icon-waimai"></i>
      </p>
      <span>外卖</span>
    </div>
    <div class="item"
         :class="chooseSearch"
         @click="choose('/Search')">
      <p>
        <i class="iconfont icon-sousuo"></i>
      </p>
      <span>搜索</span>
    </div>
    <div class="item"
         :class="chooseOrder"
         @click="choose('/Order')">
      <p>
        <i class="iconfont icon-icon-"></i>
      </p>
      <span>订单</span>
    </div>
    <div class="item"
         :class="chooseProfile"
         @click="choose('/Profile')">
      <p>
        <i class="iconfont icon-wode2"></i>
      </p>
      <span>我的</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterNav',
  data () {
    return {

    }
  },
  computed: {
    chooseHome () {
      return {
        'on': '/Home' === this.$route.path
      }
    },
    chooseSearch () {
      return {
        'on': '/Search' === this.$route.path
      }
    },
    chooseOrder () {
      return {
        'on': '/Order' === this.$route.path
      }
    },
    chooseProfile () {
      return {
        'on': '/Profile' == this.$route.path
      }
    }
  },
  methods: {
    choose (url) {
      if (this.$route.path !== url)
        this.$router.replace(url);
      else
        return false;
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '~@/commons/stylus/mixin.styl'
.footerNav
  top-border-px(1px, #e4e4e4, 200)
  width 100%
  height 50px
  position fixed
  left 0
  bottom 0
  right 0
  background #fff
  display flex
  z-index 100
  .item
    flex 1
    text-align center
    margin 5px
    padding-top 4px
    color #999
    &.on
      color #02a774
    i
      font-size 22px
    span
      font-size 12px
      margin-top 2px
      margin-bottom 2px
</style>