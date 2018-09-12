/**
 * 项目中所有get方式获取数据的方法
 */

import axios from 'axios';
import Cookies from 'js-cookie';
import config from 'config/config';
import axiosDefault from 'config/axios.default';
import getQuery from 'service/getQuery'

axiosDefault();

export default function () {
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
    uploadInfo(type) {
      return getFunction(urls.uploadInfo, { type });
    },
    getDiscountCodeList(page = 1, searchKey) {
      return getFunction(urls.getDiscountCodeList, { page, searchKey });
    },
    getProductList(page = 1) {
      return getFunction(urls.getProductList, { page });
    },
    getOrderList(page = 1, orderBy, status) {
      return getFunction(urls.getOrderList, { page, orderBy, status });
    },
    getPromoOrder(page = 1, startDate, endDate, alias, promoCode) {
      return getFunction(urls.getPromoOrder, { page, startDate, endDate, alias, promoCode });
    },
    getPromoReport(type, startDate, endDate, alias, promoCode) {
      return getFunction(urls.getPromoReport, { type, startDate, endDate, alias, promoCode });
    },
  }
}
