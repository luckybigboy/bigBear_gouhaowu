<template>
  <div class="loginOrRegister">
    <div class="returnBack"
         @click="goPage">
      <i class="el-icon-arrow-left"></i>
    </div>
    <div class="content">
      <h2>跑腿外卖</h2>
      <div class="links">
        <router-link to="/login"
                     :class="chkNewLogin"
                     class="newLogin">短信登录</router-link>
        <router-link to="/register"
                     :class="chkPwdLogin">密码登录</router-link>
      </div>
      <div class="forms">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <p class="aboutUs">关于我们</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'loginOrRegister',
  data () {
    return {
      url: ''
    }
  },
  created () {
    this.url = this.$route.query.url;
  },
  methods: {
    goPage () {
      if (this.url)
        this.$router.replace(this.url);
      else
        this.$router.back();
    }
  },
  computed: {
    chkNewLogin () {
      if (this.$route.path === '/login') {
        return {
          isActived: true
        }
      }
    },
    chkPwdLogin () {
      if (this.$route.path === '/register') {
        return {
          isActived: true
        }
      }
    }
  }
}
</script>
<style lang="stylus">
@import '~@/commons/stylus/mixin.styl'
.loginOrRegister
  .returnBack
    padding 10px
    display inline-block
    i
      font-size 25px
      color #999
  .content
    margin-top 30px
    h2
      text-align center
      font-size 40px
      color $green
      font-weight 700
    .links
      text-align center
      margin-top 40px
      .newLogin
        margin-right 25px
      .isActived
        color $green
        font-weight bold
        position relative
        &::before
          position absolute
          content ''
          height 2px
          width 100%
          bottom -5px
          background $green
    .forms
      width 80vw
      margin 0 auto
    .aboutUs
      color $grey
      text-align center
      font-size 12px
      margin-top 20px
</style>