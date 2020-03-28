<template>
  <div class="HeaderTop">
    <span class="left">
      <slot name="left"></slot>
    </span>
    <span class="center ellipsis">
      <slot name="center"></slot>
    </span>
    <span class="right">
      <slot name="right"></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: 'HeaderTop',
  data () {
    return {

    }
  }
}
</script>
<style lang="stylus">
@import '~@/commons/stylus/mixin.styl'
.HeaderTop
  bottom-border-px(1px, #e4e4e4, 200)
  background $green
  height 49px
  line-height 49px
  display flex
  color #fff
  .left
    margin-left 10px
    flex 1
  .center
    text-align center
    font-size 20px
    flex 2
  .right
    text-align right
    margin-right 10px
    flex 1
    font-size 13px
    i
      font-size 16px
</style>