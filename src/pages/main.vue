<template>
  <div class="main-div">
    <keep-alive>
      <router-view />
    </keep-alive>
    <van-tabbar v-model="active"
                class="navbar-bottom"
                @change="changeTabbar(active)">
      <!-- <van-tabbar-item v-for="(item, index) in tabs"
                       :key="index"
                       :icon="item.icon">{{ item.txt }}</van-tabbar-item> -->
      <van-tabbar-item v-for="(item, index) in tabs"
                       :key="index">
        <van-icon class-prefix="ico" :name="item.icon" />
        <div>{{ item.txt }}</div>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        { icon: 'shouye', txt: '首页' },
        { icon: 'wodedingdan', txt: '列表' },
        { icon: 'gouwuche', txt: '购物车' },
        { icon: 'xiaoxizhongxin', txt: '会员中心' }
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
      if (this.curPath === '/Cart') {
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
.navbar-bottom {
  position: fixed;
  bottom: 0;
  height: 2.5rem;
  .van-tabbar-item__text {
    .ico {
      display: block;
      height: 1.4rem;
      line-height: 1.4rem;
    }
  }
}
</style>
