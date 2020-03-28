<template>
  <div class="Search">
    <header-top>
      <span slot="center">搜索</span>
    </header-top>
    <div class="content">
      <el-input v-model="value"
                placeholder="请输入商家或美食名称"
                clearable
                class="inputs"></el-input>
      <el-button type="primary"
                 class="btn"
                 native-type="submit"
                 @click="searchFoods"
                 :disabled="isClick">提交</el-button>
    </div>
    <section class="list"
             v-if="noSearchShops">
      <ul class="list_container">
        <router-link :to="{path:'/shop', query:{id:item.id}}"
                     tag="li"
                     v-for="item in searchShops"
                     :key="item.id"
                     class="list_li">
          <section class="item_left">
            <img v-lazy="imgBaseUrl + item.image_path"
                 class="restaurant_img">
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span>{{item.name}}</span>
              </p>
              <p>月售 {{item.month_sales||item.recent_order_num}} 单</p>
              <p>{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</p>
            </div>
          </section>
        </router-link>
      </ul>
    </section>

    <div class="search_none"
         v-else>很抱歉！无搜索结果</div>
  </div>
</template>
<script>
import BSscroll from 'better-scroll';
import { mapState } from 'vuex';
export default {
  name: 'Search',
  data () {
    return {
      value: '',
      noSearchShops: true,
      imgBaseUrl: 'http://cangdu.org:8001/img/'
    }
  },
  computed: {
    ...mapState(['searchShops']),
    isClick () {
      if (this.value)
        return false
      else
        return true
    }
  },
  methods: {
    searchFoods () {
      const keyWord = this.value.trim();
      this.$store.dispatch('searchShops', keyWord);
    },
    _initScroll () {
      new BSscroll('.list', {
        click: true
      })
    }
  },
  mounted () {
    if (!this.searchShops)
      return
    this._initScroll();   // 解决底部导航切换时， better-scroll失效
  },
  watch: {
    searchShops (value) {
      if (value.length) {  // 有数据
        this.noSearchShops = true;
        this.$nextTick(() => {
          this._initScroll();
        })
      } else {  // 无数据
        this.noSearchShops = false;
      }
    }
  },
  components: {
    "HeaderTop": () => import('@/components/headerTop/headerTop')
  }
}
</script>
<style lang="stylus">
@import '~@/commons/stylus/mixin.styl'
.Search
  background #fff
  .content
    padding 10px 5px
    display flex
    .inputs
      width 90%
      margin-right 8px
    .btn
      background $green
  .list
    position absolute
    top 100px
    bottom 48px
    width 100%
    z-index -1
    .list_container
      background-color #fff
      .list_li
        display flex
        justify-content center
        padding 10px
        border-bottom 1px solid $bc
        .item_left
          margin-right 10px
          .restaurant_img
            width 50px
            height 50px
            display block
        .item_right
          font-size 12px
          flex 1
          .item_right_text
            p
              line-height 12px
              margin-bottom 6px
              &:last-child
                margin-bottom 0
  .search_none
    margin 0 auto
    color #333
    background-color #fff
    text-align center
    margin-top 0.125rem
</style>