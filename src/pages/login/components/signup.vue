<template>
  <Form :model="form" :rules="rule" ref="signupForm" @submit.native.prevent>
    <FormItem prop="username">
      <Input prefix="ios-contact" v-model="form.username" size="large" @keyup.enter.native="validatePhone"></Input>
    </FormItem>
  </Form>
</template>

<script>
export default {
  name: 'signup',
  props: ['phone'],
  data () {
    return {
      loading: false,
      form: {
        username: '',
        captcha: '',
        verifyCode: '',
        password: '',
      },
      rule: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '请输入图片验证码', trigger: 'blur' }
        ],
        verifyCode: [
          { required: true, message: '请输入短信验证码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' }
        ],
      },
    }
  },
}
</script>
