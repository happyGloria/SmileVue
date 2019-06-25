<template>
  <div class="">
    <search-bar></search-bar>
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
      msg: 'shopping mall'
    }
  }
}
</script>

<style lang="less" scoped>

</style>
