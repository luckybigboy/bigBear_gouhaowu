<template>
  <div class="Profile">
    <header-top>
      <span slot="center">我的</span>
    </header-top>
    <div class="loginOrRegister"
         @click="goToPage">
      <span class="left">
        <el-avatar :size="size"
                   :src="circleUrl"
                   fit="cover"></el-avatar>
      </span>
      <p class="center">
        <span class="top"
              v-if="!userInfo.phone">{{userInfo.name || '登录/注册'}}</span>
        <span class="tip"><i class="iconfont icon-ContextPhone">{{userInfo.phone || "暂无绑定手机号"}}</i></span>
      </p>
      <span class="right">
        <i class="el-icon-arrow-right"></i>
      </span>
    </div>
    <div class="myAccount">
      <div class="account_left">
        <p><span>0.00</span><small>元</small></p>
        <span class="title">我的余额</span>
      </div>
      <div class="account_center">
        <p><span>0</span><small>个</small></p>
        <span class="title">我的优惠</span>
      </div>
      <div class="accout_right">
        <p><span>0</span><small>分</small></p>
        <span class="title">我的积分</span>
      </div>
    </div>
    <div class="myList">
      <div>
        <i class="iconfont icon-icon2-copy icon_one"></i>
        <p>
          我的订单
          <i class="el-icon-arrow-right"></i>
        </p>
      </div>
      <div>
        <i class="iconfont icon-jifenshangcheng icon_two"></i>
        <p>
          积分商城
          <i class="el-icon-arrow-right"></i>
        </p>
      </div>
      <div>
        <i class="iconfont icon-huiyuanqia icon_three"></i>
        <p>
          外卖会员卡
          <i class="el-icon-arrow-right"></i>
        </p>
      </div>
      <div>
        <i class="iconfont icon-fuwuzhongxin icon_four"></i>
        <p>
          服务中心
          <i class="el-icon-arrow-right"></i>
        </p>
      </div>
    </div>
    <div class="returnBack"
         v-if="userInfo._id"
         @click="logout">
      <el-button type="danger"
                 plain>退出登录</el-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { reqUserLogout } from '@/api';
export default {
  name: 'Profile',
  data () {
    return {
      size: 'large',
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    }
  },
  methods: {
    goToPage () {
      this.userInfo._id ? this.$router.push({ path: '/userInfo' }) : this.$router.replace({ 'path': '/loginOrRegister', query: { url: '/Profile' } });
    },
    logout () {
      this.$confirm('是否退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        center: true,
        showCancelButton: true
      }).then(() => {
        this.$store.dispatch('resetUserInfo');
        this.$message({
          message: '退出登录成功',
          type: 'success',
          center: true,
          duration: 1000,
          customClass: 'tips'
        });
      }).catch(() => {

      });
    }
  },
  computed: {
    ...mapState([
      "userInfo"
    ])
  },
  components: {
    "HeaderTop": () => import('@/components/headerTop/headerTop')
  }
}
</script>
<style lang="stylus">
@import '~@/commons/stylus/mixin.styl'
.tips
  width 80%
  max-width 305px
  min-width 300px
.el-message-box
  width 80%
.Profile
  .loginOrRegister
    color #fff
    background $green
    padding 15px 10px
    display flex
    justify-content space-between
    align-items center
    .center
      display flex
      flex-direction column
      width 70vw
      .top
        margin-bottom 5px
        margin-left 3px
      .tip
        font-size 13px
  .myAccount
    bottom-border-px(1px, #e4e4e4, 200)
    display flex
    text-align center
    div
      flex 1
      padding 15px 0
    div > p
      margin-bottom 5px
    div > p > span
      font-size 20px
    div.account_left > p > span
      color $yellow
    div.account_center > p > span
      color $red
    div.account_right > p > span
      color $green
    .account_center
      border-right 1px solid #e4e4e4
      border-left 1px solid #e4e4e4
    div > span.title
      color $tip
      font-size 13px
  .myList
    div
      height 50px
      line-height 50px
      display flex
      padding-left 10px
      align-items center
      .icon_one
        color $green
      .icon_two
        color $red
      .icon_three
        color $yellow
      .icon_four
        color $green
      p
        margin-left 5px
        bottom-border-px(1px, #e4e4e4, 200)
        width 100%
        display flex
        align-items center
        justify-content space-between
        padding-right 5px
        color $tip
  .returnBack
    margin-top 30px
    text-align center
    button
      width 80%
</style>