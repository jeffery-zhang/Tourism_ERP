<template>
  <Form :model="form" :rules="rule" ref="passwordForm" @submit.native.prevent>>
    <FormItem prop="password">
      <Input prefix="md-lock" type="password" v-model="form.phone" size="large" v-if="!showPassword">
        <Icon slot="suffix" type="md-eye-off" style="cursor:pointer;" @click="showPassword = true"></Icon>
      </Input>
      <Input prefix="md-lock" v-model="form.phone" size="large" v-if="showPassword">
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
      <Button class="theme-back"
        shape="circle"
        size="large"
        style="width:100%;"
        @click="register"
        v-if="step === 5"
        :loading="loading">完成注册</Button>
      <p style="text-align:right">
        <Button type="text" class="theme-color" @click="messageLogin">短信验证码登录</Button>
      </p>
    </FormItem>
  </Form>
</template>

<script>
export default {
  name: 'enterPassword',
  props: ['step'],
  data () {
    return {
      loading: false,
      showPassword: false,
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
        this.$emit('login');
        this.loading = false;
      })
    },
    register() {
      this.$refs['passwordForm'].validate(valid => {
        if (!valid) return;
        this.loading = true;
        this.$emit('register');
        this.loading = false;
      })
    },
  },
}
</script>
