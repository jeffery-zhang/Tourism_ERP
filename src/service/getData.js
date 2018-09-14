/**
 * 项目中所有get方式获取数据的方法
 */

import axios from 'axios';
import Cookies from 'js-cookie';
import config from 'config/config';
import axiosDefault from 'config/axios.default';
import getQuery from 'utils/getQuery'

axiosDefault();

function getData() {
  const method = 'get';
  const urls = config.getUrls;
  const getFunction = (url, params = {}) => {
    return axios({
      method,
      url,
      params,
    })
      .then(res => res.data);
  };
  return {

  }
}

export default getData()
