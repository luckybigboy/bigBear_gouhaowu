<template>
  <div class="shopList">
    <div v-if="shops.length > 0">
      <p><i class="iconfont icon-liebiao"></i>附近商家</p>
      <div class="shopBox">
        <div class="list"
             v-for="(item, index) in shops"
             :key="index"
             @click="goToShops">
          <div class="left">
            <img v-lazy="baseImgUrl+item.image_path"
                 alt="">
          </div>
          <div class="center">
            <div class="top">
              <span class="type">品牌</span>
              <span class="title ellipsis">{{item.name}}</span>
            </div>
            <div class="middle">
              <el-rate v-model="item.rating"
                       disabled
                       show-score
                       text-color="#ff9900"
                       score-template="{value}"
                       class="star">
              </el-rate>
              <span class="sale">月售{{item.recent_order_num}}单</span>
            </div>
            <div class="bottom">
              <span>￥{{item.float_minimum_order_amount}}起送</span>/<span>配送费约￥{{item.float_delivery_fee}}</span>
            </div>
          </div>
          <div class="right">
            <div class="top">
              <span v-for="(item, index) in item.supports"
                    :key="index">{{item.icon_name}}</span>
            </div>
            <div class="bottom">跑腿专送</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="list"
           v-for="item in 6"
           :key="item">
        <img src="../../../static/images/svg/shop_back.svg"
             alt="">
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'shopList',
  data () {
    return {
      value: 3.7,
      baseImgUrl: 'https://dpic.tiankong.com'
    }
  },
  methods: {
    goToShops () {
      this.$router.push('/shop');
    }
  },
  created () {
  },
  computed: {
    ...mapState([
      'shops'
    ])
  }
}
</script>
<style lang="stylus">
@import '~@/commons/stylus/mixin.styl'
.shopList
  top-border-px(2px, #e4e4e4, 10)
  margin-top 8px
  p
    color $tip
    padding 10px 5px
    font-size 14px
    i
      margin-right 3px
      font-size 13px
  .shopBox
    margin-bottom 50px
    .list
      display flex
      align-items center
      justify-content space-between
      padding 5px 5px 10px
      box-sizing border-box
      bottom-border-px(1px, #e4e4e4, 0)
      .left
        img
          width 60px
          height 60px
          object-fit cover
      .center
        width 60%
        .top
          .type
            background $yellow
            font-size 10px
            padding 2px
          .title
            font-weight bold
            width 82%
            display inline-block
            vertical-align middle
        .middle
          display flex
          margin 10px 0
          align-items center
          .star
            .el-rate__icon
              font-size 12px
              margin-right 3px
            .el-rate__text
              font-size 12px
          .sale
            color $tip
            font-size 10px
            margin-left 3px
        .bottom
          font-size 13px
          color $tip
      .right
        box-sizing border-box
        position relative
        left -4px
        .top
          text-align center
          position absolute
          top -27px
          right 0
          span
            border 1px solid $tip
            color $tip
            font-size 10px
            padding 0 1px
            margin-right 3px
        .bottom
          margin-top 3px
          border 1px solid $green
          font-size 13px
          color $green
</style>