<template>
  <div class="verify-code-container">
    <Icon type="md-mail" size="18" class="input-icon"></Icon>
    <Input prefix="md-mail" v-model="verifyCode" size="large" placeholder="短信验证码" @on-change="$emit('getCode', verifyCode)">
      <Button slot="append" @click="getVerifyCode" :loading="status === 1" :disabled="status > 0">
        {{showButtonText()}}
      </Button>
    </Input>
  </div>
</template>

<script>
import get from 'service/getData'

export default {
  name: 'verifyCode',
  props: ['phone'],
  data () {
    return {
      verifyCode: '',
      status: 0,
      count: 60,
    }
  },
  methods: {
    getVerifyCode() {
      this.status = 1;
      get.getVerifyCode(this.phone).then(res => {
        this.$Message.success(res.data);
        this.status = 2;
        const timer = setInterval(() => {
          this.count--;
          if (this.count < 0) {
            clearInterval(timer);
          }
        }, 1000);
      })
    },
    showButtonText() {
      if (this.status === 0) {
        return '获取验证码';
      } else if (this.status === 1) {
        return '获取验证码';
      } else if (this.status === 2) {
        return `重新发送(${this.count})`;
      }
    },
  },
}
</script>

<style lang="scss">
.verify-code-container {
  position: relative;
  .ivu-btn {
    width: 120px;
    text-align: center;
  }
  .ivu-input {
    text-indent: 24px;
  }
  .input-icon {
    position: absolute;
    left: 8px;
    top: 9px;
    z-index: 3;
  }
}
</style>
