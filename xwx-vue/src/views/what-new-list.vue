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
import Common from '../core/common'
import manList from '../core/products/man'
import womanList from '../core/products/woman'

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
      let listDataTemp = [
        ...manList.flat(),
        ...womanList.flat()
      ]
      this.listData = Common.sortDataByDate(listDataTemp)
      this.categoryTitle = 'What’s New'
    }
  }
}
</script>
