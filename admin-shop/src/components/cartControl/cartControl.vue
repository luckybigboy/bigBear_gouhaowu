<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-icon_remove"
           v-if="food.count"
           @click.stop="changeCartCount(true)"></div>
    </transition>
    <div class="cart-count"
         v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-huijianyuyue-fa-"
         @click.stop="changeCartCount(false)"></div>
  </div>
</template>

<script>
export default {
  name: 'CartControl',
  data () {
    return {}
  },
  props: {
    food: Object
  },
  methods: {
    changeCartCount (isBool) {
      this.$store.dispatch('changeCartCount', { isBool, food: this.food });
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~@/commons/stylus/mixin.styl'
.cartcontrol
  font-size 0
  .icon-icon_remove
    display inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color $green
    &.move-enter-active, &.move-leave-active
      transition all 0.3s ease
    &.move-enter, &.move-leave-to
      opacity 0
      transform translateX(15px) rotate(180deg)
  .cart-count
    display inline-block
    vertical-align top
    width 12px
    padding-top 6px
    line-height 24px
    text-align center
    font-size 10px
    color rgb(147, 153, 159)
  .icon-huijianyuyue-fa-
    display inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color $green
</style>
