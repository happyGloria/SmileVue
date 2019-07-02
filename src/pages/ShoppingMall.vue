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
          <swiper-slide v-for="(item, index) in recommendGoods"
                        :key="index"
                        class="swiper-slide">
            <div class="recommend-item">
              <img :src="item.image"
                   width="80%">
              <div>{{ item.goodsName }}</div>
              <div>￥{{ item.price | moneyFilter }} (￥{{ item.mallPrice | moneyFilter }}) </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination" />
          <!-- <div class="swiper-button-prev" slot="button-prev" />
          <div class="swiper-button-next" slot="button-next" /> -->
        </swiper>
      </div>
    </div>
    <!-- floor -->
    <floor v-for="(floor, index) in floorData"
           :key="index"
           :floorData="floorData[index]"
           :floorTitle="floorName[`floor${index+1}`]"></floor>
    <!-- Hot area -->
    <div class="hot-area">
      <div class="hot-title">热卖商品</div>
      <div class="hot-goods">
        <van-list>
          <van-row gutter="20">
            <van-col span="12" v-for="(item, index) in hotGoods" :key="index">
              <goods-info :goodsInfo="item" />
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import Floor from './Floor.vue'
import GoodsInfo from './GoodsInfo.vue'

export default {
  components: {
    swiper,
    swiperSlide,
    Floor,
    GoodsInfo
  },
  data () {
    return {
      locationIcon: require('@/assets/images/location.png'),
      bannerPicArray: [],
      category: [],
      adBanner: '',
      recommendGoods: [],
      swiperOption: {
        /* slidePerView: 3, */
        loop: true,
        autoplay: 3000,
        paginatinType: 'fraction',
        speed: 900,
        observeParents: true,
        observer: true
      },
      floorData: [],
      floorName: [],
      hotGoods: []
    }
  },
  filters: {
    moneyFilter (money) {
      money = money || 0
      return money.toFixed(2)
    }
  },
  created () {
    Service.getShopingMallInfo().then(data => {
      this.bannerPicArray = data.slides
      this.category = data.category
      this.adBanner = data.advertesPicture.PICTURE_ADDRESS
      this.recommendGoods = data.recommend
      this.floorData = [data.floor1, data.floor2, data.floor3]
      this.floorName = data.floorName
      this.hotGoods = data.hotGoods
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
    font-size: 12px;
    height: 1.8rem;
    line-height: 1.8rem;
  }
  .hot-goods {
    height: 130rem;
    overflow: hidden;
    background-color: #fff;
    font-size: 12px;
  }
}
</style>
