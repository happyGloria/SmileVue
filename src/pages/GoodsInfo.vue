<template>
  <div class="goods-info"
       @click="goGoodsPage()">
    <div class="goods-image">
      <img v-lazy="goodsInfo.image" width="90%">
    </div>
    <div class="goods-name">{{goodsInfo.name}}</div>
    <div class="goods-price">￥{{ goodsInfo.price | moneyFilter }}</div>
  </div>
</template>

<script>
export default {
  props: {
    goodsInfo: {
      type: Object,
      default () {
        return {
          goodsId: '',
          image: '',
          name: '',
          price: 0
        }
      }
    }
  },
  data () {
    return {
    }
  },
  filters: {
    moneyFilter (money) {
      money = money || 0
      return money.toFixed(2)
    }
  },
  methods: {
    goGoodsPage () {
      this.$router.push({
        name: 'Goods',
        query: {
          goodsId: this.goodsId
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.goods-name {
  padding: 0 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
