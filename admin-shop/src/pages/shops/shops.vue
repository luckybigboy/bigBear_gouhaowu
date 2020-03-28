<template>
  <div class="shops">
    <shopHeader></shopHeader>
    <div class="shop_tab">
      <div class="tab_item">
        <router-link to="/shop/shops_goods"
                     replace>点餐</router-link>
      </div>
      <div class="tab_item">
        <router-link to="/shop/shops_ratings"
                     replace>评分</router-link>
      </div>
      <div class="tab_item">
        <router-link to="/shop/shops_infos"
                     replace>商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'shops',
  data () {
    return {

    }
  },
  created () {
    this.getShopInfos();
  },
  methods: {
    ...mapActions([
      'getShopInfos'
    ])
  },
  components: {
    "shopHeader": () => import('@/components/shopsHeader/shopsHeader')
  }
}
</script>
<style lang="stylus">
@import '~@/commons/stylus/mixin.styl'
.shops
  .shop_tab
    display flex
    height 40px
    line-height 40px
    border-bottom 1px solid $e4e4e4
    bottom-border-px(2px, #e4e4e4, 0)
    .tab_item
      flex 1
      text-align center
      color rgb(77, 85, 93)
      font-size 14px
      a
        position relative
        display block
        &.router-link-active
          color $green
          &::after
            position absolute
            content ''
            width 35px
            height 2px
            left 50%
            bottom 1px
            transform translateX(-50%)
            background $green
</style>