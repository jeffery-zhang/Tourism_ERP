<template>
  <Form :model="form" :rules="rule" ref="signupForm" @submit.native.prevent>
    <FormItem prop="companyTitle">
      <Input prefix="ios-laptop" v-model="form.companyTitle" size="large" placeholder="企业名称"></Input>
    </FormItem>
    <FormItem class="with-icon">
      <Icon type="ios-paper-outline" class="select-icon" size="18"></Icon>
      <Select v-model="form.companyType"
        size="large"
        :loading="getTypeLoading"
        placeholder="行业类型">
        <Option v-for="(type, index) in companyType" :value="type" :key="index"></Option>
      </Select>
    </FormItem>
    <FormItem class="with-icon">
      <Icon type="md-people" class="select-icon" size="18"></Icon>
      <Select v-model="form.companyScale"
        size="large"
        :loading="getScaleLoading"
        placeholder="企业规模">
        <Option v-for="(scale, index) in companyScale" :value="scale" :key="index"></Option>
      </Select>
    </FormItem>
    <FormItem prop="name">
      <Input prefix="md-person" v-model="form.name" size="large" placeholder="姓名"></Input>
    </FormItem>
    <FormItem prop="verifyCode" class="with-icon">
      <verify-code :phone="phone" @getCode="getVerifyCode"></verify-code>
    </FormItem>
    <FormItem prop="password">
      <Input prefix="md-lock" type="password" v-model="form.password" size="large" v-if="!showPassword" placeholder="登录密码">
        <Icon slot="suffix" type="md-eye-off" style="cursor:pointer;" @click="showPassword = true"></Icon>
      </Input>
      <Input prefix="md-lock" v-model="form.password" size="large" v-if="showPassword" placeholder="登录密码">
        <Icon slot="suffix" type="md-eye" style="cursor:pointer;" @click="showPassword = false"></Icon>
      </Input>
    </FormItem>
    <FormItem>
      <Button class="theme-back" shape="circle" size="large" style="width:100%;" @click="register" :loading="loading">完成注册</Button>
    </FormItem>
  </Form>
</template>

<script>
import Cookies from 'js-cookie'
import get from 'service/getData'
import post from 'service/postData'

export default {
  name: 'signup',
  data () {
    return {
      loading: false,
      companyType: [],
      companyScale: [],
      getTypeLoading: false,
      getScaleLoading: false,
      showPassword: false,
      form: {
        companyTitle: '',
        companyType: '',
        scale: '',
        name: '',
        verifyCode: '',
        password: '',
      },
      rule: {
        companyTitle: [
          { required: true, message: '请输入企业名称', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入您的姓名', trigger: 'blur' }
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
  methods: {
    getCompanyType() {
      this.getTypeLoading = true;
      get.getCompanyType().then(res => {
        this.companyType = res.data;
        this.getTypeLoading = false;
      })
    },
    getCompanyScale() {
      this.getScaleLoading = true;
      get.getCompanyScale().then(res => {
        this.companyScale = res.data;        
        this.getScaleLoading = false;
      })
    },
    getVerifyCode(code) {
      this.form.verifyCode = code;
    },
    register() {
      this.loading = true;
      this.form.phone = this.phone;
      this.form.companyType = encodeURI(this.form.companyType);
      this.form.companyScale = encodeURI(this.form.companyScale);
      post.register(this.form).then(res => {
        if (res.result) {
          this.$Message.success(res.data)
          post.login(this.form.phone, this.form.password).then(res => {
            this.loading = false;
          })
        }
      })
    },
  },
  mounted () {
    this.phone = Cookies.get('phone')
    this.getCompanyType()
    this.getCompanyScale()
  },
}
</script>
