<template>
  <Form :model="form" :rules="rule" ref="verifyForm" @submit.native.prevent>
    <FormItem prop="verifyCode">
      <p style="text-align:left;">您输入的手机号码是{{phone}}</p>
      <verify-code :phone="phone" @getCode="getVerifyCode"></verify-code>
    </FormItem>
    <FormItem>
      <Button class="theme-back" shape="circle" size="large" style="width:100%;" @click="login" :loading="loading">登录</Button>
    </FormItem>
  </Form>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  name: 'messageLogin',
  data () {
    return {
      loading: false,
      phone: '',
      form: {
        verifyCode: '',
      },
      rule: {
        verifyCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    getVerifyCode(code) {
      this.form.verifyCode = code;
    },
    login() {
      this.$refs['verifyForm'].validate(valid => {
        if (!valid) return;
        this.loading = true;
        this.loading = false;
      })
    },
  },
  mounted () {
    this.phone = Cookies.get('phone')
  },
}
</script>
