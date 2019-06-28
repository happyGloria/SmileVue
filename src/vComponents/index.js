// 按需使用Vant组件
import Vue from 'vue'
import {
  Button,
  Row,
  Col,
  Swipe, // 轮播图
  SwipeItem,
  Lazyload, // 图片懒加载
  List,
  Tabbar,
  TabbarItem
} from 'vant'

Vue
  .use(Button)
  .use(Row)
  .use(Col)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(List)
  .use(Tabbar)
  .use(TabbarItem)
