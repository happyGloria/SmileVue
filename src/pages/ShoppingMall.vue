<template>
  <div class="">
    <search-bar />
    <div class="swiper-area">
      <van-swipe :autoplay="1000">
        <van-swipe-item v-for="(banner, index) in bannerPicArray" :key="index">
          <img v-lazy="banner.image" width="100%">
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import SearchBar from './searchBar.vue'
export default {
  components: {
    SearchBar
  },
  data () {
    return {
      msg: 'shopping mall',
      bannerPicArray: []
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-area {
  
}
</style>
