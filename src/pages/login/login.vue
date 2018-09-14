<template>
  <div class="login-wrapper">
    <div class="form-container absolute-center">
      <div class="login-hd">
        <h2>{{title}}</h2>
      </div>
      <div class="login-bd">
        <signin :step="step" v-if="step === 0 || step === 3" @validPhone="changeStep"></signin>
        <enter-password :step="step" v-if="step === 1" @messageLogin="changeStep"></enter-password>
        <message-login v-if="step === 2" :phone="phone"></message-login>
      </div>
      <div class="login-ft">
        <div v-if="step < 3">
          <Button type="text" class="theme-color" @click="changeStep(6)">忘记密码?</Button>
        </div>
        <span class="space-padding"></span>
        <div v-if="step < 3">
          <span>没有账号?</span>
          <Button type="text" class="theme-color" @click="changeStep(3)">免费注册</Button>
        </div>
        <div v-if="step > 2">
          <span>已有账号?</span>
          <Button type="text" class="theme-color" @click="changeStep(0)">立即登录</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import signin from './components/signin'
import enterPassword from './components/enterPassword'
import messageLogin from './components/messageLogin'

export default {
  name: 'login',
  components: {
    signin,
    enterPassword,
    messageLogin,
  },
  data () {
    return {
      title: '手机号登录',
      step: 0,
      phone: '',
    }
  },
  methods: {
    showTitle() {
      switch (this.step) {
        case 0:
          this.title = '手机号登录';
          break;
        case 1:
          this.title = '输入登录密码';
          break;
        case 2:
          this.title = '短信验证码登录';
          break;
        case 3:
          this.title = '免费注册';
          break;
        case 4:
          this.title = '完善账户信息';
          break;
        case 5:
          this.title = '设置登录密码';
          break;
        case 6:
          this.title = '找回密码';
          break;
      }
    },
    changeStep(step, phone) {
      if (phone) {
        this.phone = phone;
      }
      this.step = step;
    },
  },
  watch: {
    step() {
      this.showTitle();
    },
  },
}
</script>

<style lang="scss" scoped>
@import './../../style-sheets/mixin';

.login-wrapper {
  @include wh(100vw, 100vh);
  background: linear-gradient(to bottom, #f8f8f9, #f6f6f6);
  .form-container {
    width: 480px;
    padding: 70px 80px 88px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 15px 30px rgba(0, 35, 3, 0.08);
    text-align: center;
    .login-bd {
      padding-top: 48px;
    }
    .login-ft {
      display: flex;
      justify-content: space-between;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 0 24px 16px;
    }
  }
}
</style>
