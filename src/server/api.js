const BASEURL = "https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue"
/* const LOCALURL = "http://localhost:3000/" */

module.exports = function (prefix) {
  prefix = prefix || BASEURL
  return [
    ['getShopingMallInfo', '/index'], // 商城首页所有信息
    ['getGoodsInfo', '/getGoodsInfo'], // 商城首页所有信息
    ['getDetailGoodsInfo', '/getDetailGoodsInfo'], 
    ['listCategory', '/getCateGoryList'], // 得到大类信息
    ['listCategorySub', '/getCateGorySubList'], // 得到小类信息
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
