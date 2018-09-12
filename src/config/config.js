const host = 'http://linkdam.com';

export default {
  host,
  getUrls: {
    uploadInfo: '/commons/upload/get_info', // 获取上传至oss的必要信息
    getDiscountCodeList: '/manager/productDiscount/list', // 获取折扣码列表
    getProductList: '/manager/product/list', // 获取商品列表
    getOrderList: '/manager/order/list', // 获取所有订单列表
    getPromoOrder: '/manager/orderProduct/list', // 获取折扣码订单列表
    getPromoReport: '/manager/orderProduct/orderStatistics', // 获取折扣码报表
  },
  postUrls: {
    generateCode: '/manager/productDiscount/add', // 生成折扣码
    updatePromoCode: '/manager/productDiscount/update', // 更新折扣码
    updatePrice: '/manager/product/updatePrice', // 更新商品价格和折扣价
    updateProductInfo: '/manager/product/updateTitleDesPic', // 更新商品信息
    updateOrder: '/manager/order/updaeOrder', // 更新订单状态
  },
}
