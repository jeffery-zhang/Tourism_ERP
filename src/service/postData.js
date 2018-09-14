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
  const postFunction = (url, params) => {
    const data = new URLSearchParams();
    Object.keys(params).forEach(key => {
      data.append(key, params[key]);
    });
    return axios({
      method,
      url,
      data,
    })
      .then(res => res.data);
  };
  return {
    
  };
};

export default postData()
