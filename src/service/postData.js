/**
 * 项目中所有发送post请求的方法
 */

import axios from 'axios';
import Cookies from 'js-cookie';
import config from 'config/config';
import axiosDefault from 'config/axios.default';

axiosDefault();

function postData() {
  const method = 'post';
  const urls = config.postUrls;
  const postFunction = (url, params, withToken) => {
    let headers;
    const data = new URLSearchParams();
    Object.keys(params).forEach(key => {
      data.append(key, params[key]);
    });
    if (withToken) {
      // headers = { xtoken: Cookies.get('xtoken') };
      headers = { xtoken: 'test' };
    }
    return axios({
      method,
      url,
      headers,
      data,
    })
      .then(res => res.data);
  };

  return {
    checkUserPhone(phone) {
      return postFunction(urls.checkUserPhone, { phone }, true);
    },
    register(params) {
      return postFunction(urls.register, params, true);
    },
    login(phone, passowrd) {
      return postFunction(urls.login, { phone, passowrd });
    },
  };
};

export default postData()
