<template>
  <div class="Order">
    <header-top>
      <span slot="center">订单列表</span>
    </header-top>
    <div class="content">
      <img v-lazy="imgUrl"
           alt="无订单图片">
      <p class="tip">登录后查看外卖订单</p>
      <el-button type="primary"
                 class="btn">立即登录</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Order',
  data () {
    return {
      imgUrl: 'http://storage.ecmaitian.com/uploadfile/2016/1125/20161125023630835.jpg'
    }
  },
  components: {
    "HeaderTop": () => import('@/components/headerTop/headerTop')
  }
}
</script>
<style lang="stylus">
@import '~@/commons/stylus/mixin.styl'
.Order
  .content
    text-align center
    img
      width 100%
      height 50vh
    .tip
      color $tip
      padding 5px 0
    .btn
      background $green
</style>