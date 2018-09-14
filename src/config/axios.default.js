/**
 * 一些axios全局默认配置项
 */

import axios from 'axios'
import Cookies from 'js-cookie'
import { Message } from 'iview'

export default function () {
  axios.defaults.headers.common['Accept'] = 'application/json;charset=UTF-8';

  axios.interceptors.response.use(res => {
    if (res.status !== 200) {
      Message.error('网络请求出错');
      return;
    }
    if (res.data.code === 401) {
      Message.error('登录超时,请重新登录');
      Cookies.remove('isLogged');
      Cookies.remove('account');
      location.href = '#/login';
    }
    if (!res.data.result) {
      Message.error(res.data.message);
    }
    return res;
  }, error => {
    Message.error('网络请求出错');
    return Promise.reject(error);
  });
}
