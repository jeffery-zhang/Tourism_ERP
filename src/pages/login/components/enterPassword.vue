<template>
  <Form :model="form" :rules="rule" ref="passwordForm" @submit.native.prevent>
    <FormItem prop="password">
      <Input prefix="md-lock" type="password" v-model="form.password" size="large" v-if="!showPassword" placeholder="请输入密码">
        <Icon slot="suffix" type="md-eye-off" style="cursor:pointer;" @click="showPassword = true"></Icon>
      </Input>
      <Input prefix="md-lock" v-model="form.password" size="large" v-if="showPassword" placeholder="请输入密码">
        <Icon slot="suffix" type="md-eye" style="cursor:pointer;" @click="showPassword = false"></Icon>
      </Input>
    </FormItem>
    <FormItem>
      <Button class="theme-back"
        shape="circle"
        size="large"
        style="width:100%;"
        @click="login"
        v-if="step === 1"
        :loading="loading">登录</Button>
      <p style="text-align:right">
        <Button type="text" class="theme-color" @click="messageLogin">短信验证码登录</Button>
      </p>
    </FormItem>
  </Form>
</template>

<script>
import Cookies from 'js-cookie'
import post from 'service/postData'

export default {
  name: 'enterPassword',
  props: [
    'step',
  ],
  data () {
    return {
      loading: false,
      showPassword: false,
      phone: '',
      form: {
        password: '',
      },
      rule: {
        password: [
          { required: true, message: '请输入你的登录密码', trigger: 'blur' }
        ],
      },
    }
  },
  methods: {
    messageLogin() {
      this.$emit('messageLogin', 2);
    },
    login() {
      this.$refs['passwordForm'].validate(valid => {
        if (!valid) return;
        this.loading = true;
        post.login(this.phone, this.form.password).then(res => {
          console.log(res);
          this.$emit('login');
          this.loading = false;
        })
      })
    },
  },
  mounted () {
    this.phone = Cookies.get('phone')
  },
}
</script>
