import Vue from 'vue'
import Router from 'vue-router'
const ShoppingMall = () => import('@/pages/ShoppingMall.vue')
const Main = () => import('@/pages/Main.vue')
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    component: Main,
    children: [
      {
        path: '/',
        name: 'ShoppingMall',
        component: ShoppingMall
      }
    ]
  }]
})
