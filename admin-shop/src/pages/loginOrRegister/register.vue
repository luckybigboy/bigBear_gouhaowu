<template>
  <div class="register">
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="80px"
             @submit.native.prevent="submitPwdLogin">
      <el-form-item label-width="0"
                    prop="userName">
        <el-input v-model="form.userName"
                  placeholder="用户名"
                  class="name"
                  clearable></el-input>
      </el-form-item>
      <el-form-item prop="pwd"
                    label-width="0">
        <el-input v-model="form.pwd"
                  placeholder="密码"
                  class="pwd"
                  show-password></el-input>
      </el-form-item>
      <el-form-item label-width="0"
                    prop="code"
                    class="code">
        <el-input v-model="form.code"
                  placeholder="验证码"></el-input>
        <img src="http://localhost:5000/captcha"
             alt=""
             class="codeImg"
             @click="getCode"
             ref="captcha">
      </el-form-item>
      <el-button type="success"
                 class="btn"
                 native-type="submit">登录</el-button>
    </el-form>
  </div>
</template>
<script>
import { reqPwdLogin } from '@/api';
import { mapState } from 'vuex';
export default {
  name: 'register',
  data () {
    return {
      form: {
        userName: '',
        pwd: '',
        code: ''
      },
      rules: {
        userName: [
          { required: true, message: '用户名必须', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '密码是必须的', trigger: 'blur' },
        ],
        code: [
          { required: true, message: '验证码是必须的', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    getCode () {
      this.$refs.captcha.src = 'http://localhost:5000/captcha?time=' + Date.now();
    },
    async submitPwdLogin () {
      const data = {};
      data['name'] = this.form.userName;
      data['pwd'] = this.form.pwd;
      data['captcha'] = this.form.code;
      const result = await reqPwdLogin(data);
      if (result.code === 0) {
        // 保存用户信息
        const userData = result.data;
        this.$store.dispatch('recordUserInfo', userData);
        this.$router.replace('/Profile');
      } else {
        this.$message.error({
          type: 'error',
          message: `${result.msg}`,
          center: true,
          customClass: 'tips'
        });
        // 若验证码输入错误，则重新获取
        this.getCode();
      }
    }
  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  }
}
</script>
<style lang="stylus">
.tips
  width 80%
  max-width 305px
  min-width 300px
.register
  .name
    margin-top 20px
  .code
    position relative
    .codeImg
      position absolute
      top 0
      right 0
      height 40.8px
  .btn
    margin-top 10px
    width 100%
</style>