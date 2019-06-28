<template>
  <div class="floor">
    <div class="floor-title">{{ floorTitle }}</div>
    <div class="floor-anomaly">
      <div class="floor-one">
        <img :src="floorData[0].image" width="100%">
      </div>
      <div>
        <div class="floor-two">
          <img :src="floorData[1].image" width="100%">
        </div>
        <div>
          <img :src="floorData[2].image" width="100%">
        </div>
      </div>
    </div>
    <div class="floor-rule">
      <div v-for="(item, index) in floorData.slice(3)" :key="index">
        <img :src="item.image" width="100%">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    floorData: {
      type: Array,
      default () {
        return []
      }
    },
    floorTitle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.floor-title {
  height: 1.8rem;
  line-height: 1.8rem;
  text-align: center;
  font-size: 14px;
}
.floor-anomaly {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  div {
    width: 10rem;
    box-sizing: border-box;
  }
  .floor-one{
    border-right:1px solid #ddd;
  }
  .floor-two{
    border-bottom:1px solid #ddd;
  }
}

.floor-rule{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
  div {
    box-sizing: border-box;
    width: 10rem;
    border-bottom: 1px solid #ddd;
  }
  & > div:nth-child(odd) {
    border-right: 1px solid #ddd;
  }
}
</style>
