<template>
  <div class="login">
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="80px"
             @submit.native.prevent="submitForm">
      <el-form-item prop="phoneNum"
                    label-width="0">
        <div class="phoneNums">
          <el-input v-model="form.phoneNum"
                    placeholder="手机号"
                    maxlength="11"></el-input>
          <button :disabled="!isCode"
                  @click.prevent="getCode"
                  :class="{isActived: isCode}">{{this.codeTime > 0 ? `已发送${this.codeTime}s` : '获取验证码'}}</button>
        </div>
      </el-form-item>
      <el-form-item prop="pwd"
                    label-width="0">
        <el-input v-model="form.pwd"
                  placeholder="验证码"></el-input>
      </el-form-item>
      <p>温馨提示: 未注册跑腿外卖账号的手机号，登录时将自动注册，且代表同意 <span>《用户服务协议》</span></p>
      <el-button type="success"
                 class="btn"
                 native-type="submit">登录</el-button>
    </el-form>
  </div>
</template>
<script>
import { reqMsgCode, reqMsgLogin } from '@/api';
export default {
  name: 'login',
  data () {
    return {
      form: {
        phoneNum: '',
        pwd: ''
      },
      rules: {
        phoneNum: [
          { required: true, message: '手机号码是必须的', trigger: 'blur' },
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '验证码是必须的', trigger: 'blur' },
          // { min: 3, max: 5, message: '长度在 3 到', trigger: 'blur' }
        ]
      },
      codeTime: 0,
      codeNum: ''
    }
  },
  computed: {
    isCode () {
      return /^1\d{10}$/.test(this.form.phoneNum);
    }
  },
  methods: {
    async getCode () {
      if (!this.codeTime) {
        this.codeTime = 30;
        const timer = setInterval(() => {
          this.codeTime--;
          if (this.codeTime <= 0)
            clearInterval(timer);
        }, 1000)

        // 获取验证码
        const result = await reqMsgCode(this.form.phoneNum);
        if (result.code === 1) {
          this.$message.error({
            type: 'error',
            message: `${result.msg}`,
            center: true,
            customClass: 'tips'
          });
          this.codeTime = 0;
          clearInterval(timer);
        }
      }
    },
    async submitForm () {
      const result = await reqMsgLogin(this.form.phoneNum, this.form.pwd);
      if (result.code === 1) {
        this.$message.error({
          type: 'error',
          message: `${result.msg}`,
          center: true,
          customClass: 'tips'
        });
      } else {
        const userInfo = result.data;
        this.$store.dispatch('recordUserInfo', userInfo);
        this.$router.replace('/Profile');
      }
    }
  }
}
</script>
<style lang="stylus">
@import '~@/commons/stylus/mixin.styl'
.tips
  width 80%
  max-width 305px
  min-width 300px
.login
  .phoneNums
    display flex
    align-items center
    position relative
    margin 20px 0 0
    button
      position absolute
      font-size 14px
      color #ccc
      right 10px
      outline none
      backgroud transparent
      border none
      &.isActived
        color black
  p
    color #999
    font-size 14px
    margin-top 12px
    line-height 20px
    span
      color $green
  .btn
    width 100%
    margin-top 30px
</style>