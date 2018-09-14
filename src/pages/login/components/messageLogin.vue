<template>
  <Form :model="form" :rules="rule" ref="verifyForm" @submit.native.prevent>>
    <FormItem prop="verifyCode">
      <p style="text-align:left;">您输入的手机号码是{{phone}}</p>
      <Input v-model="form.verifyCode" size="large">
        <!-- <Icon type="md-mail" slot="prepend"></Icon> -->
        <Button slot="append">获取验证码</Button>
      </Input>
    </FormItem>
    <FormItem>
      <Button class="theme-back" shape="circle" size="large" style="width:100%;" @click="login" :loading="loading">登录</Button>
    </FormItem>
  </Form>
</template>

<script>
export default {
  name: 'messageLogin',
  props: ['phone'],
  data () {
    return {
      loading: false,
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
    getVerifyCode() {
      console.log(this.phone);
    },
    login() {
      this.$refs['verifyForm'].validate(valid => {
        if (!valid) return;
        this.loading = true;
        this.loading = false;
      })
    },
  },
}
</script>
