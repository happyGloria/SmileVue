import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/pages/ShoppingMall.vue'
import Main from '@/pages/main.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main', name: 'Main', component: Main,
      children: [
        { path: '/', name: 'ShoppingMall', component: ShoppingMall }
      ]
    }
  ]
})
