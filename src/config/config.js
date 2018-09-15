const host = 'http://linkdam.com';

export default {
  host,
  getUrls: {
    getCompanyType: '/config/get_company_type', // 获取行业类型
    getCompanyScale: '/config/get_company_scale', // 获取公司规模
    getVerifyCode: '/user/get_register_verify_code', // 获取手机短信验证码
  },
  postUrls: {
    checkUserPhone: '/user/check_phone_register', // 验证用户输入的电话号码
    register: '/user/register', // 注册
    login: '/user/login', // 登录
  },
}
