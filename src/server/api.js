module.exports = function (prefix) {
  prefix = prefix || ''
  return [
    [ 'getShopingMallInfo', '/index' ], // 商城首页所有信息
    ['getGoodsInfo', '/getGoodsInfo'], // 商品
    ['getDetailGoodsInfo', '/getDetailGoodsInfo'],
    ['listCategory', '/getCategoryList'], // 得到大类信息
    ['listCategorySub', '/getCategorySubList'], // 得到子类信息
    ['listGoodsByCategorySubID', '/goods/getGoodsListByCategorySubID'],
    ['register', '/user/register'],
    // 登录 登出
    ['login', '/user/login'],
    ['logout', '/user/logout'],
    // 导出
    ['exportData', '/settings/exportData', 'post', 'blob']
  ].map(function (v, idx) {
    v[1] = prefix + v[1]
    return v
  })
}
