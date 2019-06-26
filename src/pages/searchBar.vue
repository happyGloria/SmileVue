<template>
  <div class="search-bar">
    <van-row>
      <van-col span="3">
        <img :src="locationIcon" width="80%" class="location-icon" alt="">
      </van-col>
      <van-col span="16">
        <input type="text" class="search-input">
      </van-col>
      <van-col span="5">
        <van-button size="mini">查找</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      locationIcon: require('@/assets/images/location.png'),
    }
  }
}
</script>

<style lang="less" scoped>
.search-bar {
  height: 2.2rem;
  line-height: 2.2rem;
  background-color: #e5017d;
  overflow: hidden;
  .location-icon{
    padding-top: .2rem;
    padding-left: .3rem;
  }
}
</style>
