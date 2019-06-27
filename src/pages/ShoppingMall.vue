<template>
  <div class="">
    <div class="search-bar">
      <van-row>
        <van-col span="3">
          <img :src="locationIcon"
               width="80%"
               class="location-icon"
               alt="">
        </van-col>
        <van-col span="16">
          <input type="text"
                 class="search-input">
        </van-col>
        <van-col span="5">
          <van-button size="mini">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <!-- swiper-area -->
    <div class="swiper-area">
      <van-swipe :autoplay="2000">
        <van-swipe-item v-for="(banner, index) in bannerPicArray"
                        :key="index">
          <img v-lazy="banner.image"
               width="100%">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- type-bar -->
    <div class="type-bar">
      <div v-for="(cate, index) in category"
           :key="index">
        <img v-lazy="cate.image"
             width="90%"
             alt="">
        <span>{{ cate.mallCategoryName }}</span>
      </div>
    </div>
    <!-- adbanner area -->
    <div>
      <img v-lazy="adBanner"
           alt=""
           width="100%">
    </div>
    <!-- recommand Goods -->
    <div class="recommend-area">
      <div class="recommend-title">商品推荐</div>
      <div class="recommend-body">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in recommendGoods"
                        :key="index">
            <div class="recommend-item">
              <img :src="item.image"
                   alt=""
                   width="80%">
              <div>{{ item.goodsName }}</div>
              <div>￥{{ item.price | moneyFilter }} (￥{{ item.mallPrice | moneyFilter }})</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { toMoney } from '@/filter'

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      locationIcon: require('@/assets/images/location.png'),
      msg: 'shopping mall',
      bannerPicArray: [],
      category: [],
      adBanner: '',
      recommendGoods: [],
      swiperOption: {
        slidePerView: 3
      }
    }
  },
  filters: {
    moneyFilter (money) {
      return toMoney(money)
    }
  },
  created () {
    Service.getShopingMallInfo().then(data => {
      this.bannerPicArray = data.slides
      this.category = data.category
      this.adBanner = data.advertesPicture.PICTURE_ADDRESS
      this.recommendGoods = data.recommend
    })
  }
}
</script>

<style lang="less" scoped>
.search-bar {
  height: 2.2rem;
  line-height: 2.2rem;
  background-color: #e5017d;
  overflow: hidden;
  .location-icon {
    padding-top: 0.2rem;
    padding-left: 0.3rem;
  }
  .search-input {
    width: 100%;
    height: 1.3rem;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid #fff !important;
    background-color: #e5017d;
    color: #fff;
  }
}
.swiper-area {
  clear: both;
  max-height: 15rem;
  overflow: hidden;
}
.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  div {
    padding: 0.3rem;
    font-size: 12px;
    text-align: center;
    flex: 1;
  }
}
.recommend-area {
  background-color: #fff;
  margin-top: 0.3rem;
  .recommend-title {
    border-bottom: 1px solid #eee;
    font-size: 14px;
    padding: 0.2rem;
    color: #e5017d;
  }
  .recommend-body {
    border-bottom: 1px solid #eee;
  }
  .recommend-item {
    width: 99%;
    border-right: 1px solid #eee;
    font-size: 12px;
    text-align: center;
  }

  .hot-area {
    text-align: center;
    font-size: 14px;
    height: 1.8rem;
    line-height: 1.8rem;
  }
  .hot-goods {
    height: 130rem;
    overflow: hidden;
    background-color: #fff;
  }
}
</style>
