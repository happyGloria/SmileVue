<template>
  <div class="main-div">
    <keep-alive>
      <router-view />
    </keep-alive>
    <van-tabbar v-model="active"
                @change="changeTabbar(active)">
      <van-tabbar-item v-for="(item, index) in tabs"
                       :key="index"
                       :icon="item.icon">{{ item.txt }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        { icon: 'shop', txt: '首页' },
        { icon: 'records', txt: '列表' },
        { icon: 'cart', txt: '购物车' },
        { icon: 'concat', txt: '会员中心' }
      ],
      active: 0,
      curPath: ''
    }
  },
  created () {
    this.changeTabBarActive()
  },
  update () {
    this.changeTabBarActive()
  },
  methods: {
    changeTabBarActive () {
      this.curPath = this.$route.path
      if (this.curPath == '/Cart') {
        this.active = 2
      }
    },
    changeTabbar (active) {
      console.log(active)
      switch (active) {
        case 0:
          this.$router.push({ name: 'ShoppingMall' })
          break
        case 1:
          this.$router.push({ name: 'CategoryList' })
          break
        case 2:
          this.$router.push({ name: 'Cart' })
          break
        case 3:
          this.$router.push({ name: 'Member' })
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
