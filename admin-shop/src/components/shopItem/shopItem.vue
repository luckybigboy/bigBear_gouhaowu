<template>
  <transition name="fade">
    <div v-if="isShow"
         class="showMask">
      <div class="mask"
           @click="closeFoodItem">
      </div>
      <div class="foodItem">
        <div class="imgBox">
          <a class="back"
             @click.prevent="closeFoodItem">
            <i class="iconfont icon-btn_back"></i>
          </a>
          <img v-lazy="shopItem.image"
               alt="">
          <span>{{shopItem.info}}</span>
        </div>
        <div class="content">
          <h2>{{shopItem.name}}</h2>
          <p class="title">月售{{shopItem.sellCount}}份&nbsp;&nbsp;好频率{{shopItem.rating}}%</p>
          <p class="price">￥{{shopItem.price}} <del v-if="shopItem.oldPrice">￥{{shopItem.oldPrice}}</del></p>
          <div class="cartCount">
            <cart-Control :food="shopItem"></cart-Control>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'shopItem',
  props: {
    shopItem: Object
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    closeFoodItem () {
      this.isShow = !this.isShow;
    }
  },
  components: {
    'cartControl': () => import('@/components/cartControl/CartControl.vue'),
  }
}
</script>
<style lang="stylus">
@import '~@/commons/stylus/mixin.styl'
.showMask
  &.fade-enter-active, &.fade-leave-active
    transition opacity 0.5s
  &.fade-enter, &.fade-leave-to
    opacity 0
  .mask
    width 100%
    height 100%
    background rgba(0, 0, 0, 0.5)
    position absolute
    top 0
    z-index 210
  .foodItem
    width 80%
    background #fff
    border-radius 10px
    position absolute
    z-index 220
    left 50%
    top 112px
    transform translateX(-50%)
    box-sizing border-box
    .imgBox
      width 100%
      height 250px
      overflow hidden
      position relative
      border-radius 10px 10px 0 0
      img
        width inherit
        height inherit
      .back
        position absolute
        top 10px
        left 10px
        color #fff
        font-size 20px
        display inline-block
        width 30px
        height 30px
        line-height 30px
        text-align center
      span
        position absolute
        bottom 8px
        left 5px
        font-size 13px
        color #fff
    .content
      padding 10px
      margin-bottom 5px
      position relative
      h2
        font-size 18px
      .title
        color $tip
        font-size 14px
        margin 10px 0 25px
      .price
        color red
        font-size 14px
        del
          font-size 12px
          color $tip
      .cartCount
        position absolute
        bottom -1px
        right 20px
</style>