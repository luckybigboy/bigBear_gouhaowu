<template>
  <div>
    <div class="shopGoods">
      <div class="left">
        <ul>
          <li v-for="(item, index) in goods"
              :key="index"
              :class="{current: index === currentIndex}"
              @click="choosed(index)">
            <span class="items">
              <img :src="item.icon"
                   alt=""
                   v-if="item.icon">
              <span class="text">{{item.name}}</span>
            </span>
          </li>
        </ul>
      </div>
      <div class="right">
        <ul ref="rightScroll">
          <li v-for="(item, index) in goods"
              :key="index">
            <h3 class="title">
              <span>{{item.name}}</span>
            </h3>
            <ul>
              <li class="item_food"
                  v-for="(item, index) in item.foods"
                  :key="index"
                  @click="showFoodItem(item)">
                <div class="leftContainer">
                  <img v-lazy="item.icon"
                       alt="">
                </div>
                <div class="rightContainer">
                  <h2>{{item.name}}</h2>
                  <p class="text character">{{item.description}}</p>
                  <p class="text count">月售{{item.sellCount}}份 <span>好评率{{item.rating}}%</span></p>
                  <p class="price">
                    <span class="new">￥{{item.price}}</span>
                    <del v-if="item.oldPrice"
                         class="old">￥{{item.oldPrice}}</del>
                  </p>
                  <div class="rightAdd">
                    <cartControl :food="item"></cartControl>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <shop-cart></shop-cart>
    </div>
    <shop-item ref="shopItem"
               :shopItem="shopItem"></shop-item>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import BScroll from 'better-scroll';
export default {
  name: 'shopGoods',
  data () {
    return {
      scrollY: 0,
      tops: [],
      shopItem: {}
    }
  },
  methods: {
    // 初始化scroll
    _initScroll () {
      new BScroll('.left', { click: true });
      this.rightScroll = new BScroll('.right', { click: true, probeType: 2 });
      this.rightScroll.on('scroll', (event) => {
        this.scrollY = Math.abs(event.y);
      });
      this.rightScroll.on('scrollEnd', (event) => {
        this.scrollY = Math.abs(event.y);
      })
    },
    // 初始化每一个li距离顶部的距离
    _initTops () {
      let topsNum = 0;
      let top_arr = [];
      top_arr.push(topsNum);
      let topList = this.$refs.rightScroll.children;
      Array.prototype.slice.call(topList).forEach(liItem => {
        topsNum += liItem.clientHeight;
        top_arr.push(topsNum);
      });
      this.tops = top_arr;
    },
    choosed (index) {
      const scrollY = this.tops[index];
      // 右侧实时滚动
      this.rightScroll.scrollTo(0, -scrollY, 300);
      this.scrollY = scrollY;
    },
    // 显示shopItem
    showFoodItem (shop) {
      this.shopItem = shop;
      this.$refs.shopItem.closeFoodItem();
    }
  },
  created () {
    this.$store.dispatch('getShopGoods', () => {
      this.$nextTick(() => {
        this._initTops();
      });
    })
  },
  mounted () {
    this.$store.dispatch('getShopGoods', () => {
      this.$nextTick(() => {
        this._initScroll();
        this._initTops();
      });
    })
  },
  computed: {
    ...mapState([
      'goods'
    ]),
    currentIndex () {
      let { scrollY, tops } = this;
      const index = tops.findIndex((topItem, index) => {
        return scrollY >= topItem && scrollY < tops[index + 1];
      })
      return index;
    }
  },
  components: {
    'cartControl': () => import('@/components/cartControl/CartControl.vue'),
    'shopItem': () => import('@/components/shopItem/shopItem'),
    'shopCart': () => import('@/components/shopCart/shopCart')
  }
}
</script>
<style lang="stylus">
@import '~@/commons/stylus/mixin.styl'
.shopGoods
  display flex
  position absolute
  top 194px
  bottom 46px
  width 100%
  background #fff
  overflow hidden
  .left
    width 80px
    background #f3f5f7
    ul
      > li
        text-align center
        position relative
        &.current
          color $green
          font-weight bold
          background #fff
          border none
          .items
            border none
        .items
          width 54px
          height 56px
          line-height 56px
          display inline-block
          border-bottom 1px rgba(7, 17, 27, 0.1) solid
        img
          width 12px
          height 12px
          vertical-align middle
        .text
          font-size 13px
          vertical-align middle
  .right
    width calc(100% - 80px)
    .title
      height 26px
      line-height 26px
      border-left 2px solid #d9dde1
      font-size 12px
      color rgb(147, 153, 159)
      background #f3f5f7
      padding-left 12px
    .item_food
      padding-bottom 14px
      margin 15px 15px 0
      display flex
      bottom-border-px(2px, #e4e4e4, 0)
      .leftContainer
        margin-right 10px
        img
          width 60px
          height 60px
      .rightContainer
        h2
          font-size 13px
        p.character, p.count
          margin 5px 0
        p.text
          color $tip
          font-size 10px
        p.price
          .new
            color red
            font-size 14px
          .old
            color $tip
            font-size 10px
        .rightAdd
          position absolute
          right 0
          bottom 2px
</style>