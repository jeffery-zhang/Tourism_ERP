/**
 * 项目中所有发送post请求的方法
 */

import axios from 'axios';
import Cookies from 'js-cookie';
import config from 'config/config';
import axiosDefault from 'config/axios.default';

axiosDefault();

export default function () {
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
    generateCode() {
      return postFunction(urls.generateCode, {});
    },
    updatePromoCode(params) {
      return postFunction(urls.updatePromoCode, params);
    },
    updatePrice(params) {
      return postFunction(urls.updatePrice, params);
    },
    updateProductInfo(params) {
      return postFunction(urls.updateProductInfo, params);
    },
    updateOrder(params) {
      return postFunction(urls.updateOrder, params);
    },
  };
};
