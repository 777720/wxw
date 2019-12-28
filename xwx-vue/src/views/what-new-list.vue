<style lang="less">
  .pg-what-new-list {
    margin-top:67px;
  }
</style>
<template>
  <div class="pg-what-new-list">
    <ShopList :data="listData" :categoryTitle="categoryTitle" />
  </div>
</template>
<script>
import ShopList from './shop-list'
import products from '../core/product'

export default {
  components: {
    ShopList
  },
  data () {
    return {
      listData: [],
      categoryTitle: ''
    }
  },
  mounted () {
    this.changeDataFn()
  },
  watch: {
    '$route' (to, from) {
      this.changeDataFn()
    }
  },
  methods: {
    changeDataFn () {
      this.listData = [
        ...products['man'][1],
        ...products['man'][2],
        ...products['man'][3],
        ...products['man'][4],
        ...products['women'][1],
        ...products['women'][2],
        ...products['women'][3],
        ...products['women'][4]
      ]
      this.categoryTitle = 'what’s new'
    }
  }
}
</script>
