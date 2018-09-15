<template>
  <Form :model="form" :rules="rule" ref="loginForm" @submit.native.prevent>
    <FormItem prop="phone">
      <p style="text-align:left;" v-if="step === 0">未注册的手机号验证后将自动为您创建账号</p>
      <p style="text-align:left;" v-if="step === 3">已注册的手机号验证后可直接登录</p>
      <Input prefix="md-phone-portrait"
        v-model="form.phone"
        size="large"
        @keyup.enter.native="validatePhone"
        placeholder="请输入手机号"></Input>
    </FormItem>
    <FormItem>
      <Button class="theme-back" shape="circle" size="large" style="width:100%;" @click="validatePhone" :loading="loading">下一步</Button>
    </FormItem>
  </Form>
</template>

<script>
import get from 'service/getData'
import post from 'service/postData'

export default {
  name: 'signin',
  props: ['step'],
  data () {
    return {
      loading: false,
      form: {
        phone: '',
      },
      rule: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
      },
    }
  },
  methods: {
    validatePhone() {
      this.$refs['loginForm'].validate(valid => {
        if (!valid) return;
        this.loading = true;
        post.checkUserPhone(this.form.phone).then(res => {
          console.log(res);
          this.$emit('validPhone', 1, this.form);
          this.loading = false;
        }).catch(err => {
          this.loading = false;
        })
      })
    },
  },
}
</script>
